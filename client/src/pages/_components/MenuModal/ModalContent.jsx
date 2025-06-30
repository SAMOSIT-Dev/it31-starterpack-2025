import React from 'react'
import Modal from 'react-modal';
import {Link} from 'react-router'

import close from '../../../../public/icon/close.png'
import stpLogo from '../../../../public/common/it31starterpack_logo.png'


const modalStyles = {
    content: {
        background: '#060404',
        border: 'none',
        top: '0',
        bottom: '0', 
        left: 'auto',
        right: '0',
        width: '70%',
        borderLeft: '2px solid #3F2A2A',
        paddingLeft: '28px',

    },
    overlay: {
        zIndex: 100,
        background: '#00000096',
        backdropFilter: 'blur(13.899999618530273px)',

    }
};

export default function ModalContent({ isOpen, onClose }) {
    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} style={modalStyles}>
            <>
                <div className='mb-[35px] flex justify-between '>
                    <img className='size-[34px]' src={stpLogo} alt="" />
                    <button onClick={onClose}>
                        <img className='size-[32px]' src={close} alt="" />
                    </button>
                </div>
                <div className='flex flex-col gap-[30px]'>
                    <div className='text-white flex flex-col gap-[10px]'>
                        <p className='font-mitr text-[24px]'>ตารางเรียน</p>
                        <div className='flex flex-col gap-[10px] text-[#D5D5D5] font-mitr font-light text-[16px]'>
                            <Link to={"/course/schedule/1"} onClick={onClose}>Romance</Link>
                            <Link to={"/course/schedule/2"} onClick={onClose}>Action</Link>
                            <Link to={"/course/schedule/3"} onClick={onClose}>Science Fiction</Link>
                            <Link to={"/course/schedule/4"} onClick={onClose}>Horror</Link>
                            <Link to={"/course/schedule/5"} onClick={onClose}>Fantasy</Link>
                        </div>
                    </div>
                    <div className='text-white flex flex-col gap-[10px]'>
                        <p className='font-mitr text-[24px]'>เพิ่มเพื่อน</p>
                        <div className='flex flex-col gap-[10px] text-[#D5D5D5] font-mitr font-light text-[16px]'>
                            <Link to={"/tinder"} onClick={onClose}>หาเพื่อน</Link>
                            <a href="" onClick={onClose}>วิธีการเล่น</a>
                            <Link to={"/profile"} onClick={onClose}>โปรไฟล์</Link>
                            <a href="" onClick={onClose}>แก้ไขโปรไฟล์</a>
                            <a href="" onClick={onClose}>เพื่อน</a>
                        </div>
                    </div>
                </div>
            </>
        </Modal>
    )
}