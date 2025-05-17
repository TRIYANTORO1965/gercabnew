// firebase.js
// lib/firebase.js

import { initializeApp, getApps, getApp } from "firebase/app"; // ✅ pastikan ada getApps dan getApp
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Konfigurasi Firebase Anda
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVBoUQ8W8CMfr0Egoih2tYcpRG8JFv5cg",
  authDomain: "si-gercab-super.firebaseapp.com",
  projectId: "si-gercab-super",
  storageBucket: "si-gercab-super.firebasestorage.app",
  messagingSenderId: "1090312111605",
  appId: "1:1090312111605:web:0b6147e3d0ceb3268e4cbc",
  measurementId: "G-PN40NM68N3"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// 🔥 Layanan yang kamu gunakan
const db = getFirestore(app);
const auth = getAuth(app);

// ✅ Ekspor untuk digunakan di komponen lain
export { app, db, auth };