import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

/*
 * Landing page for PAYX Developer Portal 1.0.
 *
 * Every factual statement here is taken from the authoritative PAYX source
 * export (README.md, apisequence.md, master.md, and the PAYOUT-FIAT /
 * PAYOUT-CRYPTO / PAYOUT-WPT contracts). No product claims, capabilities,
 * performance figures, SLAs or environment URLs have been added.
 */

// PAYX names four APIs as its call sequence and states that the remaining APIs
// "can be called based on the need" — apisequence.md.
const CORE = [
  {
    index: '01',
    kind: 'Core transaction API',
    name: 'Authentication',
    note: 'Authenticate and obtain the access token for subsequent calls.',
    to: '/docs/authentication/authentication',
  },
  {
    index: '02',
    kind: 'Core transaction API',
    name: 'Quotation',
    note: 'Fetch the exchange rate and charges before initiating a payout.',
    to: '/docs/quotation/quotation',
  },
  {
    index: '03',
    kind: 'Core transaction API',
    name: 'Payout',
    note: 'Initiate the fund transfer based on the selected quotation and beneficiary — FIAT, Crypto or WPT.',
    to: '/docs/payouts/overview',
  },
  {
    index: '04',
    kind: 'Core transaction API',
    name: 'Transaction Enquiry',
    note: 'Check the status of a previously initiated payout.',
    to: '/docs/enquiry/transaction-enquiry',
  },
];

const ENTRY_POINTS = [
  {
    kicker: 'Orientation',
    title: 'Integration journey',
    body: 'The call sequence PAYX documents, split into the core flow and the supporting APIs called on need.',
    to: '/docs/getting-started/integration-journey',
  },
  {
    kicker: 'Reference',
    title: 'API index',
    body: 'Every public PAYX API with its method, purpose and endpoint.',
    to: '/docs/api-index',
  },
  {
    kicker: 'Conventions',
    title: 'How to read this reference',
    body: 'Requirement flags, endpoint path conventions, the response envelope and the code systems PAYX uses.',
    to: '/docs/getting-started/conventions',
  },
];

// The three payout rails PAYX documents as separate contracts.
const RAILS = [
  {
    kicker: 'B2B · C2C · C2B · B2C',
    title: 'FIAT Payout',
    body: 'Bank payouts. The receiver object carries bank account, bank code, SWIFT code and account type fields.',
    to: '/docs/payouts/fiat-payout',
  },
  {
    kicker: 'B2B · C2C · C2B · B2C',
    title: 'Crypto Payout',
    body: 'Crypto payouts, carrying cryptoNetwork and walletAddress in place of bank details, with network and wallet-address validation APIs.',
    to: '/docs/payouts/crypto-payout',
  },
  {
    kicker: 'C2C',
    title: 'WPT Payout',
    body: 'Wallet payouts, with receiverServiceProvider fields identifying the wallet provider.',
    to: '/docs/payouts/wpt-payout',
  },
];

const CAPABILITIES = [
  {
    kicker: '16 GET operations',
    title: 'Master / reference APIs',
    body: 'The coded values PAYX requests expect: remittance purpose, source of fund, bank lists, crypto networks and customer attributes.',
    to: '/docs/master-apis',
  },
  {
    kicker: 'Customers',
    title: 'Customer registration',
    body: 'Register Business or Individual customers ahead of a payout, or on the fly during the payout request itself.',
    to: '/docs/customers/customer-registration',
  },
  {
    kicker: 'Documents',
    title: 'Document Upload',
    body: 'Upload customer ID proof documents and reference them from a payout by docReferenceNumber.',
    to: '/docs/documents/document-upload',
  },
  {
    kicker: 'Conditional requirements',
    title: 'Validation rules',
    body: 'Which conditional payout fields a correspondent requires, by currency and rail and by destination country.',
    to: '/docs/validation/field-requirement-rules',
  },
];

