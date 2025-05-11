
import GoGlobal from "./GoGlobal"
import Stats from "./Stats"
import Welcome from "./Welcome"
function Hero() {
  return (
    <section className="w-full px-8">
      <Welcome/>
      <Stats/>
      <div className="hidden lg:flex lg:justify-center lg:items-center lg:gap-2.5">
      <GoGlobal/>
      </div>
    </section>

  )
}

export default Hero