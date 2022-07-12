import firebaseConfig from "./firebase-config";
import User from "./Models/User";

const usersPath = "users";
const userDatabaseRef = firebaseConfig.database().ref(usersPath);

// User
export const addUser = async ({user, userStream}) => {
  console.log("ID: " + user.uid); // Do not send to your backend! Use an ID token instead.
  console.log("Name: " + user.displayName);
  console.log("Email: " + user.email);
  console.log("userStream: " + userStream.id);
  const userId = user.uid;

  const newUser = {
    id: userId,
    email: user.email,
    name: user.displayName,
    streamId: userStream.id,
    age: 25,
    country: "",
    city: "",
    gender: "",
    wantedGender: "",
    wantedMinAge: 25,
    wantedMaxAge: 35,
    wantedCountry: "",
    wantedCity: "",
    wantedMaxDistanceKm: 100,
  };

  firebaseConfig
    .firestore()
    .collection("users")
    .onSnapshot((users) => {
      const allUsersIds = users.docs.map((user) => {
        if (user.id.match(userId)) {
          firebaseConfig
            .firestore()
            .collection("users")
            .doc(userId)
            .update(newUser)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          firebaseConfig
            .firestore()
            .collection("users")
            .doc(userId)
            .set(newUser)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    });
};
export const editUser = (user, userId) => {
  firebaseConfig
    .firestore()
    .collection("users")
    .doc(userId)
    .set(user)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllReleventUsers = ({userId}) => {
  var users;
  var userSnapshot = firebaseConfig.firestore().collection("users").doc(userId);

  var usersDocs = firebaseConfig.firestore().collection("users");
  if (userSnapshot["wantedCountry"]) {
    users = usersDocs.where("country", "==", userSnapshot["wantedCountry"]);
  }
  if (userSnapshot["wantedGender"]) {
    users.where("gender", "==", userSnapshot["wantedGender"]);
  }
  if (userSnapshot["wantedCity"]) {
    users.where("city", "==", userSnapshot["wantedCity"]);
  }
  if (userSnapshot["wantedMinAge"]) {
    users.where("age", ">=", userSnapshot["wantedMinAge"]);
  }
  if (userSnapshot["wantedMaxAge"]) {
    users.where("age", "<=", userSnapshot["wantedMaxAge"]);
  }
  if (userSnapshot["wantedMaxDistanceKm"]) {
  }

  return users;
};

export const deleteUser = (user) => {};

// Active users for Roulatte

export const getAllActiveUsersFiltered = ({
  ages,
  country,
  maxDistance,
  aiIdeal,
}) => {};

export const addActiveUser = (obj) => {};

export const getAllActiveUsers = (obj) => {};

export const getRandomFilteredActiveUser = (obj) => {};

// AI Face recognition for Ideal

// when user like other user -> adding other users Face Recognition data
export const addAiDataToUser = (obj) => {};

// generating a new Ideal for user
export const generateUserAiIdeal = (obj) => {};

// getting all user's Ai data
export const getUserAiData = (obj) => {};

// Creating user's Ideal from user's Ai Data ->  for filtering active users
export const getUserAiIdeal = (obj) => {};

// set a new Ideal for user
export const setUserAiIdeal = (obj) => {};
