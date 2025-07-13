import { fetchProfileImage, getUserDetail } from "@/api/auth.service";
import { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); 

  const fetchUser = async () => {
    try {
      const response = await getUserDetail();
      
      const data = response.content;

      const avatar = data.profile_picture_url
        ? await fetchProfileImage(data.profile_picture_url)
        : "/common/default_avartar.jpg";

      setUser({ ...data, avatar });
    } catch (err) {
      // navigate("/login"); 
    }
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
