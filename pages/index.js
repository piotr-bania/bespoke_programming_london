import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import Hero from '../components/homepage/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
return (
<>

    <Head>
        <title>Bespoke Programming | Freelance Developer | London</title>
        <meta name="description" content="Bespoke Programming | Freelance Developer | London" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
        <Hero />
    </main>
</>
)
}