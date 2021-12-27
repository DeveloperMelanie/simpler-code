import * as React from 'react'
import ReactMarkdown from 'react-markdown'

import Layout from 'components/Layout'
import SEO from 'components/SEO'

import { LegalDocument, Body } from 'styles/legalDocument'

export default function TermsBuyers({ pageContext }) {
    return (
        <Layout>
            <SEO title={pageContext.pageTitle} />
            <LegalDocument>
                <h1 className='title'>{pageContext.title}</h1>
                <Body>
                    <ReactMarkdown>{pageContext.content}</ReactMarkdown>
                </Body>
            </LegalDocument>
        </Layout>
    )
}
