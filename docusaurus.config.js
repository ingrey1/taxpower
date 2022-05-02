
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TaxPower',
  tagline: 'A modern tax calculation cloud-based API',
  url: 'https://ingrey1.github.io',
  baseUrl: '/taxpower/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ingrey1', 
  projectName: 'taxpower', 

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/ingrey1/taxpower',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [ // add for Open API spec
      'redocusaurus',
      {
        specs: [
          {
            spec: 'taxpower-api.yaml',
            route: '/docs/api-reference/',
          },
        ],
      },
    ]
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Home',
        logo: {
          alt: 'TaxPower Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'overview',
            position: 'left',
            label: 'Documentation',
          },
        
        ],
      },
      footer: {
        style: 'dark',
        links: [
         
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TaxPower, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
