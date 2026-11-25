import { firebaseConfigFromFile } from "./firebase-config";

export interface FirebaseWebConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  appId: string;
  messagingSenderId?: string;
}

const env = import.meta.env;

export const firebaseConfig: FirebaseWebConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY || firebaseConfigFromFile.apiKey,
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN || firebaseConfigFromFile.authDomain,
  projectId: env.VITE_FIREBASE_PROJECT_ID || firebaseConfigFromFile.projectId,
  appId: env.VITE_FIREBASE_APP_ID || firebaseConfigFromFile.appId,
  messagingSenderId:
    env.VITE_FIREBASE_MESSAGING_SENDER_ID || firebaseConfigFromFile.messagingSenderId,
};

/** Cloud review is only attempted when a real Firebase project is configured. */
export const cloudConfigured = Boolean(
  firebaseConfig.apiKey &&
    firebaseConfig.authDomain &&
    firebaseConfig.projectId &&
    firebaseConfig.appId,
);

export const cloudModel: string = env.VITE_GEMINI_CLOUD_MODEL || "gemini-2.5-flash";
