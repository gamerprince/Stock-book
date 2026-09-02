import { db, auth } from "./firebase-config.js";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged,
  signOut 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Register new trader with business profile
export async function registerTrader(email, password, businessName) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    await setDoc(doc(db, "users", user.uid), {
      email: email,
      businessName: businessName || "Market Trader",
      createdAt: new Date().toISOString()
    });
    
    return user;
  } catch (error) {
    console.error("Error registering user:", error.message);
    throw error;
  }
}

// Log in existing trader
export async function loginTrader(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error logging in:", error.message);
    throw error;
  }
}

// Fetch user profile data (business name, etc.)
export async function getUserProfile(uid) {
  try {
    const docSnap = await getDoc(doc(db, "users", uid));
    return docSnap.exists() ? docSnap.data() : null;
  } catch (error) {
    console.error("Error fetching user profile:", error.message);
    return null;
  }
}

export function listenToAuthStatus(callback) {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
}