import * as React from 'react'
import { replaceAnchorsForLinks, parser } from 'utils'

import Layout from 'components/Layout'
import SEO from 'components/SEO'

import { Document, Body } from 'styles/docs'

export default function Docs({ pageContext }) {
    React.useEffect(() => {
        replaceAnchorsForLinks(document.getElementById('body'))
    })

    return (
        <Layout>
            <SEO title={pageContext.pageTitle} />
            <Document>
                <h1 className='title'>{pageContext.title}</h1>
                <Body
                    id='body'
                    dangerouslySetInnerHTML={{
                        __html: parser.render(pageContext.content),
                    }}
                />
            </Document>
        </Layout>
    )
}
