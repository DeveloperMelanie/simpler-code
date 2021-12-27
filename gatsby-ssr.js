import * as React from 'react'
import { GlobalStyles } from 'styles/GlobalStyles'
import { AnimatePresence } from 'framer-motion'

export const wrapPageElement = ({ element }) => (
    <>
        <GlobalStyles />
        <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
    </>
)
