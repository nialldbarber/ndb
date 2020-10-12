module.exports = {
  siteMetadata: {
    title: 'Niall Barber',
    author: 'Niall Barber',
    description: 'Front End Developer',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/posts`,
    //     name: `posts`,
    //   },
    // },
  ],
};
