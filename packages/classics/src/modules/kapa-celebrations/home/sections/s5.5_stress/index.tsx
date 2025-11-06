"use client";

import { useRef, useLayoutEffect, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Box, Container, Group, SimpleGrid, Text } from "@mantine/core";
import { TestimonialCard } from "../../../testimonials";
import { MotionFlowerLeaves } from "../../../../../assets/svg/flower.leaves";

export function SectionHomeStress() {
  // --- Tuning knobs
  const PANEL_COUNT = 4; // explicit panels
  const END_EPSILON_PX = 8; // trim a few pixels so we don't hit a hard edge

  // --- Refs
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);

  // --- Measured layout
  const [layout, setLayout] = useState({
    viewportW: 0,
    viewportH: 0,
    trackW: 0,
    travelPx: 0,
    sectionHeightPx: 0,
  });

  // Measure everything precisely in px and recompute on resize / font reflow
  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ro = new ResizeObserver(() => {
      const viewportH = stickyRef.current?.clientHeight ?? window.innerHeight;
      const viewportW = stickyRef.current?.clientWidth ?? window.innerWidth;

      // Track width is PANEL_COUNT * viewportW (each panel is 100vw),
      // but we measure the actual node to include any sub-pixel differences.
      const trackW = trackRef.current?.scrollWidth ?? viewportW * PANEL_COUNT;

      // Exact horizontal travel needed in px
      const travelPx = Math.max(0, trackW - viewportW - END_EPSILON_PX);

      // Exact vertical scroll space so progress hits 1.0 when travel completes
      const sectionHeightPx = Math.round(viewportH + travelPx);

      setLayout({
        viewportW,
        viewportH,
        trackW,
        travelPx,
        sectionHeightPx,
      });
    });

    ro.observe(sectionRef.current);
    if (stickyRef.current) ro.observe(stickyRef.current);
    if (trackRef.current) ro.observe(trackRef.current);
    // Fallback to window resize as well (orientationchange covered)
    const onResize = () => ro.disconnect(); // force RO to reattach and recalc
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);

    // Initial measure
    requestAnimationFrame(() => {
      if (sectionRef.current) ro.observe(sectionRef.current);
    });

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, [PANEL_COUNT, END_EPSILON_PX]);

  // Framer: progress only within this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"], // finishes when section bottom hits viewport top
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.7,
  });

  // Map progress 0→1 to 0px → -travelPx
  const x = useTransform(smooth, [0, 1], ["0px", `-${layout.travelPx}px`]);

  return (
    <section
      ref={sectionRef}
      style={{
        height: layout.sectionHeightPx || "100vh",
        overscrollBehavior: "contain",
        overflowAnchor: "none",
      }}
    >
      {/* Sticky viewport */}
      <div
        ref={stickyRef}
        style={{
          position: "sticky",
          top: 0,
          height: "100dvh", // stable on mobile
          overflow: "hidden",
          touchAction: "pan-y",
          contain: "layout size paint style",
        }}
      >
        {/* Horizontal track */}
        <motion.div
          ref={trackRef}
          style={{
            display: "flex",
            width: `${PANEL_COUNT * 100}vw`, // visual width; measurement uses scrollWidth
            height: "100%",
            x,
            willChange: "transform",
          }}
        >
          {/* ===== Panel 1 ===== */}
          <div
            style={{
              width: "100vw",
              height: "100%",
              display: "grid",
              placeItems: "center",
              paddingInline: "1rem",
            }}
          >
            <Container size="sm">
              <Text
                className="kc-heading"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  lineHeight: "clamp(2.2rem, 5.2vw, 3.8rem)",
                  textAlign: "center",
                  textWrap: "balance",
                }}
                fw={700}
                c="var(--kc-color-800)"
              >
                We know events are stressful.
              </Text>
            </Container>
          </div>

          {/* ===== Panel 2 ===== */}
          <div
            style={{
              width: "100vw",
              height: "100%",
              display: "grid",
              placeItems: "center",
              paddingInline: "1rem",
            }}
          >
            <Container size="sm">
              <Text
                className="kc-heading"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  lineHeight: "clamp(2.2rem, 5.2vw, 3.8rem)",
                  textAlign: "center",
                  textWrap: "balance",
                }}
                fw={700}
                c="var(--kc-color-800)"
              >
                We also know, Right guidance makes all the difference.
              </Text>
            </Container>
          </div>

          {/* ===== Panel 3 ===== */}
          <div
            style={{
              width: "100vw",
              height: "100%",
              display: "grid",
              placeItems: "center",
              paddingInline: "1rem",
            }}
          >
            <Container size="sm">
              <Text
                className="kc-heading"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  lineHeight: "clamp(2.2rem, 5.2vw, 3.8rem)",
                  textAlign: "center",
                  textWrap: "balance",
                }}
                fw={700}
                c="var(--kc-color-800)"
              >
                Our survey reveals{" "}
                <span style={{ color: "var(--kc-color-500)" }}> 97%</span> of
                clients reported feeling{" "}
                <span style={{ color: "var(--kc-color-500)" }}>
                  anxious and overwhelmed
                </span>{" "}
                before connecting with us.
              </Text>
            </Container>
          </div>

          {/* ===== Panel 4 ===== */}
          <div
            style={{
              width: "100vw",
              height: "100%",
              display: "grid",
              placeItems: "center",
              paddingInline: "1rem",
              position: "relative",
            }}
          >
            <Container size="sm">
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 200,
                  transform: "rotate(180deg)",
                  scale: 1.5,
                }}
              >
                <MotionFlowerLeaves />
              </div>

              <SimpleGrid
                cols={3}
                pos="absolute"
                px={{ base: 0, lg: "16rem" }}
                style={{
                  bottom: 64,
                  left: 0,
                }}
                spacing="xs"
              >
                <TestimonialCard
                  item={{
                    message:
                      "It was a great experience working with the whole team. Made my life easier at the event. Everyone was very friendly and easy to talk with.",
                    name: "Rachana Joshi",

                    venye: "Organized by KaPa",
                  }}
                />
                <TestimonialCard
                  item={{
                    message:
                      "We were not prepared for the depth of their services and so we hired them for only some parts. But we did get more than we were expecting.",
                    name: "Sunny Rajkarnikar",
                    year: "1011",
                    venye: "Organized by Kapa",
                  }}
                />
                <TestimonialCard
                  item={{
                    message:
                      "Everyone from the team felt like family. They worked really hard and met my expectations. I would recommend them to anyone.",
                    name: "Sajja Siwakoti",
                    year: "1011",
                    venye: "Organized by Kapa",
                  }}
                />
              </SimpleGrid>

              <Text
                className="kc-heading"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  lineHeight: "clamp(2.2rem, 5.2vw, 3.8rem)",
                  textAlign: "center",
                  textWrap: "balance",
                }}
                fw={700}
                c="var(--kc-color-800)"
                mb="4rem"
              >
                By the end of their celebration,{" "}
                <span style={{ color: "var(--kc-color-500)" }}>
                  {" "}
                  89% experienced stress-free, easy-going and lasting memories.
                </span>
              </Text>
            </Container>
          </div>

          <div
            style={{
              width: "100vw",
              height: "100%",
              display: "grid",
              placeItems: "center",
              paddingInline: "1rem",
            }}
          ></div>
        </motion.div>
      </div>
    </section>
  );
}
