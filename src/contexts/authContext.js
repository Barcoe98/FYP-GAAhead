import React, { useContext, useState, useEffect } from "react";
import { auth, firestore } from "../firebase";

const AuthContext = React.createContext({ loggedIn: false });

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    //takes in user and sets said user to current
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoading(false);
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  //takes in email and password//creates user with email and password specified
  function signUp(email, password, userType) {
    auth.createUserWithEmailAndPassword(email, password).then( cred => {
      return firestore.collection('users').doc(cred.user.uid).collection('my_profile').add({
        email: email,
        userType: userType
      })
    })
  }

  //takes in email and password and logins in user
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  //logs out current user
  function logOut() {
    setLoggedIn(false);
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  // only runs once
  useEffect(() => {
    //takes in user and sets said user to current
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoading(false);
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    isLoggedIn,
    setLoggedIn,
    signUp,
    login,
    logOut,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
