import React from 'react'
import { useNavigate } from 'react-router'

const PopcornGameMenu = () => {

  const navigate = useNavigate()
  // const [isModalOpen, setIsModalOpen] = useState(false)

  // const openModal = () => {
  //   setIsModalOpen(true)
  // }

  // const closeModal = () => {
  //   setIsModalOpen(false)
  // }

  return (
    <>
      <div className='flex gap-4 h-[40px]'>
        <button onClick={() => { navigate('/profile') }} className='border-white border cursor-pointer hover:bg-[#ffffff10] transition-all delay-100 font-mitr rounded-3xl text-white px-10'>Profiles</button>
        {/* <button onClick={openModal} className='border-white border font-inter text-white text-2xl w-[48px] h-[48px] rounded-full'>?</button> */}
      </div>
      {/* <GlobalModal isOpen={isModalOpen} onClose={closeModal}>
        <div className='bg-green-500'>Hello</div>
      </GlobalModal> */}
    </>
  )
}

export default PopcornGameMenu
