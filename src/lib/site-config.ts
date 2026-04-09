const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://authorblancadelarosa.com";

export const siteConfig = {
  siteUrl,
  name: "Blanca De La Rosa",
  title: "Blanca De La Rosa",
  tagline: "Write to Inspire, Uplift, and Encourage Through My Words",
  description:
    "Author of memoir, fiction, spiritual, and career-development books that draw on Blanca De La Rosa's immigrant journey, corporate leadership, and gift for encouragement.",
  primaryNav: [
    { href: "/", label: "Home" },
    { href: "/books", label: "Books" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  footerNav: [
    { href: "/books", label: "Books" },
    { href: "/about", label: "About Blanca" },
    { href: "/events", label: "Events & Speaking" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  socialLinks: [
    { href: "https://twitter.com/authordelarosa", label: "Twitter" },
    { href: "https://facebook.com/authorbmdelarosa", label: "Facebook" },
    { href: "https://linkedin.com/in/blanca-de-la-rosa-406a2232", label: "LinkedIn" },
  ],
  hero: {
    eyebrow: "Author, Speaker, Mentor",
    title: "Stories and guidance for readers building a better tomorrow.",
    summary:
      "Blanca De La Rosa writes across memoir, fiction, spirituality, and career development with the same mission: to inspire resilience, deepen self-belief, and encourage purposeful growth.",
    primaryCta: { href: "/books", label: "Explore the Books" },
    secondaryCta: { href: "/about", label: "Meet Blanca" },
    featuredBookSlugs: [
      "broken-vows-a-blessing-in-disguise",
      "your-power-within",
      "pursuing-a-better-tomorrow",
    ],
  },
  homeSections: {
    featuredBookEyebrow: "Latest release",
    selectedBooksTitle: "A body of work shaped by experience, faith, and reinvention",
    selectedBooksSummary:
      "From multi-generational memoir to contemporary fiction and practical career guidance, Blanca's books speak to readers navigating ambition, identity, loss, and renewal.",
    credibilityTitle: "A life that informs the work",
    credibilitySummary:
      "Born in the Dominican Republic, raised in Manhattan, and seasoned by a 34-year corporate career, Blanca brings lived perspective to every page and every room she speaks in.",
  },
  stats: [
    { label: "Featured editions", value: "11" },
    { label: "Years in corporate leadership", value: "34" },
    { label: "Genres and themes", value: "4" },
  ],
  award: {
    title: "Recognized for literary excellence",
    quote:
      "This valuable book of insights can be used by anyone, in any job, at any level, who is striving to get ahead.",
    source: "New England Book Festival",
    caption: "Review of Empower Yourself for an Amazing Career",
  },
  about: {
    eyebrow: "About Blanca",
    title: "An author shaped by grit, leadership, and faith.",
    intro:
      "Blanca De La Rosa's life journey spans cultures, industries, and generations. Her writing reflects hard-earned experience, quiet conviction, and a commitment to encouraging others through change.",
    milestones: [
      {
        title: "Dominican roots, New York upbringing",
        description:
          "Her early years between the Dominican Republic and Manhattan continue to inform the identity, migration, and belonging themes in her memoir and fiction.",
      },
      {
        title: "Corporate leadership",
        description:
          "A 34-year career at Mobil and ExxonMobil shaped Blanca's practical voice on work, mentorship, and perseverance.",
      },
      {
        title: "Mentorship and advocacy",
        description:
          "As a manager, speaker, and employee resource group leader, Blanca invested deeply in helping others find confidence and direction.",
      },
      {
        title: "Books with purpose",
        description:
          "Her catalogue blends storytelling, spiritual reflection, and career wisdom to serve readers seeking both encouragement and clarity.",
      },
    ],
  },
  events: {
    eyebrow: "Events and speaking",
    title: "Workshops and conversations rooted in lived experience",
    summary:
      "Blanca speaks on career growth, personal empowerment, mentorship, and the inner work required to move through transition with courage.",
    offerings: [
      {
        title: "Career empowerment workshops",
        description:
          "Sessions for professionals and emerging leaders on confidence, personal brand, communication, and navigating workplace change.",
      },
      {
        title: "Author talks and readings",
        description:
          "Programs centered on Blanca's books, her immigrant journey, and the life experiences that shaped her fiction and memoir.",
      },
      {
        title: "Faith, grief, and inner guidance conversations",
        description:
          "Reflective talks drawn from Blanca's spiritual writing for audiences looking for encouragement, healing, and personal growth.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Reach out for speaking, book conversations, or media inquiries",
    summary:
      "Use the form to inquire about workshops, interviews, book clubs, podcast appearances, and reader correspondence.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
