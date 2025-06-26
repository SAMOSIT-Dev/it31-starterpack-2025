import number from '../../../../../public/icon/01.png'

export default function Event({status}) {
    return (
        <div className="w-full h-[40px] flex justify-center items-center font-inter font-bold relative">
            <div className={`${status === "past" ? "text-[#8D8D8D] bg-[#313131]" : " bg-brown"}  flex justify-end items-center h-full grow gap-[13px] max-w-[110px]`}>
                <div className={`${status === "past" ? "bg-[#8D8D8D]" : "bg-white"} size-[15px] rounded-full`}></div>
                <p className="text-[20px] mr-[5px]">JUL</p>
            </div>
            <img className='mx-[5px]' src={number} alt={number} />
            <div className={`${status === "past" ? "text-[#8D8D8D] bg-[#313131]" : " bg-brown"} flex h-full flex items-center grow-2 max-w-[250px]`}>
                <p className="ml-[5px] rotate-270 text-[12px] tracking-[-2%] ">TUE</p>
                <p className="ml-[18px] mr-[5px]">11:00</p>
                <p>Event's name</p>
            </div>
        </div>
    )
}