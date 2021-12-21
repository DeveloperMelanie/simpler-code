import * as React from 'react'
let AOS = null
if (typeof window !== 'undefined') AOS = require('aos')
import 'aos/dist/aos.css'

import Header from 'components/Header'
import Footer from 'components/Footer'

import { GlobalStyles } from 'styles/GlobalStyles'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Layout({ children }) {
    AOS &&
        AOS.init({
            duration: 1300,
            once: true,
        })

    return (
        <>
            <GlobalStyles />
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}
