// Styling
import '../styles/globals.scss'
import '../styles/components/header/navbar.scss'
import '../styles/components/sections/hero.scss'

// Layouts
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp