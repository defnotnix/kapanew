"use client";

//
import { useRouter } from "next/navigation";
//mantine
import { Box, Group, Paper, SimpleGrid, Text } from "@mantine/core";
//styles
import classes from "./featurecard.module.css";

const paperElementConfig = {
  radius: 0,
  bg: "var(--color-celebrations-cream-dark)",
};

export function FeaturedSectionCard({
  idx,
  id,
  year,
  category,
  title,
  url,
  image,
}: any) {
  // * DEFINITIONS

  const Router = useRouter();

  // * CONTEXTS

  // * STATES

  // * PRELOADING

  // * FUNCTIONS

  // * COMPONENTS

  return (
    <>
      <div style={{ position: "relative" }} className={classes.root}>
        <Paper
          className="clipcard"
          radius="lg"
          h={{ base: 450, md: 500, lg: 550 }}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
          }}
        />

        <Paper
          pos="absolute"
          top={0}
          w="100%"
          h={{ base: 450, md: 500, lg: 550 }}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            background: `none`,
            backgroundSize: "cover",
          }}
        >
          <Box>
            <Group p="md" gap={0}>
              <Text size="xl" fw={900}>
                0{idx + 1}
              </Text>
            </Group>
          </Box>

          <Box>
            <SimpleGrid cols={2}>
              <div />
              <Text
                pr="md"
                ta="right"
                size="xs"
                tt="uppercase"
                style={{
                  fontFamily: "var(--ke-font-heading)",
                }}
              >
                <b>{title}</b>
                <br /> Annual Seminar - AUG 2024
              </Text>
            </SimpleGrid>
          </Box>
        </Paper>
      </div>
    </>
  );
}
