"use client";

//next
import { useRouter } from "next/navigation";
//mantine
import { Container, Grid, Paper, SimpleGrid, Space, Text } from "@mantine/core";
//styles
import classes from "./instagram.module.css";

import { motion } from "framer-motion";

import { variantGeneralDelay, variantTextAnimate } from "@classics/ui";

import { useHover } from "@mantine/hooks";
import { MotionHeroFlower } from "./motion/hero.flower";

import img1 from "../../../../../assets/instagram/483525015_1179506394176883_8279680780712981444_n.jpg";
import img2 from "../../../../../assets/instagram/484110471_1177044204423102_4962553818205743464_n.jpg";
import img3 from "../../../../../assets/instagram/484858844_1182306910563498_1125079397820997689_n.jpg";

function RenderCards() {
  const Router = useRouter();

  const { hovered, ref } = useHover();
  return (
    <>
      <Container
        hiddenFrom="lg"
        size="xl"
        mt={{ base: 0, lg: -100 }}
        ref={ref}
        pos="relative"
        h={200}
      >
        <SimpleGrid cols={3}>
          <motion.div
            variants={variantGeneralDelay(0.1)}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <Paper px="xs">
              <Paper
                px="xs"
                pb="md"
                pt="xs"
                shadow="lg"
                radius="lg"
                mt={{ base: 0, lg: 220 }}
                style={{
                  transition: ".3s ease-in-out",
                  position: "absolute",
                  top: 50,
                  left: 0,
                  transform: !hovered ? "rotate(-10deg)" : "rotate(-20deg)",
                  cursor: "pointer",
                  background: `url(${img1.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                h={{ base: 200, lg: 500 }}
                w="33.33%"
              ></Paper>
            </Paper>
          </motion.div>
          <motion.div
            variants={variantGeneralDelay(0.2)}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <Paper
              px="xs"
              pb="md"
              pt="xs"
              shadow="lg"
              radius="lg"
              style={{
                transition: ".3s ease-in-out",
                position: "absolute",
                cursor: "pointer",
                backgroundImage: `url(${img2.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              h={{ base: 200, lg: 500 }}
              w="33.33%"
              mt={{ base: 0, lg: 100 }}
            ></Paper>
          </motion.div>
          <motion.div
            variants={variantGeneralDelay(0.3)}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <Paper
              shadow="lg"
              radius="lg"
              h={{ base: 200, lg: 500 }}
              style={{
                transition: ".3s ease-in-out",
                position: "absolute",
                top: -30,
                transform: !hovered ? "rotate(8deg)" : "rotate(10deg)",
                right: 0,
                cursor: "pointer",
                background: `url(${img3.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              w="33.33%"
            ></Paper>
          </motion.div>
        </SimpleGrid>
      </Container>

      <Container
        visibleFrom="lg"
        size="xl"
        mt={{ base: 0, lg: -100 }}
        ref={ref}
        pos="relative"
        h={900}
      >
        <SimpleGrid cols={3}>
          <motion.div
            variants={variantGeneralDelay(0.1)}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <Paper
              px="xs"
              onClick={() => {
                Router.push(
                  "https://www.facebook.com/photo.php?fbid=695081409286053&set=pb.100063526001676.-2207520000&type=3"
                );
              }}
            >
              <Paper
                px="xs"
                pb="md"
                pt="xs"
                shadow="lg"
                radius="lg"
                mt={{ base: 0, lg: 220 }}
                style={{
                  transition: ".3s ease-in-out",
                  position: "absolute",
                  top: !hovered ? 50 : 0,
                  left: !hovered ? 200 : 0,
                  transform: !hovered ? "rotate(-10deg)" : "rotate(-20deg)",
                  cursor: "pointer",
                  background: `url(${img1.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                h={{ base: 300, lg: 500 }}
                w="33.33%"
              ></Paper>
            </Paper>
          </motion.div>
          <motion.div
            variants={variantGeneralDelay(0.2)}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <Paper
              onClick={() => {
                Router.push(
                  "https://www.facebook.com/photo.php?fbid=683587993768728&set=pb.100063526001676.-2207520000&type=3"
                );
              }}
              px="xs"
              pb="md"
              pt="xs"
              shadow="lg"
              radius="lg"
              style={{
                transition: ".3s ease-in-out",
                position: "absolute",
                cursor: "pointer",
                background: `url(${img2.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              h={{ base: 300, lg: 500 }}
              w="33.33%"
              mt={{ base: 0, lg: 100 }}
            ></Paper>
          </motion.div>
          <motion.div
            variants={variantGeneralDelay(0.3)}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <Paper
              onClick={() => {
                Router.push(
                  "https://www.facebook.com/photo.php?fbid=703277545133106&set=pb.100063526001676.-2207520000&type=3"
                );
              }}
              shadow="lg"
              radius="lg"
              h={{ base: 300, lg: 500 }}
              style={{
                transition: ".3s ease-in-out",
                position: "absolute",
                top: !hovered ? -30 : 0,
                transform: !hovered ? "rotate(8deg)" : "rotate(10deg)",
                right: !hovered ? 200 : 0,
                cursor: "pointer",
                background: `url(${img3.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              w="33.33%"
            ></Paper>
          </motion.div>
        </SimpleGrid>
      </Container>
    </>
  );
}

export function SectionHomeInstagram({
  sectionData = {
    subheading: "The Approach",
    heading: [
      "A team of experts,",
      "radically transforming",
      "events & event planning.",
    ],
    paragraph: [
      `  Targeted sequencing – a significant step in tailored cancer
                  care. But, only a select population have benefited from these
                  advancements.`,
      ` Isabl technology unlocks the full potential of genomic medicine
                  – contributing to the advancement of research aiming to provide
                  better outcomes for every patient.`,
    ],
    image:
      "https://www.isabl.io/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fisabl%2F5703e0fd-e020-479e-879e-d1ab462511ab__DSC8366.jpg%3Fauto%3Dcompress%2Cformat&w=3840&q=75",
  },
}: any) {
  const { subheading, heading, paragraph, image } = sectionData;

  // * DEFINITIONS

  const Router = useRouter();

  // * CONTEXTS

  // * STATES

  // * PRELOADING

  // * FUNCTIONS

  // * COMPONENTS

  return (
    <>
      <Container size="xl" py={{ base: 20, lg: 100 }} pos="relative">
        <motion.div
          variants={variantTextAnimate(0)}
          initial="initial"
          animate="visible"
        >
          <Text size="sm" tt="uppercase" fw={600}>
            SOCIALS
          </Text>
        </motion.div>
        <Grid my="xl" gutter="xl">
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <motion.div
              variants={variantTextAnimate(0)}
              initial="initial"
              animate="visible"
            >
              <div className="kc-heading">
                Keep up with our journey as we craft celebrations filled with
                magic, joy, and unforgettable moments.
              </div>
            </motion.div>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 5 }} offset={{ base: 0, lg: 1 }}>
            <motion.div
              variants={variantTextAnimate(0)}
              initial="initial"
              animate="visible"
            >
              <Text size="sm" opacity={0.5}>
                Follow us as we bring your dream celebrations to life, filled
                with magic, joy, and unforgettable moments.
              </Text>
            </motion.div>
          </Grid.Col>
        </Grid>

        <Space h="xl" />

        <section className={classes.flower_content}>
          <MotionHeroFlower />
        </section>
        <section className={classes.flower_content_bot}>
          <MotionHeroFlower />
        </section>
      </Container>

      <RenderCards />
    </>
  );
}
