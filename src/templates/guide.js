import * as React from 'react'
import ReactMarkdown from 'react-markdown'

import Layout from 'components/Layout'
import SEO from 'components/SEO'

import { Document, Body } from 'styles/docs'

export default function Docs({ pageContext }) {
    return (
        <Layout>
            <SEO title={pageContext.pageTitle} />
            <Document>
                <h1 className='title'>{pageContext.title}</h1>
                <Body>
                    <ReactMarkdown>{pageContext.content}</ReactMarkdown>
                </Body>
            </Document>
        </Layout>
    )
}
