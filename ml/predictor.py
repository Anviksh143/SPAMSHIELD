import joblib
import os
import re
import json

# Suspicious indicators patterns
URGENT_WORDS = [
    'urgent', 'immediately', 'act now', 'limited time', 'expires', 'hurry',
    'last chance', 'final notice', 'warning', 'alert', 'critical', 'today only',
    'right now', 'instant', 'quick', 'fast', 'rush', 'deadline', 'don\'t wait',
    'while supplies last', '24 hours', '48 hours', 'before it\'s too late'
]

MONEY_PATTERNS = [
    r'\$[\d,]+', r'£[\d,]+', r'€[\d,]+', r'million\s+dollar', r'billion\s+dollar',
    r'[\d,]+%\s+off', r'free\s+money', r'cash\s+prize', r'win\s+money',
    r'earn\s+\$', r'make\s+\$', r'guaranteed\s+income', r'passive\s+income'
]

SUSPICIOUS_LINK_PATTERNS = [
    r'http[s]?://[^\s]*(?:click|verify|claim|login|secure|update|confirm)[^\s]*',
    r'http[s]?://[^\s]*\.(?:xyz|biz|net|info|cc|tk|ml|ga|cf)[^\s]*',
    r'http[s]?://[^\s]*(?:scam|fake|phish|free|win|prize)[^\s]*',
    r'bit\.ly/', r'tinyurl\.com/', r'goo\.gl/', r'tiny\.cc/'
]

EXCESSIVE_CAPS_THRESHOLD = 0.3  # 30% or more caps = suspicious
EXCLAMATION_THRESHOLD = 3       # 3 or more exclamations = suspicious

