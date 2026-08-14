/**
 * All editable site content.
 *
 * Change the copy here and every page that uses it updates. Nothing in this
 * file invents results FARI has not yet achieved — the organisation was
 * established in 2026, so the site describes commitments and capability
 * rather than historical impact figures. Where a real number belongs later,
 * look for the `PLACEHOLDER` markers.
 */

/* ------------------------------------------------------------------ */
/* Home hero slider                                                    */
/* ------------------------------------------------------------------ */

/**
 * One entry per slide. `image` points at a file in /public/assets/hero —
 * every one of those is a stock placeholder, so swapping in FARI's own
 * photography is a matter of dropping a file in and changing the path.
 * Keep the first slide as the organisation's headline message: it is the
 * one that renders before any JavaScript runs.
 */
export type HeroSlide = {
  image: string;
  /** Describe the photo, not the slide. Replace when the photo is replaced. */
  alt: string;
  kicker: string;
  title: string;
  text: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
};

export const heroSlides: HeroSlide[] = [
  {
    image: "/assets/hero/hero-education.jpg",
    alt: "PLACEHOLDER — students at desks in a classroom",
    kicker: "Future Advancement and Relief Initiative",
    title: "Advancing communities. Delivering relief.",
    text: "FARI works alongside vulnerable communities in Nigeria across education, humanitarian response, climate resilience, livelihoods and protection — with women, youth, children, persons with disabilities and displaced persons at the centre of every programme.",
    primary: { label: "Explore our work", href: "/what-we-do" },
    secondary: { label: "Get involved", href: "/get-involved" },
  },
  {
    image: "/assets/hero/hero-community.jpg",
    alt: "PLACEHOLDER — children gathered beside a water point in a village",
    kicker: "Humanitarian response",
    title: "Help that arrives while it still matters",
    text: "When flooding or displacement uproots a household, the window in which assistance counts is short. We move within it — and hand over responsibly once the emergency passes.",
    primary: { label: "How we respond", href: "/what-we-do/humanitarian-response" },
    secondary: { label: "Support our work", href: "/donate" },
  },
  {
    image: "/assets/hero/hero-climate.jpg",
    alt: "PLACEHOLDER — cultivated farmland under an open sky",
    kicker: "Climate resilience",
    title: "Adapting to a climate already changing",
    text: "Flooded farmland, failed rains and degraded soil are pressures Nigerian communities are absorbing now. We work on adaptation households can afford and restoration communities own.",
    primary: { label: "See the approach", href: "/what-we-do/climate-resilience" },
    secondary: { label: "Partner with us", href: "/get-involved" },
  },
  {
    image: "/assets/hero/hero-livelihoods.jpg",
    alt: "PLACEHOLDER — a trader arranging produce at a market stall",
    kicker: "Livelihoods",
    title: "Income that outlasts the programme",
    text: "Skills matched to real local demand, the start-up capital to put them to work, and mentoring through the first trading months — designed for women, youth and people with disabilities.",
    primary: { label: "Our livelihoods work", href: "/what-we-do/livelihoods" },
    secondary: { label: "Ways to help", href: "/get-involved" },
  },
];

/* ------------------------------------------------------------------ */
/* Focus areas                                                         */
/* ------------------------------------------------------------------ */

export type FocusArea = {
  slug: string;
  title: string;
  short: string;
  summary: string;
  icon: IconName;
  /** Long-form intro on the detail page. */
  intro: string;
  /** What FARI actually does within this area. */
  activities: { title: string; body: string }[];
  /** Who this area is designed to reach. */
  serves: string[];
  gradient: number;
  /** Stock placeholder in /public/assets — replace with FARI photography. */
  image: string;
  /** Wide photo behind this area's page banner. Kept distinct from `image`,
      which appears further down the same page. */
  banner: string;
};

export type IconName =
  | "book"
  | "relief"
  | "climate"
  | "livelihood"
  | "shield"
  | "community"
  | "handshake"
  | "compass"
  | "scales"
  | "growth";

