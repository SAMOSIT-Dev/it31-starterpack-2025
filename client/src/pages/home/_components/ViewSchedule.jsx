import arrowDown from '../../../../public/icon/arrow-down.png'

export default function ViewSchedule() {
    return (
        <div className=" flex flex-col text-white text-center mb-[80px] lg:hidden">
            <p className="text-[12px] self-center font-inter mb-[8px]">View Schedule</p>
            <img className='w-[10px] h-[8px] self-center' src={arrowDown} alt="Arrow down" />
        </div>
    )
}