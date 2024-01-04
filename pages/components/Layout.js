import Footer from "./Footer"
import NavBar from "./NavBar"
import Head from "next/head"

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <link rel='shortcut icon' href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <NavBar />
            <main>{children}</main>
            <Footer />
        </>
    )
}