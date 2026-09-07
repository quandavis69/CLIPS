// Real Google reviews for Clips Lawn Care, copied over manually from the
// business's Google Business Profile. Update this list by hand as new
// reviews come in, or replace it with a live feed once GOOGLE_PLACES_API_KEY
// and GOOGLE_PLACE_ID are configured (see src/lib/googleReviews.ts).
export interface CuratedReview {
  name: string;
  rating: number;
  text: string;
  relativeTime: string;
  service?: string;
}

export const curatedGoogleReviews: CuratedReview[] = [
  {
    name: "Sue Carroll",
    rating: 5,
    text: "Clips has kept our lawn and edging in tip top shape this summer! Will has been great about communicating any changes or updates. He responds quickly and professionally. We couldn't be happier!",
    relativeTime: "2 months ago",
    service: "Lawn Care",
  },
  {
    name: "Victoria Navas",
    rating: 5,
    text: "Highly recommend Clips Lawn Care!! They helped me get my garden's set up, they removed grass and added gravel in an area, completed our winter clean up, pine needle removal from our roof and even our normal mowing!! Will and his team are prompt, professional and do fantastic work!! They're the best!!",
    relativeTime: "2 months ago",
    service: "Landscaping",
  },
  {
    name: "Drake McKee",
    rating: 5,
    text: "Will do an amazing job with our landscaping project. He had outstanding communication and the project was completed on time and at the price he quoted. I would use Clips again and would highly recommend to anyone. Thanks Will!!",
    relativeTime: "a month ago",
    service: "Landscape Installation",
  },
  {
    name: "Elizabeth Lawrence",
    rating: 5,
    text: "Both of the guys were great and went straight to work. They also took time to confirm what work was discussed and if I had any concerns.",
    relativeTime: "a month ago",
  },
  {
    name: "Linda McGloin",
    rating: 5,
    text: "These guys are very hard workers and polite. They did what I wanted and did a very good job.",
    relativeTime: "a month ago",
  },
  {
    name: "Huib De Rijke",
    rating: 5,
    text: "Thank you for the great job. Keep up the good work. Happy with your service.",
    relativeTime: "a month ago",
  },
  {
    name: "David Morales",
    rating: 5,
    text: "I couldn't be more pleased with the rock installation done by Clips Lawn Care & Landscaping at our countertop company's shop. The work turned out beautifully!",
    relativeTime: "a week ago",
    service: "Rock Installation",
  },
  {
    name: "Tina Johnson",
    rating: 5,
    text: "These guys went out of their way for me!!! There was a little miscommunication on my first day of lawn care and Will went out of his way to get someone out same night to get my first service done.",
    relativeTime: "2 weeks ago",
    service: "Lawn Care",
  },
  {
    name: "billy green",
    rating: 5,
    text: "These guys are absolutely amazing at what they do. I'm getting up there in age and honestly can't get around like I used to, so I was really concerned about how I'd tackle the pine needle situation on my property.",
    relativeTime: "2 weeks ago",
    service: "Pine Needle Removal",
  },
  {
    name: "Wanda Adrian",
    rating: 5,
    text: "Clips lawn care was very perfect in the job they did my yard was beautiful after they got done I was very happy with the job they did.",
    relativeTime: "a week ago",
    service: "Lawn Care",
  },
  {
    name: "conrad eggert",
    rating: 5,
    text: "I know Will personally (the owner) I had him do a cleanup at my parents house and it looks great!",
    relativeTime: "a week ago",
    service: "Cleanup",
  },
  {
    name: "Jim Remolds",
    rating: 5,
    text: "Good guys, good work.",
    relativeTime: "a week ago",
  },
  {
    name: "Carrie Carney",
    rating: 5,
    text: "Quick response. Professional. Personable.",
    relativeTime: "2 days ago",
  },
];
