import firebaseConfig from "./firebase-config";

const SocialMediaAuth = (provider, callback) => {
  return firebaseConfig
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      return callback();
    })
    .catch((err) => console.log(err));
};
export default SocialMediaAuth;
