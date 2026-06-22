import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDocFromServer } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDHG7YxYVnbEfRUTLbbOR9CzEL-s0saPu4",
  authDomain: "natural-pact-1cf5x.firebaseapp.com",
  projectId: "natural-pact-1cf5x",
  storageBucket: "natural-pact-1cf5x.firebasestorage.app",
  messagingSenderId: "1090621905770",
  appId: "1:1090621905770:web:739d668a03240d3ba8e313"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app, "ai-studio-a9ed0894-b64c-4838-ba85-d11d8cc77532");

// Validate connection on startup as mandated by Firebase integration GUIDELINES
export async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
    console.log("Firebase Connection verified successfully.");
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error("Please check your Firebase configuration. You appear to be offline.");
    } else {
      console.warn("Connection test completed with expected local status:", error);
    }
  }
}

// Initial firestore test run
testConnection();
