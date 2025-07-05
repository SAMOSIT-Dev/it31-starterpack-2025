import { getUserDetail } from "@/api/auth.service";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); 
  const fetchUser = async () => {
    const response = await getUserDetail();
    setUser(response.content);
};
  useEffect(() => {

  
    fetchUser();
  }, []);
  return (
    <AuthContext.Provider value={{ user , fetchUser}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
