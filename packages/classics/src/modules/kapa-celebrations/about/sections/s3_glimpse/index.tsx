"use client";

import { getCmsData, getCmsDatas, variantTextAnimate } from "@classics/ui";

import { Box, Container, Grid, Image, Paper, Stack, Text } from "@mantine/core";

import { motion } from "motion/react";

export function SectionAboutGlimpse() {
  const imageData = getCmsDatas("kc-about-glimpse") || [];
  const quoteData = getCmsData("kc-about-glimpse-info") || [];

  return (
    <>
      <section
        style={{
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "calc(30% - 100px)",
            display: "block",
            height: 200,
            width: "120%",
            transform: "rotate(6deg)",
            background:
              "linear-gradient(to right,var(--color-celebrations-primary-500), var(--color-celebrations-primary-700))",
            marginLeft: "-10%",
            zIndex: 1,
            opacity: 0.8,
          }}
        />

        <Container
          size="xl"
          pos="relative"
          style={{
            zIndex: 2,
          }}
        >
          <Grid gutter={"xs"}>
            <Grid.Col span={{ base: 6, lg: 4 }}>
              <Paper
                style={{
                  transform: "rotate(-3deg)",
                }}
                p="6px"
                radius="sm"
                withBorder
                shadow="xl"
              >
                <Image
                  radius="xs"
                  h={{ base: 200, lg: 350 }}
                  src={imageData[0]?.image}
                />
              </Paper>

              <Paper
                mt="xs"
                w={{ base: "100%", lg: "80%" }}
                ml={{
                  base: 0,
                  lg: "20%",
                }}
                style={{
                  transform: "rotate(-3deg)",
                }}
                p="6px"
                radius="sm"
                withBorder
                shadow="xl"
              >
                <Image
                  radius="xs"
                  h={{ base: 200, lg: 200 }}
                  src={imageData[1]?.image}
                />
              </Paper>

              <Text
                visibleFrom="lg"
                mt="xl"
                ta="right"
                size="sm"
                fw={800}
                mb="sm"
                c="var(--color-celebrations-primary-600)"
              >
                {quoteData.text?.quote2}
              </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 6, lg: 4 }} pt={{ base: 0, lg: 64 }}>
              <Paper
                style={{
                  transform: "rotate(3deg)",
                }}
                p="6px"
                radius="sm"
                withBorder
                shadow="xl"
              >
                <Image
                  radius="xs"
                  h={{ base: 200, lg: 350 }}
                  src={imageData[3]?.image}
                />
              </Paper>
              <Paper
                mt="-48"
                style={{
                  transform: "rotate(-5deg)",
                }}
                p="6px"
                radius="sm"
                withBorder
                shadow="xl"
              >
                <Image
                  radius="xs"
                  h={{ base: 200, lg: 350 }}
                  src={imageData[4]?.image}
                />
              </Paper>
            </Grid.Col>
            <Grid.Col
              visibleFrom="lg"
              span={{ base: 6, lg: 4 }}
              pt={{ base: 0, lg: 100 }}
            >
              <Text
                size="sm"
                fw={800}
                mb="xl"
                m={"xl"}
                c="var(--color-celebrations-primary-600)"
              >
                {quoteData.text?.quote1}
              </Text>
              <Box pos="relative">
                <Paper
                  w={"80%"}
                  style={{
                    transform: "rotate(8deg)",
                  }}
                  p="6px"
                  radius="sm"
                  withBorder
                  shadow="xl"
                >
                  <Image radius="xs" h={350} src={imageData[5]?.image} />
                </Paper>
              </Box>
            </Grid.Col>
          </Grid>
        </Container>
      </section>
    </>
  );
}
