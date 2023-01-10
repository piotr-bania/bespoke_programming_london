import Navbar from "./header/Navbar"
import Strips from "./overlays/Strips"
import Footer from "./header/Footer"

const Layout = ({children}) => {
    return (
        <div>
            <Navbar />
            <Strips />
            { children }
            <Footer />
        </div>
    )
}

export default Layout