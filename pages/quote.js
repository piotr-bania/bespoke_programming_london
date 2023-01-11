import React from 'react'
import Head from 'next/head'
import Quote from '../components/quote/Quote'
import Overlay_3 from '../components/overlays/Overlay_3'

const faq = () => {
    return (
        <>
            {/* ---------------------- Head ---------------------- */}
            <Head>
                <title>Bespoke Programming | Quote</title>
                <meta name="description" content="Bespoke Programming | Quote" />
                <link rel="icon" href="/svg/logo.svg" />
            </Head>

            <main>
                <Quote />
                <Overlay_3 />
            </main>
        </>
    )
}

export default faq