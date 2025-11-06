export const variantTextAnimate = (delay: number, reverse: boolean = false) => {
  return {
    initial: {
      y: reverse ? -50 : 50,
      opacity: 0,
      filter: "blur(16px)",
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: delay,
        duration: 0.4,
      },
    },
  };
};
