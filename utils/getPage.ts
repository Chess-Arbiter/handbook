import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDocs,
  query,
  collection,
  where,
} from "firebase/firestore";

const serviceAccount = {
  projectId: process.env.PROJECT_ID,
  privateKey: process.env.PRIVATE_KEY,
  clientEmail: process.env.CLIENT_EMAIL,
};

const app = initializeApp(serviceAccount);
const db = getFirestore(app);

export default async function getPage(slug: string) {
  const q = query(collection(db, "pages"), where("slug", "==", slug));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    throw new Error("Not found");
  }

  return querySnapshot.docs[0].data();
}
