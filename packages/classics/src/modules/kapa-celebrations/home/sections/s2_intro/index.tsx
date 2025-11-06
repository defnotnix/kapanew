"use client";

import { Center, Container, Stack, Text } from "@mantine/core";
//styles
import classes from "./_.module.css";
import { animateSvg } from "@classics/ui";
import { GlassFrame, usePageContext, variantTextAnimate } from "@classics/ui";

import { motion } from "motion/react";

export function SectionHomeIntro() {
  const { state } = usePageContext();

  const sectionData = state.preData?.cms?.find(
    (item: any) => item.holder == "kc-home-intro"
  );

  if (!sectionData) {
    return <></>;
  }

  return (
    <section
      className={classes.root}
      style={{
        scrollSnapType: "y mandatory",
      }}
    >
      <Container
        size="md"
        py={{
          base: 200,
          lg: 200,
        }}
      >
        <Center>
          <Stack gap="xl">
            <Text size="sm" fw={600} ta="center" c="var(--kc-color-900)">
              Our Essence / Promise / Philosophy
            </Text>
            <motion.div
              variants={variantTextAnimate(0.1)}
              initial="initial"
              animate="visible"
            >
              <Text ta="center" className="kc-heading" fw={600}>
                Your dreams, transformed into timeless celebrations where every
                moment becomes a memory that lasts forever, and every detail
                unfolds effortlessly in a{" "}
                <span style={{ textDecoration: "line-through", opacity: 0.3 }}>
                  stressful
                </span>{" "}
                <span
                  style={{
                    color: "var(--kc-color-700)",
                  }}
                >
                  stress-free experience.
                </span>
              </Text>
            </motion.div>
          </Stack>
        </Center>
      </Container>

      <div className={classes.flower_container}>
        <animateSvg.MotionFlower />
      </div>

      <div className={classes.flower_container_alt}>
        <animateSvg.MotionFlower />
      </div>
    </section>
  );
}
