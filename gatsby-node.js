const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        },
    })
}

exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
        query PagesQuery {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            type
                            slug
                            pageTitle
                            title
                            subtitle
                            content
                            cards {
                                buttonText
                                description
                                title
                            }
                            destacatedCard {
                                title
                                description
                                buttonText
                                buttonLink
                            }
                            secondaryCard {
                                title
                                description
                                buttonText
                                buttonLink
                            }
                        }
                    }
                }
            }
        }
    `)

    data.allMarkdownRemark.edges.forEach(({ node }) => {
        const page = node.frontmatter

        const addPage = template => {
            actions.createPage({
                path: `/${page.slug}`,
                component: require.resolve(template),
                context: { ...page },
            })
        }

        switch (page.type) {
            case 'legal':
                addPage(`./src/templates/legal-document.js`)
                break
            case 'guide':
                addPage(`./src/templates/guide.js`)
                break
            case 'faq':
                addPage(`./src/templates/faq.js`)
                break
            case 'pricing':
                addPage(`./src/templates/pricing.js`)
                break
        }
    })
}
