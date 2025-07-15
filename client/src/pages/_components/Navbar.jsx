import '../../index.css'

import { Link } from 'react-router'

import GlowButton from '../_components/GlowButton'
import HamburgerMenu from './MenuModal/MenuModal'

import logo from '../../../public/common/it31starterpack_logo.png'



export default function Navbar() {
  return (
    <nav className='w-full h-[55px] px-[20px] bg-[#060404C2]/76 border border-[#3F2A2A] fixed top-0 z-20 flex justify-between items-center
    lg:h-[90px] xl:px-[65px]'>
      <div className='flex justify-between items-center gap-[80px]'>
        <Link to={"/"}><img className='size-[46px] lg:size-[66px]' src={logo} alt="IT#31 Startter pack logo" /></Link>
        <div className='text-white font-mitr hidden gap-[60px] text-[20px] items-center lg:flex'>
          <a href="/#about">เกี่ยวกับค่าย</a>
          <a href="/#upcoming">กิจกรรม</a>
          {/* font ภาษาไทยไม่ติด */}
        </div>
      </div>
      <div className='flex'>
        <HamburgerMenu />
        <div className='hidden lg:flex justify-between gap-[25px]'>
          <Link to={"/course/houses"}>
            <button className='px-[20px] py-[10px] border border-white rounded-[20px] cursor-pointer'>
              <p className='text-white font-light text-[20px] font-mitr'>ตารางเรียน</p>
            </button>
          </Link>
          <Link to={"/tinder"}>
            <GlowButton width={'w-[144px]'} height={'h-full'}>
              <img className='size-[20px]' src={'/icon/add-friend.png'} alt="Add friend" />
              <p className="text-16px tracking-[-1.1%] text-white self-center font-mitr">
                หาเพื่อน
              </p>
            </GlowButton>
          </Link>
        </div>
      </div>
    </nav>
  );
}
