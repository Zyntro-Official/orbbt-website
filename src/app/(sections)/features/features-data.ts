/*
Features Data
*/

// Types
export interface Feature {
  slug: string
  name: string
  description: string
  cta: string
  className: string
  imageSrc: string
  imageAlt: string
  imageClassName: string
}

// Constants — Feature Entries
export const FEATURES: Feature[] = [
  {
    slug: "job-tracking",
    name: "Job Tracking",
    description:
      "Log every opportunity and move it through your pipeline from saved to offer, all in one organized view.",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    imageSrc: "/image.png",
    imageAlt: "Job Tracking screenshot",
    imageClassName:
      "absolute top-0 right-0 w-3/4 h-1/2 object-cover object-left-top rounded-bl-xl transition-all duration-300 ease-out group-hover:scale-105 [mask-image:linear-gradient(to_bottom,#000_60%,transparent_100%)]",
  },
  {
    slug: "ai-research",
    name: "AI Research",
    description:
      "Get AI-driven insight into culture, funding, news, and key people so you walk into every application prepared.",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    imageSrc: "/image.png",
    imageAlt: "AI Research screenshot",
    imageClassName:
      "absolute top-0 right-0 w-3/4 h-1/2 object-cover object-right-top rounded-bl-xl transition-all duration-300 ease-out group-hover:scale-105 [mask-image:linear-gradient(to_bottom,#000_60%,transparent_100%)]",
  },
  {
    slug: "deadline-reminder",
    name: "Deadline Reminder",
    description:
      "Set follow-ups and get timely nudges so interviews, thank-you notes, and decisions never slip away.",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    imageSrc: "/image.png",
    imageAlt: "Deadline Reminder screenshot",
    imageClassName:
      "absolute top-0 right-0 w-3/4 h-1/2 object-cover object-center rounded-bl-xl transition-all duration-300 ease-out group-hover:scale-105 [mask-image:linear-gradient(to_bottom,#000_60%,transparent_100%)]",
  },
  {
    slug: "contact-management",
    name: "Contact Management",
    description:
      "Keep every recruiter, hiring manager, and referral attached to the right role so no relationship falls through.",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    imageSrc: "/image.png",
    imageAlt: "Contact Management screenshot",
    imageClassName:
      "absolute top-0 right-0 w-3/4 h-1/2 object-cover object-right-bottom rounded-bl-xl transition-all duration-300 ease-out group-hover:scale-105 [mask-image:linear-gradient(to_bottom,#000_60%,transparent_100%)]",
  },
  {
    slug: "company-management",
    name: "Company Management",
    description:
      "Track the companies you are targeting, what stage you are at with each, and the people you know there.",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-3",
    imageSrc: "/image.png",
    imageAlt: "Company Management screenshot",
    imageClassName:
      "absolute top-0 right-0 w-3/4 h-1/2 object-cover object-center rounded-bl-xl transition-all duration-300 ease-out group-hover:scale-105 [mask-image:linear-gradient(to_bottom,#000_60%,transparent_100%)]",
  },
]
