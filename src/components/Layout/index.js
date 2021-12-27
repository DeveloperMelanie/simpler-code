import * as React from 'react'
import { motion } from 'framer-motion'
let AOS = null
if (typeof window !== 'undefined') AOS = require('aos')
import 'aos/dist/aos.css'

import Header from 'components/Header'
import Footer from 'components/Footer'

import 'bootstrap/dist/css/bootstrap.min.css'

export default function Layout({ children, active }) {
    AOS &&
        AOS.init({
            duration: 1300,
            once: true,
        })

    return (
        <>
            <Header active={active} />
            <main>
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        type: 'spring',
                        mass: 0.95,
                        stiffness: 55,
                        duration: 0,
                    }}
                >
                    {children}
                </motion.section>
            </main>
            <Footer />
        </>
    )
}
