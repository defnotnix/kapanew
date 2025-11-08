"use client";

import { useEffect, useState } from "react";
//next
//mantine
import {
  AspectRatio,
  Avatar,
  Box,
  Center,
  Container,
  Grid,
  Group,
  Modal,
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
  InstagramLogoIcon,
  MouseMiddleClickIcon,
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
      return item.holder == "kc-home-hero-event";
    });

    return _eventData;
  }

  const mainData = state.preData?.cms?.find(
    (item: any) => item.holder == "kc-home-hero-main"
  );

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
    return <></>;
  }

  return (
    <section className={classes.root}>
      <div id="heromain">
        <div
          className={classes.media_background}
          style={{
            backgroundImage: `url(${sectionData[active]?.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, transform: "rotate(-30deg)" }}
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
            pt={{ base: 130, lg: 250 }}
            h={{ base: "50vh", lg: "100vh" }}
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
                <Text
                  size="xs"
                  c="gray.0"
                  opacity={0.5}
                  fw={600}
                  visibleFrom="lg"
                >
                  KAPA CELEBRATIONS
                </Text>
                <Text
                  size="xs"
                  ta="center"
                  c="gray.0"
                  opacity={0.5}
                  fw={600}
                  hiddenFrom="lg"
                >
                  KAPA CELEBRATIONS
                </Text>
              </motion.div>

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
                  visibleFrom="lg"
                >
                  {mainData?.text?.heading}
                </Text>
                <Text
                  ta="center"
                  className="kc-heading"
                  style={{
                    fontSize: "3.5rem",
                    lineHeight: "3.8rem",
                  }}
                  fw={700}
                  c="gray.0"
                  hiddenFrom="lg"
                >
                  {mainData?.text?.heading}
                </Text>
              </motion.div>

              <Box
                visibleFrom="lg"
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
                  <Avatar src="https://img.freepik.com/premium-photo/ai-generated-indian-groom-wedding-photohoot_1277069-22207.jpg" />

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

            <Group gap="2rem" visibleFrom="lg">
              <Text c="gray.0" size="xs" fw={700} opacity={0.5}>
                KAPA SOCIALS
              </Text>

              <div>
                <Group>
                  <WhatsappLogoIcon
                    onClick={() => window.open("https://wa.me/947639260037")}
                    weight="fill"
                    color="white"
                  />
                  <InstagramLogoIcon
                    onClick={() =>
                      window.open("https://www.instagram.com/kapa_projects/")
                    }
                    weight="fill"
                    color="white"
                  />
                </Group>
              </div>
            </Group>
          </Grid.Col>

          <Grid.Col
            span={{ base: 12, lg: 2 }}
            h={{ base: "50vh", lg: "100vh" }}
            pt={{ base: 100, lg: 0 }}
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
            visibleFrom="lg"
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
                <motion.div
                  animate={{ y: [0, -8, 0] }} // moves up and back down
                  transition={{
                    duration: 2, // 1 second per loop
                    repeat: Infinity, // infinite loop
                    ease: "easeInOut",
                  }}
                >
                  <MouseMiddleClickIcon color="white" weight="fill" size={16} />
                </motion.div>
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
                  <Text
                    ta="right"
                    size="xs"
                    c="gray.0"
                    fw={600}
                    visibleFrom="lg"
                  >
                    FEATURED EVENTS
                  </Text>
                  <Text
                    ta="center"
                    size="xs"
                    c="gray.0"
                    fw={600}
                    hiddenFrom="lg"
                  >
                    FEATURED EVENTS
                  </Text>
                </motion.div>
                <motion.div
                  variants={variantTextAnimate(0)}
                  initial="initial"
                  animate="visible"
                >
                  <Text
                    visibleFrom="lg"
                    size="3rem"
                    ta="right"
                    className="kc-heading"
                    c="gray.0"
                    fw={600}
                  >
                    {sectionData[active]?.text?.eventName || ""}
                  </Text>

                  <Text
                    hiddenFrom="lg"
                    ta="center"
                    c="gray.0"
                    fw={600}
                    style={{
                      fontFamily: "var(--kc-heading)",
                      fontSize: "1.5rem",
                      lineHeight: "2rem",
                    }}
                  >
                    {sectionData[active]?.text?.eventName || ""}
                  </Text>
                </motion.div>
                <motion.div
                  variants={variantTextAnimate(0)}
                  initial="initial"
                  animate="visible"
                >
                  <Text
                    opacity={0.6}
                    ta={{ base: "center", lg: "right" }}
                    size="xs"
                    c="gray.0"
                    fw={600}
                  >
                    {String(
                      new Date(sectionData[active]?.text?.eventDate)
                    ).substring(0, 15)}
                    , {sectionData[active]?.text?.eventVenue}
                  </Text>
                </motion.div>
              </Stack>

              <EventPicker
                data={sectionData}
                active={active}
                onSlideChange={(e: any) => {
                  if (active == e) {
                    open();
                  } else {
                    slideChange(e);
                  }
                }}
              />
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
