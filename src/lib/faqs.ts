// FAQ Data — single source of truth for FAQ section + JSON-LD schema
export const faqs = [
  {
    q: "What is Orbbt?",
    a: "Orbbt is a job application tracker for students, recent graduates, career switchers and active job seekers. Save jobs from LinkedIn and Indeed with the Chrome extension, track them on a Kanban board or table, manage companies and contacts, and get deadline reminders.",
  },
  {
    q: "Can I import jobs I already saved?",
    a: "Bulk import is not available yet. You can add your existing applications manually, or save them again in one click each with the Orbbt Chrome extension on LinkedIn or Indeed.",
  },
  {
    q: "Does the AI apply to jobs for me?",
    a: "No. Orbbt never applies to jobs on your behalf. AI Resume Job Match compares your resume with a job description and gives you a match score plus suggestions to improve your chances of being shortlisted. You stay in control of every application.",
  },
  {
    q: "Where does my data live?",
    a: "Your account and job data are stored with our infrastructure providers (Supabase for the database and sign-in, hosted on Vercel) and sent over encrypted HTTPS connections. We do not sell your data. See our Privacy Policy for full details.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes. Free includes unlimited job tracking, table and Kanban views, a company directory, contacts linked to jobs, the browser extension, the mobile app, push deadline reminders on mobile, and 3 AI Resume Job Matches (a one-time allowance that does not reset). Pro costs $7.99 per month and adds 30 AI Resume Job Matches every month and email deadline reminders that you configure by date, time and number of reminders.",
  },
  {
    q: "Which browsers does the extension support?",
    a: "The Orbbt extension works on Google Chrome and supports LinkedIn and Indeed job pages. A Firefox version and support for more job platforms are planned.",
  },
  {
    q: "When is the mobile app coming?",
    a: "The Orbbt mobile app for iOS and Android launches together with the Chrome extension. Use it to manage applications, contacts and companies on the go and to receive deadline reminders on your phone.",
  },
  {
    q: "Can I cancel Pro anytime?",
    a: "Yes. You can cancel Pro at any time and keep access until the end of your billing period. Refund terms are described in our Refund Policy.",
  },
] as const

// Type
export type FAQItem = (typeof faqs)[number]
