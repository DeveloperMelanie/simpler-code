import * as React from 'react'
import { parser } from 'utils'

import Layout from 'components/Layout'
import SEO from 'components/SEO'

import { LegalDocument, Body } from 'styles/legalDocument'

export default function TermsBuyers({ pageContext }) {
    React.useEffect(() => {
        document
            .getElementById('body')
            .querySelectorAll('a')
            .forEach(a => {
                if (a.href.indexOf('mailto:') !== -1) return
                a.target = '_blank'
            })
    })

    return (
        <Layout>
            <SEO title={pageContext.pageTitle} />
            <LegalDocument>
                <h1 className='title'>{pageContext.title}</h1>
                <Body
                    id='body'
                    dangerouslySetInnerHTML={{
                        __html: parser.render(pageContext.content),
                    }}
                />
            </LegalDocument>
        </Layout>
    )
}
