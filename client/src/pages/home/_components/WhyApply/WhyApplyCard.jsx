import ticketA from '../../../../../public/icon/ticketA.png'
import ticketB from '../../../../../public/icon/ticketB.png'
import ticketC from '../../../../../public/icon/ticketC.png'



export default function WhyApplyCard({Header, content, set}) {
    return (
        <div className={`w-[290px] h-[340px] rounded-[25px] bg-linear-89 from-4% via-49% to-99% 
        ${set === 'C' ? "from-[#92D1F5]" : set === 'B' ? "from-[#82EC87]" : "from-[#FDA237]"} 
        ${set === 'C' ? "via-[#CBA1EB]" : set === 'B' ? "via-[#466C5D]" : "via-[#AB3A12]"} 
        ${set === 'C' ? "to-[#403382]" : set === 'B' ? "to-[#44B0B0]" : "to-[#7E0001]"}
        xl:w-[400px] xl:h-[500px]`}>
            <div className="border border-[#636363] w-[290px] h-[335px] rounded-[25px] bg-linear-to-b from-black to-black/83 flex flex-col items-center
            xl:w-[400px] xl:h-[495px]">
                <div className='py-[22px] px-[15px] border border-[#636363] inline-block rounded-[18px] mt-[63px] mb-[37px]'>
                    <img src={set === 'C' ? ticketC : set === 'B' ? ticketB : ticketA} alt="ticket" />
                </div>
                <div className='font-inter'>
                    <h6 className='font-medium text-white text-[13px] text-center xl:text-[35px]'>Header</h6>
                    <p className='text-[#AAAAAA] text-center text-[13px] font-medium px-7 xl:text-[18px]' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolorem sed amet optio hic aut temporibus architecto ipsa velit delectus.</p>
                </div>
            </div>
        </div>
    )
}