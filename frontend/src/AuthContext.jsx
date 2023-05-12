import React, { createContext, useState, useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
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
  const [uid, setUid] = useState(null);

  // Use effect to set the initial user state from LocalStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Function to handle login
  const login = async (email, password) => {
    console.log("accessed authccontext login");
    const result = await signInWithEmailAndPassword(getAuth(), email, password);
    console.log("logged in authcontext");
    setUser(result.user);
    setUid(result.user.uid);
    // Save user state to LocalStorage
    localStorage.setItem('user', JSON.stringify(result.user));
  };

  // Function to handle logout
  const logout = async () => {
    await signOut(getAuth());
    setUser(null);
    // Remove user state from LocalStorage    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, uid, setUid }}>
      {children}
    </AuthContext.Provider>
  );
};
