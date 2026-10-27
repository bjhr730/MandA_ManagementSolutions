/**
 * Home page copy.
 *
 * Unlike the other content files this is not lifted from a PDF: the checklist
 * asks for a "Home: Headline, benefits, services overview, clear consultation
 * call-to-action" but no home page copy was drafted. Everything below is
 * assembled from claims the client has already made elsewhere in his own
 * materials, so nothing new is asserted about the business.
 */

export const HERO = {
  eyebrow: 'Northern Virginia Property Management',
  headline: 'Your property deserves an owner\u2019s attention.',
  subhead:
    'M&A Management Solutions is run by a licensed broker who manages ' +
    'rental property of his own. Reliable, transparent management for ' +
    'Northern Virginia owners, whether you have one rental home or a ' +
    'growing portfolio.',
  primaryCta: { label: 'Request an owner consultation', href: '/contact' },
  secondaryCta: { label: 'See what we handle', href: '/services' },
} as const;

/** The three benefits that lead the page, per the checklist. */
export const BENEFITS: readonly {
  title: string;
  body: string;
}[] = [
  {
    title: 'Protect your investment',
    body:
      'Every decision is measured against your property\u2019s long-term ' +
      'value, from maintenance authorizations to renewal pricing.',
  },
  {
    title: 'Know where you stand',
    body:
      'Monthly owner statements, year-end tax documentation, and honest ' +
      'answers whether the news is good or bad.',
  },
  {
    title: 'Get your time back',
    body:
      'Be as involved as you want to be. Hand over the day-to-day entirely, ' +
      'or stay close to every decision. Your call.',
  },
];

export const HOME_FOUNDER_TEASER =
  'Antonio Melendez has participated in more than 215 real estate ' +
  'transactions, personally managed a portfolio of around 60 homes, and led ' +
  'an operation responsible for over 200. He is also a rental property owner ' +
  'himself, which is the part most owners care about.';
