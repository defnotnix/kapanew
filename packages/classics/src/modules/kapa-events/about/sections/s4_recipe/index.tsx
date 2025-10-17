"use client";

import { variantTextAnimate } from "@classics/ui";

import { Carousel } from "@mantine/carousel";
import {
  Box,
  Container,
  Image,
  Progress,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { CircleIcon } from "@phosphor-icons/react";
import { animate, motion } from "motion/react";
import { useState } from "react";
import { useRef } from "react";

import Autoplay from "embla-carousel-autoplay";
import { useHover } from "@mantine/hooks";

export function SectionAboutRecipe() {
  const recipe = [
    {
      step: 1,
      title: "Discovery & Consultation",
      description:
        "We start by understanding your goals, audience, style, and vision. Whether you're planning an intimate, or large-scale celebration, we listen carefully to make sure every detail aligns with your objectives. From designing, production, flower decors, to scheduling and venue coordination— we are here for you from the beginning, helping and guiding.",
    },
    {
      step: 2,
      title: "Concept & Proposal",
      description:
        "Our team transforms your ideas into a creative concept. From theme and design inspiration to curated venue options and an initial budget outline, we build a proposal tailored to your needs and event type.",
    },
    {
      step: 3,
      title: "Planning & Coordination",
      description:
        "We handle the logistics from A to Z: booking vendors, managing timelines, securing permits, and coordinating communication. You’ll have a dedicated event manager to guide you every step of the way—ensuring a stress-free planning experience before and during the event.",
    },
    {
      step: 4,
      title: "Design & Production",
      description:
        "Here’s where the magic happens. Our designers and production team work together to bring your concept to life through stunning décor, visuals, and atmosphere. Every touchpoint is designed to impress and immerse you and your guests.",
    },
    {
      step: 5,
      title: "Execution & Management",
      description:
        "On the day of the event, we’re the first to arrive and the last to leave. We manage the entire event flow, from setup to final guest goodbyes, so you can relax and enjoy your event—knowing everything is under control.",
    },
    {
      step: 6,
      title: "Wrap-Up & Feedback",
      description:
        "After the event, we conduct a detailed wrap-up—reviewing what went well, what can be improved, and collecting your feedback. We believe every event helps us grow, and your input matters.",
    },
    {
      step: 7,
      title: "After-Service Support",
      description:
        "Our relationship continues on even after the event ends. Need help with thank-you gifts, post-event reports, media coverage, or vendor follow-ups? We’re here. We also offer support for recurring events or future planning—because one great event often leads to the next.",
    },
  ];

  const autoplay = useRef(Autoplay({ delay: 5000 }));
  const [current, setCurrent] = useState(0);

  return (
    <>
      <section
        style={{
          background: "var(--ke-color-300)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "30vh",
            right: 0,
            width: "50vw",
            zIndex: 0, // camelCase for React
          }}
        >
          {/* <Image
            opacity={0.1}
            style={{ width: "100%" }}
            src={images.graphics.leaf}
            alt="Leaf"
          /> */}
        </div>

        <Container py={100}>
          <Box py={{ base: 32, lg: 50 }}>
            <Stack gap={"xs"}>
              <motion.div
                variants={variantTextAnimate(0)}
                initial="initial"
                animate="visible"
              >
                <Text size="xs" fw={600} opacity={0.5} c="var(--ke-color-dark)">
                  The Recipe
                </Text>
              </motion.div>

              <motion.div
                variants={variantTextAnimate(0)}
                initial="initial"
                animate="visible"
              >
                <Text
                  size="xl"
                  fw={700}
                  className="ke-heading"
                  c="var(--ke-color-dark)"
                >
                  How we build
                  <br /> a successful event.
                </Text>
              </motion.div>
            </Stack>
          </Box>

          <Box pos="relative">
            <SimpleGrid cols={9} visibleFrom="lg">
              {recipe.map((stepinfo: any, index: number) => {
                const { hovered, ref } = useHover();

                return (
                  <Stack
                    ref={ref}
                    style={{
                      cursor: "pointer",
                    }}
                    gap="xs"
                    key={index}
                    opacity={hovered ? 1 : current == index ? 1 : 0.3}
                    onClick={async () => {
                      await animate("#stepinfo", {
                        opacity: 0,
                        filter: "blur(8px)",
                      });
                      setCurrent(index);
                      await animate("#stepinfo", {
                        opacity: 1,
                        filter: "blur(0px)",
                      });
                    }}
                  >
                    <CircleIcon
                      size={12}
                      weight="fill"
                      color="var(--ke-color-600)"
                    />

                    <Text c="var(--ke-color-dark)" size="md" pb="md" fw={900}>
                      {stepinfo.title}
                    </Text>
                  </Stack>
                );
              })}
            </SimpleGrid>

            <Carousel
              w="100%"
              hiddenFrom="lg"
              styles={{
                viewport: {
                  overflow: "visible",
                },
              }}
              slideSize="60%"
              slideGap="md"
              controlsOffset="sm"
              controlSize={26}
              withControls={false}
              withIndicators={false}
              onSlideChange={async (index: number) => {
                await animate("#stepinfo", {
                  opacity: 0,
                  filter: "blur(8px)",
                });
                setCurrent(index);
                await animate("#stepinfo", {
                  opacity: 1,
                  filter: "blur(0px)",
                });
              }}
              plugins={[autoplay.current]}
              onMouseEnter={autoplay.current.stop}
              onMouseLeave={() => autoplay.current.play()}
            >
              {recipe.map((stepinfo: any, index: number) => {
                const { hovered, ref } = useHover();

                return (
                  <Carousel.Slide key={index}>
                    <Stack
                      ref={ref}
                      style={{
                        cursor: "pointer",
                      }}
                      gap="xs"
                      opacity={hovered ? 1 : current == index ? 1 : 0.3}
                      onClick={async () => {
                        await animate("#stepinfo", {
                          opacity: 0,
                          filter: "blur(8px)",
                        });
                        setCurrent(index);
                        await animate("#stepinfo", {
                          opacity: 1,
                          filter: "blur(0px)",
                        });
                      }}
                    >
                      <CircleIcon
                        size={12}
                        weight="fill"
                        color="var(--ke-color-600)"
                      />

                      <Text c="var(--ke-color-dark)" size="md" pb="md" fw={900}>
                        {stepinfo.title}
                      </Text>
                    </Stack>
                  </Carousel.Slide>
                );
              })}
            </Carousel>

            <div
              style={{
                display: "block",
                position: "absolute",
                top: 5,
                left: "-99vh",
                height: 1,
                background: "white",
                zIndex: 99999,
                width: "1000vw",
                opacity: 0.1,
              }}
            />
          </Box>

          <SimpleGrid
            cols={{ base: 1, lg: 2 }}
            py={64}
            spacing="xl"
            id="stepinfo"
          >
            <Image
              radius="lg"
              h={{ base: 300, lg: 500 }}
              src="https://images.pexels.com/photos/30184617/pexels-photo-30184617.jpeg"
            />

            <Box
              h={{ base: "auto", lg: 500 }}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Text
                size="xs"
                c="var(--ke-color-dark)"
                opacity={0.5}
                tt="uppercase"
                fw={900}
                mb="xl"
              >
                Phase {recipe[current]?.step} - {recipe[current]?.title}
              </Text>

              <Text
                hiddenFrom="lg"
                size="md"
                c="var(--ke-color-dark)"
                maw={500}
                fw={700}
              >
                {recipe[current]?.description}
              </Text>

              <Text
                visibleFrom="lg"
                size="xl"
                c="var(--ke-color-dark)"
                maw={500}
                fw={700}
              >
                {recipe[current]?.description}
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </section>
    </>
  );
}
