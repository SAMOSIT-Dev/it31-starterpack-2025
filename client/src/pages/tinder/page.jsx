import PopcornWrapper from '@/components/tinder/PopcornWrapper'
import '../../styles/tinder/index.css'
import PopcornGameMenu from '@/components/tinder/PopcornGameMenu'
import ConnectedFriendsWrapper from '@/components/tinder/ConnectedFriendsWrapper'
import { useEffect, useState } from 'react'
import { useMatchingSocketStore } from '@/store/matching.store'
import useAuthStore from '@/store/auth.store'
import NewFriendModal from '@/components/tinder/NewFriendModal'
import { env } from '@/config/env'


export default function TinderGamePage() {

    const connect = useMatchingSocketStore((state) => state.connect)
    const disconnect = useMatchingSocketStore((state) => state.disconnect)
    const activeUsers = useMatchingSocketStore(state => state.activeUsers)
    const resetMatchedUser = useMatchingSocketStore(state => state.resetMatchedUser)
    const matchedUser = useMatchingSocketStore(state => state.matchedUser)
    const refresh = useAuthStore(state => state.refresh)
    const [isModalOpen, setIsModalOpen] = useState(false)
    
    const onModalCloseHandler = () => {
        resetMatchedUser()
        setIsModalOpen(false)
    }

    useEffect(() => {
        refresh()
        connect(env.SOCKET_IO_HOST)
        return () => {
            disconnect()
        }
    }, [])

    useEffect(() => {
        if (matchedUser) {
            setIsModalOpen(true)
        }
    }, [matchedUser])

    return (
        <div className='page-gradient pt-20'>
            <div className='flex flex-col items-center'>
                <h3 className='text-white text-3xl font-mitr'>กดรัวๆ เพื่อหาเพื่อนใหม่!</h3>
                <p className='text-white text-xs font-mitr'>ตอนนี้กำลังมีผู้เล่นพร้อมกันทั้งหมด {activeUsers} คน</p>

                <div className='my-24'><PopcornWrapper /></div>
                <PopcornGameMenu />
            </div>

            <div className='flex flex-col items-center my-10'>
                <div className='text-white text-xs'>View your connected friends</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
            </div>

            <ConnectedFriendsWrapper />

            <NewFriendModal isOpen={isModalOpen} onClose={onModalCloseHandler} user={{
                nickname: 'Hello',
                description: 'This is description',
                instagram_url: 'Instagram',
                facebook_url: 'Minecraft',
                discord_username: 'Discord Username'

            }} />
        </div>
    )
}