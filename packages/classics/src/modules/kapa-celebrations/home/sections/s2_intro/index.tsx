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
          base: 100,
          lg: 160,
        }}
      >
        <Center>
          <Stack gap="xl">
            <Text size="xs" fw={600} ta="center" c="var(--kc-color-900)">
              {sectionData?.text?.subheading}
            </Text>
            <motion.div
              variants={variantTextAnimate(0.1)}
              initial="initial"
              animate="visible"
            >
              <Text ta="center" className="kc-heading" fw={600}>
                {sectionData?.text?.heading}
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
