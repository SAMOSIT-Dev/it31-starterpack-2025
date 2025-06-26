import logoBanner from '../../../../public/common/logo_banner.png'
import kmuttLogo from '../../../../public/common/kmutt_logo.png'
import sitLogo from '../../../../public/common/sit_logo.png'


import DisplaySponsor from './DisplaySponsor.jsx'


export default function Footer() {
    return (
        <div className="w-full h-[435px] bg-linear-130 from-darkblue via-[#3A1D30] to-brown
        flex flex-col items-center">
            <img className='mt-[56px] mb-[48px] w-[350px]' src={logoBanner} alt="Sit logo" />
            <DisplaySponsor />
            <div className='h-px w-[330px] bg-white/66 mb-[14px]'></div>
            <div className='font-mitr font-medium text-white text-[10px] flex flex-col gap-[10px] justify-start '>
                <div className='flex gap-[10px] justify-start items-center'>
                    <img className='w-[21px]' src={kmuttLogo} alt="KMUTT logo" />
                    <p className='text-[#B3B3B3]'>|</p>
                    <p>King Mongkut’s University of Technology Thonburi.</p>
                </div>
                <div className='flex gap-[10px] justify-start items-center'>
                    <img className='w-[15px] ml-[5px]' src={sitLogo} alt="SIT logo" />
                    <p className='text-[#B3B3B3]'>|</p>
                    <p>School of Information Technology</p>
                </div>
            </div>
        </div>

    )
}