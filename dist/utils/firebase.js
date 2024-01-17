"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.firestore = exports["default"] = exports.auth = void 0;
var _app = require("firebase/app");
var _auth = require("firebase/auth");
var _firestore = require("firebase/firestore");
var firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};
var app = (0, _app.initializeApp)(firebaseConfig);
var firestore = exports.firestore = (0, _firestore.getFirestore)(app);
var auth = exports.auth = (0, _auth.getAuth)(app);
var _default = exports["default"] = app;