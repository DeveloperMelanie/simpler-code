import * as React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, title }) {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `
    )

    const metaDescription = description || site.siteMetadata.description
    const defaultTitle = site.siteMetadata?.title

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={defaultTitle ? `%s | Simpler` : null}
            link={[
                {
                    rel: 'icon',
                    sizes: '192x192',
                    href: 'https://static.wixstatic.com/media/eb8dec_df8b09c5bdf24f099b2bdff6b0db93e9%7Emv2.png/v1/fill/w_32%2Ch_32%2Clg_1%2Cusm_0.66_1.00_0.01/eb8dec_df8b09c5bdf24f099b2bdff6b0db93e9%7Emv2.png',
                },
                {
                    rel: 'shortcut icon',
                    href: 'https://static.wixstatic.com/media/eb8dec_df8b09c5bdf24f099b2bdff6b0db93e9%7Emv2.png/v1/fill/w_32%2Ch_32%2Clg_1%2Cusm_0.66_1.00_0.01/eb8dec_df8b09c5bdf24f099b2bdff6b0db93e9%7Emv2.png',
                },
                {
                    rel: 'apple-touch-icon',
                    href: 'https://static.wixstatic.com/media/eb8dec_df8b09c5bdf24f099b2bdff6b0db93e9%7Emv2.png/v1/fill/w_32%2Ch_32%2Clg_1%2Cusm_0.66_1.00_0.01/eb8dec_df8b09c5bdf24f099b2bdff6b0db93e9%7Emv2.png',
                },
            ]}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata?.author || ``,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ].concat(meta)}
        />
    )
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
}

export default SEO
