import * as React from 'react'
import { Link } from 'gatsby'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import Card from 'components/Card'

import { CardsContainer, Document } from 'styles/faq'

export default function Docs() {
    return (
        <Layout>
            <SEO title='FAQ' />
            <CardsContainer>
                <h1 className='section-title'>Frequently Asked Questions</h1>
                <Card className='me-3' />
                <Card />
            </CardsContainer>
            <Document>
                <h2>Shoppers</h2>
                <h3>What is Simpler Checkout? How does it work?</h3>
                <p>
                    1. You click on the Simpler Quick Buy button that you see on
                    a store, website, ad or social media platform
                </p>
                <p>
                    2. You save your basic information during your first
                    transaction with a seller within the Simpler network. No
                    password is needed. Info is saved once and then never asked
                    again.
                </p>
                <p>3. That’s it! Your order is on its way.</p>
                <p>
                    4. Any time you see the Simpler Quick Buy button again, on
                    any website, your information is saved so you don't have to
                    enter it again.
                </p>
                <h3>
                    What happens if I already have an account with Simpler and
                    want to checkout from a new device?
                </h3>
            </Document>
        </Layout>
    )
}
