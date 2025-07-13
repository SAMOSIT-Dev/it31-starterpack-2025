import { useState, useRef, useEffect } from "react";
import Profile from "@/components/Profile";
import ProfileEdit from "@/components/ProfileEdit";
import { useAuth } from "@/contexts/AuthContext";

export default function ProfilePage() {
  
  const [isEditing, setIsEditing] = useState(false);
  const { user, fetchUser } = useAuth(); 

  useEffect(() => {
    if (!user) {
      fetchUser();
    }
  }, []);


  return (
    <div>
      {isEditing ? (
        <ProfileEdit
          setIsEditing={setIsEditing}
        />
      ) : (
        <Profile
          user={user}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
}
