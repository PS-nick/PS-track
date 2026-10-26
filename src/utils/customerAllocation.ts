import { ServiceUnit } from '../types/process';
import { getCustomCustomers } from '../constants/motorsport';
import { UserProfile } from '../context/AuthContext';

export interface CustomerDirectoryEntry {
  email: string;
  customerName: string;
  category: string;
  tier: 'works' | 'customer';
  contactPerson: string;
  phone: string;
  address: string;
  sampleUnitsCount?: number;
  sampleWorkOrders?: string[];
  notes?: string;
}

/**
 * Standard Customer Accounts with pre-configured corporate email addresses
 */
export const DEFAULT_CUSTOMER_ACCOUNTS: CustomerDirectoryEntry[] = [
  {
    email: 'marco.rossi@scuderiaferrari.com',
    customerName: 'Scuderia Ferrari HP',
    category: 'Formula 1',
    tier: 'works',
    contactPerson: 'Marco Rossi (Chassis Dynamics Lead)',
    phone: '+39 0536 949111',
    address: 'Via Abetone Inferiore 4, Maranello, Modena, Italy',
    sampleWorkOrders: ['WO-2026-0941', 'WO-2026-0948', 'WO-2026-0962'],
    notes: 'FIA F1 Grand Prix constructor · Priority emergency turnaround allocated',
  },
  {
    email: 'alex.schmidt@porsche-motorsport.com',
    customerName: 'Porsche Penske Motorsport (963)',
    category: 'WEC Hypercar',
    tier: 'works',
    contactPerson: 'Alex Schmidt (Power Unit Systems)',
    phone: '+49 711 911-0',
    address: 'Porschestrasse 911, Weissach, Germany',
    sampleWorkOrders: ['WO-2026-0942', 'WO-2026-0955'],
    notes: 'FIA WEC & IMSA GTP Le Mans 24h factory prototype entry',
  },
  {
    email: 'powertrains@redbullracing.com',
    customerName: 'Red Bull Racing Powertrains',
    category: 'Formula 1',
    tier: 'works',
    contactPerson: 'David Coupland (Hydraulics & Cooling Lead)',
    phone: '+44 1908 279700',
    address: 'Bradbourne Drive, Tilbrook, Milton Keynes, UK',
    sampleWorkOrders: ['WO-2026-0946'],
    notes: 'Milton Keynes PU campus · Ultra-high pressure 210 bar spec',
  },
  {
    email: 'tech@teampenske.com',
    customerName: 'Team Penske IndyCar',
    category: 'IndyCar Series',
    tier: 'works',
    contactPerson: 'Ron Ruzewski (Managing Director)',
    phone: '+1 704 664 2300',
    address: '200 Penske Way, Mooresville, NC, USA',
    sampleWorkOrders: ['WO-2026-0943'],
    notes: 'IndyCar NTT Series Oval & Road Course configuration',
  },
  {
    email: 'wrc@toyotagazooracing.com',
    customerName: 'Toyota Gazoo Racing WRT (Yaris Rally1)',
    category: 'WRC Rally',
    tier: 'works',
    contactPerson: 'Jari-Matti Latvala (Team Principal)',
    phone: '+358 20 743 0000',
    address: 'Jyväskylä Technical Campus, Finland',
    sampleWorkOrders: ['WO-2026-0944'],
    notes: 'FIA World Rally Championship Rally1 gravel durability protocol',
  },
  {
    email: 'racing@thor-motorsport.com',
    customerName: 'THOR',
    category: 'WEC Hypercar',
    tier: 'works',
    contactPerson: 'Marcus Vance (Chief Engineer)',
    phone: '+44 1869 321800',
    address: 'Building 105, Bicester Motion, Oxfordshire, UK',
    sampleWorkOrders: ['WO-2026-0950'],
    notes: 'Hypercar endurance matrix · 24h continuous thermal test',
  },
  {
    email: 'racing@manthey-ema.de',
    customerName: 'Manthey EMA (Porsche 911 GT3 R)',
    category: 'GT3 / IMSA',
    tier: 'works',
    contactPerson: 'Nicolas Raeder (Operations Director)',
    phone: '+49 2691 93380',
    address: 'Rudolf-Diesel-Strasse 11, Meuspath, Nürburgring, Germany',
    sampleWorkOrders: ['WO-2026-0947'],
    notes: 'Nürburgring 24h & DTM GT3 works customer entry',
  },
  {
    email: 'f1@mercedesamgf1.com',
    customerName: 'Mercedes-AMG PETRONAS F1 Team',
    category: 'Formula 1',
    tier: 'works',
    contactPerson: 'Andrew Shovlin (Trackside Engineering)',
    phone: '+44 1280 844000',
    address: 'Brackley Campus, Northamptonshire, UK',
    sampleWorkOrders: ['WO-2026-0949'],
    notes: 'Brackley single-seater works chassis cooling',
  },
  {
    email: 'heritage@classicteamlotus.co.uk',
    customerName: 'Classic Team Lotus',
    category: 'Historic / Heritage',
    tier: 'works',
    contactPerson: 'Clive Chapman (Managing Director)',
    phone: '+44 1953 601311',
    address: 'Potash Lane, Hethel, Norfolk, UK',
    sampleWorkOrders: ['WO-2026-0951'],
    notes: 'Preservation & historic Grand Prix certification',
  },
];

