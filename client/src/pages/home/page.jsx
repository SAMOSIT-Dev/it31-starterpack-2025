import Header from './_components/Header.jsx'
import DisplaySponsor from './_components/DisplaySponsor.jsx'
import ViewSchedule from './_components/ViewSchedule.jsx'
import Upcoming from './_components/UpcomingEvents/UpcomingEvents.jsx'
import WhyApply from './_components/WhyApply/WhyApply.jsx'
import Footer from './_components/Footer.jsx'

export default function HomePage() {
  return (
    <>
      <div className='bg-size-[auto_1650px] bg-no-repeat bg-linear-345 from-black from-10% via-darkblue via-52% to-brown to-102% bg-black lg:bg-size-[auto_2120px]'>
        <Header />
        <DisplaySponsor line head/>
        <ViewSchedule />
        <Upcoming />
        <WhyApply />
        <Footer />
      </div>
    </>
  );
}
