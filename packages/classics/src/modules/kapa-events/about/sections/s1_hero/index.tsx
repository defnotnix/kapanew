"use client";

import { variantGeneralDelay, variantTextAnimate } from "@classics/ui";
import { Box, Button, Container, Grid, Overlay, Text } from "@mantine/core";

//animate
import { motion } from "motion/react";

import cx from "clsx";

import classes from "./_.module.css";

import { ArrowRightIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

export function SectionAboutHero() {
  const Router = useRouter();

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
                "ke-heading",
                "mantine-visible-from-lg"
              )}
            >
              A committed team changing the way events are designed and
              experienced.
            </motion.div>

            <motion.div
              variants={variantTextAnimate(0)}
              initial="initial"
              animate="visible"
              className={cx(
                classes.mainHeading,
                "ke-heading",
                "mantine-hidden-from-lg"
              )}
            >
              A committed team changing the way events are designed and
              experienced.
            </motion.div>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 5 }}>
            <Text size="sm">
              Behind every ‘happily ever after’ was our team — dedicated,
              inspired, and relentless in the pursuit of perfection.
            </Text>
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
              backgroundImage: `url("https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg")`,
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
          <Text className="ke-heading" fw={600} visibleFrom="lg">
            We passionately lead with honesty and trust, always delivering on
            our promises with unwavering commitment. With a passion for creating
            extraordinary celebrations, we make sure every detail is perfectly
            executed. Our skilled and confident team handles any challenges
            swiftly, so you can relax and enjoy the joy and creativity of your
            event.
          </Text>

          <Text
            fw={600}
            hiddenFrom="lg"
            style={{
              fontFamily: "var(--ke-heading)",
              fontSize: "1.5em",
              lineHeight: "2rem",
            }}
          >
            We passionately lead with honesty and trust, always delivering on
            our promises with unwavering commitment. With a passion for creating
            extraordinary celebrations, we make sure every detail is perfectly
            executed. Our skilled and confident team handles any challenges
            swiftly, so you can relax and enjoy the joy and creativity of your
            event.
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
            color="var(--ke-color-600)"
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
