"use client";

import { getCmsDatas, images, variantTextAnimate } from "@classics/ui";

import { Carousel } from "@mantine/carousel";
import {
  Box,
  Container,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { CircleIcon } from "@phosphor-icons/react";
import { animate, motion } from "motion/react";
import { useRef, useState } from "react";

import Autoplay from "embla-carousel-autoplay";

export function SectionAboutRecipe() {
  const recipe =
    getCmsDatas("kc-about-recipe").map((item: any) => {
      return {
        ...item,
        ...item.text,
      };
    }) || [];
  console.log(recipe);

  const autoplay = useRef(Autoplay({ delay: 5000 }));
  const [current, setCurrent] = useState(0);

  return (
    <>
      <section
        style={{
          background: "var(--kc-color-300)",
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
          <Image
            opacity={0.1}
            style={{ width: "100%" }}
            src={images.graphics.leaf}
            alt="Leaf"
          />
        </div>

        <Container py={100}>
          <Box py={{ base: 32, lg: 50 }}>
            <Stack gap={"xs"}>
              <motion.div
                variants={variantTextAnimate(0)}
                initial="initial"
                animate="visible"
              >
                <Text size="xs" fw={600} opacity={0.5} c="var(--kc-color-dark)">
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
                  className="kc-heading"
                  c="var(--kc-color-dark)"
                >
                  Our Recipe for Better Celebrations.
                </Text>
              </motion.div>
            </Stack>
          </Box>

          <Box pos="relative">
            <Carousel
              w="33.33%"
              styles={{
                viewport: {
                  overflow: "visible",
                },
              }}
              slideSize="100%"
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
              {recipe.map((stepinfo: any, index: number) => (
                <Carousel.Slide
                  key={index}
                  opacity={current == index ? 1 : 0.3}
                >
                  <Stack gap="xs">
                    <CircleIcon
                      size={12}
                      weight="fill"
                      color="var(--kc-color-600)"
                    />

                    <Text c="var(--kc-color-dark)" size="2rem" pb="md">
                      {stepinfo.title}
                    </Text>
                  </Stack>
                </Carousel.Slide>
              ))}
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
            <Paper
              p="6px"
              radius="sm"
              style={{
                transform: "rotate(-2deg)",
              }}
            >
              <Image
                radius="xs"
                h={500}
                src={
                  recipe[current]?.image ||
                  "https://images.pexels.com/photos/30184617/pexels-photo-30184617.jpeg"
                }
              />
            </Paper>

            <div
              style={{
                height: 500,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <Text
                  size="xs"
                  c="var(--kc-color-dark)"
                  opacity={0.5}
                  tt="uppercase"
                  fw={800}
                >
                  Phase {recipe[current]?.step}
                </Text>

                <Text>{recipe[current]?.title}</Text>
              </div>

              <Text size="xl" c="var(--kc-color-dark)" maw={500} fw={700}>
                {recipe[current]?.description}
              </Text>
            </div>
          </SimpleGrid>
        </Container>
      </section>
    </>
  );
}
