import React, { useState } from 'react'
import ModalContent from './ModalContent.jsx'

import burgerMenu from '/icon/hamburgerMenu.png'

export default function MenuModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <button onClick={openModal}>
                <img className='lg:hidden' src={burgerMenu} alt="Hamburger menu" />
            </button>

            <ModalContent isOpen={isModalOpen} onClose={closeModal}/>

        </>
    )
}

