import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDocs,
  query,
  collection,
  where,
} from "firebase/firestore";
const serviceAccount = {
  // "type": "service_account",
  projectId: "chess-arbiter-62925",
  // "private_key_id": "bce9624536d426b34eacd2f1d9c5fbc74c9857d8",
  privateKey:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDaVAmv90sI4AU+\nooaptNhA4Mq5m5l8diobreiOmmjscXbOHiMgSO7jqt9TFFBk+x+lKJsyXSRnvsNM\n9634vMJJOz/V0nNqkK6Byb4GWMB8lDPBDDUScoPCcUyryHuMvyXe3v+dTSI/bfKF\nGWNt+RvzXxUbz5EUAmz2jJOtGBkRIeXVJmt2CUf3+MVI7WOc+NMwMsM2z5k9lbU7\n5/wrBWtMpgIL9Dxblsqd8M502K4nNKC4ZRsa24wV06gszQdsO6vxIytiB+F3IAJy\nh6o2gWnWXAFZ3urbbP8uF6gejuc4RPPD6rTZnqgQ7u01nnroF2lZFgaImdwdtDmr\nAL4U+ZPNAgMBAAECggEAKncMB1DXJFvGSV99R8boBP50D9Pm76FgIVAbGpmH7O1I\nyWBtPptQ87FJjLQ3ytxZVFtojEw3h4JAJFlMWkQEmg/PI7yyPDj16EKgFkXu8ow0\n4MiKDhN98zTsT8FH3qFTMV04ZJUbIzE0aZT9lOdN+3Ez/tvJgRXTscS3+IPmZEFS\nloj8h8W8YL57A18lgkblOaD4rbdYlDT9pYPvoAVfGJGmi3n7gP9eIR7s3tAL7IuY\nqu1Jcrj5Vc7JZMUl2+JAfrY/E2y5TJn3wbEplpuYf5NKA9rb0CY0XjEffCbQim5y\nF23gJlH+asoAiZhAAgitncOG9YlDcBrekAjMYXRT9QKBgQD1LMEe8EyM6DxBORFb\nT+NAFpCD9uq6VHoTfxypef9QaQTNOqSwnGhlAk9gsq8eoRxuEpXB1Xl6sCdcMGAd\nLVmrZ97SjG1zqkpt+1LQyFUMvzEY4uz6Nr9UxwkzlKqLrUzlFm/JKlP8RMaFxc4k\nXWPCJiv8gCpnCo9BXuk6PWTBDwKBgQDj99VIAi/st6yx+ZqqBbNbnrNpeHzk8crh\nXu8WmoK9H0L+czDCQL2Bxliq6rtjxVNwWkxWuGQOFnuSL4GRZalCcykeVrjM2OD6\n4GIxBIMZxLC6+S/XzN1K4Q1BuQVrr0y3qOwEcX4wjTBPbOfxmSC2MS8moU3MaLZr\nNwmWy6hlYwKBgQCNS1qMwv3K4vf+uq3HCvYzdA2bD8zcz1x/Ke1Rum4qYCuVPuu0\noJ8FP1yRpMiJhV4GDY3i5G0bCLPWTEbH6d/YiYb/nlBhrU0xrvpeOmXRb8oSxoy9\n8pk3eXFTGaVj098R02le7Jb0NoqWg5W2nV+lfywwW4iUU6CVkuYkW0dafwKBgFnT\nCl/gNMACM3LBFhcOPfjI1IqnZhbTywv4Wx697OvWCJC4FKtF1SXwYHmgGgwa8WCg\nw9mbuBjw9OnJ/DStKP883yPMKe7VOfjANxB3ZazemoBhtV9DoqJhgNa3r5IZtZHc\nZnrtuToqN7HkCJRisMf5I0oGXuA/Fjmyqv2W65hfAoGAf5g7Oo4GTl1vMS1JjcZG\n9XwAkhseIairUL38QlXwyirwnx0XQTu1aXVjpGU83kgtpB399wLQDCOiiKM24xi7\npuj/Kiewbm6PR1SgE9xlwhFrnjXAYDG0WB5uzdoWC7hekFHnp2xS27sfn+ntQSbt\nunkawFLlRfXqcVPdHF0ZISM=\n-----END PRIVATE KEY-----\n",
  clientEmail:
    "firebase-adminsdk-cjn51@chess-arbiter-62925.iam.gserviceaccount.com",
  // "client_id": "114787208963206838247",
  // "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  // "token_uri": "https://oauth2.googleapis.com/token",
  // "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  // "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-cjn51%40chess-arbiter-62925.iam.gserviceaccount.com"
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
