import { Link } from "react-router";
import GlowButton from "../../_components/GlowButton.jsx";

export default function Header() {
  return (
    <div
      className="w-full h-[650px] pt-[55px] flex flex-col mb-[95px] md:px-16 xl:px-24  justify-center
        lg:pt-[210px] lg:flex-row lg:gap-[50px] lg:items-center xl:gap-[150px] xl:mb-[130px]"
    >
      <img
        className="size-[250px] mt-[70px] mb-[30px] self-center lg:size-[300px] lg:m-0 xl:size-[450px]"
        src={"/common/fox_mascot2.png"}
        alt="fox mascot"
      />
      <div className="mt-[30px] top-[360px] lg:m-0">
        <div className="flex flex-col items-center justify-center gap-[10px]">
          <p
            className="font-[BodoniXT] text-[35px] font-medium text-white leading-[100%] tracking-[0%] z-3 relative w-[290px] h-[55px]
                    lg:w-[500px] lg:text-[64px] lg:mb-[30px]"
          >
            Starterpack
            <img
              className="absolute right-[9px] top-[-8px] z-[-1] lg:hidden"
              src={"/common/it31.png"}
              alt="it#31"
            />
            <img
              className="absolute right-[-18px] top-[-16px] z-[-1] hidden lg:block"
              src={"/common/it31-desk.png"}
              alt="it#31"
            />
          </p>
          <p className="font-mitr text-[11px] max-w-[70%] break-normal whitespace-normal text-[#BFBFBF] text-center px-[5px] mb-[25px] lg:text-[16px] lg:text-start">
            โครงการที่จัดขึ้นเพื่อเตรียมความ พร้อมน้องๆ
            ที่กำลังจะเข้าศึกษาที่คณะ SIT สาขา IT ให้
            พร้อมสำหรับการเรียนรู้ที่จะเกิดขึ้นภายในห้องเรียนทั้งการปูพื้นฐาน
            การสร้างสัมพันธ์ระหว่างน้องและ เพื่อนๆ รวมถึงสถานที่ สภาพแวดล้อม
            เป็นการให้น้องๆ ได้ลองปรับตัวก่อนได้เจอจริงในห้องเรียน !
          </p>
          <div className="lg:hidden">
            <Link to={"/tinder"}>
              <GlowButton width={"w-[144px]"} height={"h-[44px]"}>
                <img
                  className="size-[20px]"
                  src={"/icon/add-friend.png"}
                  alt="Add friend"
                />
                <p className="text-16px tracking-[-1.1%] text-white self-center font-mitr">
                  หาเพื่อน
                </p>
              </GlowButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