/**
 * Returns a default corporate contact email for a motorsport customer/team
 */
export function getCustomerDefaultEmail(customerName?: string): string {
  if (!customerName) return 'client@motorsport-client.com';
  const cLow = customerName.toLowerCase();
  
  if (cLow.includes('ferrari')) return 'marco.rossi@scuderiaferrari.com';
  if (cLow.includes('porsche') && (cLow.includes('penske') || cLow.includes('963'))) return 'alex.schmidt@porsche-motorsport.com';
  if (cLow.includes('red bull') || cLow.includes('rbpt')) return 'powertrains@redbullracing.com';
  if (cLow.includes('penske') && cLow.includes('indycar')) return 'tech@teampenske.com';
  if (cLow.includes('toyota')) return 'wrc@toyotagazooracing.com';
  if (cLow.includes('thor')) return 'racing@thor-motorsport.com';
  if (cLow.includes('manthey')) return 'racing@manthey-ema.de';
  if (cLow.includes('mercedes')) return 'f1@mercedesamgf1.com';
  if (cLow.includes('lotus')) return 'heritage@classicteamlotus.co.uk';
  if (cLow.includes('mclaren')) return 'engineering@mclaren.com';
  if (cLow.includes('aston martin')) return 'technical@astonmartinf1.com';
  if (cLow.includes('alpine')) return 'racing@alpine-cars.com';
  if (cLow.includes('williams')) return 'operations@williamsf1.com';
  if (cLow.includes('cadillac')) return 'v-series@cadillacracing.com';
  if (cLow.includes('bmw')) return 'motorsport@bmw-m.com';
  if (cLow.includes('ducati')) return 'corse@ducati.com';

  const sanitized = customerName.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
  return `contact@${sanitized}.com`;
}


/**
 * Pre-configured Workshop Service Technicians
 */
export interface TechnicianPreset {
  name: string;
  email: string;
  role: 'lead_engineer' | 'technician' | 'qa_inspector' | 'admin';
  roleLabel: string;
  badgeColor: string;
  initials: string;
  specialty: string;
}

