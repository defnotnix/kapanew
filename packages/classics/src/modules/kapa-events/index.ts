import { PageAbout } from "./about";
import { PageEventProfile } from "./events/profile";
import { PageEventShowcase } from "./events/showcaase";
import { PageFAQs } from "./faq";
import { PageHome } from "./home";
import { PageServices } from "./services";
import { PageTestimonials } from "./testimonials";

export const PageEvents = {
  FAQ: PageFAQs,
  Testimonials: PageTestimonials,
  Services: PageServices,
  About: PageAbout,
  Home: PageHome,
  Events: {
    Showcase: PageEventShowcase,
    Profile: PageEventProfile,
  },
};
