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
                nodes {
                    frontmatter {
                        slug
                        pageTitle
                        title
                        content
                    }
                }
            }
        }
    `)

    data.allMarkdownRemark.nodes.forEach(({ frontmatter }) => {
        const page = frontmatter

        actions.createPage({
            path: `/${page.slug}`,
            component: require.resolve(`./src/templates/legal-document.js`),
            context: { ...page },
        })
    })
}
