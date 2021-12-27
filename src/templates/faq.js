import * as React from 'react'
import $ from 'jquery'
import { scrollTo, parser, replaceAnchorsForLinks } from 'utils'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import Card from 'components/Card'

import { CardsContainer, Document } from 'styles/faq'

export default function Faq({ pageContext }) {
    React.useEffect(() => {
        replaceAnchorsForLinks(document.getElementById('body'))
    })

    return (
        <Layout>
            <SEO title={pageContext.pageTitle} />
            <CardsContainer>
                <h1 className='section-title'>{pageContext.title}</h1>
                <div className='cards'>
                    {pageContext.cards.map((card, i) => (
                        <Card
                            key={i}
                            title={card.title}
                            description={card.description}
                            btnText={card.buttonText}
                            onClick={() =>
                                scrollTo(
                                    $(`#${card.title.toLowerCase()}`).offset()
                                        .top
                                )
                            }
                        />
                    ))}
                </div>
            </CardsContainer>
            <Document
                id='body'
                dangerouslySetInnerHTML={{
                    __html: parser.render(pageContext.content),
                }}
            />
        </Layout>
    )
}
