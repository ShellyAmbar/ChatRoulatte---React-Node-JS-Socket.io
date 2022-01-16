import firebaseConfig from "./firebase-config";

const SocialMediaAuth = (provider, callback) => {
  console.log("provider ",provider, "Clicked")
  return firebaseConfig
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      return callback(res.user);
    })
    .catch((err) => console.log(err));
};
export default SocialMediaAuth;