export const PRESET_TECHNICIANS: TechnicianPreset[] = [
  {
    name: 'Nicola Malgarotti',
    email: 'n.malgarotti@particle-science.com',
    role: 'lead_engineer',
    roleLabel: 'Lead Overhaul Engineer',
    badgeColor: 'border-amber-500/40 bg-amber-500/10 text-amber-300',
    initials: 'NM',
    specialty: 'Workshop Lead · Hydraulic Bench Master · Quality Sign-off',
  },
  {
    name: 'Dave Vance',
    email: 'd.vance@particle-science.com',
    role: 'technician',
    roleLabel: 'Diagnostic & Flow Rig Specialist',
    badgeColor: 'border-sky-500/40 bg-sky-500/10 text-sky-300',
    initials: 'DV',
    specialty: 'Flow Rate Dynamometer · Dynamic Rig Cleaning & Micron Optics',
  },
  {
    name: 'Mark Spencer',
    email: 'm.spencer@particle-science.com',
    role: 'qa_inspector',
    roleLabel: 'Senior QA & Conformance Inspector',
    badgeColor: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300',
    initials: 'MS',
    specialty: 'ISO 17025 Compliance · Burst Pressure Proofing & Sign-off',
  },
  {
    name: 'Sarah Jenkins',
    email: 's.jenkins@particle-science.com',
    role: 'technician',
    roleLabel: 'Thermal & Ultrasonic Technician',
    badgeColor: 'border-purple-500/40 bg-purple-500/10 text-purple-300',
    initials: 'SJ',
    specialty: 'High-Temp Degassing Oven · Fin Gilling & Precision Dressing',
  },
];

/**
 * Intelligent matcher to verify if a unit belongs strictly to a customer email address
 */
export function isUnitAllocatedToCustomerEmail(
  unit: ServiceUnit,
  customerEmail: string | null | undefined
): boolean {
  if (!customerEmail || !customerEmail.trim()) return false;
  const inputEmail = customerEmail.trim().toLowerCase();

  // 1. Direct match on unit customerEmail
  if (unit.customerEmail && unit.customerEmail.toLowerCase().trim() === inputEmail) {
    return true;
  }

  // 2. Direct match on supplierContactEmail
  if (unit.supplierContactEmail && unit.supplierContactEmail.toLowerCase().trim() === inputEmail) {
    return true;
  }

  // 3. Direct match on intake supplierContactEmail
  if (unit.intake?.supplierContactEmail && unit.intake.supplierContactEmail.toLowerCase().trim() === inputEmail) {
    return true;
  }

  // 4. Match against pre-configured DEFAULT_CUSTOMER_ACCOUNTS
  const matchedPreset = DEFAULT_CUSTOMER_ACCOUNTS.find(
    (acc) => acc.email.toLowerCase() === inputEmail
  );
  if (matchedPreset) {
    const presetNameLower = matchedPreset.customerName.toLowerCase();
    const unitCustomerLower = (unit.customerName || '').toLowerCase();
    const supplierCompanyLower = (unit.supplierCompanyName || '').toLowerCase();

    // Check exact or partial team name match
    if (unitCustomerLower === presetNameLower || supplierCompanyLower === presetNameLower) {
      return true;
    }
    // Check key identifiers (e.g. "ferrari", "porsche", "red bull", "penske", "toyota", "thor", "manthey", "mercedes", "lotus")
    const keyToken = presetNameLower.split(/[\s()]+/)[0];
    if (keyToken && keyToken.length > 3) {
      if (unitCustomerLower.includes(keyToken) || supplierCompanyLower.includes(keyToken)) {
        return true;
      }
    }
  }

  // 5. Match against Custom Customers directory stored in localStorage
  const customCustomers = getCustomCustomers();
  const matchedCustom = customCustomers.find(
    (c) => c.contactEmail && c.contactEmail.toLowerCase().trim() === inputEmail
  );
  if (matchedCustom) {
    const customNameLower = matchedCustom.name.toLowerCase();
    const unitCustomerLower = (unit.customerName || '').toLowerCase();
    if (unitCustomerLower === customNameLower || unitCustomerLower.includes(customNameLower)) {
      return true;
    }
  }

  // 6. Domain-based matching for corporate constructor emails
  // e.g. "technician@scuderiaferrari.com" -> domain contains "ferrari" -> matches "Scuderia Ferrari HP"
  const atIndex = inputEmail.indexOf('@');
  if (atIndex > 0) {
    const domain = inputEmail.slice(atIndex + 1);
    const domainBody = domain.split('.')[0] || '';
    const unitCustomerLower = (unit.customerName || '').toLowerCase();
    const supplierLower = (unit.supplierCompanyName || '').toLowerCase();

    const domainKeywords: Record<string, string[]> = {
      ferrari: ['ferrari'],
      scuderiaferrari: ['ferrari'],
      porsche: ['porsche'],
      penske: ['penske'],
      redbull: ['red bull', 'rbpt'],
      redbullracing: ['red bull', 'rbpt'],
      mclaren: ['mclaren'],
      mercedes: ['mercedes'],
      mercedesamgf1: ['mercedes'],
      astonmartin: ['aston martin'],
      alpine: ['alpine'],
      williams: ['williams'],
      sauber: ['sauber', 'kick'],
      haas: ['haas'],
      toyota: ['toyota'],
      toyotagazooracing: ['toyota'],
      thor: ['thor'],
      'thor-motorsport': ['thor'],
      manthey: ['manthey'],
      cadillac: ['cadillac'],
      bmw: ['bmw'],
      lotus: ['lotus'],
      classicteamlotus: ['lotus'],
      ducati: ['ducati'],
      hyundai: ['hyundai'],
    };

    const targetKeywords = domainKeywords[domainBody] || [domainBody];
    for (const kw of targetKeywords) {
      if (kw && kw.length >= 3 && (unitCustomerLower.includes(kw) || supplierLower.includes(kw))) {
        return true;
      }
    }
  }

  return false;
}

