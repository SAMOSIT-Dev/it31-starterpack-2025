import gogare from '../../../../public/sponsor/spon_3.png'
import lactasoy from '../../../../public/sponsor/spon_2.png'
import square from '../../../../public/sponsor/spon_1.png'

export default function DisplayLogo({line}) {
    return (
        <div className="text-white flex flex-col justify-center w-full gap-[16px] mb-[45px]">
            <p className="font-[BodoniXT] font-medium text-[14px] leading-[150%] tracking-[-1%] text-center self-center">Sponsored by</p>
            <div className='flex gap-[20px] justify-center items-center'>
                <img className='h-[65px]' src={square} alt="ลุงหนุ่ม square" />
                <div className={`${line ? "block" : "hidden"} h-[80px] w-px bg-[#727272]`}></div>
                <img className='h-[65px]' src={lactasoy} alt="Lactasoy" />
                <div className={`${line ? "block" : "hidden"} h-[80px] w-px bg-[#727272]`} ></div>
                <img className='h-[65px]' src={gogare} alt="โก๋แก่" />
            </div>
        </div>
    )
}