module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.yourdomain.tld',
        title: 'new-up',
        description: '',
        author: '',
    },
    plugins: [
        'gatsby-plugin-netlify-cms',
        'gatsby-plugin-styled-components',
        'gatsby-transformer-remark',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: 'content/pages',
            },
            __key: 'pages',
        },
    ],
}
