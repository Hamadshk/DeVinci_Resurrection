import '../styles/globals.css'
import FooterWithSocialMediaIcons from '../components/FooterWithSocialMediaIcons'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <section className="Footer py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 h-5/6 bg-white">
        <FooterWithSocialMediaIcons />
      </section>
    </div>
  )
} 