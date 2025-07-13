import React from 'react'
import '../../styles/tinder/index.css'
import { getHouseNameFromId } from '@/libs/utils/tinder'
import HouseTag from './HouseTag'
import SmallSocialTrack from './SmallSocialTrack'
import { fetchProfileImage } from '@/api/auth.service'

const ConnectedFriendCard = ({ user }) => {
    return (
        <div className={`connected-friend-card-gradient-${getHouseNameFromId(user.house_id)} border-[#636363] border rounded-2xl w-full`}>
            <div className='flex gap-6 rounded-2xl connected-friend-card-gradient-overlay w-full pl-6 py-3 mb-[2px]'>

                {
                    user.profile_picture_url ?
                        <img />
                        : <div className='min-w-[74px] min-h-[74px] bg-gray-400 rounded-full'>
                            <img src={`${fetchProfileImage(user.profile_picture_url)}`} alt="" />
                        </div>
                }

                <div className='flex flex-col'>

                    <div>
                        <div className='flex gap-1'>
                            <div className='text-white font-inter text-sm md:text-base font-bold'>{user.nickname}</div>
                            <HouseTag house_name={getHouseNameFromId(user.house_id)} />
                        </div>
                        <div className='font-inter text-[#AAAAAA] text-[8px] sm:text-[10px] mt-1'>
                            {user.profile_description ?? "No Description"}
                        </div>
                    </div>

                    <div className='flex gap-2 mt-2'>
                        {user?.instagram_url && (
                            <SmallSocialTrack
                                key="instagram-desktop"
                                icon="/svg/instagram.svg"
                                label="INSTAGRAM"
                                value={user.instagram_url}
                            />
                        )}
                        {user?.facebook_url && (
                            <SmallSocialTrack
                                key="facebook-desktop"
                                icon="/svg/facebook.svg"
                                label="FACEBOOK"
                                value={user.facebook_url}
                            />
                        )}
                        {user?.discord_username && (
                            <SmallSocialTrack
                                key="discord-desktop"
                                icon="/svg/discord.svg"
                                label="DISCORD"
                                value={user.discord_username}
                            />
                        )}
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default ConnectedFriendCard
