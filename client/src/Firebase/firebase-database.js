import firebaseConfig from "./firebase-config";
import User from "./Models/User";

const usersPath = "Users";
const userDatabaseRef = firebaseConfig.database().ref(usersPath);

// User
export const addUser = (user) => {
  const userId = userDatabaseRef.push({}).key;

  const newUser = User({
    id: userId,
    email: user.email,
    name: user.displayName,
  });

  userDatabaseRef.child(userId).update(newUser, (err) => {
    if (err) {
      console.log(err);
    }
  });
};
export const editUser = (user) => {
  userDatabaseRef.child(user.id).update(user, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

export const getAllUsers = () => {
  let users = [];
  //forech( user in databaseRef.child(usersPath).
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
