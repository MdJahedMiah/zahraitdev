import Hero from "../../components/Hero/Hero"
import ImpactResults from "../../components/ImpactResults/ImpactResults"
import Skills from "../../components/Skills/Skills"
import Testimonials from "../../components/Testimonials/Testimonials"

const Home = () => {
  return (
    <div>
        <Hero/>
        <Skills/>
        <ImpactResults/>
        <Testimonials/>
    </div>
  )
}

export default Home
