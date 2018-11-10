/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

const siteConfig = {
  title: 'Nitrogen Labs' /* title for your website */,
  tagline: 'A website for testing',
  url: 'https://nitrogenlabs.com' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'nlabs-site',
  organizationName: 'nitrogenlabs',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'doc1', label: 'Docs'},
    {doc: 'doc4', label: 'API'},
    {page: 'help', label: 'Help'},
    {blog: true, label: 'Blog'},
  ],

  /* path to images for header/footer */
  headerIcon: "img/lex-logo-wh.svg",
  footerIcon: "img/nl-logo-wh.svg",
  favicon: "img/favicon.png",

  /* colors for website */
  colors: {
    primaryColor: "#824CB2",
    secondaryColor: "#bb8eff"
  },


  /* custom fonts for website */
  fonts: {
    siteFont: ["Open Sans", "Helvetica"]
  },

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright: "Copyright © " + new Date().getFullYear() + " Nitrogen Labs, Inc.",

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: "atom-one-dark"
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: ['https://buttons.github.io/buttons.js'],

  stylesheets: [
    "https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700"
  ],
  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  chatUrl: 'https://discord.gg/Ttgev58',
  repoUrl: 'https://github.com/nitrogenlabs/nlabs-site'
};

module.exports = siteConfig;
