import '../../index.css'

import logo from '../../../public/common/it31starterpack_logo.png'

export default function Navbar() {
  return (
    <nav className='w-full h-[55px] px-[20px] bg-[#060404C2]/76 border border-[#3F2A2A] fixed top-0 z-20 flex justify-between items-center'>
      <img className='size-[46px]' src={logo} alt="IT#31 Startter pack logo" />
    </nav>
  );
}
