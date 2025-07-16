import ticketA from '/icon/ticketA.svg'
import ticketB from '/icon/ticketB.svg'
import ticketC from '/icon/ticketC.svg'



export default function WhyApplyCard({children, set}) {
    return (
        <div className={`max-w-[420px] rounded-[25px] bg-linear-89 from-4% via-49% to-99% 
        ${set === 'C' ? "from-[#92D1F5]" : set === 'B' ? "from-[#82EC87]" : "from-[#FDA237]"} 
        ${set === 'C' ? "via-[#CBA1EB]" : set === 'B' ? "via-[#466C5D]" : "via-[#AB3A12]"} 
        ${set === 'C' ? "to-[#403382]" : set === 'B' ? "to-[#44B0B0]" : "to-[#7E0001]"}`}>
            <div className="border border-[#636363] w-full h-[395px] rounded-[25px] bg-linear-to-b from-black to-black/83 flex flex-col items-center
            mb-1">
                <div className='py-[22px] px-[15px] border border-[#636363] inline-block rounded-[18px] mt-[55px] mb-[37px]'>
                    <img src={set === 'C' ? ticketC : set === 'B' ? ticketB : ticketA} alt="ticket" />
                </div>
                {children}
            </div>
        </div>
    )
}