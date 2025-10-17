"use client";

import { Accordion, Box, Container, Stack, Text } from "@mantine/core";

//components
import {
  PageHeaderOverlay,
  variantTextAnimate,
  variantContainer,
  usePageContext,
} from "@classics/ui";
//motion
import { motion } from "motion/react";

import { useQuery } from "@tanstack/react-query";

//api

import { getData } from "./page.api";

export function PageFAQs() {
  // * STORE

  const { dispatch } = usePageContext();

  // * CONTENT GET

  const { data, isLoading } = useQuery({
    queryKey: ["celebrations", "faq"],
    queryFn: async () => {
      const res = await getData();

      console.log(res);

      dispatch({
        type: "SET_PRE_DATA",
        payload: {},
      });

      return res?.find((item: any) => {
        return item.holder == "ke-faq";
      });
    },
  });

  if (isLoading) {
    return <></>;
  }

  return (
    <section className="pos_relative">
      <PageHeaderOverlay />

      <Container size="sm" py={100}>
        <Box py={{ base: 32, lg: 50 }}>
          <Stack gap={"xs"}>
            <motion.div
              variants={variantTextAnimate(0)}
              initial="initial"
              animate="visible"
            >
              <Text size="xs" ta="center" fw={600} opacity={0.5}>
                FAQs
              </Text>
            </motion.div>

            <motion.div
              variants={variantTextAnimate(0.1)}
              initial="initial"
              animate="visible"
            >
              <h1
                className="kc-heading"
                style={{
                  textAlign: "center",
                }}
              >
                In case you were
                <br /> wondering.
              </h1>
            </motion.div>

            <motion.div
              variants={variantTextAnimate(0)}
              initial="initial"
              animate="visible"
            >
              <Text size="xs" ta="center" fw={700}>
                Here are answers to some of the questions we get asked most
                often.
              </Text>
            </motion.div>
          </Stack>
        </Box>

        <motion.section
          variants={variantContainer}
          initial="initial"
          animate="visible"
        >
          <Accordion
            variant="separated"
            styles={{
              item: {
                margin: 0,
                marginBottom: "4px",
              },
              control: {
                fontSize: "var(--mantine-font-size-sm)",
                fontWeight: 600,
              },
              panel: {
                fontSize: "var(--mantine-font-size-sm)",
              },
            }}
          >
            {data?.text?.faqs?.map((faqinfo: any, index: number) => (
              <motion.div
                key={index}
                variants={variantTextAnimate(0.05 * index)}
              >
                <Accordion.Item key={index} value={String(index)}>
                  <Accordion.Control>
                    <Text size="sm" fw={600}>
                      {faqinfo.title}
                    </Text>
                  </Accordion.Control>
                  <Accordion.Panel>{faqinfo.description}</Accordion.Panel>
                </Accordion.Item>
              </motion.div>
            ))}
          </Accordion>
        </motion.section>
      </Container>
    </section>
  );
}
