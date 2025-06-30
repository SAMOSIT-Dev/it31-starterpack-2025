

import { Events } from '@/api/event.api.js';
import Event from './Event.jsx'

export default function UpcomingEvents() {
    
    const { data, isLoading } = Events.getSomething({
        enabled: true,
        staleTime: 1000 * 60 * 5
    })
   
    if (isLoading) return <></>
    



    return (
        <div id='upcoming' className='lg:flex lg:justify-center'>
            <div className="text-white font-inter lg:mt-[135px] lg:w-[820px] ">
                <p className="text-[24px] font-bold text-center lg:text-[40px] lg:text-start">UPCOMING EVENTS</p>
                <div className='mt-[30px] flex flex-col gap-[16px]'>
                    {data.map(event => {
                        return <Event key={event.id} data={event} />
                    })}
                </div>
            </div>
        </div>
    );
}