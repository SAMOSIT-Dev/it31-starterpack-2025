import { useState, useRef } from "react";
import Profile from "@/components/Profile";
import ProfileEdit from "@/components/ProfileEdit";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState("");
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  const [discord, setDiscord] = useState("");
  const [avatar, setAvatar] = useState("/common/avatar.png");
  const avatarInputRef = useRef(null);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetAvatar = () => {
    setAvatar("/common/avatar.png");
  };

  return (
    <div>
      {isEditing ? (
        <ProfileEdit
          avatar={avatar}
          setAvatar={setAvatar}
          avatarInputRef={avatarInputRef}
          handleAvatarChange={handleAvatarChange}
          handleResetAvatar={handleResetAvatar}
          description={description}
          setDescription={setDescription}
          instagram={instagram}
          setInstagram={setInstagram}
          facebook={facebook}
          setFacebook={setFacebook}
          discord={discord}
          setDiscord={setDiscord}
          setIsEditing={setIsEditing}
        />
      ) : (
        <Profile
          avatar={avatar}
          description={description}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
}