export const focusAreas: FocusArea[] = [
  {
    slug: "education",
    banner: "/assets/hero/hero-education.jpg",
    image: "/assets/education.jpg",
    title: "Education",
    short: "Keeping children learning, and bringing those out of school back in.",
    summary:
      "Access to quality learning for children and young people whose schooling has been interrupted by poverty, displacement, disability or exclusion.",
    icon: "book",
    gradient: 1,
    intro:
      "Education is the intervention that compounds. A child who stays in school is more likely to earn a living wage, less likely to be married early, and better placed to withstand the shocks that push households into crisis. FARI works to remove the practical barriers that keep children out of classrooms — cost, distance, disability, displacement and gender — and to improve the quality of what happens once they are inside.",
    activities: [
      {
        title: "School access support",
        body: "Tuition support, learning materials, uniforms and examination fees for children from low-income households, prioritising girls and children with disabilities.",
      },
      {
        title: "Back-to-learning for displaced children",
        body: "Catch-up and accelerated learning for children whose education has been interrupted by conflict, flooding or displacement, delivered with host-community schools.",
      },
      {
        title: "Inclusive and accessible classrooms",
        body: "Working with schools on accessible facilities, assistive learning materials and teacher orientation so children with disabilities can participate fully.",
      },
      {
        title: "Teacher and school support",
        body: "Practical support to community schools — teaching aids, literacy and numeracy methods, and safeguarding practice.",
      },
      {
        title: "Youth skills and digital literacy",
        body: "Foundational digital and employability skills for young people leaving school, linked to our livelihoods work.",
      },
    ],
    serves: ["Children", "Youth", "Girls and young women", "Persons with disabilities", "Displaced persons"],
  },
  {
    slug: "humanitarian-response",
    banner: "/assets/hero/hero-community.jpg",
    image: "/assets/humanitarian-response.jpg",
    title: "Humanitarian Response",
    short: "Meeting urgent needs when crisis displaces families.",
    summary:
      "Timely, dignified assistance for households affected by displacement, flooding and other emergencies — delivered with communities, not to them.",
    icon: "relief",
    gradient: 2,
    intro:
      "When a household is displaced, the window in which help matters most is short. FARI's humanitarian work is built to move quickly within that window and to hand over responsibly once the immediate emergency passes. We prioritise assistance that preserves dignity and choice, and we design every response so that it strengthens — rather than bypasses — the local structures already carrying the load.",
    activities: [
      {
        title: "Emergency relief distribution",
        body: "Essential food, household and hygiene items for newly displaced and crisis-affected households, targeted through community-verified need.",
      },
      {
        title: "Needs assessment and targeting",
        body: "Rapid assessment with community committees to identify the most vulnerable households and avoid duplication with other responders.",
      },
      {
        title: "Water, sanitation and hygiene",
        body: "Safe water access, sanitation support and hygiene promotion in displacement and host-community settings.",
      },
      {
        title: "Support to host communities",
        body: "Assistance that reaches host families absorbing displaced relatives and neighbours, easing the pressure that drives tension.",
      },
      {
        title: "Recovery and transition",
        body: "Bridging emergency assistance into our livelihoods and education programming so relief leads somewhere.",
      },
    ],
    serves: ["Displaced persons", "Women and girls", "Children", "Older people", "Persons with disabilities"],
  },
  {
    slug: "climate-resilience",
    banner: "/assets/hero/hero-climate.jpg",
    image: "/assets/climate-resilience.jpg",
    title: "Climate Resilience",
    short: "Helping communities adapt to a climate that is already changing.",
    summary:
      "Practical adaptation, environmental restoration and early-warning capacity for communities exposed to flooding, drought and degraded land.",
    icon: "climate",
    gradient: 3,
    intro:
      "Nigerian communities are absorbing climate impacts now — flooded farmland, failed rains, degraded soil and shrinking water sources. FARI treats climate resilience as a development issue rather than an environmental slogan: the objective is that a household hit by a flood or a poor season is still standing afterwards. That means adaptation people can afford, restoration that communities own, and information that reaches households before a shock arrives.",
    activities: [
      {
        title: "Community adaptation planning",
        body: "Working with communities to map their own climate risks and agree practical, locally affordable adaptation measures.",
      },
      {
        title: "Climate-smart agriculture",
        body: "Drought-tolerant and short-cycle crops, improved soil and water practices, and post-harvest handling that reduces loss.",
      },
      {
        title: "Environmental restoration",
        body: "Tree planting, erosion control and land restoration led by community groups, schools and youth volunteers.",
      },
      {
        title: "Early warning and preparedness",
        body: "Helping flood-exposed communities receive, understand and act on early warning information before the water arrives.",
      },
      {
        title: "Clean and efficient energy access",
        body: "Promoting cleaner cooking and lighting options that cut household costs, indoor smoke and pressure on woodland.",
      },
    ],
    serves: ["Farming households", "Women", "Youth", "Flood-exposed communities", "Children"],
  },
  {
    slug: "livelihoods",
    banner: "/assets/hero/hero-livelihoods.jpg",
    image: "/assets/livelihoods.jpg",
    title: "Livelihoods",
    short: "Income that lasts longer than the programme that started it.",
    summary:
      "Skills, start-up support and market access that move households from dependence on aid to durable, self-sustaining income.",
    icon: "livelihood",
    gradient: 4,
    intro:
      "Relief keeps a household alive; a livelihood keeps it standing. FARI's economic programming is judged on whether income continues after our involvement ends. We combine skills that the local market actually demands with the start-up capital, mentoring and market links that determine whether a new enterprise survives its first year — and we design deliberately for women, youth and people with disabilities, who face the steepest barriers to earning.",
    activities: [
      {
        title: "Vocational and enterprise skills",
        body: "Training matched to real local demand, developed with employers and existing tradespeople rather than chosen in advance.",
      },
      {
        title: "Start-up grants and tools",
        body: "Seed capital and equipment so training converts into a working enterprise instead of an unused certificate.",
      },
      {
        title: "Business mentoring",
        body: "Follow-up support through the first trading months — pricing, record keeping, stock and customer management.",
      },
      {
        title: "Savings and financial inclusion",
        body: "Community savings groups that build a cash buffer against shocks and create a route to formal financial services.",
      },
      {
        title: "Market and value chain links",
        body: "Connecting producers and small enterprises to buyers, cooperatives and aggregation points that pay fairer prices.",
      },
    ],
    serves: ["Women", "Youth", "Persons with disabilities", "Displaced persons", "Smallholder farmers"],
  },
  {
    slug: "protection",
    banner: "/assets/banners/page-what-we-do.jpg",
    image: "/assets/protection.jpg",
    title: "Protection",
    short: "Safety, dignity and rights for people most at risk of harm.",
    summary:
      "Preventing and responding to violence, exploitation and exclusion — with safe referral, community awareness and inclusion of those routinely left out.",
    icon: "shield",
    gradient: 5,
    intro:
      "Protection runs through everything else FARI does. Displacement, poverty and crisis sharply increase the risk of violence, exploitation and neglect, and the people most exposed — women, children, and persons with disabilities — are often the least able to seek help. Our protection work aims to reduce that risk, to make sure survivors can reach appropriate services safely, and to hold our own programmes to a standard where they never become a source of harm.",
    activities: [
      {
        title: "Community awareness and prevention",
        body: "Working with community leaders, men and boys, and women's groups to shift the norms that make violence and exclusion tolerated.",
      },
      {
        title: "Safe referral pathways",
        body: "Mapping and connecting survivors to health, psychosocial, legal and shelter services, with confidentiality as the default.",
      },
      {
        title: "Child protection",
        body: "Identifying children at risk of neglect, exploitation, early marriage or separation, and linking families to appropriate support.",
      },
      {
        title: "Disability inclusion",
        body: "Making sure persons with disabilities are identified, consulted and able to access every FARI programme on equal terms.",
      },
      {
        title: "Safeguarding across our work",
        body: "Clear conduct standards, accessible complaints channels and accountability to the communities we serve.",
      },
    ],
    serves: ["Women and girls", "Children", "Persons with disabilities", "Displaced persons", "Survivors of violence"],
  },
];

