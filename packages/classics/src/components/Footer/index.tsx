"use client";

import React from "react";
// next
import { useRouter } from "next/navigation";
// mantine
import {
  Anchor,
  Box,
  Container,
  Grid,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
} from "@mantine/core";
// styles
import cx from "clsx";
import classes from "./footer.module.css";

// ✅ use the same motion lib you used in the new Header
import { motion } from "framer-motion";
import { variantTextAnimate } from "../../animation";
import { Router } from "next/dist/client/router";
import { branches } from "../../modules";

const paperElementConfig = {
  radius: 0,
  bg: "var(--kc-color-200)",
};

const paperElementConfigEvents = {
  radius: 0,
  bg: "#deeefb",
};

// ✅ tiny helper to replace variantGeneralDelay()
const animProps: any = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.4, ease: "easeOut", delay },
});

// ✅ AnimatedText replacement: slide-up each line safely
function AnimatedText({
  text,
  delay = 0,
  as: As = "div",
  align = "left",
}: {
  text: string;
  delay?: number;
  as?: any;
  align?: "left" | "center" | "right";
}) {
  return (
    <As
      style={{
        display: "block",
        overflow: "hidden", // mask slide-up
        textAlign: align,
      }}
    >
      <motion.span
        style={{ display: "inline-block", willChange: "transform, opacity" }}
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.55, ease: "easeOut", delay }}
      >
        {text}
      </motion.span>
    </As>
  );
}

