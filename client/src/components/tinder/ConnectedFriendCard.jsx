import React from 'react'
import '../../styles/tinder/index.css'

const HouseTag = ({house}) => {

    let tagColor
    switch (house?.name) {
        case "horrorin":
            tagColor = "bg-[#252D3D]"
            break
        case "fantasiax":
            tagColor = "bg-[#354DA4]"
            break
        case "scifora":
            tagColor = "bg-[#458F88]"
            break
        case "actovex":
            tagColor = "bg-[#FF3021]"
            break
        default:
            tagColor = "bg-[#000000]"
    }
    
    return <div className={`font-bodonixt text-white text-[8px] flex justify-center items-center ${tagColor}`}>House Tag</div>
}

const ConnectedFriendCard = ({nickname, profile_description, profile_picture_url, house, instagram_url, facebook_url, discord_username}) => {
    return (
        <div className={`connected-friend-card-gradient-${house?.name} border-[#636363] border rounded-2xl min-w-[280px]`}>
            <div className='flex gap-4 px-8 py-3 mb-[2px] rounded-2xl connected-friend-card-gradient-overlay'>
                {profile_picture_url ?
                <img />
                : <div className='min-w-[74px] min-h-[74px] bg-gray-400 rounded-full'>
                    {/* profile image here */}
                </div>}
                <div>
                    <div className='flex gap-1'>
                        <div className='text-white font-inter text-xs font-bold'>{nickname}</div>
                        <HouseTag house={house} />
                    </div>
                    <div className='font-inter text-[#AAAAAA] text-[8px]'>
                        {profile_description}
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
