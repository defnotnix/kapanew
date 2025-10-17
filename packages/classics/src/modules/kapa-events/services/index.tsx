"use client";

import {
  Box,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  Overlay,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
} from "@mantine/core";

import {
  PageHeaderOverlay,
  usePageContext,
  variantTextAnimate,
} from "@classics/ui";
import { useQuery } from "@tanstack/react-query";
import { getData } from "./page.api";

//motion
import { motion } from "motion/react";

export function PageServices() {
  const {} = usePageContext();

  const { data, isFetching } = useQuery({
    queryKey: ["events", "events"],
    queryFn: async () => {
      const res: any = await getData();
      console.log(res);
      return res;
    },
    initialData: [],
  });

  return (
    <>
      <section className="pos_relative">
        <PageHeaderOverlay type="ke" />

        <Container py={100}>
          <Box py={{ base: 32, lg: 50 }}>
            <Stack gap="xs">
              <motion.div
                variants={variantTextAnimate(0.1)}
                initial="initial"
                animate="visible"
              >
                <Text
                  visibleFrom="lg"
                  fw={900}
                  style={{
                    fontFamily: "var(--ke-heading)",
                    fontSize: "4rem",
                    lineHeight: "4.5rem",
                  }}
                >
                  Events We Curate at
                  <br /> KaPa Events.
                </Text>

                <Text
                  hiddenFrom="lg"
                  size="xl"
                  fw={900}
                  style={{
                    fontFamily: "var(--ke-heading)",
                    fontSize: "3rem",
                    lineHeight: "3.2rem",
                  }}
                >
                  Events We Curate at
                  <br /> KaPa Events.
                </Text>
              </motion.div>

              <motion.div
                variants={variantTextAnimate(0)}
                initial="initial"
                animate="visible"
              >
                <Text size="lg" fw={600} opacity={0.5} mt="md">
                  Crafting seamless experiences—from corporate halls to festival
                  grounds.
                </Text>
              </motion.div>
            </Stack>
          </Box>

          <Divider my={50} color="var(--ke-color-300)" />

          <Stack>
            {data.map((group: any, index: number) => (
              <Box key={index}>
                <Grid>
                  <Grid.Col span={{ base: 12, lg: 5 }}>
                    <Box pos="sticky" top={150}>
                      <Stack>
                        <Box>
                          <Text size="xl">0{index + 1}</Text>
                          <motion.div
                            variants={variantTextAnimate(0.1)}
                            initial="initial"
                            animate="visible"
                          >
                            <Text
                              visibleFrom="lg"
                              style={{
                                fontFamily: "var(--ke-heading)",
                                fontSize: "3rem",
                                lineHeight: "3.5rem",
                              }}
                              fw={800}
                            >
                              {group.text?.category}
                            </Text>

                            <Text
                              hiddenFrom="lg"
                              style={{
                                fontFamily: "var(--ke-heading)",
                                fontSize: "2rem",
                                lineHeight: "2.5rem",
                              }}
                              fw={800}
                            >
                              {group.text?.category}
                            </Text>
                          </motion.div>
                        </Box>

                        <Stack gap="xs" w={{ base: "auto", lg: 300 }}>
                          <Group>
                            <Text
                              size="sm"
                              fw={600}
                              opacity={0.5}
                              tt="uppercase"
                            >
                              {group?.text?.image_year}
                            </Text>
                          </Group>
                          <Image src={group?.image} />

                          <Text size="sm" fw={600} tt="uppercase">
                            {group?.text?.image_title}
                          </Text>

                          <Text size="sm" fw={600} opacity={0.5}>
                            {group?.text?.image_description}
                          </Text>
                        </Stack>
                      </Stack>
                    </Box>
                  </Grid.Col>

                  <Grid.Col span={{ base: 12, lg: 7 }}>
                    <Stack gap="xl">
                      {group.text?.events?.map(
                        (eventinfo: any, index: number) => (
                          <Box key={index}>
                            <SimpleGrid cols={2} spacing="xl">
                              <motion.div
                                variants={variantTextAnimate(0.1)}
                                initial="initial"
                                animate="visible"
                              >
                                <h2 style={{}}>{eventinfo.title}</h2>
                              </motion.div>

                              <motion.div
                                variants={variantTextAnimate(0)}
                                initial="initial"
                                animate="visible"
                              >
                                <Text size="sm" fw={600} opacity={0.8}>
                                  {eventinfo.description}
                                </Text>
                              </motion.div>
                            </SimpleGrid>
                            <Space h="md" />
                          </Box>
                        )
                      )}
                    </Stack>
                  </Grid.Col>
                </Grid>

                <Divider my={50} color="var(--ke-color-500)" />
              </Box>
            ))}
          </Stack>
        </Container>
      </section>
    </>
  );
}