export function Footer() {
  const Router = useRouter();

  return (
    <>
      <Container py={{ base: 0, lg: 64 }} px={{ base: 0 }}>
        <Paper
          pos="relative"
          pb={{ base: 32, lg: 0 }}
          radius={0}
          bg="var(--kc-color-700)"
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <Group pos="absolute" top={0} right={0}>
            <Text size="xl">we create, you celebrate.</Text>
          </Group>

          <Box>
            <Grid gutter={0}>
              <Grid.Col span={1}>
                <Paper visibleFrom="lg" h={150} {...paperElementConfig} />
                <Paper
                  visibleFrom="lg"
                  mt={-0.5}
                  h={100}
                  {...paperElementConfig}
                  style={{
                    clipPath: "polygon(0 0, 0% 100%, 100% 0)",
                  }}
                />
              </Grid.Col>
              <Grid.Col span={5}>
                <Paper
                  visibleFrom="lg"
                  {...paperElementConfig}
                  className={classes.top_1}
                  h={40}
                  w={40}
                  ml={-10}
                />
              </Grid.Col>
              <Grid.Col span={2}>
                <Group justify="flex-end">
                  <Paper
                    visibleFrom="lg"
                    h={40}
                    w={40}
                    mt={-1}
                    {...paperElementConfig}
                    style={{
                      clipPath: "polygon(0 0, 100% 100%, 100% 0)",
                    }}
                  />
                </Group>
              </Grid.Col>
              <Grid.Col span={4}>
                <Paper visibleFrom="lg" h={40} {...paperElementConfig}>
                  <Box visibleFrom="lg">
                    <div
                      style={{
                        fontSize: "var(--mantine-font-size-xs)",
                        fontWeight: 600,
                        textAlign: "center",
                        textTransform: "uppercase",
                        display: "flex",
                      }}
                    >
                      <AnimatedText
                        text="THE CLASSICS PROJECTS - CELEBRATIONS"
                        delay={0.05}
                        as="span"
                        align="center"
                      />
                    </div>
                  </Box>
                  <Box hiddenFrom="lg" pt="md">
                    <div
                      style={{
                        fontSize: "6px",
                        fontWeight: 600,
                        textAlign: "center",
                        textTransform: "uppercase",
                        display: "flex",
                      }}
                    >
                      <AnimatedText
                        text="THE CLASSICS PROJECTS - CELEBRATIONS"
                        delay={0.05}
                        as="span"
                        align="center"
                      />
                    </div>
                  </Box>
                </Paper>
                <Grid.Col span={12}>
                  <Group justify="flex-end">
                    <Paper
                      {...paperElementConfig}
                      className={classes.top_2}
                      h={40}
                      w={40}
                      mr={-10}
                    />
                  </Group>
                </Grid.Col>
              </Grid.Col>
            </Grid>

            <Container size="xl" pos="relative">
              <Grid gutter={0}>
                <Grid.Col span={{ base: 12, lg: 8 }}>
                  <Box visibleFrom="lg">
                    <motion.div
                      variants={variantTextAnimate(0.1)}
                      initial="initial"
                      animate="visible"
                    >
                      <Text
                        mt={-180}
                        ml={100}
                        className="kc-heading"
                        style={{
                          fontSize: "3.5rem",
                          lineHeight: "3.8rem",
                        }}
                        fw={700}
                        c="gray.0"
                      >
                        With you, for
                        <br /> your Celebration & Memories
                      </Text>
                    </motion.div>
                  </Box>

                  <Box hiddenFrom="lg" pt="xl">
                    <motion.div
                      variants={variantTextAnimate(0.1)}
                      initial="initial"
                      animate="visible"
                    >
                      <Text
                        className="kc-heading"
                        style={{
                          fontSize: "3.5rem",
                          lineHeight: "3.8rem",
                        }}
                        fw={700}
                        c="gray.0"
                      >
                        We transform corporate, social
                        <br />
                        and public events into
                        <br />
                        unforgettable experiences.
                      </Text>
                    </motion.div>
                  </Box>

                  <Space h={{ base: 0, lg: "8rem" }} />

                  <motion.div {...animProps(0)}>
                    <Group mt={{ base: 32, lg: 0 }}>
                      <Text size="xs" c="gray.0">
                        KaPa Celebrations
                      </Text>
                      <Text size="xs" c="gray.0" opacity={0.5}>
                        KaPa Events
                      </Text>
                      <Text size="xs" c="gray.0" opacity={0.5}>
                        KaPa Societies
                      </Text>
                      <Text size="xs" c="gray.0" opacity={0.5}>
                        KaPa Decors
                      </Text>
                    </Group>
                  </motion.div>

                  <SimpleGrid cols={3} py="xl" visibleFrom="lg">
                    <motion.div {...animProps(0.1)}>
                      <Box>
                        <Text
                          size="xs"
                          c="gray.0"
                          tt="uppercase"
                          pb="md"
                          opacity={0.5}
                        >
                          Sitemap
                        </Text>
                        <Stack gap="4px">
                          <Anchor
                            c="gray.0"
                            onClick={() => {
                              Router.push("/kapa-celebrations");
                            }}
                          >
                            KaPa Home
                          </Anchor>
                          <Anchor
                            c="gray.0"
                            onClick={() => {
                              Router.push("/kapa-celebrations");
                            }}
                          >
                            KaPa Celebrations
                          </Anchor>
                          <Anchor
                            c="gray.0"
                            onClick={() => {
                              Router.push("/kapa-celebrations/about");
                            }}
                          >
                            About Us
                          </Anchor>
                          <Anchor
                            c="gray.0"
                            onClick={() => {
                              Router.push("/kapa-celebrations/events/showcase");
                            }}
                          >
                            Works
                          </Anchor>
                          <Anchor
                            c="gray.0"
                            onClick={() => {
                              Router.push("/kapa-celebrations/events/showcase");
                            }}
                          >
                            Decor by KaPa
                          </Anchor>
                          <Anchor
                            c="gray.0"
                            onClick={() => {
                              Router.push("/kapa-celebrations/events/showcase");
                            }}
                          >
                            Full-Circle by KaPa
                          </Anchor>
                          <Anchor
                            c="gray.0"
                            onClick={() => {
                              Router.push("/kapa-celebrations/events/showcase");
                            }}
                          >
                            Testimonials
                          </Anchor>
                          <Anchor
                            c="gray.0"
                            onClick={() => {
                              Router.push("/kapa-celebrations/events/showcase");
                            }}
                          >
                            FAQs
                          </Anchor>
                        </Stack>
                      </Box>
                    </motion.div>
                    <motion.div {...animProps(0.1)}>
                      <Box>
                        <Text
                          size="xs"
                          c="gray.0"
                          tt="uppercase"
                          pb="md"
                          opacity={0.5}
                        >
                          LEGAL
                        </Text>
                        <Stack gap="4px">
                          <Anchor c="gray.0">Terms & Conditions</Anchor>
                          <Anchor c="gray.0">Privacy Policies</Anchor>
                        </Stack>
                      </Box>
                    </motion.div>
                    <motion.div {...animProps(0.2)}>
                      <Box>
                        <Text
                          size="xs"
                          c="gray.0"
                          tt="uppercase"
                          pb="md"
                          opacity={0.5}
                        >
                          FIND US
                        </Text>
                        <Stack gap="4px">
                          <Anchor c="gray.0">Facebook</Anchor>
                          <Anchor c="gray.0">Instagram</Anchor>
                          <Anchor c="gray.0">Twitter</Anchor>
                          <Anchor c="gray.0">X</Anchor>
                          <Anchor c="gray.0">Linked In</Anchor>
                        </Stack>
                      </Box>
                    </motion.div>
                  </SimpleGrid>
                </Grid.Col>

                {/* Right column (LG and up) */}
                <Grid.Col
                  span={{ base: 12, lg: 4 }}
                  mt={{ base: 0, lg: -100 }}
                  visibleFrom="lg"
                >
                  <div
                    style={{
                      fontSize: "2rem",
                      lineHeight: "1.8rem",
                      fontWeight: 600,
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      color: "var(--mantine-color-gray-0)",
                    }}
                  >
                    <AnimatedText text="KaPa" delay={0} align="right" />
                    <AnimatedText
                      text="Celebrations"
                      delay={0.08}
                      align="right"
                    />
                  </div>

                  <Space visibleFrom="lg" h="xl" />

                  {/* <motion.div {...animProps(0.4)}>
                    <Stack gap="sm" my="xs">
                      <Text size="xs" c="gray.0" opacity={0.5} ta="right">
                        OFFICE
                      </Text>

                      <Text size="xs" c="gray.0" ta="right">
                        The Classics Projects HQ,
                      </Text>
                      <Text size="xs" c="gray.0" ta="right">
                        Yangal Tole, -23, Nisthananda Marg,
                        <br /> Kathmandu Nepal
                      </Text>
                      <Text size="xs" c="gray.0" ta="right">
                        Sunday - Friday ( 10 AM - 5 PM)
                      </Text>
                    </Stack>
                  </motion.div>

                  <motion.div {...animProps(0.5)}>
                    <Stack gap="sm" my="xs" mt="xl">
                      <Text size="xs" c="gray.0" opacity={0.5} ta="right">
                        CONTACT
                      </Text>

                      <Text size="xs" c="gray.0" ta="right">
                        +977 9801464626
                      </Text>
                      <Text size="xs" c="gray.0" ta="right">
                        classics.projects@gmail.com
                      </Text>
                    </Stack>
                  </motion.div> */}
                </Grid.Col>

                {/* Right column (below LG) */}
                <Grid.Col
                  pt="xl"
                  span={{ base: 12, lg: 5 }}
                  mt={{ base: 0, lg: -100 }}
                  hiddenFrom="lg"
                >
                  <div
                    style={{
                      fontSize: "2rem",
                      lineHeight: "1.8rem",
                      fontWeight: 600,
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      color: "var(--mantine-color-gray-0)",
                    }}
                  >
                    <AnimatedText text="KaPa" delay={0} />
                    <AnimatedText text="Celebrations" delay={0.08} />
                  </div>

                  <Space h="xl" />

                  <SimpleGrid cols={2}>
                    <motion.div {...animProps(0.4)}>
                      <Stack gap="sm" my="xs">
                        <Text size="xs" c="gray.0" opacity={0.5} ta="left">
                          OFFICE
                        </Text>

                        <Text size="xs" c="gray.0" ta="left">
                          The Classics Projects HQ,
                        </Text>
                        <Text size="xs" c="gray.0" ta="left">
                          Lan Rd Marg, Himalayan Floral Enterprises,
                          <br /> Nayabasti, Kathmandu, Nepal.
                        </Text>
                        <Text size="xs" c="gray.0" ta="left">
                          Sunday - Friday ( 10 AM - 5 PM)
                        </Text>
                      </Stack>
                    </motion.div>

                    <motion.div {...animProps(0.5)}>
                      <Stack gap="sm" my="xs">
                        <Text size="xs" c="gray.0" opacity={0.5} ta="left">
                          CONTACT
                        </Text>

                        <Text size="xs" c="gray.0" ta="left">
                          +977 9801464626
                        </Text>
                        <Text size="xs" c="gray.0" ta="left">
                          classics.projects@gmail.com
                        </Text>
                      </Stack>
                    </motion.div>
                  </SimpleGrid>
                </Grid.Col>
              </Grid>
            </Container>
          </Box>

          <Box visibleFrom="lg">
            <Space h="2rem" />
            <Grid gutter={0}>
              <Grid.Col span={12}>
                <Group justify="flex-end">
                  <Paper
                    visibleFrom="lg"
                    {...paperElementConfig}
                    className={classes.bot_2}
                    h={40}
                    w={40}
                    mr={-10}
                  />
                </Group>
              </Grid.Col>
              <Grid.Col span={8}>
                <Group justify="space-between" align="flex-end">
                  <Paper
                    visibleFrom="lg"
                    {...paperElementConfig}
                    className={classes.bot_1}
                    h={40}
                    w={40}
                    ml={-10}
                  />
                  <Paper
                    visibleFrom="lg"
                    {...paperElementConfig}
                    h={80}
                    w={80}
                    style={{
                      clipPath: "polygon(100% 0, 0% 100%, 100% 100%)",
                    }}
                  />
                </Group>
              </Grid.Col>
              <Grid.Col span={4} visibleFrom="lg">
                <Paper h={80} {...paperElementConfig}>
                  <motion.div {...animProps(0)}>
                    <SimpleGrid cols={4} p="xl">
                      {branches.map((item: any, index: number) => {
                        return (
                          <Image
                            key={index}
                            src={item.image}
                            h={50}
                            fit="contain"
                          />
                        );
                      })}
                    </SimpleGrid>
                  </motion.div>
                </Paper>
              </Grid.Col>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </>
  );
}

