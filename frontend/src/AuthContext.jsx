import React, { createContext, useState, useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
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
    // Remove user state from LocalStorage    
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, uid, setUid }}>
      {children}
    </AuthContext.Provider>
  );
};
