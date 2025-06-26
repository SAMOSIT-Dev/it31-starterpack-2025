import Header from './_components/Header.jsx'
import DisplaySponsor from './_components/DisplaySponsor.jsx'
import ViewSchedule from './_components/ViewSchedule.jsx'
import Upcoming from './_components/UpcomingEvents/UpcomingEvents.jsx'
import WhyApply from './_components/WhyApply/WhyApply.jsx'
import Footer from './_components/Footer.jsx'

export default function HomePage() {
  return (
    <>
      <div className='bg-size-[auto_1650px] bg-no-repeat bg-black bg-linear-130 from-brown via-darkblue to-black bg-black'>
        <Header />
        <DisplaySponsor line/>
        <ViewSchedule />
        <Upcoming />
        <WhyApply />
        <Footer />
      </div>
    </>
  );
}
