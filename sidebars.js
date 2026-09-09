// @ts-check
// Explicit navigation for PAYX Developer Portal 1.0.
//
// Order follows the call sequence PAYX documents: authentication -> quotation ->
// payout -> transaction enquiry, with supporting APIs after the core.

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting started',
      collapsed: false,
      items: [
        'getting-started/integration-journey',
        'getting-started/api-environments',
        'getting-started/conventions',
      ],
    },
    {
      type: 'category',
      label: 'API reference',
      collapsed: false,
      items: [
        'api-index',
        {
          type: 'category',
          label: 'Authentication',
          items: ['authentication/authentication'],
        },
        {
          type: 'category',
          label: 'Quotation',
          items: ['quotation/quotation'],
        },
        {
          // FIAT, Crypto and WPT are separate contracts and stay separate. They
          // share one endpoint but their sender/receiver objects differ by rail.
          type: 'category',
          label: 'Payouts',
          items: [
            'payouts/overview',
            'payouts/fiat-payout',
            'payouts/crypto-payout',
            'payouts/wpt-payout',
          ],
        },
        {
          type: 'category',
          label: 'Customers',
          items: [
            'customers/customer-registration',
            'customers/on-the-fly-registration',
          ],
        },
        {
          type: 'category',
          label: 'Documents',
          items: ['documents/document-upload'],
        },
        {
          type: 'category',
          label: 'Enquiry',
          items: [
            'enquiry/transaction-enquiry',
            'enquiry/balance-enquiry',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Master / reference APIs',
      collapsed: true,
      link: {type: 'doc', id: 'master-apis/master-index'},
      items: [
        'master-apis/remittance-purpose',
        'master-apis/source-of-fund',
        'master-apis/relationship',
        'master-apis/document-id-type',
        'master-apis/occupation',
        'master-apis/customer-occupation-type',
        'master-apis/customer-legal-status',
        'master-apis/customer-individual-document-type',
        'master-apis/business-type',
        'master-apis/business-registration-type',
        'master-apis/nature-of-business',
        'master-apis/bank-list',
        'master-apis/account-type',
        'master-apis/crypto-network',
        'master-apis/validate-crypto-wallet',
        'master-apis/wpt-wallet-list',
      ],
    },
    {
      type: 'category',
      label: 'Validation',
      collapsed: true,
      items: [
        'validation/field-requirement-rules',
        'validation/currency-validations',
        'validation/country-validations',
      ],
    },
    {
      type: 'category',
      label: 'Status and response codes',
      collapsed: true,
      link: {type: 'doc', id: 'status-and-errors/errors-index'},
      items: [
        'status-and-errors/transaction-statuses',
        'status-and-errors/response-envelope',
      ],
    },
    {
      type: 'category',
      label: 'Legal',
      collapsed: true,
      items: ['legal/licence'],
    },

    // Source audit / recovery material is intentionally NOT part of this site.
    //
    // It is not omitted from this sidebar and left routed elsewhere: it does not
    // live under docs/ at all. tools/generate.py writes it to internal-audit/,
    // outside the Docusaurus content path, so Docusaurus never sees it and no
    // route, search entry or sitemap entry is created.
    //
    // `unlisted: true` was tried and is NOT sufficient: it hides a page from the
    // sidebar, the search index and the sitemap, but still builds a publicly
    // reachable route. The audit set contains recovered internal commentary,
    // intentionally hidden API contracts and original personal data in examples,
    // so no public route may exist for it.
    //
    // Do not add internal-audit content to docs/ or to this sidebar.
  ],
};

module.exports = sidebars;
