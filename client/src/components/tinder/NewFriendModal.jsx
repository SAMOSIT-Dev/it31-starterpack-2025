import React from 'react'
import GlobalModal from '../common/GlobalModal'
import '../../styles/tinder/index.css'
import { env } from '@/config/env'
import HouseTag from './HouseTag'
import { getHouseNameFromId } from '@/libs/utils/tinder'

const NewFriendModal = ({isOpen, onClose, user}) => {
    
    return (
        <GlobalModal isOpen={isOpen} onClose={onClose}>
            <div className='new-friend-card-bg-gradient font-inter flex w-full flex-col items-center'>
                <h3 className='font-bold text-3xl text-center'>พบเพื่อนใหม่</h3>
                <div className='w-[168px] h-[168px] bg-gray-500 rounded-full'>
                    <img src={`${env.API_SERVER_URL}/profile_pics/${user?.profile_picture_url}`} alt="" />
                </div>
                <div className='flex'>
                    <div>{user?.nickname}</div>
                    <div><HouseTag house_name={getHouseNameFromId(user?.house_id)}/></div>
                </div>
                <div>
                    <div>Description</div>
                    <div>{user?.description}</div>
                </div>
                <div>
                    {/* Social media contacts here */}
                </div>
                <button className='new-friend-card-button-gradient font-mitr font-bold'>เข้าใจแล้ว</button>
            </div>
        </GlobalModal>
    )
}

export default NewFriendModal
