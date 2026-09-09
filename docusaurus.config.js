// @ts-check
// PAYX Developer Portal 1.0 — Docusaurus 3.x configuration

const {themes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PAYX Developer Portal',
  tagline: 'Integration documentation for the Pay CrossBorder cross-border payment APIs',

  // The PAYX asset recovered with the source is a wide wordmark (703x186, 3.78:1).
  // It cannot serve as a square favicon without cropping or padding it, so no
  // favicon is configured and none has been fabricated.
  favicon: undefined,

  // Developer Portal deployment URL.
  //
  // TEMPORARY GitHub Pages project-site staging configuration, for visual review
  // before the final PAYX documentation domain is selected. A project site is
  // served from a sub-path, so baseUrl must be the repository name.
  //
  // When the final PAYX custom domain is approved:
  //   url      -> the custom domain
  //   baseUrl  -> '/'
  //   and add static/CNAME
  // No CNAME file is present yet, deliberately.
  //
  // This is the portal's own address. It is unrelated to the PAYX API base URLs
  // used by integrators, which are not established by the PAYX source.
  url: 'https://ankurbindal-sketch.github.io',
  baseUrl: '/payx-developer-portal/',
  trailingSlash: false,

  organizationName: 'ankurbindal-sketch',
  projectName: 'payx-developer-portal',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',
  onDuplicateRoutes: 'throw',

  i18n: {defaultLocale: 'en', locales: ['en']},

  markdown: {
    mermaid: false,
    hooks: {onBrokenMarkdownLinks: 'throw'},
  },

  headTags: [
    {tagName: 'link', attributes: {rel: 'preconnect', href: 'https://fonts.googleapis.com'}},
    {
      tagName: 'link',
      attributes: {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous'},
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap',
      },
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: false,
          breadcrumbs: true,
          sidebarCollapsible: true,
        },
        blog: false,
        pages: {},
        theme: {customCss: require.resolve('./src/css/custom.css')},
        sitemap: {changefreq: 'weekly', priority: 0.5},
      }),
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: '/docs',
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchBarShortcutHint: false,
      }),
    ],
  ],

  themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
    colorMode: {defaultMode: 'light', respectPrefersColorScheme: true},
    docs: {sidebar: {hideable: true, autoCollapseCategories: false}},
    tableOfContents: {minHeadingLevel: 2, maxHeadingLevel: 3},
    navbar: {
      title: 'PAYX Developer Portal',
      hideOnScroll: false,
      // Recovered PAYX source asset (img/pcb1.png), 703x186 native, RGBA with a
      // transparent background. Rendered at 32px height with width scaled to
      // match (703/186 x 32 = 121) so the aspect ratio is exact. The CSS sets
      // height with width:auto, so these attributes only reserve correct space.
      // Branding is isolated here and in static/img/ so the original binary can
      // be swapped in without touching any page.
      logo: {
        alt: 'Pay CrossBorder',
        src: 'img/payx-logo.png',
        width: 121,
        height: 32,
      },
      items: [
        {type: 'docSidebar', sidebarId: 'docsSidebar', position: 'left', label: 'Documentation'},
        {to: '/docs/api-index', label: 'API Index', position: 'left'},
        {to: '/docs/payouts/overview', label: 'Payouts', position: 'left'},
        {to: '/docs/status-and-errors', label: 'Status codes', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Start here',
          items: [
            {label: 'Overview', to: '/docs/'},
            {label: 'Integration journey', to: '/docs/getting-started/integration-journey'},
            {label: 'How to read this reference', to: '/docs/getting-started/conventions'},
          ],
        },
        {
          title: 'Core APIs',
          items: [
            {label: 'Authentication', to: '/docs/authentication/authentication'},
            {label: 'Quotation', to: '/docs/quotation/quotation'},
            {label: 'Payouts', to: '/docs/payouts/overview'},
            {label: 'Transaction Enquiry', to: '/docs/enquiry/transaction-enquiry'},
          ],
        },
        {
          title: 'Reference',
          items: [
            {label: 'API index', to: '/docs/api-index'},
            {label: 'Master / reference APIs', to: '/docs/master-apis'},
            {label: 'Validation rules', to: '/docs/validation/field-requirement-rules'},
            {label: 'Status and response codes', to: '/docs/status-and-errors'},
          ],
        },
        {
          title: 'About',
          items: [
            {label: 'Licence', to: '/docs/legal/licence'},
            {label: 'Pay CrossBorder', href: 'https://www.paycrossborder.com/'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Pay CrossBorder. All rights reserved.`,
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.vsDark,
      additionalLanguages: ['json', 'bash', 'http', 'java', 'csharp'],
    },
  }),
};

module.exports = config;
