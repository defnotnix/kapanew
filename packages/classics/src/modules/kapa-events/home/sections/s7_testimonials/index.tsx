"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Box,
  Center,
  Container,
  Group,
  Image,
  Paper,
  Progress,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import { Quotes } from "@phosphor-icons/react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import { useIntersection } from "@mantine/hooks";

// NOTE: Autoplay plugin intentionally NOT used. The marquee drives the active index.

export function SectionTestimonials({ testimonials = [], clients = [] }: any) {
  // ---------- Data ----------
  const defaults = useMemo(
    () => [
      {
        image:
          "https://www.freepnglogos.com/uploads/google-logo-new-history-png-9.png",
        signature_image:
          "https://www.pngall.com/wp-content/uploads/14/Signature-PNG-Photos.png",
        name: "Alex Wang",
        company: "Mo Media",
        post: "Managing Director",
        message:
          "The “occasionally remarkable” moments shouldn’t be left to chance! They should be planned for, invested in.",
      },
      {
        image:
          "https://www.freepnglogos.com/uploads/google-logo-new-history-png-9.png",
        signature_image:
          "https://www.pngall.com/wp-content/uploads/14/Signature-PNG-Photos.png",
        name: "Palex Wang",
        company: "Mo Media",
        post: "Managing Director",
        message:
          "The “occasionally remarkable” moments shouldn’t be left to chance! They should be planned for, invested in.",
      },
      {
        image:
          "https://www.freepnglogos.com/uploads/google-logo-new-history-png-9.png",
        signature_image:
          "https://www.pngall.com/wp-content/uploads/14/Signature-PNG-Photos.png",
        name: "Walex Wang",
        company: "Mo Media",
        post: "Managing Director",
        message:
          "The “occasionally remarkable” moments shouldn’t be left to chance! They should be planned for, invested in.",
      },
      {
        image:
          "https://www.freepnglogos.com/uploads/google-logo-new-history-png-9.png",
        signature_image:
          "https://www.pngall.com/wp-content/uploads/14/Signature-PNG-Photos.png",
        name: "Dalex Wang",
        company: "Mo Media",
        post: "Managing Director",
        message:
          "The “occasionally remarkable” moments shouldn’t be left to chance! They should be planned for, invested in.",
      },

      {
        image:
          "https://www.freepnglogos.com/uploads/google-logo-new-history-png-9.png",
        signature_image:
          "https://www.pngall.com/wp-content/uploads/14/Signature-PNG-Photos.png",
        name: "Alex Wang",
        company: "Mo Media",
        post: "Managing Director",
        message:
          "The “occasionally remarkable” moments shouldn’t be left to chance! They should be planned for, invested in.",
      },
      {
        image:
          "https://www.freepnglogos.com/uploads/google-logo-new-history-png-9.png",
        signature_image:
          "https://www.pngall.com/wp-content/uploads/14/Signature-PNG-Photos.png",
        name: "Palex Wang",
        company: "Mo Media",
        post: "Managing Director",
        message:
          "The “occasionally remarkable” moments shouldn’t be left to chance! They should be planned for, invested in.",
      },
      {
        image:
          "https://www.freepnglogos.com/uploads/google-logo-new-history-png-9.png",
        signature_image:
          "https://www.pngall.com/wp-content/uploads/14/Signature-PNG-Photos.png",
        name: "Walex Wang",
        company: "Mo Media",
        post: "Managing Director",
        message:
          "The “occasionally remarkable” moments shouldn’t be left to chance! They should be planned for, invested in.",
      },
    ],
    []
  );

  const items = (testimonials?.length ? testimonials : defaults) as Array<{
    image: string;
    signature_image?: string;
    name: string;
    company?: string;
    post?: string;
    message: string;
  }>;

  // ---------- Sizes / timing ----------
  const CARD_W = 500;
  const CARD_H = 350;
  const HERO_SIZE = 480;

  const ITEM_W = 500; // each logo cell width
  const ITEM_H = Math.round(ITEM_W * 0.6);
  const GAP = 24;
  const CELL = ITEM_W + GAP;

  const DURATION_MS = 10000; // how long it takes for one logo to move into center
  const SPEED_PX_PER_SEC = CELL / (DURATION_MS / 1000); // steady speed in px/s

  // ---------- “Infinite” rail setup ----------
  const COPIES = 7; // odd count helps centering math
  const extendedItems = useMemo(
    () => Array.from({ length: COPIES }).flatMap(() => items),
    [items]
  );

  // pick the true middle copy so we can align index 0 at center initially
  const middleStart = Math.floor(COPIES / 2) * items.length;

  // ---------- Track + active calculation ----------
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerW, setContainerW] = useState(0);

  // Mantine Carousel embla API for syncing
  const [embla, setEmbla] = useState<any>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const resize = () => setContainerW(el.getBoundingClientRect().width);
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // When x === initialX, the center-aligned index is 0 (from the middle copy).
  const initialX = useMemo(() => -middleStart * CELL, [middleStart, CELL]);

  // We'll drive x continuously with useAnimationFrame for seamless looping (no jump at loop boundaries)
  const xMV = useMotionValue(initialX);

  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0); // 0..100 time until next logo hits center

  // ---------- VISIBILITY CONTROL ----------
  // Attach this ref directly to the <section>
  const { ref: inViewRef, entry } = useIntersection({
    root: null,
    threshold: 0.15, // start/stop when ~15% visible
  });

  // A ref the animation frame can read without re-subscribing
  const runningRef = useRef(true);
  const prevT = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      const onScreen = !!entry?.isIntersecting;
      const tabVisible = !document.hidden;
      runningRef.current = onScreen && tabVisible;

      // prevent a big dt jump when resuming after a pause
      if (!runningRef.current) prevT.current = null;
    };
    update();
    const onVis = () => update();
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [entry?.isIntersecting]);

  // ---------- active/progress math ----------
  const computeFromX = (x: number) => {
    const dx = initialX - x; // distance moved left (positive)
    const steps = dx / CELL; // how many cells progressed

    // which cell is centered? add 0.5 to choose nearest-to-center
    const logicalIndex =
      ((Math.floor(steps + 0.5) % items.length) + items.length) % items.length;

    // progress to the next boundary (time remaining)
    const frac = ((steps % 1) + 1) % 1; // 0..1
    const pct = frac * 100;

    return { logicalIndex, pct };
  };

  // Seamless marquee tick (gated by visibility)
  useAnimationFrame((t) => {
    if (!runningRef.current) return;

    if (prevT.current == null) {
      prevT.current = t;
      return;
    }
    const dt = (t - prevT.current) / 1000; // seconds
    prevT.current = t;

    // advance
    let nextX = xMV.get() - SPEED_PX_PER_SEC * dt;

    // wrap seamlessly every CELL so there's no snap
    const deltaFromInitial = nextX - initialX; // negative number
    if (deltaFromInitial <= -CELL) {
      nextX += CELL; // bring it back by exactly one cell to keep values small and continuous
    }

    xMV.set(nextX);

    const { logicalIndex, pct } = computeFromX(nextX);

    // Only update state when it actually changes to avoid excess renders
    setProgress((p) => (p !== pct ? pct : p));
    setActive((a) => (a !== logicalIndex ? logicalIndex : a));
  });

  // Sync the bottom carousel with the marquee's active logical index
  useEffect(() => {
    if (!embla) return;
    try {
      embla.reInit({ loop: true, containScroll: "trimSnaps" });
    } catch {}
    embla.scrollTo(active, true);
  }, [active, embla]);

  // ---------- UI ----------
  const Card = () => (
    <Paper
      bg="var(--ke-color-950, var(--mantine-color-dark-8))"
      withBorder
      h={CARD_H}
      w={CARD_W}
      p="xl"
      radius="lg"
      shadow="lg"
      style={{ borderColor: "var(--ke-color-900, rgba(255,255,255,0.08))" }}
    >
      <Stack justify="space-between" h="100%">
        <Stack>
          <Quotes color="var(--ke-color-400)" size={32} weight="fill" />
          <Text size="lg" c="var(--ke-color-50, #fff)">
            {items[active]?.message}
          </Text>
        </Stack>
        <Stack>
          <Group justify="space-between" align="flex-end">
            <Box>
              <Text size="xs" c="var(--ke-color-50, #fff)">
                {items[active]?.name}
              </Text>
              {(items[active]?.post || items[active]?.company) && (
                <Text size="xs" opacity={0.6} c="var(--ke-color-50, #fff)">
                  {[items[active]?.post, items[active]?.company]
                    .filter(Boolean)
                    .join(" · ")}
                </Text>
              )}
            </Box>
            {items[active]?.signature_image && (
              <Image
                src={items[active]?.signature_image}
                w={150}
                alt="signature"
              />
            )}
          </Group>
          {/* progress until next logo reaches center */}
          <Progress value={progress} size="xs" />
        </Stack>
      </Stack>
    </Paper>
  );

  const LogoCell = ({ idx }: { idx: number }) => {
    const logical = idx % items.length;
    const isActive = logical === active; // Highlight the centered logo

    return (
      <div
        style={{
          width: ITEM_W,
          height: ITEM_H,
          marginRight: GAP,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none", // decorative rail
        }}
      >
        <motion.div
          initial={false}
          animate={{
            scale: isActive ? 1.05 : 0.9,
            opacity: isActive ? 1 : 0.45,
            filter: isActive ? "none" : "grayscale(30%)",
          }}
          transition={{ type: "spring", stiffness: 240, damping: 20 }}
          style={{ width: "100%", height: "100%" }}
        >
          <Image
            src={items[logical].image}
            alt="logo"
            w="100%"
            h="100%"
            fit="contain"
          />
        </motion.div>
      </div>
    );
  };

  const activeLogoSrc = items[active]?.image;

  return (
    <section ref={inViewRef} style={{ minHeight: "100vh" }}>
      <Container size="xl" py={160}>
        <Text size="sm" ta="center">
          You're in good hands.
        </Text>
        <Center pos="relative">
          <Text c="var(--ke-color-950)" size="3rem" ta="center" mt="sm">
            Don't take our <span style={{ opacity: 0 }}>words</span> for it.
          </Text>
          <Text
            size="4rem"
            c="var(--ke-color-500)"
            style={{
              fontFamily: '"Pacifico", cursive',
              transform: "rotate(-18deg)",
              position: "absolute",
              left: "55%",
              top: -20,
            }}
          >
            words
          </Text>
        </Center>
      </Container>

      <div
        style={{
          background:
            "radial-gradient(circle, var(--ke-color-300) 0%, var(--ke-color-600) 72%, rgba(23,38,85,1) 100%)",
          height: 350,
          width: 500,
          position: "absolute",
          left: "calc(50vw - 250px)",
          zIndex: -1,
          filter: "blur(100px)",
        }}
      />

      <div>
        <Center py={60} pos="relative" style={{ overflow: "hidden" }}>
          {/* back plates */}
          <motion.div
            style={{
              position: "absolute",
              zIndex: 1,
              transform: "rotate(-5deg)",
              marginLeft: -100,
              background:
                "radial-gradient(circle, var(--ke-color-300) 0%, var(--ke-color-600) 72%, rgba(23,38,85,1) 100%)",
              height: 350,
              width: 500,
              borderRadius: "var(--mantine-radius-lg)",
            }}
            aria-hidden
          />
          <motion.div
            style={{
              position: "absolute",
              zIndex: 1,
              transform: "rotate(5deg)",
              marginLeft: 100,
              height: 350,
              width: 500,
              borderRadius: "var(--mantine-radius-lg)",
              background: "var(--ke-color-dark)",
              opacity: 0.8,
            }}
            aria-hidden
          />

          {/* LOGO MARQUEE behind the card */}
          <div
            ref={containerRef}
            style={{
              position: "relative",
              width: "min(92vw, 1100px)",
              height: ITEM_H,
              overflow: "hidden",
              zIndex: 2,
              WebkitMaskImage:
                "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 8%, rgba(0,0,0,1) 92%, rgba(0,0,0,0) 100%)",
              maskImage:
                "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 8%, rgba(0,0,0,1) 92%, rgba(0,0,0,0) 100%)",
            }}
            aria-label="Partner logos"
          >
            <motion.div
              style={{ display: "flex", alignItems: "center", x: xMV }}
            >
              {extendedItems.map((_, idx) => (
                <LogoCell key={idx} idx={idx} />
              ))}
            </motion.div>
          </div>

          {/* Big active logo watermark behind card */}
          {activeLogoSrc && (
            <motion.img
              // keep the same element and just animate opacity/scale to avoid remount flicker
              src={activeLogoSrc}
              alt="active logo background"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.12 }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              style={{
                position: "absolute",
                zIndex: 2.5 as any,
                width: HERO_SIZE,
                height: HERO_SIZE,
                objectFit: "contain",
                pointerEvents: "none",
                filter: "grayscale(100%) contrast(110%)",
              }}
            />
          )}

          {/* Foreground card */}
          <motion.div
            // IMPORTANT: no `key={active}` here to prevent re-mounting jitter/flip
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 160, damping: 18 }}
            style={{ position: "absolute", zIndex: 3 }}
          >
            <Card />
          </motion.div>
        </Center>

        <Container>
          <Carousel
            // We control Embla externally. Loop so edges work.
            getEmblaApi={setEmbla}
            withControls={false}
            draggable={false}
            // Ensure each slide takes equal width regardless of count
            slideSize="20%" // <- fixed typo (was `20%)`)
          >
            {items.map((item, index) => (
              <CarouselSlide key={index}>
                <Image
                  fit="contain"
                  h={50}
                  src={item.image}
                  alt={`logo-${index}`}
                />
              </CarouselSlide>
            ))}
          </Carousel>
        </Container>
      </div>
      <Space h={40} />
    </section>
  );
}