export const focusAreaBySlug = (slug: string) => focusAreas.find((a) => a.slug === slug);

/* ------------------------------------------------------------------ */
/* Who we serve                                                        */
/* ------------------------------------------------------------------ */

export const priorityGroups = [
  {
    title: "Women",
    body: "Women carry the heaviest share of household and care work and the least access to income, land and decision-making. Every FARI programme is designed to shift that balance.",
  },
  {
    title: "Youth",
    body: "Young people are the largest group in Nigeria and the most exposed to unemployment. We invest in skills, enterprise and leadership rather than one-off engagement.",
  },
  {
    title: "Children",
    body: "Children are the first to lose out when a household is under strain — starting with school. Keeping them learning and safe is a priority across our work.",
  },
  {
    title: "Persons with disabilities",
    body: "Disability is routinely treated as an afterthought in programme design. We identify, consult and include persons with disabilities from the start, not at review stage.",
  },
  {
    title: "Displaced persons",
    body: "Displacement strips households of income, documents, networks and safety at once. We support displaced families and the host communities absorbing them.",
  },
];

/* ------------------------------------------------------------------ */
/* Approach                                                            */
/* ------------------------------------------------------------------ */

export const approach = [
  {
    step: "01",
    title: "Listen first",
    body: "We begin with the community, not a proposal. Needs, priorities and existing capacity are identified with the people who live there before any programme is designed.",
  },
  {
    step: "02",
    title: "Design together",
    body: "Programmes are shaped with community committees, local leaders and the groups most affected — so that what we deliver matches what is actually needed.",
  },
  {
    step: "03",
    title: "Deliver through partnership",
    body: "We work with government agencies, community organisations, donors and local businesses rather than duplicating what already exists.",
  },
  {
    step: "04",
    title: "Measure and publish",
    body: "We agree what success looks like in advance, track it honestly, and report what worked and what did not — including to the communities themselves.",
  },
  {
    step: "05",
    title: "Hand over",
    body: "Every programme is designed with an exit. Skills, assets and decision-making stay with the community when our direct involvement ends.",
  },
];

