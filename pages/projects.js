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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <NavBar />
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
            Our Projects
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Explore our complete portfolio of successful projects and case studies
          </p>
        </div>
        <section
          id="portfolio"
          ref={ref}
          className="mx-auto max-w-screen-xl"
        >
          <Portfolio inView={inView} />
        </section>
      </div>
    </div>
  )
}

export default Projects 