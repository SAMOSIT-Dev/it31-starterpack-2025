import PopcornWrapper from '@/components/tinder/PopcornWrapper'
import '../../styles/tinder/index.css'
import PopcornGameMenu from '@/components/tinder/PopcornGameMenu'
import ConnectedFriendsWrapper from '@/components/tinder/ConnectedFriendsWrapper'
import { useEffect } from 'react'
import { useMatchingSocketStore } from '@/store/matching.store'
import { env } from '@/config/env'


export default function TinderGamePage () {

    const connect = useMatchingSocketStore((state) => state.connect)
    const disconnect = useMatchingSocketStore((state) => state.disconnect)
    const updateCurrentLocation = useMatchingSocketStore((state) => state.updateCurrentLocation)
    const login = useMatchingSocketStore(state => state.login)
    const refresh = useMatchingSocketStore(state => state.refresh)

    useEffect(() => {
        login()
        connect(env.API_SERVER_URL)

        setInterval(() => {
            updateCurrentLocation()
        }, 10000)
        
        return () => {
            disconnect()
        }
    }, [])

    return (
        <div className='page-gradient pt-20'>
            <div className='flex flex-col items-center'>
                <h3 className='text-white text-3xl font-mitr'>กดรัวๆ เพื่อหาเพื่อนใหม่!</h3>

                <div className='my-24' onClick={refresh}>
                    <PopcornWrapper />
                </div>
                <PopcornGameMenu />
            </div>

            <div className='flex flex-col items-center my-10'>
                <div className='text-white text-xs'>View your connected friends</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
            </div>

            <div>
                <ConnectedFriendsWrapper />
            </div>

        </div>
    )
}