import React, { useEffect, useState } from 'react'
import ConnectedFriendCard from './ConnectedFriendCard'
import { request } from '@/libs/utils/request'

const ConnectedFriendsWrapper = () => {
    
    const [connectedFriends, setConnectedFriends] = useState([])
    
    const fetchConnectedFriends = async () => {
        const response = await request.get('/users/friends', {withCredentials: true})
        if (!response.error) {
            console.log('Friends: ', response.data.content)
            setConnectedFriends(response.data.content)
        }
     }

    
    useEffect(() => {
        fetchConnectedFriends()
    }, [])
    
    return (
        <div className='bg-[#030509] flex flex-col items-center mx-1 connected-friend-wrapper-drop-shadow rounded-t-2xl'>
            <h3 className='font-inter text-2xl text-white font-bold mt-10 mb-8'>Connected Friends</h3>

            <div className='flex flex-col items-center'>
                {
                    connectedFriends.map(user => <ConnectedFriendCard user={user}/>)
                }
            </div>

        </div>
    )
}

export default ConnectedFriendsWrapper
