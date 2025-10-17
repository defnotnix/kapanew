"use client";

import {
  PageHeaderOverlay,
  usePageContext,
  variantTextAnimate,
  variantContainer,
  variantGeneralDelay,
} from "@classics/ui";
//api
import { getCMS } from "./page.api";
import { useQuery } from "@tanstack/react-query";
import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  SimpleGrid,
  Stack,
  Table,
  Text,
} from "@mantine/core";
import { motion } from "motion/react";
import { SectionHomePhase } from "./s3_phase";

export function PageSplitDecors() {
  // * CONTEXT

  const { dispatch } = usePageContext();

  // * PRELOADING

  const { data, isFetching } = useQuery({
    queryKey: ["celebrations", "home"],
    queryFn: async () => {
      const dataCMS = await getCMS();

      setTimeout(() => {
        dispatch({
          type: "SET_PRE_DATA",
          payload: {
            cms: dataCMS,
          },
        });
      }, 1000);

      return true;
    },
    initialData: false,
  });

  return (
    <>
      <section className="pos_relative">
        <PageHeaderOverlay />

        <Container py={100}>
          <Box py={{ base: 32, lg: 50 }}>
            <Stack gap="xs">
              <motion.div
                variants={variantTextAnimate(0)}
                initial="initial"
                animate="visible"
              >
                <Text size="xs" ta="center" fw={600} opacity={0.5}>
                  SPLITS BY KAPA
                </Text>
              </motion.div>

              <motion.div
                variants={variantTextAnimate(0.1)}
                initial="initial"
                animate="visible"
              >
                <h1
                  style={{
                    fontFamily: "var(--kc-font-heading)",
                    textAlign: "center",
                    fontSize: "6rem",
                  }}
                >
                  <b
                    style={{
                      color: "var(--kc-color-700)",
                    }}
                  >
                    Decors
                  </b>{" "}
                  by KaPa
                </h1>
              </motion.div>

              <SimpleGrid spacing="xs" cols={{ base: 1, lg: 2 }}>
                <motion.div
                  variants={variantTextAnimate(0)}
                  initial="initial"
                  animate="visible"
                >
                  <Text
                    style={{
                      fontFamily: "var(--kc-font-heading)",
                      lineHeight: "100%",
                    }}
                    c="var(--kc-color-600)"
                    size="2rem"
                    ta="right"
                    fw={700}
                  >
                    Aesthetic Elegance,
                    <br /> Made Simple.
                  </Text>
                </motion.div>

                <motion.div
                  variants={variantTextAnimate(0)}
                  initial="initial"
                  animate="visible"
                >
                  <Text
                    c="var(--kc-color-600)"
                    size="xs"
                    fw={700}
                    pt={{ base: 0, lg: 28 }}
                  >
                    For clients who love planning their own event
                    <br /> but need visual design support. A premium
                    full-service package designed for
                  </Text>
                </motion.div>
              </SimpleGrid>
            </Stack>
          </Box>
        </Container>

        <Divider py={50} color="var(--kc-color-300)" />

        <section>
          {/* PRE-CELEBRATION */}

          <Container py={50}>
            <Grid>
              <Grid.Col span={{ base: 12, lg: 4 }}>
                <motion.div
                  variants={variantTextAnimate(0)}
                  initial="initial"
                  animate="visible"
                >
                  <Text className="kc-heading" fw={700}>
                    Pre-Event
                  </Text>
                </motion.div>

                <motion.div
                  variants={variantTextAnimate(0)}
                  initial="initial"
                  animate="visible"
                >
                  <Text c="var(--kc-color-600)" size="xs" fw={700}>
                    Design strategy & client coordination before event.
                  </Text>
                </motion.div>
              </Grid.Col>

              <Grid.Col span={{ base: 12, lg: 8 }}>
                <Grid gutter="4px">
                  {[
                    "Design consultation with client",
                    "Theme and color palette curation",
                    "Mood board & concept presentation",
                    "Venue visit for décor planning",
                    "Floor plan for décor setup",
                    "Budget estimation specific to décor",
                  ].map((task, i) => (
                    <Grid.Col span={{ base: 6, lg: 4 }} key={i}>
                      <motion.div>
                        <Paper
                          h={120}
                          p="xl"
                          radius="lg"
                          bg="rgba(255,255,255,.5)"
                        >
                          <Text
                            style={{
                              fontFamily: "var(--kc-font-heading)",
                              lineHeight: "110%",
                            }}
                            size="md"
                            fw={700}
                          >
                            {task}
                          </Text>
                        </Paper>
                      </motion.div>
                    </Grid.Col>
                  ))}
                </Grid>
              </Grid.Col>
            </Grid>
          </Container>

          <Divider py={50} color="var(--kc-color-300)" />

          {/* DESIGN & PRODUCTION */}
          <Container py={50}>
            <Grid>
              <Grid.Col span={{ base: 12, lg: 4 }}>
                <motion.div
                  variants={variantTextAnimate(0)}
                  initial="initial"
                  animate="visible"
                >
                  <Text className="kc-heading" fw={700}>
                    Design
                    <br /> & Production
                  </Text>
                </motion.div>

                <motion.div
                  variants={variantTextAnimate(0)}
                  initial="initial"
                  animate="visible"
                >
                  <Text c="var(--kc-color-600)" size="xs" fw={700}>
                    Décor creation, design detailing, and vendor coordination.
                  </Text>
                </motion.div>
              </Grid.Col>

              <Grid.Col span={{ base: 12, lg: 8 }}>
                <Grid gutter="4px">
                  {[
                    "Décor item design",
                    "Floral planning (artificial / natural)",
                    "Centerpieces and tablespace design",
                    "Backdrops, arches, drapes, and lighting layout",
                    "Visual props and accessories",
                    "Signage design (welcome board, directional, etc.)",
                    "Vendor dealings",
                  ].map((task, i) => (
                    <Grid.Col span={{ base: 6, lg: 4 }} key={i}>
                      <motion.div>
                        <Paper
                          h={120}
                          p="xl"
                          radius="lg"
                          bg="rgba(255,255,255,.5)"
                        >
                          <Text
                            style={{
                              fontFamily: "var(--kc-font-heading)",
                              lineHeight: "110%",
                            }}
                            size="md"
                            fw={700}
                          >
                            {task}
                          </Text>
                        </Paper>
                      </motion.div>
                    </Grid.Col>
                  ))}
                </Grid>
              </Grid.Col>
            </Grid>
          </Container>

          <Divider py={50} color="var(--kc-color-300)" />

          {/* ON-SITE EXECUTION */}
          <Container py={50}>
            <Grid>
              <Grid.Col span={{ base: 12, lg: 4 }}>
                <motion.div
                  variants={variantTextAnimate(0)}
                  initial="initial"
                  animate="visible"
                >
                  <Text className="kc-heading" fw={700}>
                    On-Site
                    <br /> Execution
                  </Text>
                </motion.div>

                <motion.div
                  variants={variantTextAnimate(0)}
                  initial="initial"
                  animate="visible"
                >
                  <Text c="var(--kc-color-600)" size="xs" fw={700}>
                    Real-time décor installation and coordination on event day.
                  </Text>
                </motion.div>
              </Grid.Col>

              <Grid.Col span={{ base: 12, lg: 8 }}>
                <Grid gutter="4px">
                  {[
                    "Vendor coordination (florist, lighting, balloon, structure, platform team)",
                    "Setup & styling on event day",
                    "Time-managed setup execution",
                    "Final touch-ups before guest arrival",
                  ].map((task, i) => (
                    <Grid.Col span={{ base: 6, lg: 4 }} key={i}>
                      <motion.div>
                        <Paper
                          h={120}
                          p="xl"
                          radius="lg"
                          bg="rgba(255,255,255,.5)"
                        >
                          <Text
                            style={{
                              fontFamily: "var(--kc-font-heading)",
                              lineHeight: "110%",
                            }}
                            size="md"
                            fw={700}
                          >
                            {task}
                          </Text>
                        </Paper>
                      </motion.div>
                    </Grid.Col>
                  ))}
                </Grid>
              </Grid.Col>
            </Grid>
          </Container>

          <Divider py={50} color="var(--kc-color-300)" />

          {/* POST EVENT */}
          <Container py={50}>
            <Grid>
              <Grid.Col span={{ base: 12, lg: 4 }}>
                <motion.div
                  variants={variantTextAnimate(0)}
                  initial="initial"
                  animate="visible"
                >
                  <Text className="kc-heading" fw={700}>
                    Post-Event
                  </Text>
                </motion.div>

                <motion.div
                  variants={variantTextAnimate(0)}
                  initial="initial"
                  animate="visible"
                >
                  <Text c="var(--kc-color-600)" size="xs" fw={700}>
                    After-event teardown and closure tasks.
                  </Text>
                </motion.div>
              </Grid.Col>

              <Grid.Col span={{ base: 12, lg: 8 }}>
                <Grid gutter="4px">
                  {[
                    "Dismantling and venue clearance of décor",
                    "Damage check and vendor reconciliation (decor only)",
                  ].map((task, i) => (
                    <Grid.Col span={{ base: 6, lg: 4 }} key={i}>
                      <motion.div>
                        <Paper
                          h={120}
                          p="xl"
                          radius="lg"
                          bg="rgba(255,255,255,.5)"
                        >
                          <Text
                            style={{
                              fontFamily: "var(--kc-font-heading)",
                              lineHeight: "110%",
                            }}
                            size="md"
                            fw={700}
                          >
                            {task}
                          </Text>
                        </Paper>
                      </motion.div>
                    </Grid.Col>
                  ))}
                </Grid>
              </Grid.Col>
            </Grid>
          </Container>

          <Divider py={50} color="var(--kc-color-300)" />

          {/* SERVICE COMPARISON */}
          <Container py={50}>
            <Text className="kc-heading" ta="center" fw={700}>
              Service Comparison
            </Text>

            <Paper p="xl" radius="lg" bg="rgba(255,255,255,.5)" mt="xl">
              <Table highlightOnHover>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th opacity={0.5}>Feature</Table.Th>
                    <Table.Th ta="center" opacity={0.5}>
                      Decor By KaPa
                    </Table.Th>
                    <Table.Th ta="center" opacity={0.5}>
                      Full Circle By KaPa
                    </Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {[
                    ["Creative Concept & Theme", "✅", "✅"],
                    ["Mood boards & Visual Plan", "✅", "✅"],
                    ["Decor Execution", "✅", "✅"],
                    ["Vendor Coordination (Decor Only)", "✅", "✅"],
                    ["Full Vendor Management (All)", "❌", "✅"],
                    ["Budget Planning", "❌", "✅"],
                    ["Venue Layout", "❌", "✅"],
                    ["Timeline & Checklist Management", "❌", "✅"],
                    ["Guest RSVP & Hospitality", "❌", "✅"],
                    ["Event Day Coordination", "❌", "✅"],
                    ["Production Oversight", "❌", "✅"],
                  ].map(([feature, decor, full], i) => (
                    <Table.Tr key={i}>
                      <Table.Td fw={600}>{feature}</Table.Td>
                      <Table.Td ta="center">{decor}</Table.Td>
                      <Table.Td ta="center">{full}</Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            </Paper>
          </Container>
        </section>
      </section>
    </>
  );
}
