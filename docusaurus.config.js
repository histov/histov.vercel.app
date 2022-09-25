// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '한문원전정보',
  tagline: '마크다운으로 원문자료 구축',
  url: 'https://text.lovesoon.kr',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'G-4JTQT9RXMP',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '한문원전정보',
        hideOnScroll: true,
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: '經/經',
            position: 'left',
            label: '經',
          },
          {
            type: 'doc',
            docId: '史/史',
            position: 'left',
            label: '史',
          },
          {
            type: 'doc',
            docId: '子/子',
            position: 'left',
            label: '子',
          },
          {
            type: 'doc',
            docId: '集/集',
            position: 'left',
            label: '集',
          },
          {to: '/blog', label: '블로그(공사중)', position: 'right'},
          {
            href: 'https://github.com/histov/histov.vercel.app',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '분류',
            items: [
              {
                label: '經',
                to: '/docs/經',
              },
              {
                label: '史',
                to: '/docs/史',
              },
              {
                label: '子',
                to: '/docs/子',
              },
              {
                label: '集',
                to: '/docs/集',
              },
            ],
          },
          {
            title: '추천사이트',
            items: [
              {
                label: '한국고전종합DB',
                href: 'https://db.itkc.or.kr',
              },
              {
                label: '동양고전종합DB',
                href: 'https://db.cyberseodang.or.kr',
              },
              {
                label: '한국사데이터베이스',
                href: 'https://db.history.go.kr/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/histov/histov.vercel.app',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 誠之者. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: 'JXU273ACMI',
        apiKey: '069738da9dec25b52ab8a9a564fb8fa9',
        indexName: 'histov_NAME',
        contextualSearch: true,
        searchParameters: {},
        searchPagePath: 'search',
      },
    }),
};

module.exports = config;