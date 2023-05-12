// AuthProvider.js
import React, { createContext, useState, useEffect } from 'react';
import AuthContext from './AuthContext.jsx';
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  // replace with your Firebase project's API keys
  apiKey: "AIzaSyC8fwVcnQ8UU1eneLFpzseqfj3e_TpzAck",
  authDomain: "online-auction-system-b0dc5.firebaseapp.com",
  projectId: "online-auction-system-b0dc5",
  storageBucket: "online-auction-system-b0dc5.appspot.com",
  messagingSenderId: "77490244258",
  appId: "1:77490244258:web:1f982fa5673418ed0fe5fb"
};
initializeApp(firebaseConfig);

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Use effect to set the initial user state from LocalStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Function to handle login
  const login = async (email, password) => {
    // Call Firebase Auth signInWithEmailAndPassword method
    // to authenticate the user
    const result = await firebase.auth().signInWithEmailAndPassword(email, password);
    setUser(result.user);
    // Save user state to LocalStorage
    localStorage.setItem('user', JSON.stringify(result.user));
  };

  // Function to handle logout
  const logout = async () => {
    // Call Firebase Auth signOut method to sign out the user
    await firebase.auth().signOut();
    setUser(null);
    // Remove user state from LocalStorage
    localStorage.removeItem('user');
  };

  const [uid, setUid] = useState(null);

  return (
    <AuthContext.Provider value={{ user, login, logout, uid, setUid }}>
      {children}
    </AuthContext.Provider>
  );
};

// function AuthProvider({ children }) {
//   const [authentic, setAuthentic] = useState(false);
//   const [uid, setUid] = useState("");

//   const contextValue = {
//     authentic,
//     setAuthentic,
//     uid,
//     setUid
//   };

//   return (
//     <AuthContext.Provider value={contextValue}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export default AuthProvider;
