import * as React from 'react'
import { Link } from 'gatsby'
import { parser } from 'utils'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import Button from 'components/Button'
import GroupCards from 'components/GroupCards'

import { Document } from 'styles/docs'
import { DocumentHeader } from 'styles/pricing'
import { Advertisement } from 'styles/general'

export default function Pricing({ pageContext }) {
    return (
        <Layout>
            <SEO title={pageContext.pageTitle} />
            <Document>
                <DocumentHeader>
                    <h1 className='title-document'>{pageContext.title}</h1>
                    <span className='description-document'>
                        {pageContext.subtitle}
                    </span>
                    <GroupCards
                        destacatedCard={{
                            title: pageContext.destacatedCard.title,
                            content: parser.render(
                                pageContext.destacatedCard.description
                            ),
                            button: {
                                text: pageContext.destacatedCard.buttonText,
                                to: `/${pageContext.destacatedCard.buttonLink}`,
                            },
                        }}
                        secondaryCard={{
                            title: pageContext.secondaryCard.title,
                            content: parser.render(
                                pageContext.secondaryCard.description
                            ),
                            button: {
                                text: pageContext.secondaryCard.buttonText,
                                to: `/${pageContext.secondaryCard.buttonLink}`,
                            },
                        }}
                        style={{ paddingTop: '5.5rem' }}
                    />
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
