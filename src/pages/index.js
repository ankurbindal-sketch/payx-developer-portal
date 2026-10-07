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

/*
 * Information architecture: Choose where to go -> What it takes to complete a payout
 * -> Supporting capabilities -> What else you can integrate.
 *
 * PAYX lists eight steps in apisequence.md and then narrows them itself: "the API
 * call sequence is limited to the Login API, Quotation API, Payout API, and
 * Transaction Enquiry API and the remaining APIs can be called based on the need."
 * That narrowing is the classification used below. Do not reintroduce a prominent
 * "Core API Call Sequence" or "Core flow" section here.
 */
const PAYOUT_JOURNEY = [
  {
    index: '01',
    role: 'Authenticate',
    name: 'Authentication',
    note: 'Obtain the access token used by every subsequent PAYX call.',
    to: '/docs/authentication/authentication',
  },
  {
    index: '02',
    role: 'Price the transfer',
    name: 'Quotation',
    note: 'Fetch the exchange rate and charges, and the forexQuoteId the payout must quote.',
    to: '/docs/quotation/quotation',
  },
  {
    index: '03',
    role: 'Submit the payout',
    name: 'Payout',
    note: 'Initiate the fund transfer. Which contract you send depends on the rail — FIAT, Crypto or WPT.',
    to: '/docs/payouts/overview',
  },
  {
    index: '04',
    role: 'Confirm the outcome',
    name: 'Transaction Enquiry',
    note: 'Check the status of a previously initiated payout.',
    to: '/docs/enquiry/transaction-enquiry',
  },
];

const ENTRY_POINTS = [
  {
    kicker: 'Orientation',
    title: 'Integration journey',
    body: 'What it takes to complete a payout, the supporting APIs called on need, and what else you can integrate.',
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

// Called based on the need of the transaction, the rail and the customer.
const SUPPORTING = [
  {
    kicker: '16 GET operations',
    title: 'Master / reference APIs',
    body: 'The coded values PAYX requests expect: remittance purpose, source of fund, bank lists, crypto networks and customer attributes.',
    to: '/docs/master-apis',
  },
  {
    kicker: 'FIAT',
    title: 'Bank List',
    body: 'Bank details and related parameters required by a specific correspondent, based on the receiver code.',
    to: '/docs/master-apis/bank-list',
  },
  {
    kicker: 'Crypto',
    title: 'Crypto network and wallet validation',
    body: 'Fetch the network list for crypto payments, and validate a crypto wallet address before submitting a payout.',
    to: '/docs/master-apis/crypto-network',
  },
  {
    kicker: 'Customers',
    title: 'Customer registration',
    body: 'Register Business or Individual customers ahead of a payout, or create the customer during the payout request itself.',
    to: '/docs/customers/customer-registration',
  },
  {
    kicker: 'Documents',
    title: 'Document Upload',
    body: 'Upload customer ID proofs and invoices, and reference them from a payout by docReferenceNumber.',
    to: '/docs/documents/document-upload',
  },
];

// Documented PAYX capabilities that are not required to understand the payout journey.
const ADDITIONAL = [
  {
    kicker: 'Wallet',
    title: 'Balance Enquiry',
    body: 'Retrieve the current wallet or account balance. PAYX lists this outside the four-call sequence.',
    to: '/docs/enquiry/balance-enquiry',
  },
  {
    kicker: 'Conditional requirements',
    title: 'Validation rules',
    body: 'Which conditional payout fields a correspondent requires, by currency and rail and by destination country.',
    to: '/docs/validation/field-requirement-rules',
  },
  {
    kicker: 'Responses',
    title: 'Status and response codes',
    body: 'The transaction statuses a payout moves through and the response envelope every PAYX API returns.',
    to: '/docs/status-and-errors',
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

function PayoutJourney() {
  return (
    <section className="payx-section">
      <div className="container">
        <span className="payx-eyebrow">The journey</span>
        <h2>What it takes to complete a payout</h2>
        <p className="payx-journey__lede">
          To complete a payout, an integration authenticates, requests a quotation,
          submits the payout and then confirms the outcome through transaction
          enquiry. Supporting APIs are used where the transaction, the rail or the
          customer requires them.
        </p>
        <ol className="payx-stages">
          {PAYOUT_JOURNEY.map((stage) => (
            <li key={stage.index} className="payx-stage">
              <span className="payx-stage__index">{stage.index}</span>
              <span className="payx-stage__kind">{stage.role}</span>
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
          for the per-rail requirements, how the customer is identified, and the data
          carried between the calls.
        </p>
      </div>
    </section>
  );
}

function Rails() {
  return (
    <section className="payx-section">
      <div className="container">
        <span className="payx-eyebrow">The payout step</span>
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

function SupportingCapabilities() {
  return (
    <section className="payx-section">
      <div className="container">
        <span className="payx-eyebrow">Called on need</span>
        <h2>Supporting capabilities</h2>
        <p className="payx-journey__lede">
          APIs that support the payout journey without being part of the four calls
          that complete it. PAYX describes the Master APIs as subject to requirement.
        </p>
        <div className="payx-grid">
          {SUPPORTING.map((c) => (
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

function Additional() {
  return (
    <section className="payx-section">
      <div className="container">
        <span className="payx-eyebrow">Beyond the payout journey</span>
        <h2>What else you can integrate</h2>
        <div className="payx-grid">
          {ADDITIONAL.map((c) => (
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

export default function Home() {
  return (
    <Layout
      title="PAYX Developer Portal"
      description="Developer documentation for the PAYX (Pay CrossBorder) cross-border payment APIs: authentication, quotation, FIAT/Crypto/WPT payouts, customer registration, master data and validation rules.">
      <Hero />
      {/* Choose where to go -> What it takes to complete a payout ->
          Supporting capabilities -> What else you can integrate */}
      <EntryPoints />
      <PayoutJourney />
      <Rails />
      <SupportingCapabilities />
      <Additional />
    </Layout>
  );
}
