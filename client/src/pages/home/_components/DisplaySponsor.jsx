import { useMemo } from "react";

export default function DisplayLogo({ line, head = false }) {
  const sponsors = useMemo(() => {
    return Array.from({ length: 6 });
  }, [head]);

  return (
    <div className="text-white flex flex-col justify-center gap-[18px] mb-[45px] lg:m-0">
      <p
        className={`font-[BodoniXT] font-medium text-[14px] leading-[150%] tracking-[-1%] text-center self-center 
            lg:text-[32px] ${head ? "" : "hidden"}`}
      >
        Sponsored by
      </p>
      <div className="flex flex-wrap gap-[20px] justify-center items-center lg:gap-[50px]">
        {sponsors.map((_, i) => (
          <>
            <img
              data-footer={head}
              className="h-[65px] lg:h-[87px] data-[footer=true]:h-12 lg:data-[footer=true]:h-17"
              src={`/sponsor/spon_${i + 1}.png`}
              alt=""
            />
            {i < sponsors.length - 1 && (
              <div
                className={`${
                  line ? "block" : "hidden"
                } h-[80px] w-px bg-[#727272]`}
              ></div>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
