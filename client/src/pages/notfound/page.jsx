import React from 'react'
import '../../../src/index.css'
import { useNavigate } from 'react-router'

const NotFoundPage = () => {

    const navigate = useNavigate()

    const goToHomepage = () => {
        navigate('/')
    }
    
    return (
        <div className='flex w-full flex-col justify-center items-center default-bg-gradient h-screen'>
            <div className='w-[200px] h-[200px]'>
                <img src="/common/fox_mascot2.png" alt="" />
            </div>
            <h1 className='font-abeezee font-bold mt-8 text-2xl text-white'>404 Not Found</h1>
            <div className='font-mitr text-xl text-white'>ไม่พบหน้าที่คุณกำลังตามหา</div>
            <div onClick={goToHomepage} className='mt-2 underline font-mitr text-base text-white cursor-pointer'>กลับไปหน้าแรก</div>
        </div>
    )
}

export default NotFoundPage
