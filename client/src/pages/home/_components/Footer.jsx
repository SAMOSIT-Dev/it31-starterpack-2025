import logoBanner from '/common/logo_banner.svg'
import kmuttLogo from '/common/kmutt_logo.png'
import sitLogo from '/common/sit_logo.png'


import DisplaySponsor from './DisplaySponsor.jsx'


export default function Footer() {
    return (
        <div className="w-full h-full pb-[47px] bg-linear-142 from-darkblue from-4% via-[#3A1D30] via-52% to-brown to-97%
        flex flex-col items-center ">
            <div className='w-full flex flex-col items-center lg:flex-row lg:px-[20px] lg:pt-[55px] lg:pb-[75px] lg:items-center lg:justify-between xl:px-[90px]'>
                <img className='mt-[56px] mb-[48px] w-[350px] lg:w-[500px] lg:h-[100px] lg:m-0 xl:w-[560px]' src={logoBanner} alt="Sit logo" />
                <div className='lg:hidden'><DisplaySponsor head /></div>
                <div className='hidden lg:block'><DisplaySponsor head/></div>
            </div>
            <div className='h-px w-[90%] bg-white/66 mb-[14px] lg:mb-[40px] lg:mx-[90px]'></div>
            <div className='font-mitr font-medium text-white text-[10px] flex flex-col md:flex-row gap-[10px] justify-start lg:flex-row-reverse lg:justify-between lg:text-[20px] lg:w-full lg:px-[30px] xl:px-[10%] max-md:*:justify-center'>
                <div className='flex gap-[10px] justify-start items-center ml-[5px]'>
                    <img className='w-[15px] lg:w-[25px]' src={kmuttLogo} alt="KMUTT logo" />
                    <div className='bg-[#B3B3B3] w-[2px] h-full'></div>
                    <p>King Mongkut’s University of Technology Thonburi.</p>
                </div>  
                <div className='flex gap-[10px] justify-start items-center'>
                    <img className='w-[15px] ml-[5px] lg:w-[29px]' src={sitLogo} alt="SIT logo" />
                    <div className='bg-[#B3B3B3] w-[2px] h-full'></div>
                    <p>School of Information Technology</p>
                </div>
            </div>
        </div>

    )
}