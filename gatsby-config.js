module.exports = {
    siteMetadata: {
        title: `Is Canada real?`,
        description: `Is it? `,
        author: `@iammatthias`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `icr`,
                short_name: `icr`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/maple-leaf.png`,
            },
        },
        `gatsby-plugin-styled-components`,
    ],
}
