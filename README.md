# 🛡️ SpamShield AI — Spam Email Filter

An AI-powered spam email filter built with Python Flask, Scikit-learn, and a modern web UI.

## 🚀 Quick Start

```bash
cd SpamEmailFilter
pip install -r requirements.txt
python app.py
```

Then open: **http://127.0.0.1:5000**

## 📁 Project Structure

```
SpamEmailFilter/
├── app.py                   # Flask application
├── requirements.txt         # Python dependencies
├── data/
│   ├── training_data.csv    # 100+ labeled training emails
│   └── dummy_emails.json    # 50 dummy emails (25 spam + 25 safe)
├── models/                  # Saved model files (auto-generated)
│   ├── spam_classifier.pkl
│   └── metrics.json
├── ml/
│   ├── __init__.py
│   ├── train_model.py       # TF-IDF + Naive Bayes training
│   └── predictor.py        # Prediction & indicator analysis
├── templates/
│   └── index.html           # Single-page app template
└── static/
    ├── css/style.css        # Dark/light theme CSS
    └── js/main.js           # Frontend JavaScript
```

## 🤖 Machine Learning

- **Algorithm**: Multinomial Naive Bayes
- **Vectorizer**: TF-IDF (n-grams 1–2, max 5000 features)
- **Training Dataset**: 100+ labeled emails (50 spam + 50 safe)
- **Metrics**: Accuracy, Precision, Recall, F1 Score

## ✨ Features

1. 📬 **Cyberpunk Inbox UI**: Glassmorphism panels, glowing neon accents, and hacker-terminal styling.
2. 📊 **Real-time Performance Dashboard**: Chart.js graphs, animated metrics rings, and glitch text effects.
3. 🚀 **Matrix Digital Rain & Particle Backgrounds**: Interactive, high-tech animated backgrounds.
4. 🔍 **Manual AI Email Analyzer**: Enter custom emails and get instant predictions with threat indicators.
5. ⚠️ **Threat Detection Matrix**: Flags urgent words, money patterns, suspicious URLs, and excessive capitalization.
6. 🌙 **Dark & Light Themes**: Quick toggle between deep cyberpunk dark mode and crisp light mode.
7. 🤖 **Self-training ML Model**: TF-IDF + Multinomial Naive Bayes model automatically trains on startup.

## 🚀 Deployment (GitHub / Render / Heroku)

This project is fully ready to be deployed to platforms like **Render**, **Heroku**, or **Railway**.

1. Commit your changes and push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
2. Connect your GitHub repo to a PaaS (like Render).
3. The platform will detect the `Procfile` (`web: gunicorn app:app`) and `requirements.txt`.
4. The server will automatically install dependencies and launch!

*Note: The `models/` directory can be committed, or the app will automatically generate the ML models on the first boot.*
