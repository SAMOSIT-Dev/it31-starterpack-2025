import { Edit3 } from "lucide-react";
import SocialTrack from "./SocialTrack";
import { useAuth } from "@/contexts/AuthContext";

export default function Profile({ setIsEditing }) {
  const { user } = useAuth();

  return (
    <div>
      <div className="md:flex min-h-screen bg-gradient-to-br from-[#0d0d1f] to-[#1a1a40] hidden items-center justify-center p-4">
        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden relative">
          <div className="relative">
            <img
              src={`/profileBanner/${user?.houses?.house_name}`}
              className="w-full h-[200px] object-cover"
              style={{
                objectPosition: "70% center",
                background:
                  "linear-gradient(90.02deg, #101C2A 0.02%, #1D1F5A 39.91%, #403382 76.43%, #709BDB 99.98%)",
              }}
            />
            <div className="absolute -bottom-20 left-6 md:left-10">
              <img
                src={user?.avatar || "/common/default_avartar.jpg"}
                alt="profile"
                className="w-34 bg-white h-34 lg:w-38 lg:h-38 rounded-full border-4 border-white object-cover"
              />
            </div>
          </div>

          <div className="pt-10 w-[80%] ml-auto pb-10 px-6 md:px-10 space-y-6 relative">
            <button
              onClick={() => setIsEditing(true)}
              className="absolute top-4 right-4 flex items-center gap-2 px-4 py-1 text-sm border border-gray-300 rounded-full text-gray-500 hover:bg-gray-100 transition-all hover:scale-105"
            >
              <Edit3 className="w-4 h-4" /> EDIT
            </button>

            <div className="flex gap-2">
              <h2 className="text-2xl font-bold font-inter">
                {user?.nickname || "Name Surname"}
              </h2>
              <div className="font-bodoni-xt bg-[#354DA4] text-white text-sm font-semibold px-3 py-1 rounded-full hover:brightness-110 hover:shadow-md transition-all duration-200">
                {user?.houses.house_name}
              </div>
            </div>

            <div className="text-gray-500 text-sm">
              <p className="font-bold">Description</p>
              <p>{user?.profile_description || "No Description"}</p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              {user?.instagram_url && (
                <SocialTrack
                  key="instagram-desktop"
                  icon="/svg/instagram.svg"
                  label="INSTAGRAM"
                  value={user.instagram_url}
                />
              )}
              {user?.facebook_url && (
                <SocialTrack
                  key="facebook-desktop"
                  icon="/svg/facebook.svg"
                  label="FACEBOOK"
                  value={user.facebook_url}
                />
              )}
              {user?.discord_username && (
                <SocialTrack
                  key="discord-desktop"
                  icon="/svg/discord.svg"
                  label={user?.discord_username}
                  value={'https://discord.com/'}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="min-h-screen md:hidden bg-white relative overflow-hidden">
        <div className="bg-[#10162e] relative">
          <img
            src={`/profileBanner/${user?.houses?.house_name}`}
            className="h-[160px] w-full object-cover"
            style={{ objectPosition: "80% center" }}
          />
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
            <img
              src={user?.avatar || "/common/default_avartar.jpg"}
              alt="profile"
              className="w-36 h-36 bg-white rounded-full object-cover"
            />
          </div>
        </div>

        <div className="mt-24 px-6 space-y-6">
          <div className="flex justify-center gap-2">
            <h2 className="text-2xl font-bold font-inter">
              {user?.nickname || "Name Surname"}
            </h2>
            <div className="font-bodoni-xt inline-block mt-1 bg-[#354DA4] text-white text-sm font-semibold px-3 py-1 rounded-full hover:brightness-110 hover:shadow-md transition-all duration-200">
              {user?.houses.house_name}
            </div>
          </div>

          <div className="text-left space-y-2 text-gray-500 text-sm">
            <p className="font-bold font-inter">Description</p>
            <p>{user?.profile_description || "No Description"}</p>
          </div>

          <div className="space-y-4">
            {user?.instagram_url && (
              <SocialTrack
                key="instagram-desktop"
                icon="/svg/instagram.svg"
                label="INSTAGRAM"
                value={user.instagram_url}
              />
            )}
            {user?.facebook_url && (
              <SocialTrack
                key="facebook-desktop"
                icon="/svg/facebook.svg"
                label="FACEBOOK"
                value={user.facebook_url}
              />
            )}
            {user?.discord_username && (
                <SocialTrack
                  key="discord-desktop"
                  icon="/svg/discord.svg"
                  label={user?.discord_username}
                  value={'https://discord.com/'}
                />
              )}
          </div>

          {/* Edit Button */}
          <button
            onClick={() => setIsEditing(true)}
            className="absolute font-inter text-gray-400 bottom-6 right-6 flex items-center gap-2 px-6 py-2 border border-gray-400 rounded-full bg-white hover:bg-gray-100 hover:scale-105 transition-all"
          >
            <Edit3 className="w-4 h-4" /> EDIT
          </button>
        </div>
      </div>
    </div>
  );
}
