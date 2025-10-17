"use client";

import React, { useEffect, useRef, useState } from "react";
//next
import {} from "next/navigation";
//mantine
import {
  Box,
  Center,
  Container,
  Grid,
  Group,
  Image,
  Paper,
  Progress,
  SimpleGrid,
  Space,
  Stack,
  Text,
} from "@mantine/core";
//styles
import cx from "clsx";
import classes from "./testimonials.module.css";
import { Quotes } from "@phosphor-icons/react";

//animation
import { animate } from "motion/mini";
import { spring } from "motion";
import { motion } from "framer-motion";
import { useInterval } from "@mantine/hooks";

import { usePageContext } from "@classics/ui";

export function SectionTestimonials({ testimonials = [], clients = [] }: any) {
  // * DEFINITIONS

  const [active, setActive] = useState(0);

  // * CONTEXTS

  // * STATES
  const { state } = usePageContext();
  const [sectionData, setSectionData] = useState<any | null>({
    testimonials: [
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
        name: "Ralex Wang",
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
        name: "Balex Wang",
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
        name: "Talex Wang",
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
        name: "Xalex Wang",
        company: "Mo Media",
        post: "Managing Director",
        message:
          "The “occasionally remarkable” moments shouldn’t be left to chance! They should be planned for, invested in.",
      },
    ],
  });
  const sliderRef: any = useRef<HTMLDivElement>(null);

  // * PRELOADING

  // * FUNCTIONS

  const triggerAnimateFunction = async () => {
    await animate("#sliderref", {
      marginLeft: -1000,
      opacity: 0,
    });

    setActive(active == sectionData.testimonials.lenght ? 0 : active + 1);

    await animate("#sliderref", {
      marginLeft: 0,
      opacity: 1,
    });
  };

  const interval = useInterval(() => triggerAnimateFunction(), 5000);

  // * COMPONENTS

  useEffect(() => {
    interval.start();
  }, []);

  const TestimonialContainer = () => {
    return (
      <Center py={100} pos="relative">
        <motion.div
          style={{
            position: "absolute",
            flexDirection: "column",
            justifyContent: "space-between",
            zIndex: 4,
            transform: "rotate(-5deg)",
            marginLeft: -100,
            background: `radial-gradient(circle, rgba(90,128,255,1) 0%, rgba(16,62,217,1) 72%, rgba(23,38,85,1) 100%)`,
            height: 350,
            width: 500,
            borderRadius: "var(--mantine-radius-lg)",
          }}
        />

        <motion.div
          style={{
            position: "absolute",
            flexDirection: "column",
            justifyContent: "space-between",
            zIndex: 3,
            transform: "rotate(5deg)",
            marginLeft: 100,
            height: 350,
            width: 500,
            borderRadius: "var(--mantine-radius-lg)",
            background: "var(--mantine-color-dark-8)",
          }}
        />

        <div
          style={{
            position: "absolute",
            flexDirection: "column",
            justifyContent: "space-between",
            zIndex: 5,
          }}
        >
          <motion.div
            ref={sliderRef}
            id="sliderref"
            animate={{
              marginLeft: 0,
              opacity: 1,
            }}
            initial={{
              marginLeft: 1000,
              opacity: 0,
            }}
          >
            <Paper
              bg="var(--ke-color-950)"
              withBorder
              h={350}
              w={500}
              p="xl"
              radius="lg"
              shadow="lg"
              visibleFrom="lg"
              style={{
                borderColor: "var(--ke-color-900)",
              }}
            >
              <Stack>
                <Quotes color="var(--ke-color-400)" size={32} weight="fill" />

                <Text size="lg" c="var(--ke-color-50)">
                  {sectionData?.testimonials[active]?.message}
                </Text>
              </Stack>

              <Stack>
                <Group justify="space-between" align="flex-end">
                  <Box>
                    <Text size="xs" c="var(--ke-color-50)">
                      {sectionData?.testimonials[active]?.name}
                    </Text>
                    <Text size="xs" opacity={0.5} c="var(--ke-color-50)">
                      {sectionData?.testimonials[active]?.post}
                    </Text>
                  </Box>

                  <Image
                    src={sectionData?.testimonials[active]?.signature_image}
                    w={150}
                  />
                </Group>
                <Progress value={80} size="xs" />
              </Stack>
            </Paper>

            <Paper
              withBorder
              h={350}
              w={300}
              p="xl"
              radius="lg"
              shadow="lg"
              hiddenFrom="lg"
            >
              <Stack>
                <Quotes color="var(--ke-color-400)" size={32} weight="fill" />

                <Text size="lg" c="var(--ke-color-50)">
                  {sectionData?.testimonials[active]?.message}
                </Text>
              </Stack>

              <Stack>
                <Group justify="space-between" align="flex-end">
                  <Box>
                    <Text size="xs">
                      {sectionData?.testimonials[active]?.name}
                    </Text>
                    <Text size="xs" opacity={0.5}>
                      {testimonials[active]?.post}
                    </Text>
                  </Box>

                  <Image
                    src={sectionData?.testimonials[active]?.signature_image}
                    w={150}
                  />
                </Group>
                <Progress value={80} size="xs" />
              </Stack>
            </Paper>
          </motion.div>
        </div>
      </Center>
    );
  };

  return (
    <>
      <section className={classes.root}>
        <Container size="xl" py={160}>
          <Text size="sm" ta="center">
            You're in good hands.
          </Text>
          <Center pos="relative" visibleFrom="lg">
            <Text c="var(--ke-color-950)" size="3rem" ta="center" mt="sm">
              Dont take our{" "}
              <span
                style={{
                  opacity: 0,
                }}
              >
                words
              </span>{" "}
              for it.
            </Text>
            <Text
              size="4rem"
              c="var(--ke-color-500)"
              ml={150}
              style={{
                fontFamily: '"Pacifico", cursive',
                transform: "rotate(-18deg)",
              }}
              pos="absolute"
            >
              words
            </Text>
          </Center>

          <Center pos="relative" hiddenFrom="lg">
            <Text size="xl" ta="center" mt="sm">
              Dont take our{" "}
              <span
                style={{
                  opacity: 0,
                }}
              >
                words
              </span>{" "}
              for it.
            </Text>
            <Text
              size="2rem"
              c="var(--ke-color-600)"
              ml={60}
              style={{
                fontFamily: '"Pacifico", cursive',
                transform: "rotate(-18deg)",
                color: "blue!important",
              }}
            >
              words
            </Text>
          </Center>
        </Container>

        <Space h={100} />

        <div
          style={{
            height: "50vh",
          }}
        >
          <TestimonialContainer />
        </div>

        <div className={classes.slider}>
          <motion.div
            className={classes.slidetrack}
            animate={{
              x: ["0%", "-50%"],
              transition: {
                ease: "linear",
                duration: 50,
                repeat: Infinity,
              },
            }}
            transition={{
              duration: 1000, // Adjust speed as needed
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[
              ...sectionData?.testimonials,
              ...sectionData?.testimonials,
              ...sectionData?.testimonials,
              ...sectionData?.testimonials,
            ]
              .slice(0, 20)
              .map((datainfo: any, index: any) => (
                <div className={classes.slide} key={index}>
                  <img src={datainfo.image} height="30" alt="" />
                </div>
              ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
