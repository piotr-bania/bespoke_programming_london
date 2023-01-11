import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import Hero from '../components/homepage/Hero'
import Overlay_1 from '../components/overlays/Overlay_1'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            {/* ---------------------- Head ---------------------- */}
            <Head>
                <title>Bespoke Programming | Freelance Developer | London</title>
                <meta name="description" content="Bespoke Programming | Freelance Developer | London" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/svg/logo.svg" />
            </Head>

            <main>
                <Hero />
                <Overlay_1 />
            </main>
        </>
    )
}