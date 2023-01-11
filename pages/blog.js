import React from 'react'
import Head from 'next/head'
import Blog from '../components/blog/Blog'
import Overlay_1 from '../components/overlays/Overlay_1'

const blog = () => {
    return (
        <>
            {/* ---------------------- Head ---------------------- */}
            <Head>
                <title>Bespoke Programming | Blog</title>
                <meta name="description" content="Bespoke Programming | Blog" />
                <link rel="icon" href="/svg/logo.svg" />
            </Head>

            <main>
                <Blog />
                <Overlay_1 />
            </main>
        </>
    )
}

export default blog