export const values = [
  {
    title: "Dignity",
    body: "People are partners in their own development, never beneficiaries of our generosity. How assistance is delivered matters as much as what is delivered.",
    icon: "community" as IconName,
  },
  {
    title: "Inclusion",
    body: "If a programme does not reach women, persons with disabilities and displaced people, it is not finished. Inclusion is a design requirement, not an add-on.",
    icon: "scales" as IconName,
  },
  {
    title: "Accountability",
    body: "We are answerable to the communities we serve first, and to our partners and donors alongside them. That means open budgets and honest reporting.",
    icon: "compass" as IconName,
  },
  {
    title: "Partnership",
    body: "Lasting change is built with government, local organisations and communities working together. We are one contributor, not the whole answer.",
    icon: "handshake" as IconName,
  },
  {
    title: "Sustainability",
    body: "We measure success by what continues after we leave — income that persists, children still in school, community structures still functioning.",
    icon: "growth" as IconName,
  },
];

/* ------------------------------------------------------------------ */
/* Ways to get involved                                                */
/* ------------------------------------------------------------------ */

export const involvement = [
  {
    title: "Volunteer",
    body: "Contribute time and skills to programme delivery, community mobilisation, monitoring, communications or administration. We welcome volunteers based in Nigeria and remotely.",
    action: "Register your interest",
    href: "/contact?enquiry=volunteer",
    icon: "community" as IconName,
  },
  {
    title: "Partner with us",
    body: "We work with government agencies, NGOs, community-based organisations, foundations and companies on joint delivery, funding and technical collaboration.",
    action: "Start a conversation",
    href: "/contact?enquiry=partnership",
    icon: "handshake" as IconName,
  },
  {
    title: "Give",
    body: "Direct financial support funds school access, emergency relief, start-up grants and the community structures that carry programmes after we hand over.",
    action: "Support our work",
    href: "/donate",
    icon: "growth" as IconName,
  },
  {
    title: "Work with us",
    body: "As FARI grows we recruit programme, monitoring and operations staff. Roles are published here and through our partner networks.",
    action: "See opportunities",
    href: "/contact?enquiry=careers",
    icon: "compass" as IconName,
  },
];

/* ------------------------------------------------------------------ */
/* Commitments — factual, not performance claims                       */
/* ------------------------------------------------------------------ */

export const commitments = [
  { figure: "2026", label: "Established", note: "Registered as a Nigerian not-for-profit" },
  { figure: "5", label: "Focus areas", note: "Education to protection, designed to connect" },
  { figure: "5", label: "Priority groups", note: "Reached deliberately, not incidentally" },
  { figure: "100%", label: "Community-led", note: "Every programme designed with those it serves" },
];

/* ------------------------------------------------------------------ */
/* News — replace these with real posts as they are published          */
/* ------------------------------------------------------------------ */

export type Post = {
  slug: string;
  title: string;
  date: string; // ISO
  category: string;
  excerpt: string;
  body: string[];
  gradient: number;
  /** Stock placeholder in /public/assets — replace with FARI photography. */
  image: string;
};