function Hero() {
  return (
    <header className="payx-hero">
      <div className="container">
        {/* Recovered PAYX source asset (img/pcb1.png), 703x186 native, RGBA with a
            transparent background. Rendered at a fixed height with width:auto so
            the aspect ratio is preserved. */}
        <img
          className="payx-hero__logo"
          src={useBaseUrl('img/payx-logo.png')}
          alt="Pay CrossBorder"
          width={703}
          height={186}
        />
        <span className="payx-eyebrow">PAYX Developer Portal 1.0</span>
        <h1>Integrate cross-border payouts with the Pay CrossBorder API</h1>
        <p>
          Pay CrossBorder is a global payments infrastructure enabling financial
          institutions, PSPs and businesses to send, receive and settle high-risk
          cross-border payments through Crypto and FIAT rails. The APIs described
          on this portal are limited to Financial Institution Customers.
        </p>
        <div className="payx-cta-row">
          <Link
            className="button button--primary button--lg"
            to="/docs/getting-started/integration-journey">
            Start with the integration journey
          </Link>
          <Link
            className="button button--secondary button--outline button--lg"
            to="/docs/api-index">
            Browse the API index
          </Link>
        </div>
      </div>
    </header>
  );
}

function EntryPoints() {
  return (
    <section className="payx-section">
      <div className="container">
        <span className="payx-eyebrow">Start here</span>
        <h2>Choose where to go</h2>
        <div className="payx-grid">
          {ENTRY_POINTS.map((c) => (
            <Link key={c.title} className="payx-card" to={c.to}>
              <span className="payx-card__kicker">{c.kicker}</span>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoreFlow() {
  return (
    <section className="payx-section">
      <div className="container">
        <span className="payx-eyebrow">Core flow</span>
        <h2>The four APIs PAYX names as the sequence</h2>
        <p className="payx-journey__lede">
          PAYX documents an eight-step ordering, then states that the sequence is
          limited to the Login, Quotation, Payout and Transaction Enquiry APIs and
          that the remaining APIs can be called based on the need. Those four are
          below; everything else is supporting.
        </p>
        <ol className="payx-stages">
          {CORE.map((stage) => (
            <li key={stage.index} className="payx-stage">
              <span className="payx-stage__index">{stage.index}</span>
              <span className="payx-stage__kind">{stage.kind}</span>
              <Link className="payx-stage__name" to={stage.to}>
                {stage.name}
              </Link>
              <p className="payx-stage__note">{stage.note}</p>
            </li>
          ))}
        </ol>
        <p className="payx-journey__more">
          <Link to="/docs/getting-started/integration-journey">
            See the full integration journey
          </Link>{' '}
          for the supporting APIs and the data carried between calls.
        </p>
      </div>
    </section>
  );
}

function Rails() {
  return (
    <section className="payx-section">
      <div className="container">
        <span className="payx-eyebrow">Payouts</span>
        <h2>Three payout rails, three contracts</h2>
        <p className="payx-journey__lede">
          FIAT, Crypto and WPT payouts are submitted to the same endpoint and share
          the same four-object request envelope, but their sender and receiver
          objects differ by rail, so PAYX documents each as its own contract.
        </p>
        <div className="payx-grid">
          {RAILS.map((c) => (
            <Link key={c.title} className="payx-card" to={c.to}>
              <span className="payx-card__kicker">{c.kicker}</span>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="payx-section">
      <div className="container">
        <span className="payx-eyebrow">Supporting capabilities</span>
        <h2>What else you can integrate</h2>
        <div className="payx-grid">
          {CAPABILITIES.map((c) => (
            <Link key={c.title} className="payx-card" to={c.to}>
              <span className="payx-eyebrow">{c.kicker}</span>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="PAYX Developer Portal"
      description="Developer documentation for the PAYX (Pay CrossBorder) cross-border payment APIs: authentication, quotation, FIAT/Crypto/WPT payouts, customer registration, master data and validation rules.">
      <Hero />
      <EntryPoints />
      <CoreFlow />
      <Rails />
      <Capabilities />
    </Layout>
  );
}
