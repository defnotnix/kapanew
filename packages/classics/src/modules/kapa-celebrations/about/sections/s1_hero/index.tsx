"use client";

import {
  getCmsData,
  variantGeneralDelay,
  variantTextAnimate,
} from "@classics/ui";
import { Box, Button, Container, Grid, Overlay, Text } from "@mantine/core";
import imgHero from "../../../../../assets/team/hero.jpg";

//animate
import { motion } from "motion/react";

import cx from "clsx";

import classes from "./_.module.css";

import { ArrowRightIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

export function SectionAboutHero() {
  const Router = useRouter();

  const sectionData = getCmsData("kc-about-hero");

  return (
    <>
      <Container py={{ base: 100, lg: 160 }} size="xl">
        <motion.div
          variants={variantTextAnimate(0)}
          initial="initial"
          animate="visible"
        >
          <Text size="xs" fw={700} opacity={0.5} mb={"xl"}>
            ABOUT
          </Text>
        </motion.div>

        <Grid>
          <Grid.Col span={{ base: 12, lg: 7 }}>
            <motion.div
              variants={variantTextAnimate(0)}
              initial="initial"
              animate="visible"
              className={cx(
                classes.mainHeading,
                "kc-heading",
                "mantine-visible-from-lg"
              )}
            >
              {sectionData?.text?.heading}
            </motion.div>

            <motion.div
              variants={variantTextAnimate(0)}
              initial="initial"
              animate="visible"
              className={cx(
                classes.mainHeading,
                "kc-heading",
                "mantine-hidden-from-lg"
              )}
            >
              {sectionData?.text?.subheading}
            </motion.div>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 5 }}>
            <Text size="sm">{sectionData?.text?.subheading}</Text>
          </Grid.Col>
        </Grid>
      </Container>

      <Container mt={-150}>
        <motion.div
          variants={variantGeneralDelay(0.8)}
          initial="initial"
          whileInView={"visible"}
          viewport={{ once: true }}
          style={{
            position: "relative",
          }}
        >
          <Overlay className="has_clip" />
          <Box
            mt={{ base: 50, lg: 0 }}
            h={{ base: 300, lg: 800 }}
            className="has_clip"
            style={{
              backgroundImage: `url(${imgHero.src})`,
              backgroundSize: "cover",
            }}
          ></Box>
        </motion.div>
      </Container>

      <Container size="xl" py={100}>
        <motion.div
          variants={variantTextAnimate(0)}
          initial="initial"
          animate="visible"
        >
          <Text className="kc-heading" fw={600}>
            {sectionData?.text?.info}
          </Text>
        </motion.div>

        <motion.div
          variants={variantTextAnimate(0)}
          initial="initial"
          animate="visible"
        >
          <Button
            fw={700}
            rightSection={<ArrowRightIcon />}
            ml={{ base: 0, lg: "50%" }}
            color="var(--kc-color-600)"
            variant="light"
            size="lg"
            mt="xl"
            style={{
              fontSize: "var(--mantine-font-size-sm)",
            }}
            onClick={() => {
              Router.push("/kapa-celebrations/events");
            }}
          >
            See all celebrations we provide.
          </Button>
        </motion.div>
      </Container>
    </>
  );
}
