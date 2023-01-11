import React from 'react'
import Head from 'next/head'
import Portfolio from '../components/portfolio/Portfolio'
import Overlay_4 from '../components/overlays/Overlay_4'

const portfolio = () => {
    return (
        <>
            {/* ---------------------- Head ---------------------- */}
            <Head>
                <title>Bespoke Programming | Portfolio</title>
                <meta name="description" content="Bespoke Programming | Portfolio" />
                <link rel="icon" href="/svg/logo.svg" />
            </Head>

            <main>
                <Portfolio />
                <Overlay_4 />
            </main>
        </>
    )
}

export default portfolio