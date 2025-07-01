import { useState, useRef } from "react";
import { Camera, X, Edit3 } from "lucide-react";
import SocialTrack from "./SocialTrack";

export default function Profile({ avatar, description, setIsEditing }) {
  return (
    <div>
      {/* Desktop */}
      <div className="md:flex min-h-screen bg-gradient-to-br from-[#0d0d1f] to-[#1a1a40] hidden items-center justify-center p-4">
        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden relative">
          <div className="relative">
            <img
              src="/common/group_banner.png"
              className="w-full h-[200px] object-cover"
              style={{
                objectPosition: "70% center",
                background:
                  "linear-gradient(90.02deg, #101C2A 0.02%, #1D1F5A 39.91%, #403382 76.43%, #709BDB 99.98%)",
              }}
            />
            <div className="absolute -bottom-20 left-6 md:left-10">
              <img
                src={avatar}
                alt="profile"
                className="w-34 h-34 lg:w-38 lg:h-38 rounded-full border-4 border-white object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="pt-10 w-[80%] ml-auto pb-10 px-6 md:px-10 space-y-6 relative">
            {/* Edit Button */}
            <button
              onClick={() => setIsEditing(true)}
              className="absolute top-4 right-4 flex items-center gap-2 px-4 py-1 text-sm border border-gray-300 rounded-full text-gray-500 hover:bg-gray-100 transition-all hover:scale-105"
            >
              <Edit3 className="w-4 h-4" /> EDIT
            </button>

            <div className="flex gap-2">
              <h2 className="text-2xl font-bold font-inter">Name Surname</h2>
              <div className="font-bodoni-xt bg-[#354DA4] text-white text-sm font-semibold px-3 py-1 rounded-full hover:brightness-110 hover:shadow-md transition-all duration-200">
                Fantasy
              </div>
            </div>

            <div className="text-gray-500 text-sm">
              <p className="font-bold">Description</p>
              <p>{description || "No Description"}</p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              {[
                { icon: "/svg/instagram.svg", label: "INSTAGRAM" },
                { icon: "/svg/facebook.svg", label: "FACEBOOK" },
                { icon: "/svg/discord.svg", label: "DISCORD" },
              ].map(({ icon, label }) => (
                <SocialTrack icon={icon} label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="min-h-screen md:hidden bg-white relative overflow-hidden">
        <div className="bg-[#10162e] relative">
          <img
            src="/common/group_banner.png"
            className="h-[160px] w-full object-cover"
            style={{ objectPosition: "70% center" }}
          />
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
            <img
              src={avatar}
              alt="profile"
              className="w-36 h-36 rounded-full object-cover"
            />
          </div>
        </div>

        <div className="mt-24 px-6 space-y-6">
          <div className="flex justify-center gap-2">
            <h2 className="text-2xl font-bold font-inter">Name Surname</h2>
            <div className="font-bodoni-xt inline-block mt-1 bg-[#354DA4] text-white text-sm font-semibold px-3 py-1 rounded-full hover:brightness-110 hover:shadow-md transition-all duration-200">
              Fantasy
            </div>
          </div>

          <div className="text-left space-y-2 text-gray-500 text-sm">
            <p className="font-bold font-inter">Description</p>
            <p>{description || "No Description"}</p>
          </div>

          <div className="space-y-4">
            {[
              { icon: "/svg/instagram.svg", label: "INSTAGRAM" },
              { icon: "/svg/facebook.svg", label: "FACEBOOK" },
              { icon: "/svg/discord.svg", label: "DISCORD" },
            ].map(({ icon, label }) => (
              <SocialTrack icon={icon} label={label} />
            ))}
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
