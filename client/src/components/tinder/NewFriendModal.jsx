import React from 'react'
import GlobalModal from '../common/GlobalModal'
import '../../styles/tinder/index.css'
import { env } from '@/config/env'
import HouseTag from './HouseTag'
import { getHouseNameFromId } from '@/libs/utils/tinder'
import SocialTrack from '../SocialTrack'

const NewFriendModal = ({ isOpen, onClose, user }) => {
    
    return (
        <GlobalModal isOpen={isOpen} onClose={onClose}>
            <div className='rounded-3xl w-[300px] sm:w-[400px] md:[700px] new-friend-card-bg-gradient font-inter flex flex-col gap-2 sm:gap-3 md:gap-4 items-center px-[26px] py-[42px]'>
                <h3 className='font-bold text-3xl text-center text-white'>พบเพื่อนใหม่</h3>
                <div className='w-[168px] h-[168px] bg-gray-500 rounded-full mt-2'>
                    <img src={`${env.API_SERVER_URL}/profile_pics/${user?.profile_picture_url}`} alt="" />
                </div>
                <div className='flex items-center'>
                    <div className='text-white text-base font-inter font-bold mr-2'>{user?.nickname ?? "Name Surname"}</div>
                    <div><HouseTag house_name={getHouseNameFromId(user?.house_id ?? 1)} /></div>
                </div>
                <div className='text-[#BFBFBF] text-left w-full'>
                    <div className='text-sm md:text-base font-bold font-inter'>Description</div>
                    <div className='mt-1 text-xs md:text-base'>{user?.description ?? "No Description"}</div>
                </div>
                <div className='w-full flex flex-col gap-1 sm:gap-2 md:gap-3'>
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
                            label="DISCORD"
                            value={user.discord_username}
                        />
                    )}
                </div>

                <div className='rounded-xl w-full overflow-hidden mt-4 sm:mt-6 md:mt-8'>
                    <button onClick={onClose} className='new-friend-card-button-gradient cursor-pointer text-white font-mitr py-2 w-full'>
                        เข้าใจแล้ว!
                    </button>
                </div>

            </div>
        </GlobalModal>
    )
}

export default NewFriendModal
