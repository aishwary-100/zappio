// fireStore.js
import admin from 'firebase-admin';
import { readFileSync } from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const serviceAccount = JSON.parse(
  readFileSync(path.resolve(process.cwd(), process.env.FIREBASE_KEY_PATH), 'utf8')
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const db = admin.firestore();
