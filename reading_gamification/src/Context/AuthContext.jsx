import { useState, createContext, useEffect, useContext } from "react";
import { SupaContext } from "./SupaContext";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [auth, setAuth] = useState(false);
    const {supabase} = useContext(SupaContext)
  
    useEffect(() => {
      const { data } = supabase.auth.onAuthStateChange((event, session) => {
        if (event === "SIGNED_IN") {
          setUser(session.user);
          setAuth(true);
        }
        if (event === "SIGNED_OUT") {
          setUser(null);
          setAuth(false);
        }
      });
      return () => {
        data.subscription.unsubscribe();
      };
    }, []);
  
    return (
      <AuthContext.Provider value={{ auth, user }}>
        {children}
      </AuthContext.Provider>
    );
  };


  