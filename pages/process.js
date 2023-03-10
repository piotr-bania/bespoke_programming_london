import React from 'react'
import Head from 'next/head'
import Process from '../components/process/Process'
import Overlay_3 from '../components/overlays/Overlay_3'

const process = () => {
    return (
        <>
            {/* ---------------------- Head ---------------------- */}
            <Head>
                <title>Bespoke Programming | Process</title>
                <meta name="description" content="Bespoke Programming | Process" />
                <link rel="icon" href="/svg/logo.svg" />
            </Head>

            <main>
                <Process />
                <Overlay_3 />
            </main>
        </>
    )
}

export default process