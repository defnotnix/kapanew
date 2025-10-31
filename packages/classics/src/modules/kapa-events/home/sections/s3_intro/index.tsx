"use client";

import { Container, Grid, Image, SimpleGrid, Stack, Text } from "@mantine/core";
import {
  getCmsData,
  usePageContext,
  variantGeneralDelay,
  variantTextAnimate,
} from "@classics/ui";

import { motion } from "framer-motion";
import { images } from "../../../../../assets";

export function SectionIntro() {
  const sectionData = getCmsData("ke-hero-intro");

  return (
    <Container py={100} pos="relative">
      <Grid align="flex-end">
        <Grid.Col span={{ base: 12, lg: 7 }}>
          <motion.div
            variants={variantTextAnimate(0)}
            initial="initial"
            animate="visible"
          >
            <Text
              visibleFrom="lg"
              style={{
                fontFamily: "var(--ke-font-heading)",
                fontSize: "3.5rem",
                lineHeight: "4rem",
              }}
              fw={700}
            >
              We plan, produce, coordinate, design, style, promote and live for
              a good party.’ We strategize, produce, coordinate, design, and
              execute experiences with impact.
            </Text>

            <Text
              hiddenFrom="lg"
              style={{
                fontFamily: "var(--ke-font-heading)",
                fontSize: "2rem",
                lineHeight: "2.5rem",
              }}
              fw={700}
            >
              We plan, produce, coordinate, design, style, promote and live for
              a good party.’ We strategize, produce, coordinate, design, and
              execute experiences with impact.
            </Text>
          </motion.div>
        </Grid.Col>

        <Grid.Col span={{ base: 12, lg: 5 }} pb={{ base: 0, lg: 32 }}>
          <Stack>
            <motion.div
              variants={variantTextAnimate(0)}
              initial="initial"
              animate="visible"
            >
              <Text size="md">
                At KaPa Events, we believe every event—whether corporate,
                public, or entertainment—is an opportunity to tell your brand’s
                story.
              </Text>
            </motion.div>

            <motion.div
              variants={variantTextAnimate(0)}
              initial="initial"
              animate="visible"
            >
              <Text size="md">
                We specialize in crafting seamless experiences that balance
                creative vision, strategic planning, and flawless execution.
                From initial concept to post-event reporting, our approach
                ensures clarity, flexibility, and professionalism—giving every
                client the level of support they need.
              </Text>
            </motion.div>
          </Stack>
        </Grid.Col>
      </Grid>

      <Image
        h={500}
        fit="contain"
        pos="absolute"
        style={{
          bottom: 0,
          top: 0,
          left: 0,
          opacity: 0.1,
        }}
        src={images.logo.events}
      />
    </Container>
  );
}
