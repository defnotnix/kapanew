import imgChild from "../assets/services/child.jpg";
import imgBaby from "../assets/services/baby.jpg";
import imgWedding from "../assets/services/wedding.jpg";
import imgAnniversay from "../assets/services/anniv.jpg";
import imgJanku from "../assets/services/janku.jpg";
import imgYouth from "../assets/services/youth.jpg";

export const mockServiceCategoryCelebrations = [
  {
    id: 1,
    label: "Early Childhood",
    image: imgBaby.src,
    description:
      "Welcoming new life with heartfelt rituals that honor tradition, motherhood, and joyous beginnings.",
    subCategory: [
      "Baby Showers",
      "Gender Reveal Parties",
      "Naming Ceremonies (Nwaran)",
      "Rice Feeding / Weaning Ceremony (Pasni)",
    ],
  },
  {
    id: 2,
    label: "Childhood Rituals",
    image: imgChild.src,
    description:
      "Marking important cultural and spiritual transitions in a child’s journey with reverence and joy.",
    subCategory: [
      "Ihi (Bel Bibaha)",
      "Bara Tayegu (Gufa Ceremony)",
      "Bratabandha",
    ],
  },
  {
    id: 3,
    label: "Youth Milestones",
    image: imgYouth.src,
    description:
      "Celebrating growing up, turning points, and the exuberance of youth with energy and style.",
    subCategory: [
      "Kids' Birthday Parties",
      "Teen Birthday Parties",
      "Adult Birthday Parties",
      "Milestone Birthdays (1st, 16th, 18th, 21st)",
    ],
  },
  {
    id: 4,
    label: "The Wedding Journey",
    image: imgWedding.src,
    description:
      "From proposal to pheras — we curate each moment of your wedding journey with love, detail, and heritage.",
    subCategory: [
      "Proposal",
      "Bachelorette",
      "Supari Ceremony",
      "Bridal Shower",
      "Mukh Herney",
      "Engagement Ceremonies",
      "Mehendi Ceremony",
      "Haldi Ceremony",
      "Sangeet Night",
      "Alah Ceremony",
      "Traditional Weddings",
      "Destination Weddings",
      "Reception Parties",
    ],
  },
  {
    id: 5,
    label: "Life After Marriage",
    image: imgAnniversay.src,
    description:
      "Commemorating years of love with celebrations that reflect your shared journey and milestones.",
    subCategory: ["Anniversary Celebrations (Silver, Golden, etc.)"],
  },
  {
    id: 6,
    label: "Celebrating Longevity",
    image: imgJanku.src,
    description:
      "Honoring the wisdom, age, and heritage of life’s elder years with deep cultural significance.",
    subCategory: ["Janku Ceremony"],
  },
];