export const posts: Post[] = [
  {
    slug: "fari-established-2026",
    image: "/assets/news-1.jpg",
    title: "FARI is established as a Nigerian not-for-profit organisation",
    date: "2026-01-15",
    category: "Announcement",
    gradient: 1,
    excerpt:
      "Future Advancement and Relief Initiative begins work with a mandate spanning education, humanitarian response, climate resilience, livelihoods and protection.",
    body: [
      "Future Advancement and Relief Initiative (FARI) has been established as a Nigerian not-for-profit organisation, with a mandate to support vulnerable communities across five connected areas of work: education, humanitarian response, climate resilience, livelihoods and protection.",
      "FARI was formed around a straightforward observation. The pressures facing Nigerian communities do not arrive one at a time. A flood that destroys a season's harvest also takes children out of school, pushes families into displacement, and increases the risk of exploitation for those who move. Organisations that address only one of those consequences often watch their gains reversed by the others.",
      "FARI's response is to work across all five areas with the same communities, so that relief leads into recovery, and recovery leads into income that lasts. Priority goes to women, youth, children, persons with disabilities and displaced persons — the groups most likely to be missed by programmes that do not deliberately seek them out.",
      "Our first phase of work focuses on establishing community partnerships, completing needs assessments with the communities themselves, and building the operational and safeguarding systems that responsible delivery requires.",
    ],
  },
  {
    slug: "our-approach-community-led-programming",
    image: "/assets/news-2.jpg",
    title: "Why we start with the community, not the proposal",
    date: "2026-02-10",
    category: "Our approach",
    gradient: 3,
    excerpt:
      "Community-led programming is easy to claim and harder to practise. Here is what it means in FARI's design process, and what we give up to do it properly.",
    body: [
      "Almost every organisation in this sector describes its work as community-led. The phrase has been used often enough that it now carries very little information. We want to be specific about what it means at FARI, including the parts that are inconvenient.",
      "It means we do not arrive with a designed programme. Needs assessment happens before programme design, with community committees that include women, young people and persons with disabilities — not only the leaders who are easiest to reach. Where what a community identifies as its priority differs from what we expected to deliver, the community's assessment takes precedence.",
      "It also means slower starts. Building genuine agreement takes longer than distributing a pre-approved package, and it is harder to fund. We accept that trade-off because programmes designed elsewhere have a consistent tendency to stop working the moment the organisation that designed them leaves.",
      "Finally, it means accountability runs in both directions. Communities are told what we have committed to, what it costs, and what we achieved against it. Where we fall short, that is reported to them as well as to our partners and donors.",
    ],
  },
  {
    slug: "partnerships-open-for-2026",
    image: "/assets/news-3.jpg",
    title: "Open call: partnerships for our first programme cycle",
    date: "2026-03-05",
    category: "Partnerships",
    gradient: 4,
    excerpt:
      "FARI is seeking partnerships with community-based organisations, government agencies, foundations and companies for delivery in our first programme cycle.",
    body: [
      "FARI is opening conversations with organisations interested in joint delivery, funding or technical collaboration during our first programme cycle.",
      "We are particularly interested in working with community-based organisations already embedded in the communities we aim to serve. Local organisations hold relationships, trust and context that an incoming organisation cannot replicate, and our model depends on complementing that rather than displacing it.",
      "We also welcome conversations with government agencies at state and local level, with foundations and institutional donors, and with companies seeking substantive community investment rather than one-off visibility.",
      "Organisations interested in exploring a partnership can reach our team through the contact page. Please include a short description of your organisation, the communities you work in, and the kind of collaboration you have in mind.",
    ],
  },
];

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

/* ------------------------------------------------------------------ */
/* Donation tiers — amounts are illustrative until costed              */
/* ------------------------------------------------------------------ */

export const donationTiers = [
  { amount: 5000, label: "Learning materials for a child for one term" },
  { amount: 15000, label: "School access support for one child" },
  { amount: 35000, label: "An emergency relief package for a displaced household" },
  { amount: 75000, label: "Start-up tools and stock for one small enterprise" },
];

export const faqs = [
  {
    q: "Is FARI a registered organisation?",
    a: "FARI is a Nigerian not-for-profit organisation established in 2026. Registration details and governance documents are available on request through our contact page.",
  },
  {
    q: "How is my donation used?",
    a: "Donations fund programme delivery across our five focus areas, with a proportion covering the operational and safeguarding systems that responsible delivery requires. We publish how funds are allocated in our annual reporting.",
  },
  {
    q: "Can I give to a specific focus area?",
    a: "Yes. Restricted giving to a particular focus area or community is welcome — please get in touch so we can confirm what is currently being funded and agree reporting with you.",
  },
  {
    q: "Do you accept in-kind donations?",
    a: "In some cases. Because poorly matched in-kind goods can cost more to move than they are worth, we ask that you contact us first so we can confirm what is genuinely needed.",
  },
  {
    q: "How do you decide which communities to work in?",
    a: "Through needs assessment carried out with communities themselves, in coordination with local authorities and other responders, prioritising areas where need is high and coverage by other organisations is thin.",
  },
  {
    q: "How can my organisation partner with FARI?",
    a: "We work with government agencies, community-based organisations, foundations and companies on joint delivery, funding and technical collaboration. Start with the contact page and our team will follow up.",
  },
];
