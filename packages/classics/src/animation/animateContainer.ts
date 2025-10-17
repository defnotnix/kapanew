export const variantContainer = {
  initial: {
    transition: {
      staggerChildren: 1,
      staggerDirection: -1,
      filter: "blur(16px)",
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
      filter: "blur(0px)",
    },
  },
};

export const variantGeneral = {
  initial: {
    y: 50,
    opacity: 0,
    //lineHeight: 2,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.3,
    },
    //lineHeight: 1.5,
  },
};

export const variantGeneralDelay = (
  delay: number,
  initialLineHeight?: number,
  visibleLineHeight?: number
) => {
  return {
    initial: {
      y: 50,
      opacity: 0,
      //lineHeight: initialLineHeight || 2,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.3,
      },
      //lineHeight: visibleLineHeight || 1.5,
    },
  };
};
