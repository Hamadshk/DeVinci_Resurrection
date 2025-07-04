import '../styles/globals.css'
import FooterWithSocialMediaIcons from '../components/FooterWithSocialMediaIcons'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <FooterWithSocialMediaIcons />
    </div>
  )
} 