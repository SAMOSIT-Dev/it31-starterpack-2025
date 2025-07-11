import ticketA from '../../../../../public/icon/ticketA.png'
import ticketB from '../../../../../public/icon/ticketB.png'
import ticketC from '../../../../../public/icon/ticketC.png'



export default function WhyApplyCard({Header, content, set}) {
    return (
        <div className={`w-[290px] rounded-[25px] bg-linear-89 from-4% via-49% to-99% 
        ${set === 'C' ? "from-[#92D1F5]" : set === 'B' ? "from-[#82EC87]" : "from-[#FDA237]"} 
        ${set === 'C' ? "via-[#CBA1EB]" : set === 'B' ? "via-[#466C5D]" : "via-[#AB3A12]"} 
        ${set === 'C' ? "to-[#403382]" : set === 'B' ? "to-[#44B0B0]" : "to-[#7E0001]"}`}>
            <div className="border border-[#636363] w-[290px] h-[395px] rounded-[25px] bg-linear-to-b from-black to-black/83 flex flex-col items-center
            mb-1">
                <div className='py-[22px] px-[15px] border border-[#636363] inline-block rounded-[18px] mt-[55px] mb-[37px]'>
                    <img src={set === 'C' ? ticketC : set === 'B' ? ticketB : ticketA} alt="ticket" />
                </div>
                <div className='font-mitr'>
                    <h6 className='font-medium text-white text-[18px] px-[15px] text-center xl:px-[30px] xl:mb-[8px]'>{Header}</h6>
                    <p className='text-[#AAAAAA] break-normal whitespace-normal text-center text-xs text-balance  px-5 whitespace-pre-line ' >{content}</p>
                </div>
            </div>
        </div>
    )
}