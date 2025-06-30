import number from '../../../../../public/icon/01.png'

export default function Event({data, status}) {    
    const weekday = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
   
    
    const eventDateTime = new Date(data.event_datetime)
    
    const month = eventDateTime.getMonth().toString()
    const dayOfWeek = eventDateTime.getDay().toString()
    const hours = eventDateTime.getHours().toString().padStart(2, '0')
    const minutes = eventDateTime.getMinutes().toString().padStart(2, '0')
    return (
        <div className="w-full h-[40px] flex justify-center items-center font-inter font-bold lg:h-[75px]">
            <div className={`${status === false ? "text-[#8D8D8D] bg-[#313131]" : " bg-brown"}  flex justify-end items-center  
            h-full  w-[95px] gap-[10px]  lg:w-[195px] lg:gap-[25px]`}>
                <div className={`${status === false ? "bg-[#8D8D8D]" : "bg-[#E42F48]"} size-[15px] rounded-full lg:size-[39px]`}></div>
                <p className="text-[20px] pr-[10px]  lg:text-[32px] lg:pr-[15px]">{months[month]}</p>
            </div>
            <img className='mx-[8px] size-[37px] lg:size-[75px]' src={number} alt={number} />
            {/* <p className='mx-[8px] text-[40px]'>01</p> */}
            <div className={`${status === false ? "text-[#8D8D8D] bg-[#313131]" : " bg-brown"} flex justify-start h-full flex items-center w-[260px] sm:w-[350px] lg:w-[535px]`}>
                <p className="rotate-270 text-[12px] tracking-[-2%] h-[20px] lg:text-[22px] lg:h-[40px] lg:ml-[10px]">{weekday[dayOfWeek]}</p>
                <p className="text-sm lg:text-2xl text-center w-[60px] lg:w-[100px] mr-[5px]">{hours} : {minutes}</p>
                <p className='text-sm lg:text-2xl leading-[1.2] text-wrap w-[150px] sm:w-[260px] lg:w-[395px]'>{data.event_name}</p>
            </div>
        </div>
    )
}