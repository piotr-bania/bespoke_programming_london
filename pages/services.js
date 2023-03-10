import React from 'react'
import Head from 'next/head'
import Services from '../components/services/Services'
import Overlay_2 from '../components/overlays/Overlay_2'

const services = () => {
    return (
        <>
            {/* ---------------------- Head ---------------------- */}
            <Head>
                <title>Bespoke Programming | Services</title>
                <meta name="description" content="Bespoke Programming | Services" />
                <link rel="icon" href="/svg/logo.svg" />
            </Head>

            <main>
                <Services />
                <Overlay_2 />
            </main>
        </>
    )
}

export default services