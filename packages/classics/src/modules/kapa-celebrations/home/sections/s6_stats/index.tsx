"use client";

import {
  Container,
  Divider,
  Grid,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";

import { motion } from "motion/react";
import { variantTextAnimate } from "@classics/ui";

export function SectionHomeStats() {
  return (
    <>
      <section className="pos_relative">
        <Image
          src="https://images.unsplash.com/photo-1609151162377-794faf68b02f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          pos="absolute"
          style={{
            height: "100%",
            width: "100%",
            filter: "saturate(0) brightness(.5)",
            zIndex: 1,
          }}
        />
        <Container
          py={100}
          pos="relative"
          style={{
            zIndex: 2,
          }}
        >
          <Grid>
            <Grid.Col span={{ base: 12, lg: 4 }}>
              <Stack>
                <motion.div
                  variants={variantTextAnimate(0)}
                  initial="initial"
                  animate="visible"
                >
                  <Text size="sm" c="gray.0">
                    STATS
                  </Text>
                </motion.div>

                <motion.div
                  variants={variantTextAnimate(0)}
                  initial="initial"
                  animate="visible"
                >
                  <div
                    className="kc-heading"
                    style={{
                      color: "var(--mantine-color-gray-0)",
                      fontSize: "3rem",
                      lineHeight: "3.5rem",
                    }}
                  >
                    Number
                    <br />
                    Highlights
                  </div>
                </motion.div>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 8 }}>
              <SimpleGrid cols={{ base: 1, lg: 3 }}>
                <Paper
                  p="xl"
                  pt="3rem"
                  h={350}
                  bg="#ffffff33"
                  style={{
                    backdropFilter: "blur(10px)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                  radius="xl"
                >
                  <motion.div
                    variants={variantTextAnimate(0)}
                    initial="initial"
                    animate="visible"
                  >
                    <div
                      className="kc-heading"
                      style={{
                        color: "var(--kc-color-200)",
                        fontSize: "6rem!important",
                      }}
                    >
                      399
                    </div>
                  </motion.div>

                  <div>
                    <Divider mb="sm" opacity={0.5} />
                    <Text size="md" c="gray.0" fw={600}>
                      Celebrations
                      <br /> Hosted So far.
                    </Text>
                  </div>
                </Paper>
                <Paper
                  p="xl"
                  pt="3rem"
                  h={350}
                  bg="#ffffff33"
                  style={{
                    backdropFilter: "blur(10px)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                  radius="xl"
                >
                  <motion.div
                    variants={variantTextAnimate(0)}
                    initial="initial"
                    animate="visible"
                  >
                    <div
                      className="kc-heading"
                      style={{
                        color: "var(--kc-color-200)",
                        fontSize: "6rem!important",
                      }}
                    >
                      99%
                    </div>
                  </motion.div>

                  <div>
                    <Divider mb="sm" opacity={0.5} />
                    <Text size="md" c="gray.0" fw={600}>
                      Service
                      <br />
                      Rating.
                    </Text>
                  </div>
                </Paper>
                <Paper
                  p="xl"
                  pt="3rem"
                  h={350}
                  bg="#ffffff33"
                  style={{
                    backdropFilter: "blur(10px)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                  radius="xl"
                >
                  <motion.div
                    variants={variantTextAnimate(0)}
                    initial="initial"
                    animate="visible"
                  >
                    <div
                      className="kc-heading"
                      style={{
                        color: "var(--kc-color-200)",
                        fontSize: "6rem!important",
                      }}
                    >
                      100%
                    </div>
                  </motion.div>

                  <div>
                    <Divider mb="sm" opacity={0.5} />
                    <Text size="md" c="gray.0" fw={600}>
                      Stress
                      <br /> Relieved.
                    </Text>
                  </div>
                </Paper>
              </SimpleGrid>
            </Grid.Col>
          </Grid>
        </Container>
      </section>
    </>
  );
}
