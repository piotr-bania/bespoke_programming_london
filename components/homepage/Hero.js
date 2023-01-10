import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
    return (
        <section id='hero'>
            <div className="wrapper">
                
                <div className="hero_header">
                    <h1>I Solve Business <br />Problems <br /> Through Medium <br />of Web <br />Development</h1>
                </div>

                <div className="hero_subheader">
                    <p className='gradientBorder'>I am a freelance web developer who builds custom web-applications right from consulting, development, maintenance and support.</p>
                    <Link href="/quote"><button className='button'>Get A Free Quote</button></Link>
                </div>

                <div className="hero_scroll">
                    <Link href="#my_services">
                        <div>
                            <p>Scroll down</p>
                            <Image className='arrowDown' src="/svg/triangle_down.svg" alt="arrow down" width={22} height={34} />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Hero