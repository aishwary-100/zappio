﻿# 🚕 Firebase Ride Request API

A simple Express.js API that allows users to create ride requests and stores them in Firebase Firestore using the Firebase Admin SDK.

---

## 🔧 Technologies Used

- Node.js
- Express.js
- Firebase Admin SDK
- Firestore (NoSQL Database)
- dotenv for environment variable management

---

## 📂 Project Structure

project-root/
├── config/
│ └── serviceAccountKey.json # 🔒 Firebase Admin SDK credentials (DO NOT COMMIT)
├── routes/
│ └── rideRoutes.js # Ride request API route
├── fireStore.js # Firebase Admin SDK setup
├── index.js # Entry point for the Express server
├── .env # Environment variable configuration
├── .gitignore # Prevents committing sensitive files
└── README.md

PORT=3000
FIREBASE_KEY_PATH=./config/serviceAccountKey.json

RUN THE SERVER
npm start
