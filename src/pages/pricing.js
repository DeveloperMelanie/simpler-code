import * as React from 'react'
import { Link } from 'gatsby'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import Button from 'components/Button'
import GroupCards from 'components/GroupCards'

import { Document } from 'styles/docs'
import { DocumentHeader } from 'styles/pricing'
import { Advertisement } from 'styles/general'
import { colors } from 'styles/theme'

export default function Pricing() {
    return (
        <Layout>
            <SEO title='Pricing' />
            <Document>
                <DocumentHeader>
                    <h1 className='title-document'>Pricing</h1>
                    <span className='description-document'>
                        Simpler, Pay-as-you-go Pricing. No minimums, no monthly
                        fees.
                    </span>
                    <GroupCards
                        title='Standard'
                        style={{ paddingTop: '5.5rem' }}
                    >
                        <h3
                            style={{
                                fontSize: '2.438rem',
                                color: colors.gray,
                                letterSpacing: '0.05em',
                            }}
                        >
                            1,3% + €0,25
                        </h3>
                        <span
                            style={{
                                fontSize: '0.813rem',
                                fontWeight: 700,
                                color: colors.gray,
                                letterSpacing: '0.05em',
                            }}
                        >
                            per successful transaction in EU/ EEA
                        </span>
                        <ul className='text-start pt-5'>
                            <li className='card-li'>
                                +2.15% for transactions with cards issued
                                outside of the EU/ EEA
                            </li>
                            <li className='card-li'>
                                +1.5% fee applies to multi-currency transactions
                                for major currencies
                            </li>
                        </ul>
                    </GroupCards>
                </DocumentHeader>
            </Document>
            <Advertisement
                style={{ paddingTop: '7.5rem', paddingBottom: '6rem' }}
            >
                <h2
                    style={{
                        fontSize: '1.875rem',
                        marginBottom: '2.5rem',
                    }}
                >
                    Make your customers' shopping{' '}
                    <span className='important'>simpler.</span>
                </h2>
                <div className='d-flex justify-content-center pt-4'>
                    <Button
                        to='/get'
                        fontSize='1.063rem'
                        padding='0.55rem 3.9rem'
                        hover={false}
                    >
                        Get Simpler Checkout
                        <Link to='/' className='white btn-text'>
                            Simpler.
                        </Link>
                    </Button>
                </div>
            </Advertisement>
        </Layout>
    )
}
