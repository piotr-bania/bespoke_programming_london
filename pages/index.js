import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

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
        <section id='hero'>
            <div className="wrapper">
                <h1>I Solve Business Problems Through Medium of Web Development</h1>
                <p>I am a freelance web developer who builds custom web-applications right from consulting, development, maintenance and support.</p>
            </div>
            <div className="wrapper">
                <h1>I Solve Business Problems Through Medium of Web Development</h1>
                <p>I am a freelance web developer who builds custom web-applications right from consulting, development, maintenance and support.</p>
            </div>
            <div className="wrapper">
                <h1>I Solve Business Problems Through Medium of Web Development</h1>
                <p>I am a freelance web developer who builds custom web-applications right from consulting, development, maintenance and support.</p>
            </div>
            <div className="wrapper">
                <h1>I Solve Business Problems Through Medium of Web Development</h1>
                <p>I am a freelance web developer who builds custom web-applications right from consulting, development, maintenance and support.</p>
            </div>
            <div className="wrapper">
                <h1>I Solve Business Problems Through Medium of Web Development</h1>
                <p>I am a freelance web developer who builds custom web-applications right from consulting, development, maintenance and support.</p>
            </div>
        </section>
    </main>
</>
)
}