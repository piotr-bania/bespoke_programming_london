import React from 'react'
import Head from 'next/head'
import Faq from '../components/faq/Faq'
import Overlay_2 from '../components/overlays/Overlay_2'

const faq = () => {
    return (
        <>
            {/* ---------------------- Head ---------------------- */}
            <Head>
                <title>Bespoke Programming | FAQ</title>
                <meta name="description" content="Bespoke Programming | FAQ" />
                <link rel="icon" href="/svg/logo.svg" />
            </Head>

            <main>
                <Faq />
                <Overlay_2 />
            </main>
        </>
    )
}

export default faq