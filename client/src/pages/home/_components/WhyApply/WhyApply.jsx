import WhyApplyCard from './WhyApplyCard'

export default function WhyApply() {
    return (
        <div id='about' className="flex flex-col items-center mt-[70px] lg:mt-[240px] lg:pt-[120px] lg:mb-[200px]">
            <p className="text-white font-inter font-bold text-[20px] w-[230px] text-center lg:text-[48px] lg:w-[850px]">Why should we apply for this camp?</p>
            <div className="mt-[50px] mb-[60px] flex flex-col items-center gap-[28px] backdrop-blur-[45] lg:mt-[72px] lg:flex-row lg:gap-[45px]">
                <WhyApplyCard />
                <WhyApplyCard set={'B'}/>
                <WhyApplyCard set={'C'}/>
            </div>
        </div>
    )
}