"use client";

import { Container, Grid, Image, SimpleGrid, Stack, Text } from "@mantine/core";
import {
  usePageContext,
  variantGeneralDelay,
  variantTextAnimate,
} from "@classics/ui";

import { motion } from "framer-motion";
import { images } from "../../../../../assets";

export function SectionIntro() {
  return (
    <Container py={100} pos="relative">
      <Grid>
        <Grid.Col span={{ base: 12, lg: 7 }}>
          <motion.div
            variants={variantTextAnimate(0)}
            initial="initial"
            animate="visible"
          >
            <Text
              style={{
                fontFamily: "var(--ke-font-heading)",
                fontSize: "3rem",
                lineHeight: "3.5rem",
              }}
            >
              We plan, produce, coordinate, design, style, promote and live for
              a good party.’ We strategize, produce, coordinate, design, and
              execute experiences with impact.
            </Text>
          </motion.div>
        </Grid.Col>

        <Grid.Col span={{ base: 12, lg: 5 }}>
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
