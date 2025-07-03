import NavBar from '../components/NavBar'
import Portfolio from '../components/Portfolio'
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const options = {
    root: null,
    threshold: 0.1,
    triggerOnce: true,
  };

  const [ref, inView] = useInView(options);

  return (
    <div>
      <NavBar />
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h1 className="text-4xl font-bold text-center mb-8">Projects</h1>
        <section
          id="portfolio"
          ref={ref}
          className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 bg-white"
        >
          <Portfolio inView={inView} />
        </section>
      </div>
    </div>
  )
}

export default Projects 