import WhyApplyCard from './WhyApplyCard'

export default function WhyApply() {
    return (
        <div id='about' className="flex flex-col items-center mt-[70px] lg:mt-[240px] lg:pt-[120px] lg:mb-[200px] mx-5">
            <p className="text-white font-inter font-bold text-[20px] w-[230px] text-center lg:text-[48px] lg:w-[850px]">Why should we apply for this camp?</p>
            <div className="mt-[50px] mb-[60px] flex flex-col items-center gap-[28px] backdrop-blur-[45] lg:mt-[72px] lg:flex-row lg:gap-[45px]">
                <WhyApplyCard>
                    {
                        <div className='font-mitr '>
                            <h6 className='font-medium text-white text-[18px] px-[15px] text-center mb-1 xl:px-[20px] xl:mb-[8px]'>สร้างมิตรภาพกับเพื่อนๆ พี่ๆ ในคณะ</h6>
                            <p className='text-[#AAAAAA] break-normal text-xs px-5 whitespace-pre-line indent-2'>ค่ายของเราจัดถึง 7 วัน ไม่ 7 คืน ( เพราะไม่นอนค้าง ) ดังนั้น น้องๆ จะได้กระชับมิตรกับเพื่อนๆ พี่ๆ อย่างแน่นแฟ้นแน่นอน !! ทำให้การเรียนในคาบแรกของปี 1 ไม่ใช่วันที่โดดเดี่ยวอีกต่อไป !! หรือการติดปัญหาอะไร แล้วไร้คนสอบถามก็จะหายไป เพราะ น้องๆ ก็จะได้รู้จักรุ่นพี่ในงานนี้เหมือนกัน !!!</p>
                        </div>
                    }
                </WhyApplyCard>
                <WhyApplyCard set={'B'}>
                    {
                        <div className='font-mitr'>
                            <h6 className='font-medium text-white text-[18px] px-[15px] text-center xl:px-[20px] xl:mb-[8px]'>เนื้อหา ความรู้ ปูมาแบบแน่นๆ !!</h6>
                            <p className='text-[#AAAAAA] break-normal text-xs px-5 whitespace-pre-line indent-2 ' >ในช่วงเวลา 7 วันน้องๆ จะได้เรียนเนื้อหาที่พี่ๆ ช่วยกันวิจัยมาแล้ว ว่า เป็นปัญหาใหญ่สำหรับน้องๆ หน้าใหม่ และ จำเป็นต้องมีพื้นฐาน เพื่อให้เราสามารถเรียนในคณะ IT สาขา IT แห่งนี้ได้อย่างฉลุย !!! แต่สำหรับน้องๆ ที่มือใหม่มากๆ ก็ไม่ต้องกังวลไป เพราะ เนื้อหาถูกปรับมาให้พื้นฐานมากๆ ไล่ขึ้นไปเรื่อยๆ ดังนั้น วางใจแล้วเตรียมสมองไว้ให้พร้อมได้เลย !!!</p>
                        </div>
                    }
                </WhyApplyCard>
                <WhyApplyCard set={'C'}>
                    {
                        <div className='font-mitr'>
                            <h6 className='font-medium text-white text-[18px] px-[15px] text-center xl:px-[20px] xl:mb-[8px]'>ของรางวัลมากมาย จาก สปอนเซอร์ !?!</h6>
                            <p className='text-[#AAAAAA] break-normal text-xs px-5 whitespace-pre-line indent-2 ' >เรียกว่ากิจกรรมเกือบทุกอย่างในค่ายนี้ เรามีของรางวัลน่ารักๆ จากสปอนเซอร์ของเรามาแจกตลอดโครงการ แค่เข้าโครงการก็ได้ของติดไม้ติดมือกลับไปอย่างแน่นอน หรือ อาจจะได้รางวัลใหญ่กลับไป ก็ได้นะ !!?!? ดังนั้น ไม่ต้องคิดมาก สูดหายใจเข้าลึกๆ แล้วเล่นกิจกรรม/เรียน ให้สนุกได้เลยยย !!!</p>
                        </div>
                    }
                </WhyApplyCard>

            </div>
        </div>
    )
}