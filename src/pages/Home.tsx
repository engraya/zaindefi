import ComingSoon from '../components/Landing/ComingSoon'
import Faq from '../components/Landing/Faq'
import Hero from '../components/Landing/Hero'
import HowToGetStarted from '../components/Landing/HowToGetStarted'
function Home() {
  return (
    <div className="w-full bg-[#0f1316]">
      <Hero />
      <HowToGetStarted/>
      <ComingSoon/>
      <Faq />
    </div>
  )
}

export default Home