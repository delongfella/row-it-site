// Service pages. DRAFT copy written from the existing site text: Rohit should review before launch.
export interface Service {
  slug: string;
  n: string;
  title: string;
  h1: string;
  short: string; // as shown on the homepage
  metaTitle: string;
  metaDescription: string;
  intro: string;
  forWho: string[];
  covers: string[];
  lens: string;
  related: string[]; // blog post slugs
}

export const services: Service[] = [
  {
    slug: 'course-correction-coaching',
    n: '01',
    title: 'Course Correction Coaching',
    h1: 'Course Correction Coaching for professionals at a crossroads',
    short: 'Support for professionals or individuals at a crossroads, needing structure and clarity to move forward.',
    metaTitle: 'Course Correction Coaching – Career & Life Clarity',
    metaDescription:
      'Career and life coaching for professionals at a crossroads. Rohit Kumar, pilot-trainer and ICF-trained coach, helps you find clarity and a next step.',
    intro:
      'In the cockpit, a small correction made early beats a large one made late. Course Correction Coaching helps you notice where you have drifted, decide where you want to go, and plan the way there with structure and clarity.',
    forWho: [
      'Professionals who feel stuck, restless or unsure about the next career move',
      'Anyone standing at a crossroads in work, relationships or life direction',
      'People who know what they want to change but not how to begin',
    ],
    covers: [
      'Getting honest about where you are now and where you want to be',
      'Spotting the thoughts, habits and beliefs that quietly hold you back',
      'Turning your options into a simple plan with checkpoints',
      'Building accountability so that progress lasts',
    ],
    lens:
      'Pilots are trained to identify risks early, keep a plan with enough safety nets and stay calm when things change. Rohit brings the same discipline, presence and foresight into coaching conversations, as an ICF-trained (Level 2) coach.',
    related: ['navigating-the-maze-of-success', 'when-the-past-comes-knocking', 'why-do-we-repeat-the-same-relationship-with-different-people'],
  },
  {
    slug: 'flow-mapping',
    n: '02',
    title: 'Flow Mapping',
    h1: 'Flow Mapping: find your rhythm across life, work and wellness',
    short: 'Discover your own rhythm across life, work, and wellness to create a life that feels aligned.',
    metaTitle: 'Flow Mapping – Life Alignment Coaching',
    metaDescription:
      'Flow Mapping is a coaching process to find your own rhythm across life, work, relationships, money and wellness. With Rohit Kumar, ICF-trained coach.',
    intro:
      'Rohit believes every person can have flow in their personal life, relationships, money and career. Flow Mapping helps you see where you already move with ease, where there is friction, and what to change.',
    forWho: [
      'People who are busy and capable but feel out of sync with their own life',
      'Professionals balancing work, family and health who want a clearer rhythm',
      'Anyone who wants their choices to match their own purpose',
    ],
    covers: [
      'Mapping the areas of your life: work, relationships, money, wellness',
      'Finding where you feel in flow and where things feel forced',
      'Clarifying your desires and values so your goals fit them',
      'Designing small, sustainable changes to your routines',
    ],
    lens:
      'Just as a flight needs a plan that fits the aircraft, the weather and the destination, a good life plan has to fit you. Flow Mapping starts from your own patterns, not a generic formula.',
    related: ['is-desire-a-trap', 'reflections-of-joy', 'how-perception-shapes-our-reality'],
  },
  {
    slug: 'decision-debrief-sessions',
    n: '03',
    title: 'Decision Debrief Sessions',
    h1: 'Decision Debrief Sessions: calm, structured decisions under pressure',
    short: 'Learn how to make calm, structured decisions under pressure, like a pilot in the cockpit.',
    metaTitle: 'Decision-Making Coaching – Decision Debrief Sessions',
    metaDescription:
      'Learn a pilot’s approach to decision-making under pressure. Decision Debrief Sessions with Rohit Kumar use proven aviation frameworks.',
    intro:
      'Pilots make fast, high-stakes decisions with incomplete information, and they debrief afterwards to learn. Decision Debrief Sessions bring that discipline to your own decisions, past and upcoming.',
    forWho: [
      'Managers and leaders who make decisions with real consequences',
      'Anyone replaying a tough decision and wondering if it was right',
      'People who freeze, rush or second-guess under pressure',
    ],
    covers: [
      'A step-by-step method inspired by aviation tools such as FORDEC: facts, options, risks, decision, execution, cross-check',
      'Debriefing a past decision without hindsight and outcome bias',
      'Noticing the emotions and biases that shape your choices',
      'Making your next important decision calmly and on purpose',
    ],
    lens:
      'In aviation, a good decision is judged by the information available at the time, not by how things turned out. Rohit helps you apply the same standard to your own life and work.',
    related: ['decision-making', 'outcome-bias', 'when-the-horizon-lied'],
  },
  {
    slug: 'launchpad-for-students',
    n: '04',
    title: 'Launchpad for Students',
    h1: 'Launchpad for Students: life skills, career clarity and confidence',
    short: 'Empowering students and young adults with life skills, career clarity, and confidence for their journey ahead.',
    metaTitle: 'Career Coaching for Students & Young Adults',
    metaDescription:
      'Launchpad for Students: coaching in life skills, career clarity and confidence for students and young adults, from pilot-trainer Rohit Kumar.',
    intro:
      'Launchpad is for students and young adults at the start of their journey who want more clarity about their choices and more confidence in making them.',
    forWho: [
      'School and college students thinking about streams, courses and careers',
      'Young adults starting their first job or considering a change',
      'Parents who want their child to learn decision-making and life skills',
    ],
    covers: [
      'Understanding your strengths, interests and what matters to you',
      'Learning to make choices that fit your own purpose',
      'Building focus, problem solving and awareness of risks',
      'Growing the confidence to follow through on a plan',
    ],
    lens:
      'Rohit has spent years training young pilots in focus, decision-making and having a plan with safety nets. Launchpad brings those life skills to students in a way that fits any career.',
    related: ['decision-making', 'navigating-the-maze-of-success', 'the-anatomy-of-an-iconic-catch'],
  },
];
