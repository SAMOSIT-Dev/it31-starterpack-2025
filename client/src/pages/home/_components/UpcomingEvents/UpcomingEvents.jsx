import { Events } from "@/api/event.api.js";
import Event from "./Event.jsx";
import { useMemo } from "react";
import ViewSchedule from "../ViewSchedule.jsx";
import {motion} from 'framer-motion'

export default function UpcomingEvents() {
  const { data = [], isLoading } = Events.getEvents({
    enabled: true,
    staleTime: 1000 * 60 * 5,
  });

  const currentDate = new Date();

  // memorized data and prevent undefined data
  const sortedEvents = useMemo(() => {
    if (!data?.content) return [];

    return data.content
      .sort((a, b) => new Date(a.event_datetime) - new Date(b.event_datetime))
      .sort((a, b) => {
        const aIsPast = new Date(a.event_datetime) < currentDate;
        const bIsPast = new Date(b.event_datetime) < currentDate;

        if (aIsPast && !bIsPast) return 1;
        if (!aIsPast && bIsPast) return -1;

        return 0;
      });
  }, [data]);

  if (isLoading || data.error) return null;

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <>
      <ViewSchedule />
      <div id="upcoming" className="lg:flex lg:justify-center">
        <div className="text-white font-inter w-full lg:mt-[135px] lg:w-[860px] ">
          <p className="text-[24px] font-bold text-center lg:text-[40px] lg:text-start">
            UPCOMING EVENTS
          </p>
          <motion.div
            className="mt-[30px] flex flex-col gap-[16px]"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {sortedEvents.map((event) => {
              console.log(event)
              return (
                <motion.div key={event.id} variants={itemVariants}>
                  <Event
                    data={event}
                    status={new Date(event.event_datetime) > currentDate}
                  />
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </>
  );
}
