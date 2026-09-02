import { db, auth } from "./firebase-config.js";
import { 
  collection, 
  addDoc, 
  getDocs,
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

function getUserRef() {
  const user = auth.currentUser;
  if (!user) throw new Error("No authenticated trader found.");
  return user.uid;
}

// Scoped Registry
export async function getUserRegistry() {
  const uid = getUserRef();
  const snap = await getDocs(collection(db, "users", uid, "stock_registry"));
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

// Scoped Inventory
export async function getUserStock() {
  const uid = getUserRef();
  const snap = await getDocs(collection(db, "users", uid, "inventory"));
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

// Scoped Sales
export async function getUserSales() {
  const uid = getUserRef();
  const snap = await getDocs(collection(db, "users", uid, "stock_sales"));
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

// Scoped Logs
export async function getUserLogs() {
  const uid = getUserRef();
  const snap = await getDocs(collection(db, "users", uid, "stock_logs"));
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}