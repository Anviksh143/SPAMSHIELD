// Auto-generated SpamShield Email Dataset
const INITIAL_EMAILS = [
  {
    "id": 1,
    "sender": "noreply@amazon-deals.shop",
    "sender_name": "Amazon Deals",
    "subject": "CONGRATULATIONS! You've Won a $500 Gift Card!",
    "body": "Dear Valued Customer,\n\nCONGRATULATIONS!! You have been RANDOMLY SELECTED as our LUCKY WINNER for this month's special promotion!\n\nYOU HAVE WON: $500 Amazon Gift Card!!!\n\nThis is a LIMITED TIME OFFER and expires in 24 HOURS!\n\nClick here NOW to claim your prize: http://free-gift-scam.xyz/claim\n\nDon't miss out on this AMAZING opportunity! Act NOW before it's too late!\n\nBest regards,\nAmazon Rewards Team",
    "timestamp": "2024-11-15 08:23:14",
    "read": false,
    "label": "spam",
    "ml_prediction": "spam",
    "confidence": 98.8,
    "spam_probability": 98.8,
    "safe_probability": 1.2,
    "indicators": {
      "urgent_words": [
        "act now",
        "limited time",
        "expires",
        "24 hours",
        "before it's too late"
      ],
      "money_symbols": [
        "$500"
      ],
      "suspicious_links": [
        "http://free-gift-scam.xyz/claim"
      ],
      "excessive_caps": true,
      "excessive_exclamations": true,
      "suspicious_sender": false,
      "all_caps_words": [
        "RANDOMLY",
        "YOU",
        "WON",
        "HAVE",
        "OFFER",
        "NOW",
        "TIME",
        "WINNER"
      ],
      "risk_factors": [
        "Urgency language detected (5 triggers)",
        "Money/reward mentions (1 instances)",
        "Suspicious URLs found (1 links)",
        "Excessive capitalization (36% caps)",
        "Excessive exclamations (11 found)",
        "Multiple ALL-CAPS words (8 words)"
      ],
      "caps_ratio": 35.5,
      "exclamation_count": 11
    },
    "risk_score": 71,
    "original_label": "spam"
  },
  {
    "id": 2,
    "sender": "alert@paypa1-security.net",
    "sender_name": "PayPal Security Alert",
    "subject": "URGENT: Your PayPal Account Has Been Suspended!!!",
    "body": "Dear PayPal User,\n\nWe have detected SUSPICIOUS ACTIVITY on your account! Your account has been TEMPORARILY SUSPENDED for your protection.\n\nYou must VERIFY YOUR IDENTITY immediately to restore access:\n\nClick here: http://paypa1-verify.scam/login\n\nFAILURE TO VERIFY within 24 hours will result in PERMANENT account closure and forfeiture of all funds!\n\nThis is an URGENT security matter. Act NOW!\n\nPayPal Security Department",
    "timestamp": "2024-11-15 09:45:31",
    "read": false,
    "label": "spam",
    "ml_prediction": "spam",
    "confidence": 99.84,
    "spam_probability": 99.84,
    "safe_probability": 0.16,
    "indicators": {
      "urgent_words": [
        "urgent",
        "immediately",
        "act now",
        "24 hours"
      ],
      "money_symbols": [],
      "suspicious_links": [
        "http://paypa1-verify.scam/login"
      ],
      "excessive_caps": true,
      "excessive_exclamations": true,
      "suspicious_sender": true,
      "all_caps_words": [
        "SUSPENDED",
        "YOUR",
        "IDENTITY",
        "NOW",
        "FAILURE",
        "URGENT",
        "ACTIVITY",
        "VERIFY"
      ],
      "risk_factors": [
        "Urgency language detected (4 triggers)",
        "Suspicious URLs found (1 links)",
        "Excessive capitalization (31% caps)",
        "Excessive exclamations (6 found)",
        "Suspicious sender domain detected",
        "Multiple ALL-CAPS words (8 words)"
      ],
      "caps_ratio": 30.6,
      "exclamation_count": 6
    },
    "risk_score": 79,
    "original_label": "spam"
  },
  {
    "id": 3,
    "sender": "offers@lottery-winners.biz",
    "sender_name": "International Lottery Board",
    "subject": "You Are Our $2,000,000 Jackpot Winner - Claim Today!",
    "body": "ATTENTION WINNER!\n\nThe International Lottery Board is pleased to inform you that your email address has been SELECTED as the GRAND PRIZE WINNER of our monthly draw!\n\nPRIZE AMOUNT: $2,000,000 USD\n\nTo claim your prize, you must contact our claims officer immediately:\nEmail: claims@lottery-fake.biz\nPhone: +1-888-555-FAKE\n\nPlease provide:\n- Full name\n- Bank account details\n- Home address\n\nThis offer EXPIRES in 48 hours. Don't let someone else claim your prize!\n\nCongratulations!\nLottery Claims Department",
    "timestamp": "2024-11-15 10:12:07",
    "read": false,
    "label": "spam",
    "ml_prediction": "spam",
    "confidence": 99.86,
    "spam_probability": 99.86,
    "safe_probability": 0.14,
    "indicators": {
      "urgent_words": [
        "immediately",
        "expires",
        "48 hours"
      ],
      "money_symbols": [
        "$2,000,000"
      ],
      "suspicious_links": [],
      "excessive_caps": false,
      "excessive_exclamations": true,
      "suspicious_sender": true,
      "all_caps_words": [
        "GRAND",
        "FAKE",
        "EXPIRES",
        "ATTENTION",
        "WINNER",
        "USD",
        "PRIZE",
        "SELECTED"
      ],
      "risk_factors": [
        "Urgency language detected (3 triggers)",
        "Money/reward mentions (1 instances)",
        "Excessive exclamations (5 found)",
        "Suspicious sender domain detected",
        "Multiple ALL-CAPS words (8 words)"
      ],
      "caps_ratio": 21.2,
      "exclamation_count": 5
    },
    "risk_score": 61,
    "original_label": "spam"
  },
  {
    "id": 4,
    "sender": "pills@cheapmeds-online.xyz",
    "sender_name": "Online Pharmacy Deals",
    "subject": "Buy Cheap Medications - No Prescription Required!",
    "body": "SAVE UP TO 90% ON ALL MEDICATIONS!\n\nWe offer the CHEAPEST prices on all popular medications:\n\n- Viagra: $0.50/pill (Was $15)\n- Xanax: $0.30/pill (Was $8)\n- Oxycontin: $0.75/pill (Was $20)\n- Adderall: $0.45/pill (Was $10)\n\nNO PRESCRIPTION REQUIRED!\nDISCREET PACKAGING!\nFAST WORLDWIDE SHIPPING!\n\nOrder now at: http://cheap-illegal-meds.xyz\n\nLimited stock available. HURRY!",
    "timestamp": "2024-11-15 11:33:22",
    "read": false,
    "label": "spam",
    "ml_prediction": "spam",
    "confidence": 99.61,
    "spam_probability": 99.61,
    "safe_probability": 0.39,
    "indicators": {
      "urgent_words": [
        "hurry",
        "fast"
      ],
      "money_symbols": [
        "$0",
        "$20",
        "$10",
        "$8",
        "$15"
      ],
      "suspicious_links": [
        "http://cheap-illegal-meds.xyz"
      ],
      "excessive_caps": true,
      "excessive_exclamations": true,
      "suspicious_sender": true,
      "all_caps_words": [
        "DISCREET",
        "CHEAPEST",
        "REQUIRED",
        "MEDICATIONS",
        "ALL",
        "PACKAGING",
        "HURRY",
        "PRESCRIPTION"
      ],
      "risk_factors": [
        "Urgency language detected (2 triggers)",
        "Money/reward mentions (5 instances)",
        "Suspicious URLs found (1 links)",
        "Excessive capitalization (40% caps)",
        "Excessive exclamations (6 found)",
        "Suspicious sender domain detected",
        "Multiple ALL-CAPS words (8 words)"
      ],
      "caps_ratio": 39.7,
      "exclamation_count": 6
    },
    "risk_score": 92,
    "original_label": "spam"
  },
  {
    "id": 5,
    "sender": "prince.ibrahim@nigeria-royal.com",
    "sender_name": "Prince Ibrahim Mohammed",
    "subject": "Confidential Business Proposal - $15 Million USD Transfer",
    "body": "STRICTLY CONFIDENTIAL\n\nDear Friend,\n\nI am Prince Ibrahim Mohammed, son of the late King of Nigeria. I have $15,000,000 (FIFTEEN MILLION DOLLARS) in a foreign bank account that needs to be transferred urgently due to political instability.\n\nI am requesting your assistance to facilitate this transfer. In return, you will receive 40% of the total amount ($6,000,000).\n\nThis transaction is 100% legal and risk-free. I need your:\n1. Full name\n2. Bank account details\n3. Home address\n4. Phone number\n\nPlease reply URGENTLY as this is a time-sensitive matter.\n\nGod bless you,\nPrince Ibrahim Mohammed\nLagos, Nigeria",
    "timestamp": "2024-11-15 12:05:44",
    "read": false,
    "label": "spam",
    "ml_prediction": "spam",
    "confidence": 99.54,
    "spam_probability": 99.54,
    "safe_probability": 0.46,
    "indicators": {
      "urgent_words": [
        "urgent"
      ],
      "money_symbols": [
        "$6,000,000",
        "$15,000,000",
        "million dollar",
        "$15"
      ],
      "suspicious_links": [],
      "excessive_caps": false,
      "excessive_exclamations": false,
      "suspicious_sender": false,
      "all_caps_words": [
        "URGENTLY",
        "FIFTEEN",
        "STRICTLY",
        "MILLION",
        "USD",
        "CONFIDENTIAL",
        "DOLLARS"
      ],
      "risk_factors": [
        "Urgency language detected (1 triggers)",
        "Money/reward mentions (4 instances)",
        "Multiple ALL-CAPS words (7 words)"
      ],
      "caps_ratio": 16.2,
      "exclamation_count": 0
    },
    "risk_score": 34,
    "original_label": "spam"
  },
  {
    "id": 6,
    "sender": "workhome@earn-millions.net",
    "sender_name": "Work From Home Guru",
    "subject": "Make $5000/Week Working From Home - No Experience Needed!",
    "body": "ATTENTION: This could change your LIFE!\n\nAre you tired of your 9-5 job? Do you want FINANCIAL FREEDOM?\n\nOur proven system allows ordinary people to make $5000+ PER WEEK from the comfort of their home!\n\nJUST FOLLOW THESE SIMPLE STEPS:\n1. Sign up for FREE\n2. Complete simple online tasks\n3. Get PAID daily!\n\nTESTIMONIALS:\n'I made $10,000 in my first month!' - Sarah K.\n'Quit my job after just 2 weeks!' - Mike T.\n\nJoin NOW: http://scam-work-home.net/join\n\nLimited spots available! ACT NOW!",
    "timestamp": "2024-11-15 13:21:09",
    "read": false,
    "label": "spam",
    "ml_prediction": "spam",
    "confidence": 97.21,
    "spam_probability": 97.21,
    "safe_probability": 2.79,
    "indicators": {
      "urgent_words": [
        "act now"
      ],
      "money_symbols": [
        "$10,000",
        "$5000",
        "make $"
      ],
      "suspicious_links": [
        "http://scam-work-home.net/join"
      ],
      "excessive_caps": false,
      "excessive_exclamations": true,
      "suspicious_sender": true,
      "all_caps_words": [
        "THESE",
        "STEPS",
        "ACT",
        "JUST",
        "FOLLOW",
        "WEEK",
        "NOW",
        "TESTIMONIALS"
      ],
      "risk_factors": [
        "Urgency language detected (1 triggers)",
        "Money/reward mentions (3 instances)",
        "Suspicious URLs found (1 links)",
        "Excessive exclamations (8 found)",
        "Suspicious sender domain detected",
        "Multiple ALL-CAPS words (8 words)"
      ],
      "caps_ratio": 29.3,
      "exclamation_count": 8
    },
    "risk_score": 69,
    "original_label": "spam"
  },
  {
    "id": 7,
    "sender": "alert@bank-secure-verify.com",
    "sender_name": "Bank Security Team",
    "subject": "ALERT: Unauthorized Access Detected on Your Account",
    "body": "SECURITY ALERT\n\nWe have detected an UNAUTHORIZED LOGIN attempt on your bank account from:\n\nLocation: Moscow, Russia\nIP Address: 45.123.67.89\nTime: 2:34 AM EST\n\nYour account has been TEMPORARILY FROZEN for your protection.\n\nACT IMMEDIATELY to unlock your account:\nhttp://fake-bank-verify.com/unlock\n\nProvide your:\n- Account number\n- Social Security Number\n- Online banking password\n\nFAILURE to verify within 2 hours will result in PERMANENT account closure!\n\nBank Security Department",
    "timestamp": "2024-11-15 14:08:55",
    "read": true,
    "label": "spam",
    "ml_prediction": "spam",
    "confidence": 99.65,
    "spam_probability": 99.65,
    "safe_probability": 0.35,
    "indicators": {
      "urgent_words": [
        "immediately",
        "alert"
      ],
      "money_symbols": [],
      "suspicious_links": [
        "http://fake-bank-verify.com/unlock"
      ],
      "excessive_caps": false,
      "excessive_exclamations": false,
      "suspicious_sender": false,
      "all_caps_words": [
        "ALERT",
        "LOGIN",
        "UNAUTHORIZED",
        "EST",
        "ACT",
        "FAILURE",
        "IMMEDIATELY",
        "SECURITY"
      ],
      "risk_factors": [
        "Urgency language detected (2 triggers)",
        "Suspicious URLs found (1 links)",
        "Multiple ALL-CAPS words (8 words)"
      ],
      "caps_ratio": 26.4,
      "exclamation_count": 1
    },
    "risk_score": 31,
    "original_label": "spam"
  },
  {
    "id": 8,
    "sender": "deals@crypto-invest-now.biz",
    "sender_name": "CryptoWizard Investment",
    "subject": "Make 500% Returns on Crypto - Our AI Bot Never Loses!",
    "body": "ATTENTION CRYPTO INVESTORS!\n\nOur revolutionary AI trading bot has generated INCREDIBLE returns:\n\nJanuary: +487%\nFebruary: +612%\nMarch: +389%\n\nOUR AI BOT NEVER LOSES! 100% GUARANTEED PROFITS!\n\nMinimum investment: Just $500!\nAverage monthly return: $25,000!\n\nJoin over 50,000 successful investors today!\n\nSign up NOW before spots fill up:\nhttp://crypto-scam-bot.biz\n\nThis opportunity WON'T LAST - Act NOW!",
    "timestamp": "2024-11-15 15:42:11",
    "read": false,
    "label": "spam",
    "ml_prediction": "spam",
    "confidence": 98.46,
    "spam_probability": 98.46,
    "safe_probability": 1.54,
    "indicators": {
      "urgent_words": [
        "act now"
      ],
      "money_symbols": [
        "$500",
        "$25,000"
      ],
      "suspicious_links": [
        "http://crypto-scam-bot.biz"
      ],
      "excessive_caps": true,
      "excessive_exclamations": true,
      "suspicious_sender": true,
      "all_caps_words": [
        "GUARANTEED",
        "WON",
        "NEVER",
        "NOW",
        "CRYPTO",
        "ATTENTION",
        "INVESTORS",
        "PROFITS"
      ],
      "risk_factors": [
        "Urgency language detected (1 triggers)",
        "Money/reward mentions (2 instances)",
        "Suspicious URLs found (1 links)",
        "Excessive capitalization (33% caps)",
        "Excessive exclamations (8 found)",
        "Suspicious sender domain detected",
        "Multiple ALL-CAPS words (8 words)"
      ],
      "caps_ratio": 32.7,
      "exclamation_count": 8
    },
    "risk_score": 77,
    "original_label": "spam"
  },
  {
    "id": 9,
    "sender": "irs-notice@tax-irs-gov.net",
    "sender_name": "IRS Tax Department",
    "subject": "Final Notice: Unpaid Taxes - Arrest Warrant Issued",
    "body": "FINAL NOTICE FROM IRS\n\nDear Taxpayer,\n\nOur records indicate you have UNPAID TAXES of $4,750.00\n\nDue to your failure to respond to previous notices, an ARREST WARRANT has been issued in your name.\n\nYou must call IMMEDIATELY to avoid:\n- Immediate arrest\n- Bank account seizure\n- Property confiscation\n\nCall NOW: 1-888-555-0911\nAvailable 24/7\n\nThis is your FINAL WARNING. Legal proceedings will begin within 24 hours if you fail to call.\n\nIRS Tax Enforcement Division",
    "timestamp": "2024-11-15 16:55:33",
    "read": false,
    "label": "spam",
    "ml_prediction": "spam",
    "confidence": 98.92,
    "spam_probability": 98.92,
    "safe_probability": 1.08,
    "indicators": {
      "urgent_words": [
        "immediately",
        "final notice",
        "warning",
        "24 hours"
      ],
      "money_symbols": [
        "$4,750"
      ],
      "suspicious_links": [],
      "excessive_caps": false,
      "excessive_exclamations": false,
      "suspicious_sender": true,
      "all_caps_words": [
        "UNPAID",
        "TAXES",
        "IRS",
        "WARNING",
        "WARRANT",
        "ARREST",
        "NOW",
        "IMMEDIATELY"
      ],
      "risk_factors": [
        "Urgency language detected (4 triggers)",
        "Money/reward mentions (1 instances)",
        "Suspicious sender domain detected",
        "Multiple ALL-CAPS words (8 words)"
      ],
      "caps_ratio": 24.2,
      "exclamation_count": 0
    },
    "risk_score": 51,
    "original_label": "spam"
  },
  {
    "id": 10,
    "sender": "hotsingles@dating-tonight.xyz",
    "sender_name": "FindLove Dating",
    "subject": "3 Women in Your Area Sent You Messages Tonight!",
    "body": "HEY HANDSOME!\n\nYou have 3 NEW MESSAGES waiting!\n\nHere's who's interested in you:\n\n1. Jessica, 24 - 'I've been looking at your profile...'\n2. Maria, 27 - 'You seem really interesting...'\n3. Ashley, 22 - 'Are you free tonight?'\n\nDon't keep them waiting! These REAL WOMEN want to meet YOU tonight!\n\nView their profiles NOW:\nhttp://dating-scam-site.xyz/messages\n\nFREE to join! No credit card required... for the first 5 minutes!\n\nFind love tonight!",
    "timestamp": "2024-11-15 17:30:22",
    "read": false,
    "label": "spam",
    "ml_prediction": "spam",
    "confidence": 97.63,
    "spam_probability": 97.63,
    "safe_probability": 2.37,
    "indicators": {
      "urgent_words": [],
      "money_symbols": [],
      "suspicious_links": [
        "http://dating-scam-site.xyz/messages"
      ],
      "excessive_caps": false,
      "excessive_exclamations": true,
      "suspicious_sender": true,
      "all_caps_words": [
        "NEW",
        "MESSAGES",
        "YOU",
        "NOW",
        "WOMEN",
        "HANDSOME",
        "REAL",
        "FREE"
      ],
      "risk_factors": [
        "Suspicious URLs found (1 links)",
        "Excessive exclamations (8 found)",
        "Suspicious sender domain detected",
        "Multiple ALL-CAPS words (8 words)"
      ],
      "caps_ratio": 17.5,
      "exclamation_count": 8
    },
    "risk_score": 40,
    "original_label": "spam"
  },
  {
    "id": 11,
    "sender": "weightloss@miracle-slim.net",
    "sender_name": "SlimFast Miracle",
    "subject": "Lose 30 Pounds in 30 Days - Doctors HATE This Trick!",
    "body": "BREAKING NEWS IN WEIGHT LOSS!\n\nDoctors are FURIOUS about this simple trick that melts away fat overnight!\n\nOur miracle formula helps you lose:\n- 30 POUNDS in just 30 days!\n- Belly fat DISAPPEARS overnight!\n- No diet or exercise required!\n\n'I lost 50 pounds in 6 weeks!' - Jennifer M.\n'My doctor couldn't believe it!' - Robert K.\n\nGet your FREE 30-day trial now:\nhttp://weightloss-scam.net/trial\n\nONLY PAY SHIPPING: $4.99\n(Then $199/month automatically billed)\n\nACT NOW - Limited supply!",
    "timestamp": "2024-11-15 18:14:07",
    "read": false,
    "label": "spam",
    "ml_prediction": "spam",
    "confidence": 99.33,
    "spam_probability": 99.33,
    "safe_probability": 0.67,
    "indicators": {
      "urgent_words": [
        "act now"
      ],
      "money_symbols": [
        "$4",
        "$199"
      ],
      "suspicious_links": [
        "http://weightloss-scam.net/trial"
      ],
      "excessive_caps": false,
      "excessive_exclamations": true,
      "suspicious_sender": true,
      "all_caps_words": [
        "PAY",
        "LOSS",
        "ACT",
        "ONLY",
        "NOW",
        "BREAKING",
        "POUNDS",
        "FURIOUS"
      ],
      "risk_factors": [
        "Urgency language detected (1 triggers)",
        "Money/reward mentions (2 instances)",
        "Suspicious URLs found (1 links)",
        "Excessive exclamations (9 found)",
        "Suspicious sender domain detected",
        "Multiple ALL-CAPS words (8 words)"
      ],
      "caps_ratio": 24.6,
      "exclamation_count": 9
    },
    "risk_score": 62,
    "original_label": "spam"
  },
  {
    "id": 12,
    "sender": "loans@easy-money-now.biz",
    "sender_name": "EasyMoney Loans",
    "subject": "Pre-Approved for $50,000 Loan - No Credit Check!",
    "body": "CONGRATULATIONS!\n\nYou have been PRE-APPROVED for a personal loan of:\n\nLOAN AMOUNT: $50,000\nINTEREST RATE: 2.5% (Promotional)\nNO CREDIT CHECK REQUIRED!\nINSTANT APPROVAL!\n\nThis exclusive offer is available for a LIMITED TIME ONLY!\n\nApply in just 5 minutes:\nhttp://loan-scam.biz/apply\n\nNo documents required!\nFunds deposited within 24 hours!\nBad credit? No problem!\n\nThis offer expires TONIGHT at midnight!\n\nApply NOW before it's too late!",
    "timestamp": "2024-11-15 19:02:48",
    "read": false,
    "label": "spam",
    "ml_prediction": "spam",
    "confidence": 99.38,
    "spam_probability": 99.38,
    "safe_probability": 0.62,
    "indicators": {
      "urgent_words": [
        "limited time",
        "expires",
        "instant",
        "24 hours",
        "before it's too late"
      ],
      "money_symbols": [
        "$50,000"
      ],
      "suspicious_links": [
        "http://loan-scam.biz/apply"
      ],
      "excessive_caps": true,
      "excessive_exclamations": true,
      "suspicious_sender": true,
      "all_caps_words": [
        "INTEREST",
        "RATE",
        "PRE",
        "INSTANT",
        "REQUIRED",
        "APPROVED",
        "ONLY",
        "CHECK"
      ],
      "risk_factors": [
        "Urgency language detected (5 triggers)",
        "Money/reward mentions (1 instances)",
        "Suspicious URLs found (1 links)",
        "Excessive capitalization (35% caps)",
        "Excessive exclamations (10 found)",
        "Suspicious sender domain detected",
        "Multiple ALL-CAPS words (8 words)"
      ],
      "caps_ratio": 34.7,
      "exclamation_count": 10
    },
    "risk_score": 86,
    "original_label": "spam"
  },
  {
    "id": 13,
    "sender": "security@netf1ix-support.com",
    "sender_name": "Netflix Support",
    "subject": "Your Netflix Account Will Be Terminated in 24 Hours!",
    "body": "IMPORTANT NETFLIX NOTICE\n\nDear Subscriber,\n\nWe were unable to process your recent payment. Your Netflix account will be PERMANENTLY TERMINATED in 24 hours unless you update your payment information.\n\nUpdate your billing details NOW:\nhttp://netf1ix-fake-login.com/billing\n\nIf you do not update your payment within 24 hours, you will LOSE:\n- All your saved movies and shows\n- Your watch history\n- Your subscriber benefits\n\nAct IMMEDIATELY to avoid losing your account!\n\nNetflix Customer Service",
    "timestamp": "2024-11-15 20:15:55",
    "read": false,
    "label": "spam",
    "ml_prediction": "spam",
    "confidence": 92.81,
    "spam_probability": 92.81,
    "safe_probability": 7.19,
    "indicators": {
      "urgent_words": [
        "immediately",
        "24 hours"
      ],
      "money_symbols": [],
      "suspicious_links": [
        "http://netf1ix-fake-login.com/billing"
      ],
      "excessive_caps": false,
      "excessive_exclamations": false,
      "suspicious_sender": true,
      "all_caps_words": [
        "TERMINATED",
        "PERMANENTLY",
        "NOW",
        "IMMEDIATELY",
        "IMPORTANT",
        "LOSE",
        "NETFLIX",
        "NOTICE"
      ],
      "risk_factors": [
        "Urgency language detected (2 triggers)",
        "Suspicious URLs found (1 links)",
        "Suspicious sender domain detected",
        "Multiple ALL-CAPS words (8 words)"
      ],
      "caps_ratio": 18.9,
      "exclamation_count": 2
    },
    "risk_score": 46,
    "original_label": "spam"
  },
  {
    "id": 14,
    "sender": "admin@microsoft-security-alert.net",
    "sender_name": "Microsoft Security",
    "subject": "VIRUS DETECTED: Your Computer Has 5 Dangerous Viruses!",
    "body": "CRITICAL SECURITY ALERT!\n\nOur systems have detected 5 DANGEROUS VIRUSES on your computer!\n\nInfected files: 1,247\nThreat level: CRITICAL\nData at risk: Your passwords, banking info, personal files\n\nYour computer is being HACKED RIGHT NOW!\n\nDownload our FREE antivirus IMMEDIATELY:\nhttp://fake-antivirus.net/download\n\nDo NOT close this window!\nDo NOT turn off your computer!\n\nCall our Microsoft Support immediately:\n1-800-555-FAKE\n\nYour computer will crash in 10 minutes if you don't act!\n\nMicrosoft Security Team",
    "timestamp": "2024-11-15 21:08:33",
    "read": false,
    "label": "spam",
    "ml_prediction": "spam",
    "confidence": 97.74,
    "spam_probability": 97.74,
    "safe_probability": 2.26,
    "indicators": {
      "urgent_words": [
        "immediately",
        "alert",
        "critical",
        "right now"
      ],
      "money_symbols": [],
      "suspicious_links": [
        "http://fake-antivirus.net/download"
      ],
      "excessive_caps": false,
      "excessive_exclamations": true,
      "suspicious_sender": true,
      "all_caps_words": [
        "CRITICAL",
        "ALERT",
        "HACKED",
        "FAKE",
        "VIRUSES",
        "NOW",
        "DETECTED",
        "IMMEDIATELY"
      ],
      "risk_factors": [
        "Urgency language detected (4 triggers)",
        "Suspicious URLs found (1 links)",
        "Excessive exclamations (7 found)",
        "Suspicious sender domain detected",
        "Multiple ALL-CAPS words (8 words)"
      ],
      "caps_ratio": 27.0,
      "exclamation_count": 7
    },
    "risk_score": 64,
    "original_label": "spam"
  },
  {
    "id": 15,
    "sender": "rewards@social-security-benefit.net",
    "sender_name": "Social Security Administration",
    "subject": "URGENT: Your Social Security Number Has Been Suspended!",
    "body": "NOTICE FROM SOCIAL SECURITY ADMINISTRATION\n\nDear Citizen,\n\nYour Social Security Number (SSN) has been SUSPENDED due to suspicious activities.\n\nYour SSN was used in:\n- Money laundering activities\n- Illegal bank account opening\n- Drug trafficking investigations\n\nTo REACTIVATE your SSN immediately, call our officer:\n1-888-555-0088\n\nFAILURE to call within 24 hours will result in:\n- Arrest by local law enforcement\n- Freezing of all bank accounts\n- Legal prosecution\n\nThis is your LAST WARNING!\n\nSSA Investigation Department",
    "timestamp": "2024-11-15 22:30:14",
    "read": true,
    "label": "spam",
    "ml_prediction": "spam",
    "confidence": 99.51,
    "spam_probability": 99.51,
    "safe_probability": 0.49,
    "indicators": {
      "urgent_words": [
        "urgent",
        "immediately",
        "warning",
        "24 hours"
      ],
      "money_symbols": [],
      "suspicious_links": [],
      "excessive_caps": false,
      "excessive_exclamations": false,
      "suspicious_sender": true,
      "all_caps_words": [
        "SUSPENDED",
        "SSA",
        "REACTIVATE",
        "ADMINISTRATION",
        "WARNING",
        "FAILURE",
        "URGENT",
        "SECURITY"
      ],
      "risk_factors": [
        "Urgency language detected (4 triggers)",
        "Suspicious sender domain detected",
        "Multiple ALL-CAPS words (8 words)"
      ],
      "caps_ratio": 25.8,
      "exclamation_count": 2
    },
    "risk_score": 44,
    "original_label": "spam"
  },
  {
    "id": 16,
    "sender": "promo@cheapwatches-replica.biz",
    "sender_name": "Luxury Watches Direct",
    "subject": "Rolex, Gucci, LV - 95% OFF! Limited Time Only!",
    "body": "MEGA SALE ON LUXURY BRANDS!\n\nGet authentic-looking REPLICA watches and accessories!\n\n- Rolex Submariner: $89 (Retail $9,000)\n- Gucci Handbag: $45 (Retail $2,000)\n- Louis Vuitton Wallet: $29 (Retail $600)\n- Omega Seamaster: $69 (Retail $5,000)\n\nFREE worldwide shipping on orders over $150!\nDISCREET packaging - no one will know!\n100% Satisfaction guaranteed!\n\nShop now: http://fake-luxury.biz\n\nSale ends TONIGHT at midnight!",
    "timestamp": "2024-11-15 23:12:45",
    "read": false,
    "label": "spam",
    "ml_prediction": "spam",
    "confidence": 99.39,
    "spam_probability": 99.39,
    "safe_probability": 0.61,
    "indicators": {
      "urgent_words": [
        "limited time"
      ],
      "money_symbols": [
        "$600",
        "$29",
        "$5,000",
        "$2,000",
        "$45"
      ],
      "suspicious_links": [
        "http://fake-luxury.biz"
      ],
      "excessive_caps": false,
      "excessive_exclamations": true,
      "suspicious_sender": true,
      "all_caps_words": [
        "LUXURY",
        "DISCREET",
        "OFF",
        "TONIGHT",
        "SALE",
        "REPLICA",
        "MEGA",
        "FREE"
      ],
      "risk_factors": [
        "Urgency language detected (1 triggers)",
        "Money/reward mentions (5 instances)",
        "Suspicious URLs found (1 links)",
        "Excessive exclamations (8 found)",
        "Suspicious sender domain detected",
        "Multiple ALL-CAPS words (8 words)"
      ],
      "caps_ratio": 23.7,
      "exclamation_count": 8
    },
    "risk_score": 69,
    "original_label": "spam"
  },
  {
    "id": 17,
    "sender": "winner@prize-notification.xyz",
    "sender_name": "Prize Notification Center",
    "subject": "You Are Our 1,000,000th Visitor - CLAIM YOUR PRIZE!",
    "body": "*** PRIZE NOTIFICATION ***\n\nDear Internet User,\n\nYou have been identified as our ONE MILLIONTH VISITOR!\n\nYou have WON one of the following prizes:\n1. Apple MacBook Pro (Value: $2,499)\n2. iPhone 15 Pro Max (Value: $1,199)\n3. Samsung 65' QLED TV (Value: $1,799)\n4. Cash Prize of $1,000\n\nTo claim your prize, complete a quick survey:\nhttp://survey-scam-prize.xyz/claim\n\nThis EXCLUSIVE offer expires in 15 minutes!\nYou MUST act NOW!\n\nPrize Notification Center",
    "timestamp": "2024-11-16 00:05:22",
    "read": false,
    "label": "spam",
    "ml_prediction": "spam",
    "confidence": 99.29,
    "spam_probability": 99.29,
    "safe_probability": 0.71,
    "indicators": {
      "urgent_words": [
        "act now",
        "expires",
        "quick"
      ],
      "money_symbols": [
        "$2,499",
        "$1,199",
        "cash prize",
        "$1,000",
        "$1,799"
      ],
      "suspicious_links": [
        "http://survey-scam-prize.xyz/claim"
      ],
      "excessive_caps": true,
      "excessive_exclamations": true,
      "suspicious_sender": true,
      "all_caps_words": [
        "EXCLUSIVE",
        "ONE",
        "YOUR",
        "WON",
        "QLED",
        "MILLIONTH",
        "NOW",
        "VISITOR"
      ],
      "risk_factors": [
        "Urgency language detected (3 triggers)",
        "Money/reward mentions (5 instances)",
        "Suspicious URLs found (1 links)",
        "Excessive capitalization (30% caps)",
        "Excessive exclamations (4 found)",
        "Suspicious sender domain detected",
        "Multiple ALL-CAPS words (8 words)"
      ],
      "caps_ratio": 30.1,
      "exclamation_count": 4
    },
    "risk_score": 100,
    "original_label": "spam"
  },
  {
    "id": 18,
    "sender": "trading@stock-tip-alerts.net",
    "sender_name": "Elite Stock Tips",
    "subject": "Hot Stock Pick: XYZ Corp Will Skyrocket 500% This Week!",
    "body": "CONFIDENTIAL STOCK TIP!\n\nOur inside sources have confirmed:\n\nXYZ CORPORATION (NASDAQ: XYZC)\nTarget Price: $150 (Current: $0.05)\nExpected Return: +500% in 5 days!\n\nBUY NOW before Wall Street discovers this!\n\nThis is a PUMP AND DUMP opportunity!\nEarly investors made $50,000 last week!\n\nSign up for our premium alerts:\nhttp://stock-pump-dump.net/premium\n\nOnly $99/month - cancel anytime!\n\nACT NOW before the stock explodes!\n\n*Past performance does not guarantee future results",
    "timestamp": "2024-11-16 01:30:11",
    "read": false,
    "label": "spam",
    "ml_prediction": "spam",
    "confidence": 95.28,
    "spam_probability": 95.28,
    "safe_probability": 4.72,
    "indicators": {
      "urgent_words": [
        "act now",
        "alert"
      ],
      "money_symbols": [
        "$50,000",
        "$99",
        "$0",
        "$150"
      ],
      "suspicious_links": [
        "http://stock-pump-dump.net/premium"
      ],
      "excessive_caps": false,
      "excessive_exclamations": true,
      "suspicious_sender": true,
      "all_caps_words": [
        "BUY",
        "ACT",
        "NOW",
        "XYZC",
        "DUMP",
        "CORPORATION",
        "STOCK",
        "AND"
      ],
      "risk_factors": [
        "Urgency language detected (2 triggers)",
        "Money/reward mentions (4 instances)",
        "Suspicious URLs found (1 links)",
        "Excessive exclamations (8 found)",
        "Suspicious sender domain detected",
        "Multiple ALL-CAPS words (8 words)"
      ],
      "caps_ratio": 23.5,
      "exclamation_count": 8
    },
    "risk_score": 77,
    "original_label": "spam"
  },
  {
    "id": 19,
    "sender": "grant@government-money-program.biz",
    "sender_name": "Government Grant Program",
    "subject": "FREE Government Grant: $9,000 Available for You!",
    "body": "ATTENTION CITIZEN!\n\nThe government has allocated $9,000 grants to qualifying individuals!\n\nYou PRE-QUALIFY based on your:\n- Age\n- Income level\n- Location\n\nThis money does NOT need to be repaid!\nNo credit check required!\nNo work requirements!\n\nApply in just 3 minutes:\nhttp://fake-government-grant.biz\n\nOver 50,000 people have already received their grants!\n\nFUNDS ARE LIMITED - Apply NOW!\n\nThis offer expires at the end of the month!\n\nGovernment Grant Division",
    "timestamp": "2024-11-16 02:45:33",
    "read": false,
    "label": "spam",
    "ml_prediction": "spam",
    "confidence": 99.05,
    "spam_probability": 99.05,
    "safe_probability": 0.95,
    "indicators": {
      "urgent_words": [
        "expires"
      ],
      "money_symbols": [
        "$9,000"
      ],
      "suspicious_links": [
        "http://fake-government-grant.biz"
      ],
      "excessive_caps": false,
      "excessive_exclamations": true,
      "suspicious_sender": true,
      "all_caps_words": [
        "PRE",
        "CITIZEN",
        "FUNDS",
        "NOW",
        "ATTENTION",
        "LIMITED",
        "NOT",
        "ARE"
      ],
      "risk_factors": [
        "Urgency language detected (1 triggers)",
        "Money/reward mentions (1 instances)",
        "Suspicious URLs found (1 links)",
        "Excessive exclamations (9 found)",
        "Suspicious sender domain detected",
        "Multiple ALL-CAPS words (8 words)"
      ],
      "caps_ratio": 18.3,
      "exclamation_count": 9
    },
    "risk_score": 55,
    "original_label": "spam"
  },
  {
    "id": 20,
    "sender": "offer@casino-bonus-free.xyz",
    "sender_name": "Royal Casino Online",
    "subject": "FREE $1000 Casino Bonus - No Deposit Required!",
    "body": "WELCOME TO ROYAL CASINO!\n\nEXCLUSIVE OFFER FOR NEW MEMBERS:\n\n$1,000 FREE BONUS - No Deposit Required!\n\nPlay your favorite games:\n- Slots\n- Poker\n- Blackjack\n- Roulette\n\nWIN REAL MONEY from day one!\n\nJoin now: http://casino-scam.xyz/signup\n\nBONUS TERMS: 500x wagering requirement on bonus amount. Withdrawal limit $10. Valid for 1 hour.\n\n21+ only. Gambling can be addictive. Please gamble responsibly.\n\nRoyal Casino VIP Team",
    "timestamp": "2024-11-16 03:22:18",
    "read": false,
    "label": "spam",
    "ml_prediction": "spam",
    "confidence": 98.83,
    "spam_probability": 98.83,
    "safe_probability": 1.17,
    "indicators": {
      "urgent_words": [],
      "money_symbols": [
        "$1000",
        "$1,000",
        "$10"
      ],
      "suspicious_links": [
        "http://casino-scam.xyz/signup"
      ],
      "excessive_caps": true,
      "excessive_exclamations": true,
      "suspicious_sender": true,
      "all_caps_words": [
        "EXCLUSIVE",
        "NEW",
        "FOR",
        "VIP",
        "OFFER",
        "MONEY",
        "MEMBERS",
        "WELCOME"
      ],
      "risk_factors": [
        "Money/reward mentions (3 instances)",
        "Suspicious URLs found (1 links)",
        "Excessive capitalization (31% caps)",
        "Excessive exclamations (4 found)",
        "Suspicious sender domain detected",
        "Multiple ALL-CAPS words (8 words)"
      ],
      "caps_ratio": 31.0,
      "exclamation_count": 4
    },
    "risk_score": 76,
    "original_label": "spam"
  },
  {
    "id": 21,
    "sender": "support@appIe-id-locked.net",
    "sender_name": "Apple ID Support",
    "subject": "Your Apple ID Has Been Locked - Verify Now!",
    "body": "Your Apple ID has been LOCKED!\n\nDear Apple User,\n\nWe noticed unusual sign-in activity on your Apple ID account.\n\nTo unlock your account and prevent unauthorized access:\n\nCLICK HERE TO VERIFY: http://appIe-fake-login.net/verify\n\nYou will need to provide:\n- Apple ID and password\n- Credit card information\n- Billing address\n\nFAILURE to verify within 12 hours will result in permanent deletion of your Apple ID, iCloud data, and all purchased apps!\n\nApple Customer Support",
    "timestamp": "2024-11-16 04:15:42",
    "read": false,
    "label": "spam",
    "ml_prediction": "spam",
    "confidence": 85.05,
    "spam_probability": 85.05,
    "safe_probability": 14.95,
    "indicators": {
      "urgent_words": [],
      "money_symbols": [],
      "suspicious_links": [
        "http://appIe-fake-login.net/verify"
      ],
      "excessive_caps": false,
      "excessive_exclamations": true,
      "suspicious_sender": true,
      "all_caps_words": [
        "LOCKED",
        "CLICK",
        "FAILURE",
        "HERE",
        "VERIFY"
      ],
      "risk_factors": [
        "Suspicious URLs found (1 links)",
        "Excessive exclamations (3 found)",
        "Suspicious sender domain detected",
        "Multiple ALL-CAPS words (5 words)"
      ],
      "caps_ratio": 16.2,
      "exclamation_count": 3
    },
    "risk_score": 40,
    "original_label": "spam"
  },
  {
    "id": 22,
    "sender": "info@rich-quick-secrets.biz",
    "sender_name": "Millionaire Secrets Revealed",
    "subject": "Secret Formula to Becoming a Millionaire in 90 Days!",
    "body": "EXCLUSIVE INVITATION!\n\nDear Friend,\n\nFor the first time ever, a self-made millionaire is revealing his SECRET FORMULA that made him $10 MILLION in just 90 days!\n\nUsing this simple 3-step system, you can:\n- Quit your job within 30 days\n- Make $10,000+ per week\n- Travel the world in luxury\n\nThis information is NOT available anywhere else!\n\nGet INSTANT ACCESS for just $47:\nhttp://millionaire-scam.biz/secret\n\n100% Money-back guarantee (60-day)\n\nOver 100,000 people have already changed their lives!\n\nACT NOW - Price increases to $497 tomorrow!",
    "timestamp": "2024-11-16 05:30:55",
    "read": false,
    "label": "spam",
    "ml_prediction": "spam",
    "confidence": 96.35,
    "spam_probability": 96.35,
    "safe_probability": 3.65,
    "indicators": {
      "urgent_words": [
        "act now",
        "instant"
      ],
      "money_symbols": [
        "$10,000",
        "make $",
        "$47",
        "$497",
        "$10"
      ],
      "suspicious_links": [
        "http://millionaire-scam.biz/secret"
      ],
      "excessive_caps": false,
      "excessive_exclamations": true,
      "suspicious_sender": true,
      "all_caps_words": [
        "EXCLUSIVE",
        "FORMULA",
        "INSTANT",
        "ACT",
        "NOW",
        "MILLION",
        "INVITATION",
        "NOT"
      ],
      "risk_factors": [
        "Urgency language detected (2 triggers)",
        "Money/reward mentions (5 instances)",
        "Suspicious URLs found (1 links)",
        "Excessive exclamations (6 found)",
        "Suspicious sender domain detected",
        "Multiple ALL-CAPS words (8 words)"
      ],
      "caps_ratio": 18.1,
      "exclamation_count": 6
    },
    "risk_score": 77,
    "original_label": "spam"
  },
  {
    "id": 23,
    "sender": "admin@insurance-refund-center.net",
    "sender_name": "Insurance Refund Center",
    "subject": "You Are Owed $3,247 in Insurance Refund - Claim Now!",
    "body": "INSURANCE REFUND NOTICE\n\nDear Policyholder,\n\nAfter a routine audit, we have determined that you are OWED a refund of:\n\nREFUND AMOUNT: $3,247.00\n\nThis refund is due to:\n- Overcharged premiums (2020-2023)\n- Policy calculation errors\n- Regulatory compliance adjustment\n\nTo claim your refund, we need to verify your details:\nhttp://insurance-refund-scam.net/claim\n\nPlease provide your:\n- Social Security Number\n- Bank routing number\n- Account number\n\nRefund will be processed within 3-5 business days!\n\nInsurance Refund Department",
    "timestamp": "2024-11-16 06:48:27",
    "read": false,
    "label": "spam",
    "ml_prediction": "safe",
    "confidence": 51.1,
    "spam_probability": 48.9,
    "safe_probability": 51.1,
    "indicators": {
      "urgent_words": [],
      "money_symbols": [
        "$3,247"
      ],
      "suspicious_links": [
        "http://insurance-refund-scam.net/claim"
      ],
      "excessive_caps": false,
      "excessive_exclamations": false,
      "suspicious_sender": true,
      "all_caps_words": [
        "OWED",
        "NOTICE",
        "REFUND",
        "INSURANCE",
        "AMOUNT"
      ],
      "risk_factors": [
        "Money/reward mentions (1 instances)",
        "Suspicious URLs found (1 links)",
        "Suspicious sender domain detected",
        "Multiple ALL-CAPS words (5 words)"
      ],
      "caps_ratio": 14.3,
      "exclamation_count": 2
    },
    "risk_score": 37,
    "original_label": "spam"
  },
  {
    "id": 24,
    "sender": "deals@software-oem-cheap.xyz",
    "sender_name": "Cheap Software Store",
    "subject": "Windows 11 Pro + Office 2024 Bundle for Just $15!",
    "body": "UNBELIEVABLE SOFTWARE DEALS!\n\nGet genuine* software at unbeatable prices:\n\n- Windows 11 Pro: $8.99\n- Office 2024 Professional: $11.99\n- Adobe Photoshop: $5.99\n- Windows 11 + Office Bundle: $15.00\n\n*100% Genuine product keys (sourced from gray market)\n\nINSTANT DELIVERY via email!\nLifetime license!\nFree tech support!\n\nOrder now: http://pirated-software.xyz\n\nOver 500,000 satisfied customers!\nTrustpilot rating: 4.8/5 (fake reviews)\n\nBuy now before Microsoft finds out!",
    "timestamp": "2024-11-16 07:55:19",
    "read": false,
    "label": "spam",
    "ml_prediction": "spam",
    "confidence": 95.0,
    "spam_probability": 95.0,
    "safe_probability": 5.0,
    "indicators": {
      "urgent_words": [
        "instant"
      ],
      "money_symbols": [
        "$11",
        "$8",
        "$5",
        "$15"
      ],
      "suspicious_links": [
        "http://pirated-software.xyz"
      ],
      "excessive_caps": false,
      "excessive_exclamations": true,
      "suspicious_sender": true,
      "all_caps_words": [
        "INSTANT",
        "DELIVERY",
        "DEALS",
        "SOFTWARE",
        "UNBELIEVABLE"
      ],
      "risk_factors": [
        "Urgency language detected (1 triggers)",
        "Money/reward mentions (4 instances)",
        "Suspicious URLs found (1 links)",
        "Excessive exclamations (7 found)",
        "Suspicious sender domain detected",
        "Multiple ALL-CAPS words (5 words)"
      ],
      "caps_ratio": 17.9,
      "exclamation_count": 7
    },
    "risk_score": 69,
    "original_label": "spam"
  },
  {
    "id": 25,
    "sender": "verify@fedex-delivery-update.net",
    "sender_name": "FedEx Delivery Alert",
    "subject": "Your Package Could Not Be Delivered - Pay $2.99 Fee!",
    "body": "FEDEX DELIVERY NOTIFICATION\n\nDear Customer,\n\nWe attempted to deliver your package today but were UNABLE to complete the delivery.\n\nTracking Number: FX-9834-5621\nStatus: PENDING - Payment Required\n\nA small customs fee of $2.99 is required to release your package.\n\nPay now to receive your package: http://fedex-scam-fee.net/pay\n\nWARNING: Package will be returned to sender if fee is not paid within 48 hours!\n\nProvide:\n- Full name\n- Delivery address\n- Credit card details\n\nFedEx Customer Service\n1-800-FAKE-FDX",
    "timestamp": "2024-11-16 08:30:11",
    "read": false,
    "label": "spam",
    "ml_prediction": "safe",
    "confidence": 69.81,
    "spam_probability": 30.19,
    "safe_probability": 69.81,
    "indicators": {
      "urgent_words": [
        "warning",
        "48 hours"
      ],
      "money_symbols": [
        "$2"
      ],
      "suspicious_links": [
        "http://fedex-scam-fee.net/pay"
      ],
      "excessive_caps": false,
      "excessive_exclamations": false,
      "suspicious_sender": true,
      "all_caps_words": [
        "FAKE",
        "PENDING",
        "WARNING",
        "UNABLE",
        "FEDEX",
        "DELIVERY",
        "FDX",
        "NOTIFICATION"
      ],
      "risk_factors": [
        "Urgency language detected (2 triggers)",
        "Money/reward mentions (1 instances)",
        "Suspicious URLs found (1 links)",
        "Suspicious sender domain detected",
        "Multiple ALL-CAPS words (8 words)"
      ],
      "caps_ratio": 19.4,
      "exclamation_count": 2
    },
    "risk_score": 53,
    "original_label": "spam"
  },
  {
    "id": 26,
    "sender": "john.smith@techcorp.com",
    "sender_name": "John Smith",
    "subject": "Team Meeting Tomorrow at 10 AM - Conference Room B",
    "body": "Hi Team,\n\nJust a reminder that we have our weekly team meeting tomorrow, Friday November 16th, at 10:00 AM in Conference Room B.\n\nAgenda for this week:\n1. Q3 project status updates\n2. New client onboarding - Vertex Solutions\n3. Budget review for Q4\n4. Team building event planning\n5. Any other business\n\nPlease come prepared with your status updates. If you cannot attend, please let me know in advance so we can reschedule if necessary.\n\nSee you all tomorrow!\n\nBest regards,\nJohn Smith\nProject Manager\nTechCorp Solutions",
    "timestamp": "2024-11-15 08:30:22",
    "read": true,
    "label": "safe",
    "ml_prediction": "safe",
    "confidence": 99.96,
    "spam_probability": 0.04,
    "safe_probability": 99.96,
    "indicators": {
      "urgent_words": [],
      "money_symbols": [],
      "suspicious_links": [],
      "excessive_caps": false,
      "excessive_exclamations": false,
      "suspicious_sender": false,
      "all_caps_words": [],
      "risk_factors": [],
      "caps_ratio": 8.7,
      "exclamation_count": 1
    },
    "risk_score": 0,
    "original_label": "safe"
  },
  {
    "id": 27,
    "sender": "sarah.johnson@university.edu",
    "sender_name": "Sarah Johnson",
    "subject": "Research Paper Submission - Machine Learning in Healthcare",
    "body": "Dear Professor Williams,\n\nI hope this email finds you well. I am writing to submit my research paper titled 'Application of Machine Learning Algorithms in Early Disease Detection' for your review.\n\nThe paper covers:\n- Literature review of existing ML approaches in healthcare\n- Proposed CNN-based model for X-ray analysis\n- Experimental results with 95.3% accuracy\n- Discussion and future work\n\nThe paper is attached as a PDF. I look forward to your feedback and guidance.\n\nThank you for your continued support throughout this research.\n\nBest regards,\nSarah Johnson\nMS Computer Science - Semester 3\nStudent ID: CS-2024-0892",
    "timestamp": "2024-11-15 09:15:44",
    "read": true,
    "label": "safe",
    "ml_prediction": "safe",
    "confidence": 99.38,
    "spam_probability": 0.62,
    "safe_probability": 99.38,
    "indicators": {
      "urgent_words": [],
      "money_symbols": [],
      "suspicious_links": [],
      "excessive_caps": false,
      "excessive_exclamations": false,
      "suspicious_sender": false,
      "all_caps_words": [
        "CNN",
        "PDF"
      ],
      "risk_factors": [],
      "caps_ratio": 8.9,
      "exclamation_count": 0
    },
    "risk_score": 0,
    "original_label": "safe"
  },
  {
    "id": 28,
    "sender": "orders@amazon.com",
    "sender_name": "Amazon Orders",
    "subject": "Your Order Has Shipped - Arriving Thursday",
    "body": "Hello Alex,\n\nGreat news! Your order has shipped and is on its way.\n\nOrder Details:\nOrder #: 112-4567892-1234567\nItem: Sony WH-1000XM5 Wireless Headphones\nQuantity: 1\nExpected Delivery: Thursday, November 17\n\nYour package will be delivered by Amazon Logistics.\nTracking ID: TBA123456789\n\nYou can track your delivery in the Amazon app or website.\n\nThank you for shopping with Amazon!\n\nAmazon Customer Service\namazon.com",
    "timestamp": "2024-11-15 10:22:08",
    "read": false,
    "label": "safe",
    "ml_prediction": "safe",
    "confidence": 94.2,
    "spam_probability": 5.8,
    "safe_probability": 94.2,
    "indicators": {
      "urgent_words": [],
      "money_symbols": [],
      "suspicious_links": [],
      "excessive_caps": false,
      "excessive_exclamations": false,
      "suspicious_sender": false,
      "all_caps_words": [],
      "risk_factors": [],
      "caps_ratio": 12.6,
      "exclamation_count": 2
    },
    "risk_score": 0,
    "original_label": "safe"
  },
  {
    "id": 29,
    "sender": "hr@bigcompany.com",
    "sender_name": "HR Department",
    "subject": "Open Enrollment for Health Benefits Starts Monday",
    "body": "Dear Employees,\n\nThis is a reminder that Open Enrollment for the 2025 Health Benefits Program begins this coming Monday, November 18th and runs through December 6th.\n\nDuring this period, you can:\n- Enroll in or change your health insurance plan\n- Add or remove dependents\n- Update your FSA/HSA contributions\n- Review dental and vision coverage options\n\nTo access the benefits portal, log in to your employee account at hr.bigcompany.com.\n\nIf you have questions, please contact the HR team at hr@bigcompany.com or ext. 2400.\n\nBest regards,\nHuman Resources Department\nBig Company Inc.",
    "timestamp": "2024-11-15 11:00:33",
    "read": false,
    "label": "safe",
    "ml_prediction": "safe",
    "confidence": 98.96,
    "spam_probability": 1.04,
    "safe_probability": 98.96,
    "indicators": {
      "urgent_words": [],
      "money_symbols": [],
      "suspicious_links": [],
      "excessive_caps": false,
      "excessive_exclamations": false,
      "suspicious_sender": false,
      "all_caps_words": [
        "HSA",
        "FSA"
      ],
      "risk_factors": [],
      "caps_ratio": 7.8,
      "exclamation_count": 0
    },
    "risk_score": 0,
    "original_label": "safe"
  },
  {
    "id": 30,
    "sender": "michael.chen@devteam.io",
    "sender_name": "Michael Chen",
    "subject": "Code Review Request - Pull Request #347",
    "body": "Hi Team,\n\nI've submitted a pull request for the new user authentication module. Please review when you get a chance.\n\nPR #347: Implement JWT-based Authentication\nBranch: feature/jwt-auth\nFiles Changed: 12\nAdditions: +847 lines\nDeletions: -234 lines\n\nKey changes:\n- Replaced session-based auth with JWT tokens\n- Added refresh token mechanism\n- Implemented token blacklisting for logout\n- Added rate limiting for auth endpoints\n- Unit tests coverage: 94%\n\nAll CI checks are passing. Please review and approve if everything looks good.\n\nThanks!\nMichael Chen\nSenior Developer",
    "timestamp": "2024-11-15 12:45:17",
    "read": false,
    "label": "safe",
    "ml_prediction": "safe",
    "confidence": 99.44,
    "spam_probability": 0.56,
    "safe_probability": 99.44,
    "indicators": {
      "urgent_words": [],
      "money_symbols": [],
      "suspicious_links": [],
      "excessive_caps": false,
      "excessive_exclamations": false,
      "suspicious_sender": false,
      "all_caps_words": [
        "JWT"
      ],
      "risk_factors": [],
      "caps_ratio": 8.3,
      "exclamation_count": 1
    },
    "risk_score": 0,
    "original_label": "safe"
  },
  {
    "id": 31,
    "sender": "noreply@github.com",
    "sender_name": "GitHub",
    "subject": "Your Pull Request Has Been Merged",
    "body": "Hello,\n\nYour pull request has been successfully merged!\n\nRepository: organization/project-name\nPull Request: #234 - Add dark mode support\nMerged by: @teamlead\nMerge commit: a1b2c3d4e5f6\n\nYour changes are now part of the main branch. The CI/CD pipeline will automatically deploy these changes to the staging environment.\n\nContinue contributing to open source!\n\nThe GitHub Team\ngithub.com",
    "timestamp": "2024-11-15 13:30:55",
    "read": true,
    "label": "safe",
    "ml_prediction": "safe",
    "confidence": 99.5,
    "spam_probability": 0.5,
    "safe_probability": 99.5,
    "indicators": {
      "urgent_words": [],
      "money_symbols": [],
      "suspicious_links": [],
      "excessive_caps": false,
      "excessive_exclamations": false,
      "suspicious_sender": false,
      "all_caps_words": [],
      "risk_factors": [],
      "caps_ratio": 7.6,
      "exclamation_count": 2
    },
    "risk_score": 0,
    "original_label": "safe"
  },
  {
    "id": 32,
    "sender": "appointments@citymedical.com",
    "sender_name": "City Medical Center",
    "subject": "Appointment Reminder - Dr. Patel on November 18",
    "body": "Dear Patient,\n\nThis is a reminder for your upcoming appointment:\n\nDoctor: Dr. Anjali Patel, MD\nSpecialty: Internal Medicine\nDate: Monday, November 18, 2024\nTime: 2:30 PM\nLocation: City Medical Center, Suite 301\n3rd Floor, Building A\n\nPlease arrive 15 minutes early to complete paperwork.\nBring: Photo ID, Insurance card, List of current medications\n\nTo reschedule, call: 555-DOCTOR or reply to this email.\n\nIf you need to cancel, please do so at least 24 hours in advance.\n\nThank you,\nCity Medical Center\nPatient Services",
    "timestamp": "2024-11-15 14:15:42",
    "read": true,
    "label": "safe",
    "ml_prediction": "safe",
    "confidence": 98.15,
    "spam_probability": 1.85,
    "safe_probability": 98.15,
    "indicators": {
      "urgent_words": [
        "24 hours"
      ],
      "money_symbols": [],
      "suspicious_links": [],
      "excessive_caps": false,
      "excessive_exclamations": false,
      "suspicious_sender": false,
      "all_caps_words": [
        "DOCTOR"
      ],
      "risk_factors": [
        "Urgency language detected (1 triggers)"
      ],
      "caps_ratio": 12.3,
      "exclamation_count": 0
    },
    "risk_score": 8,
    "original_label": "safe"
  },
  {
    "id": 33,
    "sender": "alex.rodriguez@marketing.co",
    "sender_name": "Alex Rodriguez",
    "subject": "Q4 Marketing Campaign Proposal - Review Needed",
    "body": "Hi Team,\n\nI've prepared the Q4 marketing campaign proposal for our new product launch. Please review the attached document.\n\nCampaign Overview:\n- Campaign Name: 'Innovation Unleashed'\n- Budget: $250,000\n- Duration: November 25 - December 31, 2024\n- Target Audience: Tech professionals, 25-45 age group\n\nChannels:\n- LinkedIn Ads (40% budget)\n- Google Display Network (30% budget)\n- Email Marketing (20% budget)\n- Influencer Partnerships (10% budget)\n\nExpected Results:\n- 50,000 new leads\n- 15% conversion rate\n- ROI: 340%\n\nLooking forward to your feedback!\n\nAlex Rodriguez\nMarketing Director",
    "timestamp": "2024-11-15 15:22:18",
    "read": false,
    "label": "safe",
    "ml_prediction": "safe",
    "confidence": 94.48,
    "spam_probability": 5.52,
    "safe_probability": 94.48,
    "indicators": {
      "urgent_words": [],
      "money_symbols": [
        "$250,000"
      ],
      "suspicious_links": [],
      "excessive_caps": false,
      "excessive_exclamations": false,
      "suspicious_sender": false,
      "all_caps_words": [
        "ROI"
      ],
      "risk_factors": [
        "Money/reward mentions (1 instances)"
      ],
      "caps_ratio": 10.0,
      "exclamation_count": 1
    },
    "risk_score": 7,
    "original_label": "safe"
  },
  {
    "id": 34,
    "sender": "library@cityuniversity.edu",
    "sender_name": "City University Library",
    "subject": "Library Books Due on November 20 - Please Return or Renew",
    "body": "Dear Student,\n\nThis is a reminder that the following items are due on November 20, 2024:\n\n1. 'Pattern Recognition and Machine Learning' by Bishop - Due: Nov 20\n2. 'Deep Learning' by Goodfellow, Bengio, Courville - Due: Nov 20\n3. 'The Art of Computer Programming Vol. 1' by Knuth - Due: Nov 22\n\nTo renew online: library.cityuniversity.edu/renew\nStudent ID: STU-2024-4892\n\nLate fees: $0.25 per day per item after due date.\nItems can be renewed twice unless on hold for another student.\n\nThank you for using City University Library!\n\nLibrary Services\ncityuniversity.edu/library",
    "timestamp": "2024-11-15 16:05:33",
    "read": true,
    "label": "safe",
    "ml_prediction": "safe",
    "confidence": 97.16,
    "spam_probability": 2.84,
    "safe_probability": 97.16,
    "indicators": {
      "urgent_words": [],
      "money_symbols": [
        "$0"
      ],
      "suspicious_links": [],
      "excessive_caps": false,
      "excessive_exclamations": false,
      "suspicious_sender": false,
      "all_caps_words": [
        "STU"
      ],
      "risk_factors": [
        "Money/reward mentions (1 instances)"
      ],
      "caps_ratio": 10.5,
      "exclamation_count": 1
    },
    "risk_score": 7,
    "original_label": "safe"
  },
  {
    "id": 35,
    "sender": "emma.wilson@colleague.com",
    "sender_name": "Emma Wilson",
    "subject": "Lunch Next Wednesday? Trying That New Italian Place",
    "body": "Hey!\n\nAre you free for lunch next Wednesday? I've been wanting to try that new Italian restaurant that just opened downtown - Bella Roma. I heard they have amazing pasta and the reviews on Yelp are fantastic (4.8 stars!).\n\nI was thinking we could go around 12:30 PM? They have a great lunch special - two courses for $18.\n\nLet me know if you're available and I'll make a reservation. Looking forward to catching up - it's been ages since we last properly hung out!\n\nBest,\nEmma\n\nP.S. They also have great tiramisu apparently, so save room for dessert!",
    "timestamp": "2024-11-15 17:40:22",
    "read": false,
    "label": "safe",
    "ml_prediction": "safe",
    "confidence": 92.05,
    "spam_probability": 7.95,
    "safe_probability": 92.05,
    "indicators": {
      "urgent_words": [],
      "money_symbols": [
        "$18"
      ],
      "suspicious_links": [],
      "excessive_caps": false,
      "excessive_exclamations": true,
      "suspicious_sender": false,
      "all_caps_words": [],
      "risk_factors": [
        "Money/reward mentions (1 instances)",
        "Excessive exclamations (4 found)"
      ],
      "caps_ratio": 6.4,
      "exclamation_count": 4
    },
    "risk_score": 17,
    "original_label": "safe"
  },
  {
    "id": 36,
    "sender": "billing@electricitycompany.com",
    "sender_name": "PowerGrid Electric",
    "subject": "Your November Electricity Bill is Ready - $94.50",
    "body": "Dear Customer,\n\nYour electricity bill for November 2024 is now available.\n\nAccount Number: ACC-2024-78934\nBilling Period: October 15 - November 14, 2024\nUnits Consumed: 450 kWh\n\nCharges:\n- Energy Charges: $78.75\n- Transmission Charges: $8.25\n- Regulatory Fees: $4.50\n- Taxes: $3.00\n\nTOTAL AMOUNT DUE: $94.50\n\nDue Date: December 5, 2024\n\nPay online at: mypowergrid.com/pay\nAuto-pay is enabled for your account.\n\nFor queries, call: 1-800-POWER-GD\n\nThank you for choosing PowerGrid Electric!\n\nPowerGrid Electric Billing",
    "timestamp": "2024-11-15 18:22:09",
    "read": false,
    "label": "safe",
    "ml_prediction": "safe",
    "confidence": 87.51,
    "spam_probability": 12.49,
    "safe_probability": 87.51,
    "indicators": {
      "urgent_words": [],
      "money_symbols": [
        "$3",
        "$8",
        "$4",
        "$94",
        "$78"
      ],
      "suspicious_links": [],
      "excessive_caps": false,
      "excessive_exclamations": false,
      "suspicious_sender": false,
      "all_caps_words": [
        "ACC",
        "TOTAL",
        "DUE",
        "POWER",
        "AMOUNT"
      ],
      "risk_factors": [
        "Money/reward mentions (5 instances)",
        "Multiple ALL-CAPS words (5 words)"
      ],
      "caps_ratio": 17.0,
      "exclamation_count": 1
    },
    "risk_score": 26,
    "original_label": "safe"
  },
  {
    "id": 37,
    "sender": "david.kumar@startup.io",
    "sender_name": "David Kumar",
    "subject": "Startup Pitch Deck Feedback - Great Work on the Financials!",
    "body": "Hi,\n\nI reviewed the pitch deck you sent over and I have to say, I'm really impressed with the financial projections section. The 3-year forecast looks realistic and well-researched.\n\nA few suggestions:\n\n1. Slide 3 - Problem Statement: Add a market size statistic to strengthen the argument\n2. Slide 7 - Solution: The UI mockups look great, maybe add a demo video link?\n3. Slide 11 - Financials: Perfect! The unit economics breakdown is excellent\n4. Slide 14 - Team: Great bios, but add advisory board photos\n\nOverall, this is a strong deck. I think you're ready for investor meetings. When's your first pitch scheduled?\n\nBest,\nDavid Kumar\nStartup Advisor",
    "timestamp": "2024-11-15 19:15:44",
    "read": true,
    "label": "safe",
    "ml_prediction": "safe",
    "confidence": 98.87,
    "spam_probability": 1.13,
    "safe_probability": 98.87,
    "indicators": {
      "urgent_words": [],
      "money_symbols": [],
      "suspicious_links": [],
      "excessive_caps": false,
      "excessive_exclamations": false,
      "suspicious_sender": false,
      "all_caps_words": [],
      "risk_factors": [],
      "caps_ratio": 6.8,
      "exclamation_count": 2
    },
    "risk_score": 0,
    "original_label": "safe"
  },
  {
    "id": 38,
    "sender": "noreply@linkedin.com",
    "sender_name": "LinkedIn",
    "subject": "You Have 5 New Connection Requests and 12 Profile Views",
    "body": "Hi there,\n\nYou have activity on your LinkedIn profile this week!\n\nConnection Requests (5):\n- Priya Sharma - Software Engineer at Google\n- James Lee - Product Manager at Meta  \n- Ana Costa - Data Scientist at Tesla\n- Ryan Park - Founder at TechStartup\n- Lisa Zhang - ML Engineer at DeepMind\n\nProfile Views: 12 this week (+34% from last week)\n\nYour profile is performing well! Complete your profile to get more opportunities:\n- Add your latest project (87% complete)\n- Add 3 more skills\n- Request 2 more recommendations\n\nCheck your inbox for messages from recruiters!\n\nLinkedIn Team\nlinkedin.com",
    "timestamp": "2024-11-15 20:08:33",
    "read": false,
    "label": "safe",
    "ml_prediction": "safe",
    "confidence": 98.09,
    "spam_probability": 1.91,
    "safe_probability": 98.09,
    "indicators": {
      "urgent_words": [],
      "money_symbols": [],
      "suspicious_links": [],
      "excessive_caps": false,
      "excessive_exclamations": true,
      "suspicious_sender": false,
      "all_caps_words": [],
      "risk_factors": [
        "Excessive exclamations (3 found)"
      ],
      "caps_ratio": 10.4,
      "exclamation_count": 3
    },
    "risk_score": 10,
    "original_label": "safe"
  },
  {
    "id": 39,
    "sender": "prof.andrews@engineering.edu",
    "sender_name": "Prof. Robert Andrews",
    "subject": "Your Assignment 4 Grade - 87/100 - Great Work!",
    "body": "Dear Student,\n\nI have graded your Assignment 4 on Database Normalization.\n\nGrade: 87/100\n\nBreakdown:\n- Part A (ER Diagrams): 28/30\n- Part B (Normalization to 3NF): 32/35\n- Part C (SQL Queries): 27/35\n\nFeedback:\nExcellent work on the ER diagrams and normalization concepts. Your SQL queries in Part C had some optimization issues - the nested subqueries in questions 5 and 7 could be replaced with JOINs for better performance.\n\nOverall, you demonstrated a solid understanding of database design principles. I look forward to seeing your final project.\n\nBest regards,\nProf. Robert Andrews\nDepartment of Computer Science",
    "timestamp": "2024-11-15 21:00:15",
    "read": true,
    "label": "safe",
    "ml_prediction": "safe",
    "confidence": 94.09,
    "spam_probability": 5.91,
    "safe_probability": 94.09,
    "indicators": {
      "urgent_words": [],
      "money_symbols": [],
      "suspicious_links": [],
      "excessive_caps": false,
      "excessive_exclamations": false,
      "suspicious_sender": false,
      "all_caps_words": [
        "SQL"
      ],
      "risk_factors": [],
      "caps_ratio": 10.5,
      "exclamation_count": 1
    },
    "risk_score": 0,
    "original_label": "safe"
  },
  {
    "id": 40,
    "sender": "booking@hotelgrand.com",
    "sender_name": "Grand Hotel Reservations",
    "subject": "Booking Confirmation - Grand Hotel, Dec 15-18",
    "body": "Dear Guest,\n\nThank you for choosing Grand Hotel! Your reservation has been confirmed.\n\nBooking Details:\nConfirmation Number: GH-2024-89234\nCheck-in: Saturday, December 15, 2024 (after 2:00 PM)\nCheck-out: Tuesday, December 18, 2024 (before 11:00 AM)\nRoom Type: Deluxe King Room with City View\nGuests: 2 Adults\n\nRate:\n- 3 nights x $189/night = $567\n- Taxes & Fees = $68\n- TOTAL: $635\n\nIncluded: Complimentary breakfast, WiFi, Parking\n\nCancellation Policy: Free cancellation until December 10, 2024.\n\nWe look forward to welcoming you!\n\nGrand Hotel Reservations\ngrandhotel.com",
    "timestamp": "2024-11-15 21:55:27",
    "read": false,
    "label": "safe",
    "ml_prediction": "safe",
    "confidence": 96.35,
    "spam_probability": 3.65,
    "safe_probability": 96.35,
    "indicators": {
      "urgent_words": [
        "fast"
      ],
      "money_symbols": [
        "$68",
        "$567",
        "$635",
        "$189"
      ],
      "suspicious_links": [],
      "excessive_caps": false,
      "excessive_exclamations": false,
      "suspicious_sender": false,
      "all_caps_words": [
        "TOTAL"
      ],
      "risk_factors": [
        "Urgency language detected (1 triggers)",
        "Money/reward mentions (4 instances)"
      ],
      "caps_ratio": 13.5,
      "exclamation_count": 2
    },
    "risk_score": 29,
    "original_label": "safe"
  },
  {
    "id": 41,
    "sender": "rachel.green@designstudio.com",
    "sender_name": "Rachel Green",
    "subject": "Website Redesign Mockups Ready for Review",
    "body": "Hi,\n\nThe website redesign mockups are ready for your review! I've uploaded them to our shared Figma workspace.\n\nDesigns included:\n- Homepage (Desktop + Mobile)\n- About Us page\n- Services page\n- Portfolio gallery\n- Contact page\n\nKey design decisions:\n- Color palette: Deep navy + coral accent\n- Typography: Inter for headings, Source Sans Pro for body\n- Added subtle animations for page transitions\n- Improved mobile navigation with hamburger menu\n- New hero section with video background option\n\nFigma Link: figma.com/file/MOCKUP123\n\nPlease review and leave comments directly in Figma. I'd love to hop on a call this week to discuss your feedback.\n\nBest,\nRachel Green\nUI/UX Designer",
    "timestamp": "2024-11-16 08:10:19",
    "read": false,
    "label": "safe",
    "ml_prediction": "safe",
    "confidence": 96.34,
    "spam_probability": 3.66,
    "safe_probability": 96.34,
    "indicators": {
      "urgent_words": [],
      "money_symbols": [],
      "suspicious_links": [],
      "excessive_caps": false,
      "excessive_exclamations": false,
      "suspicious_sender": false,
      "all_caps_words": [],
      "risk_factors": [],
      "caps_ratio": 8.5,
      "exclamation_count": 1
    },
    "risk_score": 0,
    "original_label": "safe"
  },
  {
    "id": 42,
    "sender": "conference@techsummit2024.org",
    "sender_name": "TechSummit 2024",
    "subject": "Speaker Invitation - TechSummit 2024 Conference",
    "body": "Dear Professional,\n\nWe are pleased to invite you to speak at TechSummit 2024, the premier technology conference of the year!\n\nEvent Details:\nDate: January 15-17, 2025\nVenue: Downtown Convention Center, San Francisco\nExpected Attendance: 5,000+ tech professionals\n\nSpeaker Benefits:\n- Travel and accommodation covered\n- $500 honorarium\n- Networking with industry leaders\n- Session recording for your portfolio\n\nProposed Session Topics:\n- AI in Enterprise Applications\n- Future of Cloud Computing\n- Cybersecurity Best Practices 2025\n\nTo confirm your participation, please respond by December 1st.\n\nWe look forward to having you!\n\nTechSummit 2024 Committee",
    "timestamp": "2024-11-16 09:22:44",
    "read": false,
    "label": "safe",
    "ml_prediction": "safe",
    "confidence": 98.37,
    "spam_probability": 1.63,
    "safe_probability": 98.37,
    "indicators": {
      "urgent_words": [],
      "money_symbols": [
        "$500"
      ],
      "suspicious_links": [],
      "excessive_caps": false,
      "excessive_exclamations": false,
      "suspicious_sender": false,
      "all_caps_words": [],
      "risk_factors": [
        "Money/reward mentions (1 instances)"
      ],
      "caps_ratio": 8.6,
      "exclamation_count": 2
    },
    "risk_score": 7,
    "original_label": "safe"
  },
  {
    "id": 43,
    "sender": "mom@familymail.com",
    "sender_name": "Mom",
    "subject": "Thanksgiving Plans - Are You Coming Home?",
    "body": "Hi sweetheart!\n\nI hope you're doing well! I wanted to check about Thanksgiving plans. Are you able to come home this year? Your father and I would absolutely love to see you!\n\nYour sister and her family are coming - little Tommy is so excited to see his uncle/aunt. He's been asking about you every week!\n\nI'm planning to make:\n- Roast turkey with stuffing\n- Mashed potatoes and gravy\n- Green bean casserole\n- Your favorite pumpkin pie!\n\nWe'll have plenty of room, and you can stay as long as you like. The guest room is always ready for you.\n\nPlease let me know so I can plan the dinner properly!\n\nLots of love,\nMom\n\nP.S. Dad says hi and wants to know if you're eating properly!",
    "timestamp": "2024-11-16 10:15:08",
    "read": true,
    "label": "safe",
    "ml_prediction": "safe",
    "confidence": 90.95,
    "spam_probability": 9.05,
    "safe_probability": 90.95,
    "indicators": {
      "urgent_words": [],
      "money_symbols": [],
      "suspicious_links": [],
      "excessive_caps": false,
      "excessive_exclamations": true,
      "suspicious_sender": false,
      "all_caps_words": [],
      "risk_factors": [
        "Excessive exclamations (7 found)"
      ],
      "caps_ratio": 5.5,
      "exclamation_count": 7
    },
    "risk_score": 10,
    "original_label": "safe"
  },
  {
    "id": 44,
    "sender": "noreply@spotify.com",
    "sender_name": "Spotify",
    "subject": "Your Wrapped 2024 is Ready - Top Artist: The Weeknd",
    "body": "Your 2024 Spotify Wrapped is here!\n\nThis was your year in music. Here's a peek:\n\nYour #1 Artist: The Weeknd\nYour #1 Song: 'Blinding Lights'\nMinutes Listened: 47,832\nTop Genre: R&B/Soul\nTop Podcast: 'The Daily' by NYT\n\nYou were in the top 1% of The Weeknd listeners globally!\n\nYour music journey:\n- Discovered 47 new artists\n- Saved 234 songs\n- Created 12 playlists\n- Shared 89 songs with friends\n\nSee your full 2024 Wrapped:\nopen.spotify.com/wrapped\n\nThanks for being part of our musical community!\n\nThe Spotify Team\nspotify.com",
    "timestamp": "2024-11-16 11:05:33",
    "read": false,
    "label": "safe",
    "ml_prediction": "safe",
    "confidence": 99.28,
    "spam_probability": 0.72,
    "safe_probability": 99.28,
    "indicators": {
      "urgent_words": [],
      "money_symbols": [],
      "suspicious_links": [],
      "excessive_caps": false,
      "excessive_exclamations": true,
      "suspicious_sender": false,
      "all_caps_words": [
        "NYT"
      ],
      "risk_factors": [
        "Excessive exclamations (3 found)"
      ],
      "caps_ratio": 11.6,
      "exclamation_count": 3
    },
    "risk_score": 10,
    "original_label": "safe"
  },
  {
    "id": 45,
    "sender": "kevin.patel@fintech.com",
    "sender_name": "Kevin Patel",
    "subject": "Invoice #2024-156 Approved - Payment Processing",
    "body": "Hi,\n\nGreat news! Your invoice has been reviewed and approved by our accounts team.\n\nInvoice Details:\nInvoice Number: #2024-156\nDescription: Web Development Services - October 2024\nHours: 80 hours @ $75/hour\nAmount: $6,000.00\n\nPayment will be processed via direct bank transfer within 5-7 business days to your account on file.\n\nIf you have any questions about this payment or need to update your banking details, please contact our finance team at finance@fintech.com.\n\nThank you for your excellent work this month. We look forward to continuing our partnership!\n\nBest regards,\nKevin Patel\nFinance Manager\nFinTech Solutions Inc.",
    "timestamp": "2024-11-16 12:30:44",
    "read": true,
    "label": "safe",
    "ml_prediction": "safe",
    "confidence": 77.56,
    "spam_probability": 22.44,
    "safe_probability": 77.56,
    "indicators": {
      "urgent_words": [],
      "money_symbols": [
        "$6,000",
        "$75"
      ],
      "suspicious_links": [],
      "excessive_caps": false,
      "excessive_exclamations": false,
      "suspicious_sender": false,
      "all_caps_words": [],
      "risk_factors": [
        "Money/reward mentions (2 instances)"
      ],
      "caps_ratio": 6.1,
      "exclamation_count": 2
    },
    "risk_score": 14,
    "original_label": "safe"
  },
  {
    "id": 46,
    "sender": "newsletter@techinsider.com",
    "sender_name": "Tech Insider",
    "subject": "This Week in Tech: GPT-5 Rumors, Apple's New Chip, and More",
    "body": "Tech Insider Weekly Newsletter\nIssue #247 | November 15, 2024\n\nHello reader!\n\nHere's what's happening in tech this week:\n\nTOP STORIES:\n\n1. GPT-5 Development Accelerates\nOpenAI reportedly accelerating GPT-5 development with new training infrastructure...\n\n2. Apple Silicon M4 Ultra Benchmarks Revealed\nNew benchmarks show 40% performance improvement over M3 Ultra in ML workloads...\n\n3. Google's Quantum Computer Achieves Milestone\nGoogle's Willow quantum processor completes calculation in minutes that would take classical computers billions of years...\n\n4. Tesla FSD v13 Rolling Out\nFull Self-Driving version 13 demonstrates significant improvements in urban driving scenarios...\n\nWEEKLY TIP:\nUse keyboard shortcut Ctrl+Shift+T to reopen closed browser tabs!\n\nUnsubscribe | View in browser\nTech Insider Media",
    "timestamp": "2024-11-16 13:22:17",
    "read": false,
    "label": "safe",
    "ml_prediction": "safe",
    "confidence": 96.28,
    "spam_probability": 3.72,
    "safe_probability": 96.28,
    "indicators": {
      "urgent_words": [],
      "money_symbols": [],
      "suspicious_links": [],
      "excessive_caps": false,
      "excessive_exclamations": false,
      "suspicious_sender": false,
      "all_caps_words": [
        "GPT",
        "TOP",
        "WEEKLY",
        "STORIES",
        "TIP",
        "FSD"
      ],
      "risk_factors": [
        "Multiple ALL-CAPS words (6 words)"
      ],
      "caps_ratio": 12.6,
      "exclamation_count": 2
    },
    "risk_score": 5,
    "original_label": "safe"
  },
  {
    "id": 47,
    "sender": "support@github.com",
    "sender_name": "GitHub Support",
    "subject": "Two-Factor Authentication Enabled on Your Account",
    "body": "Hi,\n\nThis email confirms that two-factor authentication (2FA) has been successfully enabled on your GitHub account.\n\nAccount: your-username\nMethod: Authenticator App (TOTP)\nTime: November 15, 2024 at 3:42 PM UTC\n\nWith 2FA enabled:\n- You'll need your authenticator app code to sign in\n- Recovery codes were generated (save them securely!)\n- All active sessions remain valid\n\nIf you did not enable 2FA, your account may be compromised. Please:\n1. Change your password immediately\n2. Review active sessions in Security Settings\n3. Contact GitHub Support\n\nYour account security is our priority.\n\nGitHub Security Team\ngithub.com/settings/security",
    "timestamp": "2024-11-16 14:15:52",
    "read": true,
    "label": "safe",
    "ml_prediction": "spam",
    "confidence": 62.54,
    "spam_probability": 62.54,
    "safe_probability": 37.46,
    "indicators": {
      "urgent_words": [
        "immediately"
      ],
      "money_symbols": [],
      "suspicious_links": [],
      "excessive_caps": false,
      "excessive_exclamations": false,
      "suspicious_sender": false,
      "all_caps_words": [
        "UTC",
        "TOTP"
      ],
      "risk_factors": [
        "Urgency language detected (1 triggers)"
      ],
      "caps_ratio": 9.3,
      "exclamation_count": 1
    },
    "risk_score": 8,
    "original_label": "safe"
  },
  {
    "id": 48,
    "sender": "james.taylor@projectclient.com",
    "sender_name": "James Taylor",
    "subject": "Project Deliverable Feedback - Minor Revisions Needed",
    "body": "Hi,\n\nThank you for delivering the Phase 2 report on time. The team has reviewed it and overall we're very satisfied with the quality of work.\n\nWe have a few minor revision requests:\n\n1. Section 3.2 - Please add cost-benefit analysis\n2. Figure 7 - Increase resolution of the bar chart\n3. Appendix B - Include raw data tables\n\nThese revisions are not blocking - the main content is approved. If you can make these changes and resubmit by next Tuesday, that would be perfect.\n\nAlso, great job on the executive summary - our CEO specifically mentioned it was one of the clearest project reports we've received.\n\nPlease let me know if you have any questions.\n\nBest regards,\nJames Taylor\nClient Project Manager\nProjectClient Ltd.",
    "timestamp": "2024-11-16 15:08:39",
    "read": false,
    "label": "safe",
    "ml_prediction": "safe",
    "confidence": 99.35,
    "spam_probability": 0.65,
    "safe_probability": 99.35,
    "indicators": {
      "urgent_words": [],
      "money_symbols": [],
      "suspicious_links": [],
      "excessive_caps": false,
      "excessive_exclamations": false,
      "suspicious_sender": false,
      "all_caps_words": [
        "CEO"
      ],
      "risk_factors": [],
      "caps_ratio": 5.8,
      "exclamation_count": 0
    },
    "risk_score": 0,
    "original_label": "safe"
  },
  {
    "id": 49,
    "sender": "admissions@gradschool.edu",
    "sender_name": "Graduate School Admissions",
    "subject": "Application Status Update - Interview Invitation",
    "body": "Dear Applicant,\n\nWe are pleased to inform you that your application to the Master of Science in Computer Science program has advanced to the next stage of our admissions process.\n\nApplication ID: GSCS-2024-00892\nProgram: MS Computer Science (Machine Learning Track)\nStatus: SHORTLISTED - Interview Invited\n\nYou are invited for an online interview:\nDate: December 2, 2024\nTime: 10:00 AM EST\nPlatform: Zoom (link to be sent separately)\n\nInterview Panel: 2 faculty members, 30-minute session\nTopics: Research interests, academic background, technical skills\n\nPlease confirm your attendance by November 25th.\n\nWe look forward to speaking with you!\n\nAdmissions Committee\nGraduate School",
    "timestamp": "2024-11-16 16:22:05",
    "read": false,
    "label": "safe",
    "ml_prediction": "safe",
    "confidence": 98.54,
    "spam_probability": 1.46,
    "safe_probability": 98.54,
    "indicators": {
      "urgent_words": [],
      "money_symbols": [],
      "suspicious_links": [],
      "excessive_caps": false,
      "excessive_exclamations": false,
      "suspicious_sender": false,
      "all_caps_words": [
        "SHORTLISTED",
        "EST",
        "GSCS"
      ],
      "risk_factors": [
        "Multiple ALL-CAPS words (3 words)"
      ],
      "caps_ratio": 11.1,
      "exclamation_count": 1
    },
    "risk_score": 5,
    "original_label": "safe"
  },
  {
    "id": 50,
    "sender": "team@collab.workspace.io",
    "sender_name": "Workspace Team",
    "subject": "Happy Birthday! The Whole Team Signed Your Card",
    "body": "Happy Birthday!\n\nThe entire team wanted to celebrate your special day. We've all signed a virtual card for you!\n\nMessages from your teammates:\n\nSarah M.: 'Wishing you an amazing birthday! You make every project better!'\nMark T.: 'Happy Birthday! Thanks for always being so helpful.'\nPriya L.: 'Hope your day is as awesome as you are! Enjoy every moment!'\nCarlos R.: 'Many happy returns! Let's celebrate at lunch this week!'\nZoe K.: 'Happy Birthday! Can't wait to celebrate together!'\nAnd 12 more colleagues...\n\nWe've also organized a team lunch in your honor this Friday at 12:30 PM at the conference room. Cake and surprises await!\n\nHope you have a wonderful birthday!\n\nWith warm wishes,\nYour Workspace Team",
    "timestamp": "2024-11-16 17:00:00",
    "read": false,
    "label": "safe",
    "ml_prediction": "safe",
    "confidence": 90.49,
    "spam_probability": 9.51,
    "safe_probability": 90.49,
    "indicators": {
      "urgent_words": [],
      "money_symbols": [],
      "suspicious_links": [],
      "excessive_caps": false,
      "excessive_exclamations": true,
      "suspicious_sender": false,
      "all_caps_words": [],
      "risk_factors": [
        "Excessive exclamations (14 found)"
      ],
      "caps_ratio": 8.0,
      "exclamation_count": 14
    },
    "risk_score": 10,
    "original_label": "safe"
  }
];

const INITIAL_METRICS = {
  "accuracy": 1.0,
  "precision": 1.0,
  "recall": 1.0,
  "f1_score": 1.0,
  "train_size": 80,
  "test_size": 20,
  "spam_count": 50,
  "safe_count": 50,
  "confusion_matrix": {
    "tn": 10,
    "fp": 0,
    "fn": 0,
    "tp": 10
  }
};

const INITIAL_STATS = {
  "total_emails": 50,
  "spam_count": 24,
  "safe_count": 26,
  "spam_percentage": 48.0,
  "safe_percentage": 52.0
};
