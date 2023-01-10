import React, { useState } from "react"
import Link from "next/link"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <section id="navbar">
            <div className="wrapper">

                {/* Logo */}
                <Link href='/'>
                    <div className="logo">
                        <svg className="logo_center" width={32.25} height={50} viewBox="0 0 35.5 80">
                            <path d="m21.4.3c3.8-.4,10.4-.4,14.1,0L14.1,79.7c-3.8.4-10.4.4-14.1,0L21.4.3Z">
                                <animateTransform />
                            </path>
                        </svg>
                        <svg className="logo_top" width={22.6875} height={30.5} viewBox="0 0 36.3 48.8">
                            <path
                                d="m.3,48.8c-.4-4.7-.4-9.4,0-14.1l22.7-10.3L.3,14.1C-.1,9.4-.1,4.7.3,0l35.7,16.3c.4,5.4.4,10.8,0,16.1L.3,48.8H.3Z">
                                <animateTransform />
                            </path>
                        </svg>
                        <svg className="logo_bottom" width={22.6875} height={30.5} viewBox="0 0 36.3 48.8">
                            <path
                                d="m.3,48.8c-.4-4.7-.4-9.4,0-14.1l22.7-10.3L.3,14.1C-.1,9.4-.1,4.7.3,0l35.7,16.3c.4,5.4.4,10.8,0,16.1L.3,48.8H.3Z">
                            </path>
                        </svg>
                    </div>
                </Link>

                {/* Menu */}
                <nav className="menu menu_open">
                    <li>
                            <Link href="/">Home</Link>
                            <Link href="/services">Services</Link>
                            <Link href="/process">Process</Link>
                            <Link href="/portfolio">Portfolio</Link>
                            <Link href="/blog">Blog</Link>
                            <Link href="/faq">FAQ</Link>
                    </li>
                    
                    {/* Button */}
                    <Link href="/quote">
                        <button className='button'>Pricing</button>
                    </Link>
                </nav>
            </div>
        </section>
    )
}

export default Navbar