"use client";

import { useEffect, useState } from "react";
//next
//mantine
import {
  ActionIcon,
  AspectRatio,
  Avatar,
  Box,
  Center,
  Container,
  Grid,
  Group,
  Loader,
  Modal,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
} from "@mantine/core";

//styles
import classes from "./hero.module.css";
//animation
import { animate, motion } from "framer-motion";
//context
//components

import { GlassFrame, usePageContext, variantTextAnimate } from "@classics/ui";

import { useDisclosure } from "@mantine/hooks";
import {
  CaretLeftIcon,
  CaretRightIcon,
  InstagramLogoIcon,
  MouseMiddleClickIcon,
  Play,
  QuotesIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react";
import { EventPicker } from "./components/EventPicker";

export function SectionHomeHero() {
  const { state } = usePageContext();
  // * DEFINITIONS

  const [opened, { open, close }] = useDisclosure(false);

  // * CONTEXT

  // * STATE

  const [active, setActive] = useState(0);
  const [sectionData, setSectionData] = useState<any | null>(null);

  // * FUNCTIONS

  function getFormattedData() {
    const _dataSource = state.preData?.cms;

    const _eventData = _dataSource?.filter((item: any) => {
      return item.holder == "ke-home-hero-event";
    });

    return _eventData;
  }

  const mainData = state.preData?.cms?.find(
    (item: any) => item.holder == "ke-home-hero-main"
  );

  //@ts-ignore
  const slideChange = async (value: any) => {
    if (value !== active) {
      await animate("#heromain", {
        filter: "blur(8px)",
      });

      setActive(value);

      await animate("#heromain", {
        filter: "blur(0px)",
      });
    }
  };

  // * PRELOADING

  useEffect(() => {
    if (state.preData?.cms?.length > 0) {
      setSectionData(getFormattedData());
    }
  }, [state]);

  // * COMPONENTS

  // * ANIMATIONS

  if (!sectionData) {
    return (
      <section>
        <Center
          style={{
            height: "100vh",
          }}
        >
          <Loader type="dots" color="var(--ke-color-600)" />
        </Center>
      </section>
    );
  }

  return (
    <section className={classes.root}>
      <div id="heromain">
        <div
          className={classes.media_background}
          style={{
            backgroundImage: `url(${sectionData[active]?.image})`,
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, transform: "rotate(0)" }}
        animate={
          sectionData
            ? {
                opacity: 1,
                transform: "rotate(-30deg)",
              }
            : {}
        }
        className={classes.glass_frame_container}
      >
        <div className={classes.glass_frame_top}>
          <GlassFrame />
        </div>
        <div className={classes.glass_frame_bot}>
          <GlassFrame />
        </div>

        <div className={classes.dynamic_circle} />
      </motion.div>

      {/* <div className={classes.leaf_overlay}>
                <MotionLilyLeaf />
            </div> */}

      <Container
        pos="relative"
        style={{
          zIndex: 5,
        }}
      >
        <Grid>
          <Grid.Col
            span={{ base: 12, lg: 5 }}
            pt={200}
            h={{ base: "auto", lg: "100vh" }}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Stack>
              <motion.div
                variants={variantTextAnimate(0)}
                initial="initial"
                animate="visible"
              >
                <Text size="xs" c="gray.0" opacity={0.5} fw={600}>
                  KAPA EVENTS : CREATIVE | CONVINIENT | COHESIVE
                </Text>
              </motion.div>

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
                  {mainData?.text?.heading}
                </Text>
              </motion.div>

              <Box
                id="heromain"
                my="xl"
                pos="relative"
                w={{ base: "100%", lg: "60%" }}
              >
                <ThemeIcon variant="subtle" pos="absolute" top={0} left={-50}>
                  <QuotesIcon size={24} weight="fill" color="white" />
                </ThemeIcon>

                <motion.div
                  variants={variantTextAnimate(0.2)}
                  initial="initial"
                  animate="visible"
                >
                  <Text size="sm" c="gray.0">
                    {sectionData[active]?.text?.testimonial}
                  </Text>
                </motion.div>
                <Group wrap="nowrap" gap="xs" mt="sm">
                  <Avatar src="https://publisher-publish.s3.eu-central-1.amazonaws.com/pb-nepalitimes/swp/asv65r/media/20230512090536_299e0d6c92534e5a2ffa2ed87257e38691c0e5c2df1c429ff5e6b9bc9efb936b.webp" />

                  <div>
                    <Text c="gray.0">
                      {sectionData[active]?.text?.testimonialBy}
                    </Text>
                    <Text size="xs" opacity={0.5} c="gray.0">
                      {sectionData[active]?.text?.position}
                    </Text>
                  </div>
                </Group>
              </Box>
            </Stack>

            <Group gap="2rem">
              <Text c="gray.0" size="xs" fw={700} opacity={0.5}>
                THE CLASSICS SOCIALS
              </Text>

              <div>
                <Group>
                  <WhatsappLogoIcon weight="fill" color="white" />
                  <InstagramLogoIcon weight="fill" color="white" />
                </Group>
              </div>
            </Group>
          </Grid.Col>

          <Grid.Col
            span={{ base: 12, lg: 2 }}
            h={{ base: "auto", lg: "100vh" }}
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <motion.div
              variants={variantTextAnimate(0)}
              initial="initial"
              animate="visible"
            >
              <Text c="gray.0" size="xs" opacity={0.5} ta="center">
                SCROLL DOWN
              </Text>

              <Center mt="md">
                <MouseMiddleClickIcon color="white" weight="fill" size={16} />
              </Center>
            </motion.div>
          </Grid.Col>

          <Grid.Col
            span={{ base: 12, lg: 4 }}
            offset={{ base: 0, lg: 1 }}
            h={{ base: "auto", lg: "100vh" }}
            style={{
              display: "flex",
              flexDirection: "column",

              justifyContent: "flex-end",
            }}
          >
            <Stack gap="xl" id="heromain">
              <Stack>
                <motion.div
                  variants={variantTextAnimate(0)}
                  initial="initial"
                  animate="visible"
                >
                  <Text ta="right" size="xs" c="gray.0" fw={600}>
                    FEATURING - WEDDING EVENT
                  </Text>
                </motion.div>
                <motion.div
                  variants={variantTextAnimate(0)}
                  initial="initial"
                  animate="visible"
                >
                  <Text
                    size="3rem"
                    ta="right"
                    className="ke-heading"
                    c="gray.0"
                    fw={600}
                  >
                    {sectionData[active]?.text?.eventName || ""}
                  </Text>
                </motion.div>
                <motion.div
                  variants={variantTextAnimate(0)}
                  initial="initial"
                  animate="visible"
                >
                  <Text opacity={0.6} ta="right" size="xs" c="gray.0" fw={600}>
                    {String(
                      new Date(sectionData[active]?.text?.eventDate)
                    ).substring(0, 15)}
                    , {sectionData[active]?.text?.eventVenue}
                  </Text>
                </motion.div>
              </Stack>

              <Box my="xl">
                <Group justify="flex-end" gap="xs">
                  <ActionIcon
                    bg="none"
                    variant="subtle"
                    color="gray"
                    onClick={() => {
                      slideChange(active !== 0 ? active - 1 : 2);
                    }}
                  >
                    <CaretLeftIcon weight="fill" />
                  </ActionIcon>
                  <ActionIcon
                    variant="subtle"
                    color="gray"
                    onClick={() => {
                      slideChange(active !== 2 ? active + 1 : 0);
                    }}
                  >
                    <CaretRightIcon weight="fill" />
                  </ActionIcon>
                </Group>

                <SimpleGrid cols={2}>
                  <EventPicker data={sectionData} onSlideChange={slideChange} />

                  <Group justify="flex-end">
                    <ActionIcon
                      onClick={open}
                      className={classes.playreel}
                      bg="rgba(0,0,0,.5)"
                      size="73px"
                      radius={999}
                    >
                      <Play weight="fill" />
                    </ActionIcon>
                  </Group>
                </SimpleGrid>
              </Box>

              <Group justify="space-between" w="100%">
                <Text c="gray.0" size="xs" fw={700} opacity={0.5}>
                  HOVER & SELECT
                </Text>
                <Text c="gray.0" size="xs" fw={700} opacity={0.5}>
                  EVENT SHOWREEL
                </Text>
              </Group>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>

      <Modal
        size="80%"
        opened={opened}
        onClose={close}
        withCloseButton={false}
        centered
      >
        <AspectRatio ratio={16 / 9}>
          <iframe
            src="https://www.youtube.com/embed/tyBJioe8gOs?si=3SmvWq5CrguUsguw"
            title="YouTube video player"
            style={{ border: 0, marginBottom: -10 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </AspectRatio>
      </Modal>
    </section>
  );
}
