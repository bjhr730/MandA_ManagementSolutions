/**
 * Single source of truth for every real-world fact about the business.
 *
 * Everything marked REPLACE is a placeholder that must be filled in before
 * launch. Nothing here is invented: no phone number, address, licence number
 * or statistic is guessed at. Search the repo for "REPLACE" to find them all.
 */

export const SITE_URL: string = (
  import.meta.env.SITE_URL ?? 'https://replace-me.example.com'
).replace(/\/$/, '');

/**
 * Search engines are kept out until this is explicitly turned on.
 *
 * The site carries placeholder contact details and unreviewed legal text
 * before launch, and a staging deployment is a real, crawlable origin. An
 * indexed pre-launch copy competes with the real site and puts draft
 * disclosures in front of the public, so the safe default is "no".
 *
 * Set SITE_INDEXABLE="true" in the production environment at launch.
 */
export const INDEXABLE: boolean = import.meta.env.SITE_INDEXABLE === 'true';

/** Public-facing brand name, used in headings and nav. */
export const BRAND = 'M&A Management Solutions';

/** Full legal entity. Required in advertising alongside the brand name. */
export const LEGAL_ENTITY = 'M&A Management Solutions of Virginia, LLC';

export const TAGLINE = 'Your Property. Our Responsibility.';

/** Name, address, phone — also feeds the LocalBusiness structured data. */
export const CONTACT = {
  /** REPLACE with the real business line. */
  phone: '(703) 000-0000',
  phoneHref: 'tel:+17030000000',
  /** REPLACE with the real business inbox. */
  email: 'info@replace-me.example.com',
  /** REPLACE. Omit entirely if the business has no public office address. */
  address: {
    street: 'REPLACE — street address',
    city: 'REPLACE — city',
    region: 'VA',
    postalCode: 'REPLACE',
    country: 'US',
  },
  /** REPLACE with real staffed hours. */
  hours: 'Monday – Friday, 9:00 am – 5:00 pm ET',
  /** Out-of-state and international owners, per the FAQ. */
  whatsapp: true,
} as const;

/**
 * Counties and cities served. Used in body copy and in the `areaServed`
 * structured data. Confirm against where the business is actually licensed
 * and willing to operate before launch.
 */
export const SERVICE_AREAS = [
  'Fairfax County',
  'Arlington County',
  'City of Alexandria',
  'Loudoun County',
  'Prince William County',
  'Falls Church',
  'Vienna',
  'Reston',
] as const;

/**
 * Buildium owner and tenant portals are not live yet. The master checklist is
 * explicit: "Add portal links and Buildium mention only when live." Flip this
 * to true and fill in the URLs below, and every portal link and mention
 * appears across the site. Leave it false and they all stay hidden.
 */
export const PORTALS_LIVE = false;

export const PORTALS = {
  owner: 'REPLACE — owner portal URL',
  tenant: 'REPLACE — resident portal URL',
} as const;

/** Set to a real profile URL to show the link; leave null to hide it. */
export const SOCIAL: { label: string; href: string }[] = [];

export const NAV = [
  { href: '/services', label: 'Services' },
  { href: '/management-plans', label: 'Management Plans' },
  { href: '/why-us', label: 'Why Choose Us' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
] as const;

export const FOOTER_NAV = {
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/founder', label: 'Meet the Founder' },
    { href: '/philosophy', label: 'Our Philosophy' },
    { href: '/why-us', label: 'Why Choose Us' },
  ],
  services: [
    { href: '/services', label: 'Our Services' },
    { href: '/management-plans', label: 'Management Plans' },
    { href: '/faq', label: 'Frequently Asked Questions' },
    { href: '/portals', label: 'Owner & Resident Portals' },
  ],
  legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Website Terms' },
    { href: '/fair-housing', label: 'Fair Housing' },
    { href: '/accessibility', label: 'Accessibility' },
  ],
} as const;
