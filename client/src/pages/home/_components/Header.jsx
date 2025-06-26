import GlowButton from '../../_components/GlowButton.jsx'

import fox_mascot from '../../../../public/common/fox_mascot.png'
import it31 from '../../../../public/common/it31.png'


export default function Header() {
    return (
        <div className='w-full pt-[55px] p-1 flex flex-col justify-center mb-[95px]'>
            <img className='w-[184px] h-[257px] mt-[30px] self-center' src={fox_mascot} alt="fox mascot" />
            <div className='mt-[30px]'>
                <div className='flex flex-col items-center justify-center gap-[10px]'>
                    <p className='font-[BodoniXT] text-[35px] font-medium text-white leading-[100%] tracking-[0%] z-3 relative w-[290px] h-[55px]'>
                        Starterpack
                        <img className='absolute right-[9px] top-[-8px] z-[-1]' src={it31} alt="it#31" />
                    </p>
                    <p className='font-mitr text-[11px] text-[#BFBFBF] text-center px-[5px] mb-[25px]'>
                        โครงการที่จัดขึ้นเพื่อเตรียมความ พร้อมน้องๆ ที่กำลังจะเข้าศึกษาที่คณะ SIT <br />
                        สาขา IT ให้ พร้อมสำหรับการเรียนรู้ที่จะเกิดขึ้นภายในห้องเรียนทั้งการปูพื้นฐาน <br />
                        การสร้างสัมพันธ์ระหว่างน้องและ เพื่อนๆ รวมถึงสถานที่ สภาพแวดล้อม <br />
                        เป็นการให้น้องๆ ได้ลองปรับตัวก่อนได้เจอจริงในห้องเรียน !
                    </p>
                    <GlowButton />
                </div>
            </div>
        </div>
    )
}