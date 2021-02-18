/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  flags: { PRESERVE_WEBPACK_CACHE: true },
  flags: {
    DEV_SSR: false,
  },
  plugins: [`gatsby-plugin-sass`, `gatsby-plugin-styled-components`],
}
