import * as React from 'react'
import { AnimatePresence } from 'framer-motion'

import { GlobalStyles } from 'styles/GlobalStyles'
import 'bootstrap/dist/css/bootstrap.min.css'

export const wrapPageElement = ({ element }) => (
    <>
        <GlobalStyles />
        <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
    </>
)
