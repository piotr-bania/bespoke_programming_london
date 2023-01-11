// Styling
import '../styles/globals.scss'
import '../styles/components/header/navbar.scss'
import '../styles/components/header/footer.scss'
import '../styles/components/strips.scss'

import '../styles/components/homepage/hero.scss'
import '../styles/components/process/process.scss'
import '../styles/components/services/services.scss'
import '../styles/components/portfolio/portfolio.scss'
import '../styles/components/blog/blog.scss'
import '../styles/components/quote/quote.scss'

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