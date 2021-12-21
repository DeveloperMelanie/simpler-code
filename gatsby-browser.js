import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from './src/components/Header'
import Footer from './src/components/Footer'

import { GlobalStyles } from './src/styles/GlobalStyles'
import 'bootstrap/dist/css/bootstrap.min.css'

export function wrapPageElement({ element }) {
    AOS.init({
        duration: 1300,
        once: true,
    })

    return (
        <>
            <GlobalStyles />
            <Header />
            <main>{element}</main>
            <Footer />
        </>
    )
}
