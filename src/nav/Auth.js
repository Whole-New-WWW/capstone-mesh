import React, { useState, createContext } from "react";

export const AuthContext = createContext({});

export default function Auth({ children }) {
  const [user, setUser] = useState(null);
  console.log('in auth.js', children)
  return (
    // Provider is used for providing value to the context object
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
