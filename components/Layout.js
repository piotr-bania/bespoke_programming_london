import Navbar from "./header/Navbar"

const Layout = ({children}) => {
    return (
        <div>
            <Navbar />
            {/*
            <Strips /> */}
            { children }
            {/*
            <Footer /> */}
        </div>
    )
}

export default Layout