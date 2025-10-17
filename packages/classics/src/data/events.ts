import imgPriyankaAdityaMain from "../assets/events/priyanka_aditya/main.jpg";
import imgPriyanka1Main from "../assets/events/priyanka_aditya/1.jpg";
import imgPriyanka2Main from "../assets/events/priyanka_aditya/2.jpg";
import imgPriyanka3Main from "../assets/events/priyanka_aditya/3.jpg";
import imgPriyanka4Main from "../assets/events/priyanka_aditya/4.jpg";
import imgPriyanka5Main from "../assets/events/priyanka_aditya/5.jpg";
import imgPriyanka6Main from "../assets/events/priyanka_aditya/6.jpg";

import imgSubhadraMaaMain from "../assets/events/janku/main.jpg";
import imgSubhadra1Main from "../assets/events/janku/1.jpg";
import imgSubhadra2Main from "../assets/events/janku/2.jpg";
import imgSubhadra3Main from "../assets/events/janku/3.jpg";
import imgSubhadra4Main from "../assets/events/janku/4.jpg";
import imgSubhadra5Main from "../assets/events/janku/5.jpg";

import imgSaiMain from "../assets/events/sai/main.jpg";
import imgSai1Main from "../assets/events/sai/1.jpg";
import imgSai2Main from "../assets/events/sai/2.jpg";
import imgSai3Main from "../assets/events/sai/3.jpg";
import imgSai4Main from "../assets/events/sai/4.jpg";
import imgSai5Main from "../assets/events/sai/5.jpg";

export const mockEvents = [
  {
    id: 101,
    event_images: [
      {
        id: 201,
        image:
          "https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=1470&auto=format&fit=crop",
        meta_keyphrase: "Corporate AGM, Business Conference, Annual Meeting",
        meta_description:
          "Main photo from the Annual General Meeting with executives and stakeholders.",
        holder: "5",
        is_active: true,
        caption:
          "Leadership addressing stakeholders at the Annual General Meeting",
        event: 101,
      },
      {
        id: 202,
        image:
          "https://images.unsplash.com/photo-1561491431-71b89da6056a?q=80&w=1470&auto=format&fit=crop",
        caption: "Panel discussion with board members",
        event: 101,
      },
      {
        id: 203,
        image:
          "https://images.unsplash.com/photo-1561491432-82f2b22a263e?q=80&w=1470&auto=format&fit=crop",
        caption: "Networking session over coffee",
        event: 101,
      },
      {
        id: 204,
        image:
          "https://images.unsplash.com/photo-1561489401-fc2876ced162?q=80&w=1470&auto=format&fit=crop",
        caption: "Keynote presentation on company growth",
        event: 101,
      },
    ],
    event_video: [
      {
        id: 301,
        link: "https://www.youtube.com/embed/xyzCorporateHighlights",
        holder: "2",
        is_active: true,
        caption: "Highlights from the Annual General Meeting",
        event: 101,
      },
    ],
    color: "var(--kc-primary-400)",
    shortname: "Corporate AGM 2024",
    fullname: "Annual General Meeting 2024 — Global Business Corp",
    meta_keyphrase: "Corporate AGM, Business Conference, Global Business Corp",
    meta_description:
      "A professional and insightful Annual General Meeting organized for Global Business Corp, featuring keynote sessions, panel discussions, and employee recognition.",
    event_date: "2024-11-12",
    venue: "Hyatt Regency, Kathmandu",
    theme: "Professional Blue & Silver",
    highlight_message:
      "An inspiring AGM highlighting growth, innovation, and collaboration.",
    event_description:
      "The 2024 Annual General Meeting brought together board members, executives, and stakeholders to review company progress and future goals. With keynote addresses, strategy discussions, and recognition awards, it was a day of vision, transparency, and team spirit.",
    is_featured: true,
    event_category: 2, // Corporate Events
    company: 1,
  },

  {
    id: 102,
    event_images: [
      {
        id: 205,
        image:
          "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Guests enjoying gourmet tastings",
        event: 102,
      },
      {
        id: 206,
        image:
          "https://images.unsplash.com/photo-1541542684-4a7375b4f3a1?q=80&w=1470&auto=format&fit=crop",
        caption: "Elegant table settings at the gala dinner",
        event: 102,
      },
      {
        id: 207,
        image:
          "https://images.unsplash.com/photo-1529692236671-f1de7b63e91d?q=80&w=1470&auto=format&fit=crop",
        caption: "Live jazz performance for guests",
        event: 102,
      },
    ],
    event_video: [
      {
        id: 302,
        link: "https://www.youtube.com/embed/xyzCharityGala",
        holder: "3",
        is_active: true,
        caption: "Highlights from the Charity Gala Night",
        event: 102,
      },
    ],
    color: "var(--kc-primary-400)",
    shortname: "Charity Gala 2024",
    fullname: "Charity Gala Night 2024 — Hearts United Foundation",
    meta_keyphrase: "Charity Gala, Fundraising Event, Hearts United",
    meta_description:
      "A glamorous fundraising gala organized by Hearts United Foundation with live performances, auctions, and fine dining.",
    event_date: "2024-09-15",
    venue: "Soaltee Crowne Plaza, Kathmandu",
    theme: "Purple & Gold Elegance",
    highlight_message:
      "An enchanting evening of generosity, music, and community spirit.",
    event_description:
      "The Charity Gala Night 2024 brought philanthropists, business leaders, and artists together for an unforgettable evening. With gourmet dining, live jazz, and a silent auction, the event raised significant funds for community projects.",
    is_featured: true,
    event_category: 3, // Public / Charity Events
    company: 1,
  },

  {
    id: 103,
    event_images: [
      {
        id: 208,
        image:
          "https://images.unsplash.com/photo-1543728069-a3f97c5a2f32?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Crowds cheering at the opening night",
        event: 103,
      },
      {
        id: 209,
        image:
          "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?q=80&w=1470&auto=format&fit=crop",
        caption: "Live rock performance on the main stage",
        event: 103,
      },
      {
        id: 210,
        image:
          "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=1470&auto=format&fit=crop",
        caption: "Festival-goers enjoying food trucks",
        event: 103,
      },
    ],
    event_video: [
      {
        id: 303,
        link: "https://www.youtube.com/embed/xyzMusicFest",
        holder: "4",
        is_active: true,
        caption: "Highlights from the Himalayan Music Festival",
        event: 103,
      },
    ],
    color: "var(--kc-primary-400)",
    shortname: "Himalayan Music Fest 2024",
    fullname: "Himalayan Music Festival 2024 — Live Under the Stars",
    meta_keyphrase: "Music Festival, Entertainment Event, Live Concert",
    meta_description:
      "A vibrant outdoor music festival featuring international bands, food trucks, and cultural performances.",
    event_date: "2024-10-20",
    venue: "Tundikhel Grounds, Kathmandu",
    theme: "Fiery Red & Black",
    highlight_message:
      "A high-energy festival celebrating music, culture, and community.",
    event_description:
      "The Himalayan Music Festival 2024 lit up the city with performances from international and local artists. With vibrant stages, food trucks, and cultural showcases, the event brought together thousands of music lovers under the stars.",
    is_featured: false,
    event_category: 4, // Entertainment Events
    company: 1,
  },
];

