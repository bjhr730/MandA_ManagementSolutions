/**
 * The 13 FAQ entries from MA_Management_Solutions_FAQ_Reordered.pdf, in the
 * order the client approved ("13-question FAQ in agreed order").
 *
 * The answers are transcribed verbatim, including the hedging clauses —
 * "subject to the management agreement", "subject to confirmation of our
 * banking and software arrangements", and the "not to suggest that property
 * ownership never involves unexpected expenses" qualifier. Those hedges are
 * deliberate: the master checklist requires every advertised commitment to be
 * checked against the signed contract. Do not tidy them away.
 *
 * `featured: true` marks the answers pulled onto the home page.
 */

export interface FaqEntry {
  readonly q: string;
  readonly a: readonly string[];
  readonly featured?: boolean;
}

export const FAQ_INTRO =
  'At M&A Management Solutions, we believe property owners deserve ' +
  'straightforward answers, clear communication, and transparency. Below are ' +
  'answers to common questions about our services.';

export const FAQ: readonly FaqEntry[] = [
  {
    q: 'How involved do I need to be in managing my property?',
    a: [
      'As involved as you\u2019d like! Every property owner has different preferences. Some enjoy being closely involved, while others prefer a more hands-off experience. We tailor our management approach to your needs, keeping you informed while handling the day-to-day responsibilities of your investment.',
    ],
    featured: true,
  },
  {
    q: 'Are there any hidden fees or additional charges?',
    a: [
      'No hidden fees. We believe in transparent pricing and clearly explaining management fees, leasing-related charges, renewal fees, and any other agreed services before you sign. Any additional costs or services are handled according to the management agreement, with communication and approval where required. Our commitment is to avoid surprises\u2014not to suggest that property ownership never involves unexpected expenses.',
    ],
    featured: true,
  },
  {
    q: 'Do you charge termination fees?',
    a: [
      'No. We don\u2019t believe in holding clients hostage. We believe in earning your business, not locking you into a relationship you\u2019re unhappy with. That\u2019s why we charge $0 in property management termination fees.',
      'If you\u2019re happy, we\u2019d love to continue working together. If you decide it\u2019s time to move on, no hard feelings. Just a handshake and a thank-you for the opportunity. Your property. Your choice. No unnecessary commitments. Reasonable notice and any outstanding obligations remain subject to the management agreement.',
    ],
    featured: true,
  },
  {
    q: 'How do you handle maintenance requests and emergencies?',
    a: [
      'We evaluate maintenance requests based on urgency and coordinate appropriate service providers. Emergencies involving immediate risks to occupants or the property receive priority attention. We keep owners informed of significant repairs and expenses and follow the authorization limits established in the management agreement.',
    ],
  },
  {
    q: 'How do you determine rental rates and handle lease renewals?',
    a: [
      'We take a strategic, market-driven approach to rental pricing and lease renewals. Our goal is to maximize your property\u2019s long-term performance while balancing rental income, occupancy, and your individual investment goals. Leasing and renewal documentation are coordinated with the appropriately licensed brokerage where required.',
    ],
  },
  {
    q: 'Do you work with preferred vendors, or can I use my own contractors?',
    a: [
      'Yes. We maintain an established network of service providers for maintenance, repairs, and property improvements. We are also happy to coordinate with your preferred contractors whenever practical. Our priority is quality work, responsible costs, and the best interests of your property.',
    ],
  },
  {
    q: 'Do you provide leasing and tenant placement services?',
    a: [
      'Yes. Leasing and tenant placement services are available through our affiliated licensed real estate brokerage. Depending on the engagement, services may include rental pricing recommendations, marketing, showings, applicant screening, lease preparation, and move-in coordination. Brokerage services are provided separately from M&A Management Solutions\u2019 property management operations.',
    ],
  },
  {
    q: 'How do you screen prospective tenants?',
    a: [
      'Tenant screening is coordinated through our affiliated brokerage and applicable screening providers using consistent, legally compliant criteria. Depending on the application and applicable law, screening may include income and employment verification, credit history, rental history, and landlord references. All decisions are made in accordance with fair housing and other applicable requirements.',
    ],
  },
  {
    q: 'Will I receive monthly financial statements and year-end reports?',
    a: [
      'Yes. We provide monthly owner statements detailing rental income, expenses, and relevant account activity, along with year-end accounting summaries and applicable tax documentation to make reporting to your CPA or tax professional easier.',
    ],
  },
  {
    q: 'How will I receive my rental income?',
    a: [
      'Owner disbursements are available by ACH direct deposit or paper check, according to your preference. We intend to offer both methods without an additional disbursement fee, subject to confirmation of our banking and software arrangements.',
    ],
  },
  {
    q: 'Can you pay my condominium fees, mortgage, insurance, and other property-related bills?',
    a: [
      'Yes. We can tailor the management agreement to your needs, including coordination of condominium or HOA fees, insurance premiums, mortgage payments, utilities, and other recurring property expenses. Payments are subject to available funds, the agreed authorization, and sufficient lead time for processing.',
    ],
  },
  {
    q: 'Do you coordinate with condominium associations and homeowners associations?',
    a: [
      'Yes. We coordinate with condominium associations, HOAs, building managers, and their representatives on matters such as move-in and move-out requirements, building access, maintenance, association notices, and required documentation.',
    ],
  },
  {
    q: 'Do you work with out-of-state and international property owners?',
    a: [
      'Absolutely. We welcome owners who live locally, elsewhere in the United States, or abroad. We can communicate through email, phone, or WhatsApp, helping you stay informed and involved wherever you are located.',
    ],
    featured: true,
  },
];

export const FEATURED_FAQ = FAQ.filter((entry) => entry.featured);
