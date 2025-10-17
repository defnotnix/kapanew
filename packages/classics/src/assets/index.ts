"use client";

import imgMain from "./images/logo/kapamain.png";

import imgEvents from "./images/logo/events.png";
import imgEventsSmall from "./images/logo/events_small.png";

import imgCelebrations from "./images/logo/celebrations.png";
import imgCelebrationsSmall from "./images/logo/celebration_small.png";

import imgCreationsSmall from "./images/logo/creations_small.png";

import imgSocietySmall from "./images/logo/societies_small.png";

//graphics
import imgLeaf from "./images/graphics/leafpng.png";

//svg
import { MotionFlowerLeaves } from "./svg/flower.leaves";
import { MotionFlower } from "./svg/flower";
import { MotionLilyLeaf } from "./svg/leaf";

export const images = {
  logo: {
    main: imgMain.src,
    events: imgEvents.src,
    events_small: imgEventsSmall.src,
    celebrations: imgCelebrations.src,
    celebrations_small: imgCelebrationsSmall.src,
    creation_small: imgCreationsSmall.src,
    society_small: imgSocietySmall.src,
  },
  graphics: {
    leaf: imgLeaf.src,
  },
};

export const animateSvg = {
  MotionFlowerLeaves,
  MotionFlower,
  MotionLilyLeaf,
};