class SpamPredictor:
    def __init__(self):
        self.model = None
        self.model_path = os.path.join(
            os.path.dirname(os.path.dirname(__file__)), 
            'models', 
            'spam_classifier.pkl'
        )
        self.metrics_path = os.path.join(
            os.path.dirname(os.path.dirname(__file__)), 
            'models', 
            'metrics.json'
        )
        self._load_model()
    
    def _load_model(self):
        """Load the trained model from disk."""
        if os.path.exists(self.model_path):
            self.model = joblib.load(self.model_path)
        else:
            # Train on first load - handle both import styles
            try:
                from ml.train_model import train_spam_model
            except ImportError:
                from train_model import train_spam_model
            train_spam_model()
            self.model = joblib.load(self.model_path)
    
    def get_metrics(self):
        """Return model performance metrics."""
        if os.path.exists(self.metrics_path):
            with open(self.metrics_path, 'r') as f:
                return json.load(f)
        return None
    
    def predict(self, sender: str, subject: str, body: str) -> dict:
        """
        Predict if an email is spam or safe.
        
        Args:
            sender: Email sender address/name
            subject: Email subject line
            body: Email body text
            
        Returns:
            dict with prediction results and suspicious indicators
        """
        if not self.model:
            return {'error': 'Model not loaded'}
        
        # Combine text features
        text = f"{sender} {subject} {body}"
        
        # Get prediction
        prediction = self.model.predict([text])[0]
        probabilities = self.model.predict_proba([text])[0]
        
        label = 'spam' if prediction == 1 else 'safe'
        confidence = float(max(probabilities)) * 100
        spam_probability = float(probabilities[1]) * 100
        safe_probability = float(probabilities[0]) * 100
        
        # Analyze suspicious indicators
        indicators = self._analyze_indicators(sender, subject, body)
        
        return {
            'label': label,
            'confidence': round(confidence, 2),
            'spam_probability': round(spam_probability, 2),
            'safe_probability': round(safe_probability, 2),
            'indicators': indicators,
            'risk_score': self._calculate_risk_score(indicators)
        }
    
    def _analyze_indicators(self, sender: str, subject: str, body: str) -> dict:
        """Analyze email for suspicious indicators."""
        full_text = f"{subject} {body}"
        full_text_lower = full_text.lower()
        
        indicators = {
            'urgent_words': [],
            'money_symbols': [],
            'suspicious_links': [],
            'excessive_caps': False,
            'excessive_exclamations': False,
            'suspicious_sender': False,
            'all_caps_words': [],
            'risk_factors': []
        }
        
        # Check for urgent words
        for word in URGENT_WORDS:
            if word in full_text_lower:
                indicators['urgent_words'].append(word)
        
        # Check for money patterns
        money_found = []
        for pattern in MONEY_PATTERNS:
            matches = re.findall(pattern, full_text_lower, re.IGNORECASE)
            money_found.extend(matches)
        indicators['money_symbols'] = list(set(money_found))[:5]  # Limit to 5
        
        # Check for suspicious links
        links_found = []
        for pattern in SUSPICIOUS_LINK_PATTERNS:
            matches = re.findall(pattern, full_text, re.IGNORECASE)
            links_found.extend(matches)
        indicators['suspicious_links'] = list(set(links_found))[:3]  # Limit to 3
        
        # Check for excessive capitals
        letters = re.sub(r'[^a-zA-Z]', '', full_text)
        if len(letters) > 20:
            caps_ratio = sum(1 for c in letters if c.isupper()) / len(letters)
            indicators['excessive_caps'] = caps_ratio > EXCESSIVE_CAPS_THRESHOLD
            indicators['caps_ratio'] = round(caps_ratio * 100, 1)
        
        # Check for excessive exclamations
        excl_count = full_text.count('!')
        indicators['excessive_exclamations'] = excl_count >= EXCLAMATION_THRESHOLD
        indicators['exclamation_count'] = excl_count
        
        # Check for suspicious sender patterns
        sender_lower = sender.lower()
        suspicious_tlds = ['.xyz', '.biz', '.net', '.info', '.cc', '.tk']
        suspicious_words_in_sender = ['noreply', 'security', 'alert', 'verify', 'support', 'no-reply']
        
        has_suspicious_tld = any(tld in sender_lower for tld in suspicious_tlds)
        has_number_in_domain = bool(re.search(r'\d', sender_lower.split('@')[-1] if '@' in sender_lower else sender_lower))
        has_misspelling = any(word in sender_lower for word in ['paypa1', 'amaz0n', 'appIe', 'netf1ix', 'g00gle'])
        
        indicators['suspicious_sender'] = has_suspicious_tld or has_misspelling
        
        # All-caps words
        all_caps = re.findall(r'\b[A-Z]{3,}\b', full_text)
        indicators['all_caps_words'] = list(set(all_caps))[:8]
        
        # Build risk factors list
        if indicators['urgent_words']:
            indicators['risk_factors'].append(f"Urgency language detected ({len(indicators['urgent_words'])} triggers)")
        if indicators['money_symbols']:
            indicators['risk_factors'].append(f"Money/reward mentions ({len(indicators['money_symbols'])} instances)")
        if indicators['suspicious_links']:
            indicators['risk_factors'].append(f"Suspicious URLs found ({len(indicators['suspicious_links'])} links)")
        if indicators['excessive_caps']:
            indicators['risk_factors'].append(f"Excessive capitalization ({indicators.get('caps_ratio', 0):.0f}% caps)")
        if indicators['excessive_exclamations']:
            indicators['risk_factors'].append(f"Excessive exclamations ({excl_count} found)")
        if indicators['suspicious_sender']:
            indicators['risk_factors'].append("Suspicious sender domain detected")
        if len(indicators['all_caps_words']) >= 3:
            indicators['risk_factors'].append(f"Multiple ALL-CAPS words ({len(indicators['all_caps_words'])} words)")
        
        return indicators
    
    def _calculate_risk_score(self, indicators: dict) -> int:
        """Calculate a risk score from 0-100 based on indicators."""
        score = 0
        
        if indicators['urgent_words']:
            score += min(len(indicators['urgent_words']) * 8, 24)
        if indicators['money_symbols']:
            score += min(len(indicators['money_symbols']) * 7, 21)
        if indicators['suspicious_links']:
            score += min(len(indicators['suspicious_links']) * 10, 20)
        if indicators['excessive_caps']:
            score += 15
        if indicators['excessive_exclamations']:
            score += 10
        if indicators['suspicious_sender']:
            score += 15
        if len(indicators.get('all_caps_words', [])) >= 3:
            score += 5
        
        return min(score, 100)


# Global predictor instance
_predictor = None

def get_predictor():
    """Get or create the global predictor instance."""
    global _predictor
    if _predictor is None:
        _predictor = SpamPredictor()
    return _predictor