export const mockCelebrations = [
  {
    id: 1,
    event_images: [
      {
        id: 2,
        image: imgPriyankaAdityaMain.src,
        meta_keyphrase: "Nepali Wedding, Floral Decor, Priyanka Aditya",
        meta_description:
          "Main photo of Priyanka and Aditya's traditional wedding celebration with floral theme.",
        holder: "5",
        is_active: true,
        caption: "A timeless moment under the floral canopy",
        event: 1,
      },
      {
        id: 3,
        image: imgPriyanka1Main.src,
        caption: "Haldi ceremony in soft golden hues",
        event: 1,
      },
      {
        id: 4,
        image: imgPriyanka2Main.src,
        caption: "The radiant bride, Priyanka, during Mehendi",
        event: 1,
      },
      {
        id: 5,
        image: imgPriyanka3Main.src,
        caption: "Joyful baraat moments",
        event: 1,
      },
      {
        id: 6,
        image: imgPriyanka4Main.src,
        caption: "The varmala exchange, under a starlit mandap",
        event: 1,
      },
      {
        id: 7,
        image: imgPriyanka5Main.src,
        caption: "Traditional rituals with family blessings",
        event: 1,
      },
      {
        id: 8,
        image: imgPriyanka6Main.src,
        caption: "Reception night celebration in grandeur",
      },
    ],
    event_video: [
      {
        id: 1,
        link: "https://www.youtube.com/embed/mzJ4vCjSt28",
        holder: "2",
        is_active: true,
        caption: "Wedding Highlights — Priyanka & Aditya",
        event: 1,
      },
    ],
    color: "#E8A291",
    shortname: "Priyanka & Aditya",
    fullname: "Traditional Wedding of Priyanka & Aditya",
    meta_keyphrase: "Nepali Wedding, KaPa Celebrations, Priyanka and Aditya",
    meta_description:
      "Experience the elegant and joyful wedding of Priyanka and Aditya, curated by KaPa Celebrations.",
    event_date: "2024-12-06",
    venue: "The Heritage Banquets, Kathmandu",
    theme: "Floral Nightsky",
    highlight_message:
      "A wedding wrapped in tradition, love, and floral elegance.",
    event_description:
      "Priyanka and Aditya's wedding was a blend of heritage rituals and dreamy modern touches. From haldi to pheras, every moment radiated warmth, color, and cultural richness.",
    is_featured: true,
    event_category: 1,
    company: 1,
  },
  {
    id: 2,
    event_images: [
      {
        id: 2,
        image: imgSubhadraMaaMain.src,
        caption: "Subhadra Maa seated for the blessings ritual",
        event: 2,
      },
      {
        id: 3,
        image: imgSubhadra1Main.src,
        caption: "Traditional attire worn during the Janku ceremony",
        event: 2,
      },
      {
        id: 4,
        image: imgSubhadra2Main.src,
        caption: "Family offering prayers during the Janku",
        event: 2,
      },
      {
        id: 5,
        image: imgSubhadra3Main.src,
        caption: "Beautifully decorated altar for ancestral worship",
        event: 2,
      },
      {
        id: 6,
        image: imgSubhadra4Main.src,
        caption: "Floral arrangements symbolizing purity and long life",
        event: 2,
      },
      {
        id: 7,
        image: imgSubhadra5Main.src,
        caption: "Group photo with extended family",
      },
    ],
    event_video: [
      {
        id: 1,
        link: "https://www.youtube.com/embed/mzJ4vCjSt28",
        holder: "2",
        is_active: true,
        caption: "Subhadra Maa’s Janku Highlights",
        event: 2,
      },
    ],
    shortname: "Subhadra Maa Janku",
    fullname: "Janku Ceremony of Subhadra Maa",
    meta_keyphrase: "Janku, Newar Rituals, Longevity Ceremony",
    meta_description:
      "Celebrate the revered Janku ceremony of Subhadra Maa, honoring a life of wisdom and grace.",
    event_date: "2024-10-21",
    venue: "Family Residence, Patan",
    theme: "Divine Grace in Tradition",
    highlight_message: "A sacred milestone, celebrated with legacy and love.",
    event_description:
      "At 77 years, 7 months, and 7 days, Subhadra Maa’s Janku was a beautiful spiritual ceremony with prayers, rituals, and family festivities. It honored long life and ancestral blessings with Newar traditions.",
    is_featured: false,
    color: "var(--kc-color-300)",
    event_category: 2,
    company: 1,
  },
  {
    id: 3,
    event_images: [
      {
        id: 2,
        image: imgSaiMain.src,
        caption: "Sai’s magical birthday entrance",
        event: 3,
      },
      {
        id: 3,
        image: imgSai1Main.src,
        caption: "Candy-themed decoration setup",
        event: 3,
      },
      {
        id: 7,
        image: imgSai5Main.src,
        caption: "Family posing at the photo booth",
      },
      {
        id: 4,
        image: imgSai2Main.src,
        caption: "Birthday cake cutting moment",
        event: 3,
      },
      {
        id: 5,
        image: imgSai3Main.src,
        caption: "Kids enjoying interactive games",
        event: 3,
      },
      {
        id: 6,
        image: imgSai4Main.src,
        caption: "Balloon drop finale",
        event: 3,
      },
    ],
    event_video: [
      {
        id: 1,
        link: "https://www.youtube.com/embed/mzJ4vCjSt28",
        holder: "2",
        is_active: true,
        caption: "Sai’s 5th Birthday Party Recap",
        event: 3,
      },
    ],
    shortname: "Sai's Birthday",
    fullname: "Sai’s 5th Birthday Bash",
    meta_keyphrase: "Kids Birthday, Themed Party, KaPa Celebrations",
    meta_description:
      "Sai’s 5th birthday bash was filled with fun, colors, and pure joy — crafted by KaPa Celebrations.",
    event_date: "2024-07-03",
    venue: "Royal Celebration Hall, Bhaktapur",
    theme: "Candyland Carnival",
    highlight_message: "A birthday bursting with color, laughter, and fun!",
    event_description:
      "Sai’s birthday party was a vibrant Candyland-themed celebration full of games, activities, balloon art, and a jaw-dropping cake. It was a magical day for kids and adults alike.",
    is_featured: true,
    color: "#BFC5D7",
    event_category: 3,
    company: 1,
  },
];
