import spon1 from '/sponsor/spon_1.png'
import spon2 from '/sponsor/spon_2.png'
import spon3 from '/sponsor/spon_3.png'
import spon4 from '/sponsor/spon_4.png'
import spon5 from '/sponsor/spon_5.png'

export default function DisplayLogo({line, head}) {
    return (
        <div className="text-white flex flex-col justify-center gap-[18px] mb-[45px] lg:m-0">
            <p className={`font-[BodoniXT] font-medium text-[14px] leading-[150%] tracking-[-1%] text-center self-center 
            lg:text-[32px] ${head ? '' : 'hidden'}`}>Sponsored by</p>
            <div className='flex flex-wrap gap-[20px] justify-center items-center  lg:gap-[50px]'>
                <img className='h-[65px] lg:h-[87px]' src={spon1} alt="" />
                <div className={`${line ? "block" : "hidden"} h-[80px] w-px bg-[#727272]`}></div>
                <img className='h-[65px] lg:h-[87px]' src={spon2} alt="" />
                <div className={`${line ? "block" : "hidden"} h-[80px] w-px bg-[#727272]`} ></div>
                <img className='h-[65px] lg:h-[87px]' src={spon3} alt="" />
                <div className={`${line ? "block" : "hidden"} h-[80px] w-px bg-[#727272]`} ></div>
                <img className='h-[65px] lg:h-[87px]' src={spon4} alt="" />
                <div className={`${line ? "block" : "hidden"} h-[80px] w-px bg-[#727272]`} ></div>
                <img className='h-[65px] lg:h-[87px]' src={spon5} alt="" />
            </div>
        </div>
    )
}