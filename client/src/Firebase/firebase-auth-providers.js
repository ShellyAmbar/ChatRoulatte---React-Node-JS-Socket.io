import firebaseConfig from "./firebase-config";
export const facebookProvider = new firebaseConfig.auth.FacebookAuthProvider();
export const googleProvider = new firebaseConfig.auth.GoogleAuthProvider();
//export const auth = firebaseConfig.auth();
