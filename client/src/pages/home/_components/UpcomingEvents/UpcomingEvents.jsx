import { Events } from '@/api/event.api.js';
import Event from './Event.jsx'

export default function UpcomingEvents() {

    const { data, isLoading } = Events.getEvents({
        enabled: true,
        staleTime: 1000 * 60 * 5
    })

    if (isLoading) return <></>
    if (!data || !Array.isArray(data.content)) return <></>

    const currentDate = new Date();

    const sortedEvents = [...data.content]
        .sort((a, b) => new Date(a.event_datetime) - new Date(b.event_datetime)) 
        .sort((a, b) => {
            const aIsPast = new Date(a.event_datetime) < currentDate;
            const bIsPast = new Date(b.event_datetime) < currentDate;

            if (aIsPast && !bIsPast) return 1;
            if (!aIsPast && bIsPast) return -1;
            
            return 0; 
        });
    

    return (
        <div id='upcoming' className='lg:flex lg:justify-center'>
            <div className="text-white font-inter w-full lg:mt-[135px] lg:w-[860px] ">
                <p className="text-[24px] font-bold text-center lg:text-[40px] lg:text-start">UPCOMING EVENTS</p>
                <div className='mt-[30px] flex flex-col gap-[16px]'>
                    {sortedEvents.map(event => {
                        return <Event key={event.id} data={event} status={new Date(event.event_datetime) > currentDate}/>
                    })}
                </div>
            </div>
        </div>
    );
}