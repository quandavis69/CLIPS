export interface BlogSection {
  heading: string;
  body: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  category: string;
  publishDate: string;
  updatedDate?: string;
  excerpt: string;
  intro: string[];
  sections: BlogSection[];
  relatedServices: { title: string; href: string }[];
  relatedPosts: string[];
}

export const categories = [
  "Lawn Care Basics",
  "Fertilization",
  "Weed Control",
  "Irrigation",
  "Seasonal Lawn Care",
  "Lawn Aeration",
  "Dethatching",
  "Landscaping",
  "Property Maintenance",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "how-often-should-you-mow-your-lawn",
    title: "How Often Should You Mow Your Lawn?",
    metaDescription: "Learn how often to mow your lawn in Central Oregon based on the season, grass growth, and mowing height best practices.",
    category: "Lawn Care Basics",
    publishDate: "2026-11-01",
    excerpt: "The right mowing frequency depends on how fast your grass is growing, not a fixed weekly schedule.",
    intro: [
      "One of the most common questions we get from Central Oregon homeowners is simple: how often should I actually be mowing? The honest answer is that it depends less on the calendar and more on how fast your grass is growing at any given point in the season.",
    ],
    sections: [
      {
        heading: "The One-Third Rule",
        body: [
          "A good rule of thumb is to never cut more than about one-third of the grass blade's height in a single mow. Cutting shorter than that stresses the lawn and can lead to a weaker, patchier root system over time. If you're regularly cutting off more than a third of the blade, that's a sign you're mowing too infrequently for how fast the lawn is growing.",
        ],
      },
      {
        heading: "How Frequency Changes Through the Season",
        body: [
          "In spring, when grass growth ramps up quickly, weekly mowing is typically necessary to keep up. During the hottest, driest stretch of a Central Oregon summer, growth often slows down, and some lawns can stretch to a bi-weekly schedule without cutting more than that one-third threshold. In fall, growth can pick back up again before the lawn goes dormant for winter.",
        ],
      },
      {
        heading: "Signs Your Schedule Needs Adjusting",
        body: [
          "If your lawn looks uneven right after mowing, or if you're noticing clumps of clippings rather than fine mulched pieces, that's often a sign the mowing interval is too long for the current growth rate. On the other hand, if the lawn barely looks different before and after a mow, you may be able to stretch the interval out.",
        ],
      },
    ],
    relatedServices: [
      { title: "Weekly Lawn Maintenance", href: "/services/lawn-mowing" },
      { title: "Lawn Fertilization", href: "/services/lawn-fertilization" },
    ],
    relatedPosts: ["why-is-my-lawn-turning-yellow", "common-lawn-care-mistakes-homeowners-make"],
  },
  {
    slug: "why-is-my-lawn-turning-yellow",
    title: "Why Is My Lawn Turning Yellow?",
    metaDescription: "Common reasons a Central Oregon lawn turns yellow, from watering issues to compacted soil, and what to check first.",
    category: "Lawn Care Basics",
    publishDate: "2026-11-01",
    excerpt: "Yellowing grass usually points to one of a handful of common causes - here's what to check first.",
    intro: [
      "A lawn that's turning yellow or patchy is frustrating, but the cause is usually one of a few common issues. Working through them in order can help narrow down what's actually going on with your specific property.",
    ],
    sections: [
      {
        heading: "Watering Issues",
        body: [
          "Both too little and too much water can cause yellowing. In Central Oregon's dry summers, inconsistent watering is one of the most common culprits - deep, less frequent watering generally supports healthier roots than frequent shallow watering.",
        ],
      },
      {
        heading: "Compacted Soil",
        body: [
          "If water and nutrients aren't reaching the root zone because the soil is compacted, grass can thin out and yellow even with adequate watering and fertilization. This is a common issue on lawns with regular foot traffic, and it's exactly what aeration is designed to address.",
        ],
      },
      {
        heading: "Nutrient Deficiency",
        body: [
          "Lawns that haven't been fertilized in a while, or that are growing in Central Oregon's naturally nutrient-poor soils, can turn pale yellow-green rather than a healthy deep green. A scheduled fertilization program is the most direct way to address this.",
        ],
      },
      {
        heading: "Pet Damage or Localized Spots",
        body: [
          "If the yellowing is in small, concentrated spots rather than spread across the whole lawn, pet urine spots or localized thatch buildup are worth checking before assuming a broader watering or nutrient issue.",
        ],
      },
    ],
    relatedServices: [
      { title: "Lawn Aeration", href: "/services/aeration" },
      { title: "Lawn Fertilization", href: "/services/lawn-fertilization" },
      { title: "Weekly Lawn Maintenance", href: "/services/lawn-mowing" },
    ],
    relatedPosts: ["what-is-lawn-aeration-and-why-is-it-important", "when-to-fertilize-your-lawn-in-bend-oregon"],
  },
  {
    slug: "when-to-fertilize-your-lawn-in-bend-oregon",
    title: "When to Fertilize Your Lawn in Bend, Oregon",
    metaDescription: "A seasonal fertilization timeline for Bend, Oregon lawns, covering spring, midseason, and fall applications.",
    category: "Fertilization",
    publishDate: "2026-11-01",
    excerpt: "Bend's short growing season and high desert climate call for a specific fertilization timeline.",
    intro: [
      "Bend's high desert climate - cold winters, a relatively short growing season, and often sandy, nutrient-poor native soil - means fertilization timing matters more here than it might in milder climates.",
    ],
    sections: [
      {
        heading: "Spring Application",
        body: [
          "As the lawn comes out of winter dormancy and growth resumes, a spring application helps support the lawn through its biggest growth push of the year.",
        ],
      },
      {
        heading: "Midseason Application",
        body: [
          "A midseason application carries the lawn through the hottest, driest part of summer, when grass is under the most stress from heat and limited rainfall.",
        ],
      },
      {
        heading: "Fall Application",
        body: [
          "A fall application before the lawn goes dormant helps it store energy for a stronger start the following spring - this is often an underrated step in a full-season program.",
        ],
      },
      {
        heading: "Why Timing Matters More in Central Oregon",
        body: [
          "Because the growing season here is shorter than in many other regions, there's less margin for error - missing a window can mean the lawn doesn't get the full benefit of that application before conditions change. A scheduled program timed to the local season is more effective than fertilizing on an arbitrary schedule.",
        ],
      },
    ],
    relatedServices: [
      { title: "Lawn Fertilization", href: "/services/lawn-fertilization" },
      { title: "Weed Control", href: "/services/weed-control" },
      { title: "Lawn Aeration", href: "/services/aeration" },
    ],
    relatedPosts: ["why-is-my-lawn-turning-yellow", "how-to-get-rid-of-weeds-in-your-lawn"],
  },
  {
    slug: "how-to-get-rid-of-weeds-in-your-lawn",
    title: "How to Get Rid of Common Lawn Weeds",
    metaDescription: "A practical approach to controlling common lawn weeds in Central Oregon, from pre-emergent timing to seasonal treatments.",
    category: "Weed Control",
    publishDate: "2026-11-01",
    excerpt: "Effective weed control is about timing and consistency more than any single treatment.",
    intro: [
      "Weeds thrive wherever turf grass is thin, stressed, or struggling - which makes consistent lawn care and a scheduled treatment program the most effective long-term approach, rather than one-off spot treatments after weeds have already taken hold.",
    ],
    sections: [
      {
        heading: "Start with Pre-Emergent Timing",
        body: [
          "A spring pre-emergent application, applied before weed seeds germinate, is one of the most effective single steps you can take - it prevents a large share of weeds from ever sprouting in the first place.",
        ],
      },
      {
        heading: "Follow Up Through the Season",
        body: [
          "Pre-emergent alone isn't enough for weeds that do get established. Seasonal summer and fall herbicide applications target weeds that emerge later in the season, when conditions change and different weed species become active.",
        ],
      },
      {
        heading: "A Healthy Lawn Is Your Best Defense",
        body: [
          "Thick, well-maintained turf naturally competes with weeds for light, water, and nutrients. Regular mowing at the right height, consistent watering, and a fertilization program all make it harder for weeds to get a foothold in the first place.",
        ],
      },
    ],
    relatedServices: [
      { title: "Weed Control", href: "/services/weed-control" },
      { title: "Lawn Fertilization", href: "/services/lawn-fertilization" },
      { title: "Weekly Lawn Maintenance", href: "/services/lawn-mowing" },
    ],
    relatedPosts: ["when-to-fertilize-your-lawn-in-bend-oregon", "common-lawn-care-mistakes-homeowners-make"],
  },
  {
    slug: "what-is-lawn-aeration-and-why-is-it-important",
    title: "What Is Lawn Aeration and Why Is It Important?",
    metaDescription: "An explanation of lawn aeration, how it relieves soil compaction, and when to schedule it for a Central Oregon lawn.",
    category: "Lawn Aeration",
    publishDate: "2026-11-01",
    excerpt: "Aeration relieves soil compaction so water, air, and nutrients can actually reach the root zone.",
    intro: [
      "Aeration is one of those lawn care services that's easy to overlook because the benefit happens below the surface - but for many Central Oregon properties, it's one of the most impactful things you can do for long-term lawn health.",
    ],
    sections: [
      {
        heading: "What Aeration Actually Does",
        body: [
          "Core aeration pulls small plugs of soil out of the lawn, creating channels that let water, air, and nutrients reach the root zone more effectively. Without it, compacted soil can trap everything you apply to the surface, limiting how much actually benefits the grass.",
        ],
      },
      {
        heading: "Signs Your Lawn May Be Compacted",
        body: [
          "Water pooling instead of soaking in, thinning grass in high-traffic areas, and a lawn that feels hard or spongy underfoot can all point to compaction - especially on lawns with regular foot traffic, pets, or clay-heavy soil.",
        ],
      },
      {
        heading: "When to Aerate in Central Oregon",
        body: [
          "Spring and fall are both effective windows here. Some properties benefit from aerating in both seasons, especially if soil compaction is significant or the lawn sees heavy use.",
        ],
      },
    ],
    relatedServices: [
      { title: "Lawn Aeration", href: "/services/aeration" },
      { title: "Lawn Dethatching", href: "/services/dethatching" },
      { title: "Lawn Fertilization", href: "/services/lawn-fertilization" },
    ],
    relatedPosts: ["what-is-lawn-dethatching", "why-is-my-lawn-turning-yellow"],
  },
  {
    slug: "what-is-lawn-dethatching",
    title: "What Is Lawn Dethatching?",
    metaDescription: "What lawn dethatching is, how it differs from aeration, and when a Central Oregon lawn needs it.",
    category: "Dethatching",
    publishDate: "2026-11-01",
    excerpt: "Dethatching removes a buried layer of dead organic material that can quietly choke out a healthy lawn.",
    intro: [
      "Thatch is the layer of dead grass stems, roots, and organic debris that builds up between the soil surface and the green grass blades above it. A thin layer is normal, but when it builds up too much, it can start working against your lawn instead of protecting it.",
    ],
    sections: [
      {
        heading: "How Thatch Builds Up",
        body: [
          "Thatch accumulates naturally over time, especially on older, well-established lawns. Some grass types and maintenance practices accelerate the buildup more than others.",
        ],
      },
      {
        heading: "Signs Your Lawn Needs Dethatching",
        body: [
          "A spongy feel underfoot, water that doesn't soak in well, and thinning grass despite regular watering and fertilization can all point to a thatch layer that's gotten too thick.",
        ],
      },
      {
        heading: "Dethatching vs. Aeration",
        body: [
          "Aeration relieves soil compaction by removing small plugs of soil from below the surface. Dethatching removes the built-up organic layer sitting above the soil. Some lawns benefit from one, some from both - the right approach depends on what's actually limiting your lawn's health.",
        ],
      },
    ],
    relatedServices: [
      { title: "Lawn Dethatching", href: "/services/dethatching" },
      { title: "Lawn Aeration", href: "/services/aeration" },
      { title: "Weekly Lawn Maintenance", href: "/services/lawn-mowing" },
    ],
    relatedPosts: ["what-is-lawn-aeration-and-why-is-it-important"],
  },
  {
    slug: "how-to-prepare-your-irrigation-system-for-winter",
    title: "How to Prepare Your Sprinkler System for Winter in Bend, Oregon",
    metaDescription: "Why irrigation winterization matters in Bend, Oregon's cold winters, and what a professional blowout involves.",
    category: "Irrigation",
    publishDate: "2026-11-01",
    excerpt: "Winterizing your irrigation system before freezing temperatures arrive protects it from costly freeze damage.",
    intro: [
      "Bend's winters bring hard freezes that can seriously damage an irrigation system if water is left sitting in the lines. Winterizing - clearing water from the system before the first hard freeze - is one of the most important seasonal maintenance steps for any property with in-ground irrigation.",
    ],
    sections: [
      {
        heading: "Why Water Left in the Lines Is a Problem",
        body: [
          "Water expands as it freezes. Left inside irrigation pipes, valves, and sprinkler heads, that expansion can crack components and lead to leaks or system failures that often aren't discovered until the following spring startup.",
        ],
      },
      {
        heading: "What a Blowout Involves",
        body: [
          "Clearing water from the lines before winter helps protect the system from that freeze damage, reducing the risk of needing repairs when you turn the system back on in spring.",
        ],
      },
      {
        heading: "Pairing Winterization with Spring Startup",
        body: [
          "Winterizing in the fall and starting the system back up properly in spring work together - a system that was properly blown out in the fall generally has a smoother, more reliable startup the following season.",
        ],
      },
    ],
    relatedServices: [
      { title: "Irrigation Services", href: "/services/irrigation" },
      { title: "Weekly Lawn Maintenance", href: "/services/lawn-mowing" },
    ],
    relatedPosts: ["when-to-fertilize-your-lawn-in-bend-oregon"],
  },
  {
    slug: "what-should-be-included-in-a-complete-property-cleanup",
    title: "What Should Be Included in a Complete Property Cleanup?",
    metaDescription: "What a thorough property cleanup covers, from landscape debris to pressure washing, and when a bigger cleanup makes sense.",
    category: "Property Maintenance",
    publishDate: "2026-11-01",
    excerpt: "A complete property cleanup covers more ground than routine weekly maintenance - here's what to expect.",
    intro: [
      "Routine weekly maintenance keeps a lawn looking tidy week to week, but some situations call for a more thorough, one-time reset - preparing a property for sale, catching up after a period of neglect, or getting ready for a big event.",
    ],
    sections: [
      {
        heading: "Landscape Cleanup Basics",
        body: [
          "A solid cleanup typically covers lawn mowing, edging, weed removal, and clearing debris from landscape beds and walkways - the baseline work needed to make a property look cared for again.",
        ],
      },
      {
        heading: "Hardscape Cleaning",
        body: [
          "Pressure washing driveways, walkways, and patios can make an outsized difference in how a property looks and feels, especially ahead of photos or showings - though not every surface is suited to standard high-pressure washing, so it's worth having it assessed first.",
        ],
      },
      {
        heading: "Irrigation and Plant Health Checks",
        body: [
          "A thorough cleanup is also a good opportunity to check irrigation coverage and address any obvious plant or lawn health issues before they become bigger problems.",
        ],
      },
      {
        heading: "When a Bigger Cleanup Makes Sense",
        body: [
          "If you're preparing a home for sale, getting a rental or vacant property ready, or just need multiple exterior tasks handled in one coordinated visit, a comprehensive service like our Total Property Clean is designed for exactly that situation.",
        ],
      },
    ],
    relatedServices: [
      { title: "Total Property Clean", href: "/total-property-clean" },
      { title: "Spring & Fall Cleanups", href: "/services/seasonal-cleanups" },
      { title: "Bi-Weekly Property Cleanup", href: "/services/cleanup-maintenance" },
    ],
    relatedPosts: ["how-often-should-you-mow-your-lawn"],
  },
  {
    slug: "common-lawn-care-mistakes-homeowners-make",
    title: "Common Lawn Care Mistakes Homeowners Make",
    metaDescription: "The most common lawn care mistakes we see on Central Oregon properties, and simple ways to avoid them.",
    category: "Lawn Care Basics",
    publishDate: "2026-11-01",
    excerpt: "A handful of simple habits make the biggest difference between a struggling lawn and a thriving one.",
    intro: [
      "After maintaining lawns throughout Central Oregon, we tend to see the same handful of mistakes come up again and again - most of them are easy to fix once you know what to look for.",
    ],
    sections: [
      {
        heading: "Mowing Too Short, Too Infrequently",
        body: [
          "Cutting grass too short, or letting it grow too long between mows and then scalping it back down, both stress the lawn. Following the one-third rule and mowing at a consistent, appropriate height makes a real difference over time.",
        ],
      },
      {
        heading: "Watering on a Fixed Schedule Regardless of Conditions",
        body: [
          "A sprinkler timer set-and-forgotten doesn't account for rain, temperature swings, or seasonal changes in how much water the lawn actually needs - leading to either overwatering or underwatering depending on conditions.",
        ],
      },
      {
        heading: "Skipping Aeration and Dethatching",
        body: [
          "Because these services address what's happening below the surface, it's easy to assume the lawn is fine when really it's compacted or thatch-bound and not responding to fertilization the way it should.",
        ],
      },
      {
        heading: "Treating Weeds Reactively Instead of Proactively",
        body: [
          "Waiting until weeds are visible and widespread, rather than starting with a spring pre-emergent application, means fighting an uphill battle all season instead of preventing most of the problem in the first place.",
        ],
      },
    ],
    relatedServices: [
      { title: "Weekly Lawn Maintenance", href: "/services/lawn-mowing" },
      { title: "Lawn Aeration", href: "/services/aeration" },
      { title: "Weed Control", href: "/services/weed-control" },
    ],
    relatedPosts: ["how-often-should-you-mow-your-lawn", "how-to-get-rid-of-weeds-in-your-lawn"],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(post: BlogPost): BlogPost[] {
  return post.relatedPosts
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is BlogPost => Boolean(p));
}
