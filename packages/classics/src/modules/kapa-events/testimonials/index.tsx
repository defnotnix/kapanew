"use client";

import {
  Avatar,
  Box,
  Container,
  Grid,
  Group,
  Paper,
  Stack,
  Text,
} from "@mantine/core";

import {
  PageHeaderOverlay,
  usePageContext,
  variantContainer,
  variantGeneralDelay,
  variantTextAnimate,
} from "@classics/ui";

import { motion } from "motion/react";

import { useQuery } from "@tanstack/react-query";
import chunk from "lodash/chunk";
import { getData } from "./page.api";

import classes from "./page.module.css";

import { QuotesIcon } from "@phosphor-icons/react";

export function PageTestimonials() {
  const { state, dispatch } = usePageContext();

  const { data, isFetching }: any = useQuery({
    queryKey: ["events", "faq"],
    queryFn: async () => {
      const res = await getData();
      dispatch({
        type: "SET_PRE_DATA",
        payload: {},
      });
      const testimonials = res.find((item: any) => {
        return item.holder == "ke-testimonials";
      });

      return testimonials ? testimonials?.text?.testimonials : [];
    },
    initialData: [],
  });

  const COLUMN_COUNT = 4;
  const chunkedData = chunk(data, Math.ceil(data.length / COLUMN_COUNT));

  // * COMPONENTS

  function TestimonialCard({ item, delay = 0 }: { item: any; delay?: number }) {
    return (
      <motion.div
        variants={variantGeneralDelay(delay)}
        initial="initial"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Paper
          className={classes.testimonial_paper}
          radius="md"
          // style={{
          //   transform: `rotate(-${Math.random() * 3}deg)`,
          // }}
        >
          <Paper p="xl">
            <Stack>
              <QuotesIcon color="var(--ke-color-400)" weight="fill" size={24} />

              <Text size="sm" fw={600}>
                {item.message}
              </Text>
            </Stack>
          </Paper>

          <Group wrap="nowrap" p="md">
            <Avatar name={item.name} color="initials" />
            <div>
              <Text size="xs" fw={600}>
                {item.name}
              </Text>
              <Text size="10px" opacity={0.5}>
                {item.year || "20XX"} | {item.venue || "Organized by KaPa"}
              </Text>
            </div>
          </Group>
        </Paper>
      </motion.div>
    );
  }

  return (
    <section className="pos_relative">
      <PageHeaderOverlay type="ke" />

      <Container py={100}>
        <Box py={{ base: 32, lg: 50 }}>
          <Stack gap="xs">
            <motion.div
              variants={variantTextAnimate(0)}
              initial="initial"
              animate="visible"
            >
              <Text size="xs" ta="center" fw={600} opacity={0.5}>
                CLIENT TESTIMONIALS
              </Text>
            </motion.div>

            <motion.div
              variants={variantTextAnimate(0.1)}
              initial="initial"
              animate="visible"
            >
              <h1 className="ke-heading" style={{ textAlign: "center" }}>
                Don’t take it from us,
                <br />
                take it from our clients.
              </h1>
            </motion.div>

            <motion.div
              variants={variantTextAnimate(0)}
              initial="initial"
              animate="visible"
            >
              <Text size="xs" ta="center" fw={700}>
                Here’s what our clients say about us working together.
              </Text>
            </motion.div>
          </Stack>
        </Box>

        <motion.section
          variants={variantContainer}
          initial="initial"
          animate="visible"
        >
          <Grid mt={80} gutter="xs" pos="relative" style={{ zIndex: 4 }}>
            {chunkedData.map((columnData, colIndex) => (
              <Grid.Col
                key={colIndex}
                span={{ base: 12, lg: 12 / COLUMN_COUNT }}
                mt={{
                  base: 0,
                  lg: colIndex === 1 ? -60 : colIndex === 2 ? -20 : 0,
                }}
              >
                <Stack gap="xs">
                  {columnData.map((item, index) => (
                    <TestimonialCard
                      key={index}
                      item={item}
                      delay={0.05 * (colIndex + 1)}
                    />
                  ))}
                </Stack>
              </Grid.Col>
            ))}
          </Grid>
        </motion.section>
      </Container>
    </section>
  );
}
