import React, { useEffect } from 'react'
import ConnectedFriendCard from './ConnectedFriendCard'
import { useMatchingSocketStore } from '@/store/matching.store'

const ConnectedFriendsWrapper = () => {

    const getConnectedFriends = useMatchingSocketStore(state => state.getConnectedFriends)

    useEffect(() => {
        getConnectedFriends()
    }, [])
    
    
    return (
        <div className='bg-[#030509] flex flex-col items-center mx-1 connected-friend-wrapper-drop-shadow rounded-t-2xl'>
            <h3 className='font-inter text-2xl text-white font-bold mt-10 mb-8'>Connected Friends</h3>

            <div className='flex flex-col items-center'>
                <ConnectedFriendCard />
            </div>

        </div>
    )
}

export default ConnectedFriendsWrapper