export function FooterEvents() {
  const Router = useRouter();

  return (
    <>
      <Container py={{ base: 0, lg: 64 }} px={{ base: 0 }}>
        <Paper
          pb={{ base: 32, lg: 0 }}
          radius={0}
          bg="var(--ke-color-900)"
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <Box>
            <Grid gutter={0}>
              <Grid.Col span={1}>
                <Paper visibleFrom="lg" h={150} {...paperElementConfigEvents} />
                <Paper
                  visibleFrom="lg"
                  mt={-0.5}
                  h={100}
                  {...paperElementConfigEvents}
                  style={{
                    clipPath: "polygon(0 0, 0% 100%, 100% 0)",
                  }}
                />
              </Grid.Col>
              <Grid.Col span={5}>
                <Paper
                  visibleFrom="lg"
                  {...paperElementConfigEvents}
                  className={classes.top_1}
                  h={40}
                  w={40}
                  ml={-10}
                />
              </Grid.Col>
              <Grid.Col span={2}>
                <Group justify="flex-end">
                  <Paper
                    visibleFrom="lg"
                    h={40}
                    w={40}
                    mt={-1}
                    {...paperElementConfigEvents}
                    style={{
                      clipPath: "polygon(0 0, 100% 100%, 100% 0)",
                    }}
                  />
                </Group>
              </Grid.Col>
              <Grid.Col span={4}>
                <Paper visibleFrom="lg" h={40} {...paperElementConfigEvents}>
                  <Box visibleFrom="lg">
                    <div
                      style={{
                        fontSize: "var(--mantine-font-size-xs)",
                        fontWeight: 600,
                        textAlign: "center",
                        textTransform: "uppercase",
                        display: "flex",
                      }}
                    >
                      <AnimatedText
                        text="THE CLASSICS PROJECTS - EVENTS"
                        delay={0.05}
                        as="span"
                        align="center"
                      />
                    </div>
                  </Box>
                  <Box hiddenFrom="lg" pt="md">
                    <div
                      style={{
                        fontSize: "6px",
                        fontWeight: 600,
                        textAlign: "center",
                        textTransform: "uppercase",
                        display: "flex",
                      }}
                    >
                      <AnimatedText
                        text="THE CLASSICS PROJECTS - EVENTS"
                        delay={0.05}
                        as="span"
                        align="center"
                      />
                    </div>
                  </Box>
                </Paper>
                <Grid.Col span={12}>
                  <Group justify="flex-end">
                    <Paper
                      {...paperElementConfigEvents}
                      className={classes.top_2}
                      h={40}
                      w={40}
                      mr={-10}
                    />
                  </Group>
                </Grid.Col>
              </Grid.Col>
            </Grid>

            <Container size="xl">
              <Grid gutter={0}>
                <Grid.Col span={{ base: 12, lg: 8 }}>
                  <Box visibleFrom="lg">
                    <motion.div
                      variants={variantTextAnimate(0.1)}
                      initial="initial"
                      animate="visible"
                    >
                      <Text
                        mt={-180}
                        ml={100}
                        className="ke-heading"
                        style={{
                          fontSize: "3.5rem",
                          lineHeight: "3.8rem",
                        }}
                        fw={700}
                        c="gray.0"
                      >
                        We transform corporate, social
                        <br />
                        and public events into
                        <br />
                        unforgettable experiences.
                      </Text>
                    </motion.div>
                  </Box>

                  <Box hiddenFrom="lg" pt="xl">
                    <motion.div
                      variants={variantTextAnimate(0.1)}
                      initial="initial"
                      animate="visible"
                    >
                      <Text
                        className="ke-heading"
                        style={{
                          fontSize: "3.5rem",
                          lineHeight: "3.8rem",
                        }}
                        fw={700}
                        c="gray.0"
                      >
                        We transform corporate, social
                        <br />
                        and public events into
                        <br />
                        unforgettable experiences.
                      </Text>
                    </motion.div>
                  </Box>

                  <Space h={{ base: 0, lg: "8rem" }} />

                  <motion.div {...animProps(0)}>
                    <Group mt={{ base: 32, lg: 0 }}>
                      <Text size="xs" c="gray.0">
                        FOR EVENTS
                      </Text>
                      <Text size="xs" c="gray.0" opacity={0.5}>
                        FOR EVENTS
                      </Text>
                    </Group>
                  </motion.div>

                  <SimpleGrid cols={3} py="xl" visibleFrom="lg">
                    <motion.div {...animProps(0.1)}>
                      <Box>
                        <Text
                          size="xs"
                          c="gray.0"
                          tt="uppercase"
                          pb="md"
                          opacity={0.5}
                        >
                          Sitemap
                        </Text>
                        <Stack gap="4px">
                          <Anchor
                            c="gray.0"
                            onClick={() => {
                              Router.push("/kapa-events");
                            }}
                          ></Anchor>
                          <Anchor
                            c="gray.0"
                            onClick={() => {
                              Router.push("/kapa-events/about");
                            }}
                          >
                            About Us
                          </Anchor>
                          <Anchor
                            c="gray.0"
                            onClick={() => {
                              Router.push("/kapa-events/events/showcase");
                            }}
                          >
                            Works
                          </Anchor>
                          <Anchor
                            c="gray.0"
                            onClick={() => {
                              Router.push("/kapa-events/services");
                            }}
                          >
                            Services
                          </Anchor>
                        </Stack>
                      </Box>
                    </motion.div>
                    <motion.div {...animProps(0.1)}>
                      <Box>
                        <Text
                          size="xs"
                          c="gray.0"
                          tt="uppercase"
                          pb="md"
                          opacity={0.5}
                        >
                          LEGAL
                        </Text>
                        <Stack gap="4px">
                          <Anchor c="gray.0">Terms & Conditions</Anchor>
                          <Anchor c="gray.0">Privacy Policies</Anchor>
                        </Stack>
                      </Box>
                    </motion.div>
                    <motion.div {...animProps(0.2)}>
                      <Box>
                        <Text
                          size="xs"
                          c="gray.0"
                          tt="uppercase"
                          pb="md"
                          opacity={0.5}
                        >
                          FIND US
                        </Text>
                        <Stack gap="4px">
                          <Anchor
                            c="gray.0"
                            onClick={() => {
                              window.open(
                                "https://www.facebook.com/classicsprojects/",
                                "_blank"
                              );
                            }}
                          >
                            Facebook
                          </Anchor>
                          <Anchor
                            c="gray.0"
                            onClick={() => {
                              window.open(
                                "https://www.instagram.com/classicsprojects.celebrations/",
                                "_black"
                              );
                            }}
                          >
                            Instagram
                          </Anchor>
                          <Anchor c="gray.0">Twitter</Anchor>
                          <Anchor c="gray.0">X</Anchor>
                          <Anchor c="gray.0">Linked In</Anchor>
                        </Stack>
                      </Box>
                    </motion.div>
                  </SimpleGrid>
                </Grid.Col>

                {/* Right column (LG and up) */}
                <Grid.Col
                  span={{ base: 12, lg: 4 }}
                  mt={{ base: 0, lg: -100 }}
                  visibleFrom="lg"
                >
                  <div
                    style={{
                      fontSize: "2rem",
                      lineHeight: "1.8rem",
                      fontWeight: 600,
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      color: "var(--mantine-color-gray-0)",
                    }}
                  >
                    <AnimatedText text="KaPa" delay={0} align="right" />
                    <AnimatedText text="Events" delay={0.08} align="right" />
                  </div>

                  <Space visibleFrom="lg" h="xl" />

                  <motion.div {...animProps(0.4)}>
                    <Stack gap="sm" my="xs">
                      <Text size="xs" c="gray.0" opacity={0.5} ta="right">
                        OFFICE
                      </Text>

                      <Text size="xs" c="gray.0" ta="right">
                        The Classics Projects HQ,
                      </Text>
                      <Text size="xs" c="gray.0" ta="right">
                        Lan Rd Marg, Himalayan Floral Enterprises,
                        <br /> Nayabasti, Kathmandu, Nepal.
                      </Text>
                      <Text size="xs" c="gray.0" ta="right">
                        Sunday - Friday ( 10 AM - 5 PM)
                      </Text>
                    </Stack>
                  </motion.div>

                  <motion.div {...animProps(0.5)}>
                    <Stack gap="sm" my="xs" mt="xl">
                      <Text size="xs" c="gray.0" opacity={0.5} ta="right">
                        CONTACT
                      </Text>

                      <Text size="xs" c="gray.0" ta="right">
                        +977 9801464626
                      </Text>
                      <Text size="xs" c="gray.0" ta="right">
                        classics.projects@gmail.com
                      </Text>
                    </Stack>
                  </motion.div>
                </Grid.Col>

                {/* Right column (below LG) */}
                <Grid.Col
                  pt="xl"
                  span={{ base: 12, lg: 5 }}
                  mt={{ base: 0, lg: -100 }}
                  hiddenFrom="lg"
                >
                  <div
                    style={{
                      fontSize: "2rem",
                      lineHeight: "1.8rem",
                      fontWeight: 600,
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      color: "var(--mantine-color-gray-0)",
                    }}
                  >
                    <AnimatedText text="KaPa" delay={0} />
                    <AnimatedText text="Events" delay={0.08} />
                  </div>

                  <Space h="xl" />

                  <SimpleGrid cols={2}>
                    <motion.div {...animProps(0.4)}>
                      <Stack gap="sm" my="xs">
                        <Text size="xs" c="gray.0" opacity={0.5} ta="left">
                          OFFICE
                        </Text>

                        <Text size="xs" c="gray.0" ta="left">
                          The Classics Projects HQ,
                        </Text>
                        <Text size="xs" c="gray.0" ta="left">
                          Lan Rd Marg, Himalayan Floral Enterprises,
                          <br /> Nayabasti, Kathmandu, Nepal.
                        </Text>
                        <Text size="xs" c="gray.0" ta="left">
                          Sunday - Friday ( 10 AM - 5 PM)
                        </Text>
                      </Stack>
                    </motion.div>

                    <motion.div {...animProps(0.5)}>
                      <Stack gap="sm" my="xs">
                        <Text size="xs" c="gray.0" opacity={0.5} ta="left">
                          CONTACT
                        </Text>

                        <Text size="xs" c="gray.0" ta="left">
                          +977 9801464626
                        </Text>
                        <Text size="xs" c="gray.0" ta="left">
                          classics.projects@gmail.com
                        </Text>
                      </Stack>
                    </motion.div>
                  </SimpleGrid>
                </Grid.Col>
              </Grid>
            </Container>
          </Box>

          <Box visibleFrom="lg">
            <Space h="2rem" />
            <Grid gutter={0}>
              <Grid.Col span={12}>
                <Group justify="flex-end">
                  <Paper
                    visibleFrom="lg"
                    {...paperElementConfigEvents}
                    className={classes.bot_2}
                    h={40}
                    w={40}
                    mr={-10}
                  />
                </Group>
              </Grid.Col>
              <Grid.Col span={8}>
                <Group justify="space-between" align="flex-end">
                  <Paper
                    visibleFrom="lg"
                    {...paperElementConfigEvents}
                    className={classes.bot_1}
                    h={40}
                    w={40}
                    ml={-10}
                  />
                  <Paper
                    visibleFrom="lg"
                    {...paperElementConfigEvents}
                    h={80}
                    w={80}
                    style={{
                      clipPath: "polygon(100% 0, 0% 100%, 100% 100%)",
                    }}
                  />
                </Group>
              </Grid.Col>
              <Grid.Col span={4} visibleFrom="lg">
                <Paper h={80} {...paperElementConfigEvents}>
                  <motion.div {...animProps(0)}>
                    <Group h={80} justify="flex-end" align="flex-end" pr="3rem">
                      <Text size="xl">we create, you celebrate.</Text>
                    </Group>
                  </motion.div>
                </Paper>
              </Grid.Col>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </>
  );
}
