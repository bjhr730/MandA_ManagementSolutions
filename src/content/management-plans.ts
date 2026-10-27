/**
 * Management plans page.
 *
 * Both checklists are explicit on this point:
 *   "Customized Management Plans section (no public rate chart)"
 *   "Pricing decision: Do not publish a fixed fee chart. Explain that
 *    management services and pricing are customized, disclose all applicable
 *    fees in each proposal, and invite owners to request a personalized
 *    management proposal."
 *
 * So this page describes the approach and the fee categories that exist, and
 * names no numbers. If anyone later asks for a price table here, that request
 * contradicts the signed-off plan.
 */

export const PLANS_INTRO =
  'There is no one-size-fits-all management fee here, and no rate card to ' +
  'squeeze your property into. A single condominium with an HOA, a ' +
  'townhouse that needs a turnover, and a small portfolio of rentals are ' +
  'three different jobs. We look at your property and your goals, then put ' +
  'a written proposal in front of you with every applicable fee disclosed.';

/** How involved the owner wants to be. Straight from FAQ question 1. */
export const INVOLVEMENT: readonly {
  title: string;
  body: string;
}[] = [
  {
    title: 'Hands-off',
    body:
      'You want the property handled. We take the day-to-day decisions ' +
      'within the authorization limits you set, keep you informed of ' +
      'anything significant, and send your statements and disbursements on ' +
      'schedule.',
  },
  {
    title: 'Hands-on',
    body:
      'You want to stay close to your investment. You keep approval over ' +
      'repairs, pricing and renewals, and we do the coordinating, ' +
      'documenting and chasing.',
  },
  {
    title: 'Somewhere in between',
    body:
      'Most owners land here, and the line moves over time. The management ' +
      'agreement records where it sits today and can be revisited.',
  },
];

/**
 * Fee categories that may appear in a proposal. Named, not priced, and
 * deliberately matching the FAQ wording: "management fees, leasing-related
 * charges, renewal fees, and any other agreed services".
 */
export const FEE_CATEGORIES: readonly string[] = [
  'Monthly management fee',
  'Leasing and tenant placement charges, through the affiliated brokerage',
  'Lease renewal fees',
  'Any other services you and we agree to in writing',
];

export const WHATS_INCLUDED: readonly string[] = [
  'Rent collection and owner disbursement by ACH or check',
  'Monthly owner statements and year-end tax documentation',
  'Maintenance triage and vendor coordination',
  'Emergency response for risks to occupants or the property',
  'Tenant relations and lease compliance',
  'Move-in, move-out and turnover documentation',
  'Condominium association and HOA coordination',
  'Strategic rental pricing and renewal recommendations',
];

export const NO_TERMINATION_FEE = {
  headline: '$0 management termination fees',
  body:
    'We don\u2019t believe in holding clients hostage. If you decide it\u2019s ' +
    'time to move on, no hard feelings \u2014 just a handshake and a ' +
    'thank-you for the opportunity.',
};
