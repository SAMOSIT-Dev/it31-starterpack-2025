import React from 'react'
import '../../styles/tinder/index.css'
import { env } from '@/config/env'
import { getHouseNameFromId } from '@/libs/utils/tinder'
import HouseTag from './HouseTag'

const ConnectedFriendCard = ({user}) => {
    return (
        <div className={`connected-friend-card-gradient-${getHouseNameFromId(user.house_id)} border-[#636363] border rounded-2xl min-w-[280px]`}>
            <div className='flex gap-4 px-8 py-3 mb-[2px] rounded-2xl connected-friend-card-gradient-overlay'>
                {user.profile_picture_url ?
                <img />
                : <div className='min-w-[74px] min-h-[74px] bg-gray-400 rounded-full'>
                    <img src={`${env.API_SERVER_URL}/profile_pics/${user.profile_picture_url}`} alt="" />
                </div>}
                <div>
                    <div className='flex gap-1'>
                        <div className='text-white font-inter text-xs font-bold'>{user.nickname}</div>
                        <HouseTag house_name={getHouseNameFromId(user.house_id)} />
                    </div>
                    <div className='font-inter text-[#AAAAAA] text-[8px]'>
                        {user.profile_description}
                    </div>
                </div>
                <div>
                    {/* Social Media contacts here */}
                </div>
            </div>
        </div>
    )
}

export default ConnectedFriendCard
