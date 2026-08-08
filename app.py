"""
AI-Based Spam Email Filter - Flask Application
"""

import os
import sys
import json
from flask import Flask, render_template, request, jsonify

# Add project root to path
sys.path.insert(0, os.path.dirname(__file__))

from ml.train_model import train_spam_model
from ml.predictor import get_predictor

app = Flask(__name__)

# ─────────────────────────────────────────────
# Bootstrap: train model if not already trained
# ─────────────────────────────────────────────
def initialize_model():
    models_dir = os.path.join(os.path.dirname(__file__), 'models')
    model_path = os.path.join(models_dir, 'spam_classifier.pkl')
    if not os.path.exists(model_path):
        print("Training spam detection model...")
        train_spam_model()
        print("Model training complete!")
    else:
        print("Trained model found. Skipping training.")

# ─────────────────────────────────────────────
# Load dummy emails and classify them
# ─────────────────────────────────────────────
def load_and_classify_emails():
    data_path = os.path.join(os.path.dirname(__file__), 'data', 'dummy_emails.json')
    with open(data_path, 'r', encoding='utf-8') as f:
        emails = json.load(f)

    predictor = get_predictor()
    for email in emails:
        result = predictor.predict(
            email.get('sender', ''),
            email.get('subject', ''),
            email.get('body', '')
        )
        email['ml_prediction'] = result['label']
        email['confidence'] = result['confidence']
        email['spam_probability'] = result['spam_probability']
        email['safe_probability'] = result['safe_probability']
        email['indicators'] = result['indicators']
        email['risk_score'] = result['risk_score']
        email['original_label'] = email.get('label', 'unknown')
    return emails

# ─────────────────────────────────────────────
# Routes
# ─────────────────────────────────────────────
@app.route('/')
def index():
    return render_template('index.html')


@app.route('/api/emails', methods=['GET'])
def get_emails():
    """Return all classified dummy emails."""
    try:
        emails = load_and_classify_emails()
        return jsonify({'success': True, 'emails': emails})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500


@app.route('/api/email/<int:email_id>', methods=['GET'])
def get_email(email_id):
    """Return a single email by ID."""
    try:
        emails = load_and_classify_emails()
        email = next((e for e in emails if e['id'] == email_id), None)
        if email is None:
            return jsonify({'success': False, 'error': 'Email not found'}), 404
        return jsonify({'success': True, 'email': email})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500


@app.route('/api/analyze', methods=['POST'])
def analyze_email():
    """Analyze a custom email using the ML model."""
    try:
        data = request.get_json()
        if not data:
            return jsonify({'success': False, 'error': 'No JSON data provided'}), 400

        sender = data.get('sender', '').strip()
        subject = data.get('subject', '').strip()
        body = data.get('body', '').strip()

        # Validation
        if not sender and not subject and not body:
            return jsonify({'success': False, 'error': 'Please provide at least one field (sender, subject, or body)'}), 400

        predictor = get_predictor()
        result = predictor.predict(sender, subject, body)
        return jsonify({'success': True, 'result': result})

    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500


@app.route('/api/metrics', methods=['GET'])
def get_metrics():
    """Return model performance metrics."""
    try:
        predictor = get_predictor()
        metrics = predictor.get_metrics()
        if metrics is None:
            return jsonify({'success': False, 'error': 'Metrics not available'}), 404
        return jsonify({'success': True, 'metrics': metrics})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500


@app.route('/api/stats', methods=['GET'])
def get_stats():
    """Return dashboard statistics."""
    try:
        emails = load_and_classify_emails()
        total = len(emails)
        spam_count = sum(1 for e in emails if e['ml_prediction'] == 'spam')
        safe_count = total - spam_count
        spam_pct = round((spam_count / total * 100), 1) if total > 0 else 0
        unread = sum(1 for e in emails if not e.get('read', True))

        # Accuracy of model vs original labels
        correct = sum(1 for e in emails if e['ml_prediction'] == e['original_label'])
        inbox_accuracy = round((correct / total) * 100, 1)

        return jsonify({
            'success': True,
            'stats': {
                'total': total,
                'spam': spam_count,
                'safe': safe_count,
                'spam_percentage': spam_pct,
                'unread': unread,
                'inbox_accuracy': inbox_accuracy
            }
        })
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500


# ─────────────────────────────────────────────
# Entry point
# ─────────────────────────────────────────────
if __name__ == '__main__':
    initialize_model()
    print("\n" + "="*60)
    print("  AI Spam Email Filter - Running on http://127.0.0.1:5000")
    print("="*60 + "\n")
    app.run(debug=True, host='127.0.0.1', port=5000)
