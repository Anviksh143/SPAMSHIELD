import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, confusion_matrix
from sklearn.pipeline import Pipeline
import joblib
import os

def train_spam_model():
    """Train the spam detection model and save it."""
    
    # Load training data
    data_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'data', 'training_data.csv')
    df = pd.read_csv(data_path)
    
    print(f"Training dataset size: {len(df)}")
    print(f"Spam emails: {len(df[df['label'] == 'spam'])}")
    print(f"Safe emails: {len(df[df['label'] == 'safe'])}")
    
    # Encode labels
    df['label_encoded'] = (df['label'] == 'spam').astype(int)
    
    X = df['text']
    y = df['label_encoded']
    
    # Split data
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42, stratify=y
    )
    
    # Create pipeline with TF-IDF and Multinomial Naive Bayes
    pipeline = Pipeline([
        ('tfidf', TfidfVectorizer(
            max_features=5000,
            ngram_range=(1, 2),
            stop_words='english',
            lowercase=True,
            min_df=1,
            max_df=0.95
        )),
        ('nb', MultinomialNB(alpha=0.1))
    ])
    
    # Train model
    pipeline.fit(X_train, y_train)
    
    # Evaluate
    y_pred = pipeline.predict(X_test)
    y_pred_proba = pipeline.predict_proba(X_test)
    
    accuracy = accuracy_score(y_test, y_pred)
    precision = precision_score(y_test, y_pred, zero_division=0)
    recall = recall_score(y_test, y_pred, zero_division=0)
    f1 = f1_score(y_test, y_pred, zero_division=0)
    cm = confusion_matrix(y_test, y_pred)
    
    print(f"\n=== Model Performance ===")
    print(f"Accuracy:  {accuracy:.4f} ({accuracy*100:.2f}%)")
    print(f"Precision: {precision:.4f} ({precision*100:.2f}%)")
    print(f"Recall:    {recall:.4f} ({recall*100:.2f}%)")
    print(f"F1 Score:  {f1:.4f} ({f1*100:.2f}%)")
    print(f"\nConfusion Matrix:")
    print(f"TN: {cm[0][0]}, FP: {cm[0][1]}")
    print(f"FN: {cm[1][0]}, TP: {cm[1][1]}")
    
    # Save model
    models_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'models')
    os.makedirs(models_dir, exist_ok=True)
    
    model_path = os.path.join(models_dir, 'spam_classifier.pkl')
    joblib.dump(pipeline, model_path)
    
    # Save metrics
    metrics = {
        'accuracy': round(float(accuracy), 4),
        'precision': round(float(precision), 4),
        'recall': round(float(recall), 4),
        'f1_score': round(float(f1), 4),
        'train_size': int(len(X_train)),
        'test_size': int(len(X_test)),
        'spam_count': int(len(df[df['label'] == 'spam'])),
        'safe_count': int(len(df[df['label'] == 'safe'])),
        'confusion_matrix': {
            'tn': int(cm[0][0]),
            'fp': int(cm[0][1]),
            'fn': int(cm[1][0]),
            'tp': int(cm[1][1])
        }
    }
    
    import json
    metrics_path = os.path.join(models_dir, 'metrics.json')
    with open(metrics_path, 'w') as f:
        json.dump(metrics, f, indent=2)
    
    print(f"\nModel saved to: {model_path}")
    print(f"Metrics saved to: {metrics_path}")
    
    return pipeline, metrics

if __name__ == '__main__':
    train_spam_model()
