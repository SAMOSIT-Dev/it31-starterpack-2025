import { useState, useRef } from "react";
import Profile from "@/components/Profile";
import ProfileEdit from "@/components/ProfileEdit";
export default function ProfilePage() {
  
  const [isEditing, setIsEditing] = useState(false);
  
  return (
    <div>
      {isEditing ? (
        <ProfileEdit
          setIsEditing={setIsEditing}
        />
      ) : (
        <Profile
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
}
