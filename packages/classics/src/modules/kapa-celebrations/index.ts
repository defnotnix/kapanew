import { PageAbout } from "./about";
import { PageEventCategory } from "./events/eventCategory";
import { PageEventProfile } from "./events/eventProfile";
import { PageEvents } from "./events/events";
import { PageFAQs } from "./faq";
import { PageHome } from "./home";
import { PageServices } from "./services";
import { PageSplitDecors } from "./split/decors";
import { PageSplitFullCircle } from "./split/full-circle";
import { PageTestimonials } from "./testimonials";

export const PageCelebrations = {
  Home: PageHome,
  About: PageAbout,
  FAQ: PageFAQs,
  Testimonials: PageTestimonials,
  Services: PageServices,
  Split: {
    FullCircle: PageSplitFullCircle,
    Decors: PageSplitDecors,
  },
  Events: {
    Category: PageEventCategory,
    Showcase: PageEvents,
    Profile: PageEventProfile,
  },
};
