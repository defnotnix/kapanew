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

export function PageSplitFullCircle() {
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
                    Full Circle
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
                    Your Celebration,
                    <br /> Our Orchestration
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
                    A premium full-service package designed for
                    <br /> stress-free, seamless execution.
                  </Text>
                </motion.div>
              </SimpleGrid>
            </Stack>
          </Box>
        </Container>

        <SectionHomePhase />

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
                    Pre-Celebration
                  </Text>
                </motion.div>

                <motion.div
                  variants={variantTextAnimate(0)}
                  initial="initial"
                  animate="visible"
                >
                  <Text c="var(--kc-color-600)" size="xs" fw={700}>
                    3–6+ months before the event.
                  </Text>
                </motion.div>
              </Grid.Col>

              <Grid.Col span={{ base: 12, lg: 8 }}>
                <Grid gutter="4px">
                  {[
                    "Initial client discovery session",
                    "Budget planning & tracking",
                    "Vendor research, comparison & booking",
                    "Wedding calendar / timeline development",
                    "Venue scouting and booking",
                    "Legal or permit consultation",
                    "Guest experience curation",
                    "Emergency & contingency planning",
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
                            size="lg"
                            fw={700}
                          >
                            {task}
                          </Text>
                        </Paper>
                      </motion.div>
                    </Grid.Col>
                  ))}

                  <Grid.Col span={{ base: 12 }}>
                    <Paper p="xl" radius="lg" bg="rgba(255,255,255,.5)">
                      <Text
                        style={{
                          fontFamily: "var(--kc-font-heading)",
                          lineHeight: "100%",
                        }}
                        size="xl"
                        fw={700}
                      >
                        Booking & negotiation with:
                      </Text>

                      <SimpleGrid cols={{ base: 2, lg: 4 }} mt="xl">
                        {[
                          "Venue",
                          "Caterer",
                          "Decorators",
                          "Photographer / Videographer",
                          "Make-up Artists",
                          "Mehendi Artists",
                          "Sound / Lighting Team",
                          "Emcee or Performers",
                          "Printers",
                          "Florists",
                          "Bar Vendors",
                          "Others as required",
                        ].map((vendor, i) => (
                          <Text
                            key={i}
                            c="var(--kc-color-600)"
                            size="sm"
                            fw={700}
                          >
                            {vendor}
                          </Text>
                        ))}
                      </SimpleGrid>
                    </Paper>
                  </Grid.Col>
                </Grid>
              </Grid.Col>
            </Grid>
          </Container>

          <Divider py={50} color="var(--kc-color-300)" />

          {/* EXECUTION PHASE */}
          <Container py={50}>
            <Grid>
              <Grid.Col span={{ base: 12, lg: 4 }}>
                <motion.div
                  variants={variantTextAnimate(0)}
                  initial="initial"
                  animate="visible"
                >
                  <Text className="kc-heading" fw={700}>
                    Execution Phase
                  </Text>
                </motion.div>

                <motion.div
                  variants={variantTextAnimate(0)}
                  initial="initial"
                  animate="visible"
                >
                  <Text c="var(--kc-color-600)" size="xs" fw={700}>
                    On-ground coordination & supervision
                  </Text>
                </motion.div>
              </Grid.Col>

              <Grid.Col span={{ base: 12, lg: 8 }}>
                <Grid gutter="4px">
                  {[
                    "Setup Coordination & Supervision",
                    "Vendor Execution & Troubleshooting",
                    "Venue Coordination & Layout Checks",
                    "Crowd Management & Guest Flow",
                    "Stage Management & Performances",
                    "Bride & Groom Assistance",
                    "Bar & Catering Oversight",
                    "Live Performance Coordination",
                    "Real-time Issue Resolution",
                    "Power & Technical Supervision",
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
                    After the celebration — wrap-up & reconciliation
                  </Text>
                </motion.div>
              </Grid.Col>

              <Grid.Col span={{ base: 12, lg: 8 }}>
                <Grid gutter="4px">
                  {[
                    "Dismantling & Venue Clearance",
                    "Damage Check & Vendor Reconciliation",
                    "Final Vendor Settlements",
                    "Feedback & Debrief Session",
                    "Thank-you Note Assistance",
                    "Guest Departure Coordination",
                    "Lost & Found Handling",
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
