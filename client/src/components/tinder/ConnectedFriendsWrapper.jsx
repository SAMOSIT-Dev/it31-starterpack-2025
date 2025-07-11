import React, { useEffect } from 'react'
import ConnectedFriendCard from './ConnectedFriendCard'
import { request } from '@/libs/utils/request'
import { useMatchingSocketStore } from '@/store/matching.store'

const ConnectedFriendsWrapper = () => {
    
    const connectedFriends = useMatchingSocketStore(state => state.connectedFriends)
    const setConnectedFriends = useMatchingSocketStore(state => state.setConnectedFriends)
    
    const fetchConnectedFriends = async () => {
        const response = await request.get('/users/friends', {withCredentials: true})
        if (!response.error) {
            setConnectedFriends(response.data.content)
        }
     }

    
    useEffect(() => {
        fetchConnectedFriends()
    }, [])
    
    return (
        <div className='bg-[#030509] w-full flex flex-col items-center connected-friend-wrapper-drop-shadow rounded-t-2xl pb-4'>
            <h3 className='font-inter text-2xl text-white font-bold mt-10 mb-8'>Connected Friends</h3>

            <div className='flex flex-col items-center w-full px-4 gap-2'>
                {
                    connectedFriends.map(user => <ConnectedFriendCard key={user.id} user={user}/>)
                }
            </div>

        </div>
    )
}

export default ConnectedFriendsWrapper
