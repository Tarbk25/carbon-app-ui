// // src/Context/AuthContext.tsx
// import React, { createContext, useContext, useEffect, useState } from "react";
// import { onAuthStateChanged, User } from "firebase/auth";
// import { auth } from "../firebase";

// // Define context type
// export interface AuthContextType {
//   user: User | null;
//   isAdmin: boolean;
//   loading: boolean;
// }

// // Create context
// const AuthContext = createContext<AuthContextType>({
//   user: null,
//   isAdmin: false,
//   loading: true,
// });

// // Provider component
// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
//       setUser(firebaseUser);
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   const isAdmin = user?.email === "admin@example.com";

//   return (
//     <AuthContext.Provider value={{ user, isAdmin, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook
// export const useAuth = () => useContext(AuthContext);

// src/Context/AuthContext.tsx
import { createContext, useContext, ReactNode } from "react";

type UserType = {
  email: string;
};

type AuthContextType = {
  user: UserType | null;
  isAdmin: boolean;
  loading: boolean;
};

const hardcodedUser = {
  email: "user1@example.com", // or "admin@example.com"
};

const hardcodedMap: Record<string, string> = {
  "user1@example.com": "user_A",
  "admin@example.com": "admin",
};

const AuthContext = createContext<AuthContextType>({
  user: hardcodedUser,
  isAdmin: hardcodedUser.email === "admin@example.com",
  loading: false,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AuthContext.Provider
      value={{
        user: hardcodedUser,
        isAdmin: hardcodedUser.email === "admin@example.com",
        loading: false,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
