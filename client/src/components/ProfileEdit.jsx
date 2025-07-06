import React, { useEffect, useRef, useState } from "react";
import { Camera, X, Edit3 } from "lucide-react";
import { updateUser } from "@/api/auth.service";
import { useAuth } from "@/contexts/AuthContext";

export default function ProfileEdit({setIsEditing}) {
  const [description, setDescription] = useState("");
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  const [discord, setDiscord] = useState("");
  const [avatar, setAvatar] = useState("/common/avatar.png");
  const [selectedFile, setSelectedFile] = useState(null); 

  const avatarInputRef = useRef(null);
  const { user , fetchUser } = useAuth();

  useEffect(() => {
    if (user) {
      setDescription(user.profile_description || "");
      setInstagram(user.instagram_url || "");
      setFacebook(user.facebook_url || "");
      setDiscord(user.discord_url || "");
      setAvatar(user?.avatar|| "/common/default_avartar.png"); 
    }
  }, [user]);
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file); 
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetAvatar = () => {
    setAvatar(user?.avatar);
    setSelectedFile(null); 
  };

  const handleSubmit = async () => {
    try {
      await updateUser({
        imageFile: selectedFile, 
        profile_description: description,
        facebook_url: facebook,
        instagram_url: instagram,
        discord_url: discord,
      });

      fetchUser();
      setIsEditing(false);
    } catch (error) {
      console.error("Update error", error);
    }
  };
 
 
  return (
    <div
      style={{
        background:
          "linear-gradient(241.52deg, #101C2A -13.7%, #1D1F5A 6.6%, #000000 60.98%, #403382 124.07%, rgba(112, 155, 219, 0.694118) 137.12%)",
      }}
    >
    <div className="min-h-screen hidden md:flex bg-gradient-to-br from-[#0d0d1f] to-[#1a1a40]  items-center justify-center px-4 py-10">
        <div className="w-full  max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden relative">
          <div className="relative  h-[200px] md:h-[250px]">
            <img
              src="/common/group_banner.png"
              className="w-full h-full  object-cover"
              style={{
                objectPosition: "70% center",
                background:
                  "linear-gradient(90.02deg, #101C2A 0.02%, #1D1F5A 39.91%, #403382 76.43%, #709BDB 99.98%)",
              }}
            />

            <div className="absolute left-6 bottom-[-48px] md:bottom-[-64px]">
              <div className="relative w-34 h-34 lg:w-38 lg:h-38 rounded-full overflow-hidden border-4 border-white ">
                <img
                  src={avatar}
                  alt="avatar"
                  className="absolute bg-white inset-0 w-full h-full object-cover filter blur-[1px] brightness-40 z-10"
                />
                <div
                  onClick={() => avatarInputRef.current.click()}
                  className="absolute inset-0 flex items-center justify-center cursor-pointer z-20"
                >
                  <Camera className="w-7 h-7 text-white" />
                </div>
                <input
                  type="file"
                  onChange={handleAvatarChange}
                  ref={avatarInputRef}
                  className="hidden"
                />
              </div>

              <button
                onClick={handleResetAvatar}
                className="absolute top-25 -right-1 bg-[#752735] hover:bg-[#c73232] border-4 border-[#CA334E] text-[#CA334E] w-10 h-10 rounded-full flex items-center justify-center shadow-md z-30"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="pt-5 w-[80%] px-6 md:px-10 pb-10 space-y-6 ml-auto">
            <div className="flex flex-col  md:flex-row justify-between gap-4">
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <h2 className=" md:text-xl   lg:text-2xl font-mitr  ">
                  {user?.nickname || "Name Surname"}
                </h2>
                <span className="bg-[#354DA4] text-white text-sm font-bodoni-xt font-semibold px-3 py-1 rounded-full">
                  {user?.houses.house_name}
                </span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setIsEditing(false)}
                  className="border border-gray-300 font-inter md:px-3 md:py-1 lg:px-5 lg:py-2 rounded-full text-gray-700 hover:bg-gray-50"
                >
                  ✕ Cancel
                </button>
                <button
                  onClick={() => handleSubmit()}
                  className="bg-[#354DA4] text-white font-inter  md:px-3 md:py-1 lg:px-5 lg:py-2 rounded-full hover:bg-[#2d429e]"
                >
                  ✓ Submit
                </button>
              </div>
            </div>

            {/* Description */}
            <div>
              <p className=" font-mitr text-gray-700 mb-1">Description</p>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                maxLength={50}
                rows={4}
                className="w-full font-mitr border border-gray-300 rounded-xl p-3 text-sm resize-none"
                placeholder="Write something..."
              />
              <div className="text-right text-xs text-gray-400">
                {description.length}/50
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-1 font-mitr md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm flex items-center gap-2 mb-1">
                  <img src="/svg/instagram.svg" className="w-5 h-5" />
                  INSTAGRAM
                </label>
                <input
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2 text-sm"
                  placeholder="URL"
                />
              </div>
              <div>
                <label className="text-sm flex items-center gap-2 mb-1">
                  <img src="/svg/facebook.svg" className="w-5 h-5" />
                  FACEBOOK
                </label>
                <input
                  value={facebook}
                  onChange={(e) => setFacebook(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2 text-sm"
                  placeholder="URL"
                />
              </div>
              <div>
                <label className="text-sm  flex items-center gap-2 mb-1">
                  <img src="/svg/discord.svg" className="w-5 h-5" />
                  DISCORD
                </label>
                <input
                  value={discord}
                  onChange={(e) => setDiscord(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2 text-sm"
                  placeholder="Name/tag"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="min-h-screen md:hidden bg-white relative overflow-hidden">
        <div className="pt-10 px-6 space-y-6">
          <div className="flex justify-center">
            <div className="relative w-36 h-36">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <img
                  src={avatar}
                  className="absolute inset-0 w-full h-full object-cover filter blur-[1px] brightness-40 z-10"
                  alt="Blurred avatar"
                />
                <div
                  onClick={() => avatarInputRef.current.click()}
                  className="absolute inset-0 flex items-center justify-center cursor-pointer backdrop-brightness-75 z-20"
                >
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  ref={avatarInputRef}
                  className="hidden"
                />
              </div>

              <button
                onClick={handleResetAvatar}
                className="absolute top-25 -right-1 bg-[#752735] hover:bg-[#c73232] border-4 border-[#CA334E] text-[#CA334E] w-10 h-10 rounded-full flex items-center justify-center shadow-md z-30"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex justify-center gap-2">
            <h2 className="text-2xl font-bold font-inter">{user?.nickname || "Name Surname"}</h2>
            <div className=" font-bodoni-xt inline-block mt-1 bg-[#354DA4] text-white text-sm font-semibold px-3 py-1 rounded-full">
              {user?.houses.house_name}
            </div>
          </div>

          <div>
            <p className="font-bold pt-5 font-inter text-gray-500">
              Description
            </p>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={50}
              rows={3}
              className="w-full border rounded-md p-2 text-sm"
            />
            <div className="text-right text-xs text-gray-400">
              {description.length}/50
            </div>
          </div>

          <div className="space-y-8">
            <div className="font-inter space-y-3">
              <label className="text-sm font-semibold flex gap-2 items-center">
                <img src="/svg/instagram.svg" className="w-5 h-5" />
                INSTAGRAM
              </label>
              <input
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                className="w-full border rounded-md p-2"
                placeholder="URL"
              />
            </div>
            <div className=" space-y-3">
              <label className="text-sm font-semibold flex gap-2 items-center">
                <img src="/svg/facebook.svg" className="w-5 h-5" />
                FACEBOOK
              </label>
              <input
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
                className="w-full border rounded-md p-2"
                placeholder="URL"
              />
            </div>
            <div className=" space-y-3">
              <label className="text-sm font-semibold flex gap-2 items-center">
                <img src="/svg/discord.svg" className="w-5 h-5" />
                DISCORD
              </label>
              <input
                value={discord}
                onChange={(e) => setDiscord(e.target.value)}
                className="w-full border rounded-md p-2"
                placeholder="Name & Tag"
              />
            </div>
          </div>

          <div className="flex justify-between pt-6">
            <button
              onClick={() => setIsEditing(false)}
              className="border border-gray-300 px-6 py-2 rounded-full text-gray-500 hover:bg-gray-50"
            >
              ✕ Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="bg-[#354DA4] text-white px-6 py-2 rounded-full hover:bg-[#2e4092]"
            >
              ✓ Submit
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
}
