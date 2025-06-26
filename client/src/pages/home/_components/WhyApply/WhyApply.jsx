import WhyApplyCard from './WhyApplyCard'

export default function WhyApply() {
    return (
        <div className="flex flex-col items-center mt-[70px]">
            <p className="text-white font-inter font-bold text-[20px] w-[230px] text-center ">Why should we apply for this camp?</p>
            <div className="mt-[50px] mb-[60px] flex flex-col items-center gap-[28px] backdrop-blur-[45]">
                <WhyApplyCard />
                <WhyApplyCard set={'B'}/>
                <WhyApplyCard set={'C'}/>
            </div>
        </div>
    )
}