/**
 * Filter units array to return ONLY units allocated to the given customer email
 */
export function getAllocatedUnitsForCustomer(
  units: ServiceUnit[],
  customerEmail: string | null | undefined
): ServiceUnit[] {
  if (!customerEmail) return [];
  return units.filter((u) => isUnitAllocatedToCustomerEmail(u, customerEmail));
}

/**
 * Resolves customer company display name and metadata from an email
 */
export function getCustomerInfoByEmail(email: string | null | undefined): {
  customerName: string;
  category: string;
  tier: 'works' | 'customer';
  contactPerson?: string;
  phone?: string;
} {
  if (!email) {
    return {
      customerName: 'Client Constructor',
      category: 'Motorsport',
      tier: 'customer',
    };
  }

  const clean = email.toLowerCase().trim();

  // Check predefined directory
  const preset = DEFAULT_CUSTOMER_ACCOUNTS.find((a) => a.email.toLowerCase() === clean);
  if (preset) {
    return {
      customerName: preset.customerName,
      category: preset.category,
      tier: preset.tier,
      contactPerson: preset.contactPerson,
      phone: preset.phone,
    };
  }

  // Check custom customers
  const customList = getCustomCustomers();
  const custom = customList.find(
    (c) => c.contactEmail && c.contactEmail.toLowerCase().trim() === clean
  );
  if (custom) {
    return {
      customerName: custom.name,
      category: custom.categoryId || 'Motorsport',
      tier: custom.tier || 'customer',
      contactPerson: custom.contactName,
      phone: custom.contactPhone,
    };
  }

  // Fallback domain extraction
  const domain = email.includes('@') ? email.split('@')[1] : email;
  const company = domain.split('.')[0] || 'Client Organization';
  const capitalized = company.charAt(0).toUpperCase() + company.slice(1);

  return {
    customerName: capitalized,
    category: 'Client Overhaul Services',
    tier: 'customer',
    contactPerson: email.split('@')[0],
  };
}

/**
 * Check if current user is an assigned service technician / depot staff member
 * Only assigned persons can access Service Analytics and Daily Quota.
 */
export function isAssignedPerson(profile: UserProfile | null | undefined): boolean {
  if (!profile) return false;
  if (profile.role === ('customer' as any)) return false;
  return ['lead_engineer', 'technician', 'qa_inspector', 'admin'].includes(profile.role);
}

/**
 * Helper to check access for service analytics & daily quota
 */
export function canAccessServiceAnalytics(profile: UserProfile | null | undefined): boolean {
  return isAssignedPerson(profile);
}

export function canAccessDailyQuota(profile: UserProfile | null | undefined): boolean {
  return isAssignedPerson(profile);
}
