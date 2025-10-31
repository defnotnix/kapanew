"use client";

import React, { useMemo, useRef } from "react";
import { Box, Container, Group, Image, Stack, Text } from "@mantine/core";
import { usePageContext } from "@classics/ui";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Non-sticky scrolling showcase with initial offset
 *  - Section scrolls naturally with the page
 *  - Starts slightly shifted right (initial offset)
 *  - Scroll maps vertical progress to horizontal translate X
 */
const CARD_WIDTH = 320; // px
const GAP = 24; // px
const SPEED_EXPONENT = 0.7; // <1 = moves more at the start; >1 = slower at start
const INITIAL_OFFSET = 150; // px initial shift to the right

export function SectionShowcase() {
  const { state } = usePageContext();
  const { preData } = state;
  const { cms = [] } = preData;

  const sectionData = useMemo(
    () => cms?.filter((item: any) => item?.holder === "ke-home-showcase") ?? [],
    [cms]
  );

  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Progress goes from 0 to 1 while the section crosses the viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // start when top hits bottom, end when bottom hits top
  });

  const totalTravel = (CARD_WIDTH + GAP) * Math.max(0, sectionData.length - 1);

  // Make the motion feel quick: bias the curve toward moving earlier in the span
  const quickProgress = useTransform(scrollYProgress, (v) =>
    Math.min(1, Math.pow(v, SPEED_EXPONENT))
  );

  // Apply initial right offset
  const x = useTransform(
    quickProgress,
    [0, 1],
    [INITIAL_OFFSET, -totalTravel + INITIAL_OFFSET]
  );

  const activeIndex = useTransform(quickProgress, (v) => {
    const raw = Math.round(v * Math.max(0, sectionData.length - 1));
    return Math.min(Math.max(raw, 0), Math.max(0, sectionData.length - 1));
  });

  const useActive = (idx: number) => {
    const [val, setVal] = React.useState(0);
    React.useEffect(() => {
      const unsub = activeIndex.on("change", setVal);
      return () => unsub();
    }, [activeIndex]);
    return val === idx;
  };

  function EventCard({ data, index }: { data: any; index: number }) {
    const isActive = useActive(index);

    return (
      <Box
        component={motion.div}
        layout
        style={{
          width: CARD_WIDTH,
          flex: `0 0 ${CARD_WIDTH}px`,
          marginRight: GAP,
          cursor: "pointer",
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        aria-current={isActive ? "true" : "false"}
      >
        <Stack
          gap={8}
          style={{
            fontFamily: "var(--ke-font-heading)",
            filter: isActive ? "none" : "grayscale(0.3)",
            opacity: isActive ? 1 : 0.6,
            transform: isActive ? "scale(1.02)" : "scale(0.98)",
            transition: "filter .25s, opacity .25s, transform .25s",
          }}
        >
          <Group justify="space-between">
            <Text tt="uppercase" size="xs" fw={900} opacity={isActive ? 1 : 0}>
              {data?.text?.year}
            </Text>
            <Text tt="uppercase" size="xs" fw={900} opacity={isActive ? 1 : 0}>
              {data?.text?.category}
            </Text>
          </Group>

          <Image h={250} src={data?.image} radius={8} alt={data?.text?.title} />

          <Text tt="uppercase" size="xs" fw={900} opacity={isActive ? 1 : 0.85}>
            {data?.text?.title}
          </Text>

          <Text size="xs" fw={600} opacity={isActive ? 0.7 : 0}>
            {data?.text?.description}
          </Text>
        </Stack>
      </Box>
    );
  }

  if (!sectionData?.length) return null;

  return (
    <Box ref={sectionRef}>
      <Container size="lg" px={0} py={40}>
        <Box
          component={motion.div}
          style={{
            x,
            display: "flex",
            alignItems: "stretch",
            willChange: "transform",
          }}
          aria-live="polite"
          aria-label="Showcase carousel"
        >
          {sectionData.map((item: any, i: number) => (
            <EventCard key={i} data={item} index={i} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
