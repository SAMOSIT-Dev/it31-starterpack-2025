import Header from './_components/Header.jsx'
import DisplaySponsor from './_components/DisplaySponsor.jsx'
import Upcoming from './_components/UpcomingEvents/UpcomingEvents.jsx'
import WhyApply from './_components/WhyApply/WhyApply.jsx'
import Footer from './_components/Footer.jsx'
import '../../../src/index.css'

export default function HomePage() {
  return (
    <>
      <div className='homepage-bg-gradient'>
        <Header />
        <DisplaySponsor line head />
        <Upcoming />
        <WhyApply />
        <Footer />
      </div>
    </>
  );
}
