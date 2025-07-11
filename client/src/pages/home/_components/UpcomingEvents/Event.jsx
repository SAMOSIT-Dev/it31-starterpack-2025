const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

export default function Event({ data, status }) {
  const eventDateTime = new Date(data.event_datetime);

  const day = eventDateTime.getDate().toString().padStart(2, "0");
  const month = eventDateTime.getMonth().toString();
  const dayOfWeek = eventDateTime.getDay().toString();
  const hours = eventDateTime.getHours().toString().padStart(2, "0");
  const minutes = eventDateTime.getMinutes().toString().padStart(2, "0");

  return (
    <div className="w-full h-[40px] flex justify-center items-center font-inter font-bold lg:h-[75px] lg:justify-between">
      <div
        className={`${
          status === false ? "text-[#8D8D8D] bg-[#313131]" : " bg-brown"
        }  flex justify-end items-center  
            h-full  w-[95px] gap-[10px]  lg:w-[195px] lg:gap-[25px]`}
      >
        <div
          className={`${
            status === false ? "bg-[#8D8D8D]" : "bg-[#E42F48]"
          } size-[15px] rounded-full lg:size-[39px]`}
        ></div>
        <p className="text-[20px] pr-[5px] w-[50px] lg:w-[90px] lg:text-[32px] lg:pr-[10px]">
          {months[month]}
        </p>
      </div>
      <p className="text-[54px] mx-[3px] w-[54px] font-passion-one text-center lg:text-[110px] lg:w-[120px] lg:pt-[4px]">
        {day}
      </p>
      <div
        className={`${
          status === false ? "text-[#8D8D8D] bg-[#313131]" : " bg-brown"
        } 
            flex justify-start gap-[10px] h-full items-center w-[225px] sm:w-[270px] md:w-[350px] lg:w-[535px] lg:gap-0
            `}
      >
        <p className="rotate-270 text-[12px] text-center w-[30px] h-[20px] ml-[4px] lg:text-[22px] lg:h-[40px] lg:w-[50px] lg:ml-[10px]">
          {weekday[dayOfWeek]}
        </p>
        <p className="text-sm lg:text-2xl text-center w-[60px] lg:w-[100px]">
          {hours} : {minutes}
        </p>
        <p className="text-sm font-mitr font-normal lg:text-2xl leading-[1.2] w-[150px] truncate sm:w-max lg:w-[395px]">
          {data.event_name}
        </p>
      </div>
    </div>
  );
}
