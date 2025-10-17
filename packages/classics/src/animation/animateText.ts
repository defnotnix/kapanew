export const variantTextAnimate = (
  delay: number,
  initialLineHeight?: number,
  visibleLineHeight?: number
) => {
  return {
    initial: {
      y: 50,
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
