import React, { useState } from 'react'
import GlobalModal from '../common/GlobalModal'
import { useNavigate } from 'react-router'

const PopcornGameMenu = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <div className='flex gap-4'>
        <button onClick={() => { navigate('/profile') }} className='border-white border font-mitr rounded-3xl text-white px-10'>Profiles</button>
        <button onClick={openModal} className='border-white border font-inter text-white text-2xl w-[48px] h-[48px] rounded-full'>?</button>
      </div>
      <GlobalModal isOpen={isModalOpen} onClose={closeModal}>
        <div className='bg-green-500'>Hello</div>
      </GlobalModal>
    </>
  )
}

export default PopcornGameMenu
