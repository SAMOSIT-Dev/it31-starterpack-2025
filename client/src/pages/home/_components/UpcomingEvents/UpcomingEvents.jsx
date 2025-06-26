import Event from './Event.jsx'

export default function UpcomingEvents() {
    return (
        <div className="text-white font-inter">
            <p className="text-[24px] font-bold text-center">UPCOMING EVENTS</p>
            <div className='mt-[30px] flex flex-col gap-[16px]'>
                <Event />
                <Event />
                <Event />
                <Event />
                <Event />
                <Event status={'past'}/>
            </div>
        </div>
    );
}