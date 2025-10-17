"use client";

import React, { useEffect, useRef, useState } from "react";
//mantine
import {
  ActionIcon,
  Box,
  Button,
  Center,
  Container,
  Group,
  Image,
  Loader,
  Paper,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
//styles
import classes from "./events.module.css";
import cx from "clsx";

import { MotionProjectFlower } from "./motion/project.flower";
import {
  ArrowUpRight,
  CaretLeft,
  CaretRight,
  Heart,
} from "@phosphor-icons/react";

import { animate, motion } from "framer-motion";
import { setupFsCheck } from "next/dist/server/lib/router-utils/filesystem";

import { usePageContext, variantGeneralDelay } from "@classics/ui";

import { useQuery } from "@tanstack/react-query";

import { useRouter } from "next/navigation";
import { getData } from "./page.api";

export function PageEvents() {
  const Router = useRouter();

  const { dispatch } = usePageContext();

  // * DEFINITION

  const [active, setActive] = useState(0);
  const [showText, setShowText] = useState(false);

  // * CONTEXT

  //  * ANIMATIONS

  const { data, isFetching } = useQuery({
    queryKey: ["events", "events"],
    queryFn: async () => {
      const res: any = await getData();
      dispatch({
        type: "SET_PRE_DATA",
        payload: {},
      });
      return res;
    },
    initialData: [],
  });

  // * REFS

  const animateSwitch = () => {};

  const refImage1: any = useRef(null);
  const refImage2: any = useRef(null);
  const refImage3: any = useRef(null);
  const refImage4: any = useRef(null);
  const refImage5: any = useRef(null);
  const refImage6: any = useRef(null);
  // const refImage7 = useRef(null);
  // const refImage8 = useRef(null);
  // const refImage9 = useRef(null);
  // const refSVG = useRef(null);
  // const refSubText = useRef(null);
  // const refMainText = useRef(null);

  useEffect(() => {
    animateEntry();
  }, []);

  // * STATE

  const imageRefs = [
    refImage1,
    refImage2,
    refImage3,
    refImage4,
    refImage5,
    refImage6,
  ];

  // inside animateEntry
  const animateEntry = () => {
    animate(
      "#eventheading",
      {
        filter: "blur(0px)",
        opacity: 1,
      },
      {
        type: "spring",
        stiffness: 80,
        damping: 18,
      }
    );

    imageRefs.forEach((ref, idx) => {
      animate(
        ref.current,
        {
          opacity: 1,
          y: 80,
        },
        {
          delay: idx * 0.08, // cascade effect
          type: "spring",
          stiffness: 100,
          damping: 20,
          mass: 0.8,
        }
      );
    });

    animate(
      imageRefs[5].current,
      {
        opacity: 1,
        y: 0,
      },
      {
        delay: 0.4,
        type: "spring",
        stiffness: 90,
        damping: 20,
      }
    ).then(() => {
      setShowText(true);
    });
  };

  // inside animateExit
  const animateExit = (index: number) => {
    setShowText(false);

    animate(
      "#eventheading",
      {
        filter: "blur(8px)",
        opacity: 0,
      },
      {
        type: "spring",
        stiffness: 100,
        damping: 15,
      }
    );

    imageRefs.forEach((ref, idx) => {
      animate(
        ref.current,
        {
          opacity: 0,
          y: idx === 0 ? -500 : -700,
        },
        {
          delay: idx * 0.05,
          type: "spring",
          stiffness: 120,
          damping: 18,
        }
      );
    });

    animate(
      imageRefs[5].current,
      {
        opacity: 0,
        y: -900,
      },
      {
        delay: 0.3,
        type: "spring",
        stiffness: 120,
        damping: 20,
      }
    ).then(() => {
      setActive(
        index === 0
          ? active === 0
            ? data.length - 1
            : active - 1
          : active + 1 === data.length
            ? 0
            : active + 1
      );
      animateEntry();
    });
  };

  if (!data) {
    return (
      <Center
        style={{
          height: "100vh",
        }}
      >
        <Loader type="dots" color="var(--kc-color-600)" />
      </Center>
    );
  }

  return (
    <>
      <section
        className={classes.root}
        style={{
          transition: ".5s ease-in-out",
          background: `${data[active]?.color || "#F1D1D1"} `,
          position: "relative",
        }}
      >
        <Container pos="relative">
          <div
            className={cx(classes.video_container)}
            style={{
              background: `${data[active]?.color || "#F1D1D1"} `,
            }}
          >
            <Group
              justify="flex-end"
              h={"calc(100vh - 10rem)"}
              id="eventheading"
              style={{
                position: "relative",
                zIndex: 10,
              }}
            >
              <Stack px="5%">
                <Text
                  visibleFrom="lg"
                  maw={400}
                  className="kc-heading"
                  fw={700}
                  c={data[active]?.text || "var(--kc-color-800)"}
                  style={{
                    fontSize: "6rem !important",
                    lineHeight: "6.5rem !important",
                  }}
                >
                  {data[active]?.shortname}
                </Text>
              </Stack>
            </Group>

            <div className={classes.imageContainer}>
              <Stack gap={-300}>
                <motion.div
                  ref={refImage1}
                  initial={{
                    opacity: 0,
                    y: -500,
                  }}
                >
                  <Paper
                    p="xs"
                    radius="md"
                    withBorder
                    shadow="xl"
                    mb={-50}
                    w={300}
                    h={400}
                    style={{
                      transform: "rotate(-10deg)",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      radius="md"
                      h={380}
                      src={data[active]?.event_images[0]?.image}
                    />
                  </Paper>
                </motion.div>
                <motion.div
                  ref={refImage2}
                  initial={{
                    opacity: 0,
                    y: -700,
                  }}
                >
                  <Paper
                    p="xs"
                    radius="md"
                    withBorder
                    mb={-50}
                    ml={200}
                    shadow="xl"
                    w={300}
                    h={400}
                    style={{
                      transform: "rotate(-5deg)",
                    }}
                    visibleFrom="lg"
                  >
                    <Image
                      radius="md"
                      h={380}
                      src={data[active]?.event_images[1]?.image}
                    />
                  </Paper>

                  <Paper
                    p={5}
                    radius="md"
                    withBorder
                    mb={-50}
                    ml={300}
                    shadow="xl"
                    w={300}
                    h={400}
                    mt={"-20rem"}
                    style={{
                      transform: "rotate(5deg)",
                    }}
                    hiddenFrom="lg"
                  >
                    <Image
                      radius="md"
                      h={380}
                      src={data[active]?.event_images[1]?.image}
                    />
                  </Paper>
                </motion.div>
                <motion.div
                  ref={refImage3}
                  initial={{
                    opacity: 0,
                    y: -900,
                  }}
                >
                  <Paper
                    p="xs"
                    radius="md"
                    withBorder
                    shadow="xl"
                    w={300}
                    h={400}
                    style={{
                      transform: "rotate(10deg)",
                    }}
                    visibleFrom="lg"
                  >
                    {" "}
                    <Image
                      radius="md"
                      h={380}
                      src={data[active]?.event_images[2]?.image}
                    />
                  </Paper>
                </motion.div>
              </Stack>
            </div>

            <div className={classes.imageContainer_left}>
              <Stack gap={-300}>
                <motion.div
                  ref={refImage4}
                  initial={{
                    opacity: 0,
                    y: -500,
                  }}
                >
                  <Paper
                    p="xs"
                    radius="md"
                    withBorder
                    shadow="xl"
                    mb={-50}
                    w={300}
                    h={400}
                    style={{
                      transform: "rotate(10deg)",
                      overflow: "hidden",
                    }}
                    visibleFrom="lg"
                  >
                    <Image
                      radius="md"
                      h={380}
                      src={data[active]?.event_images[3]?.image}
                    />
                  </Paper>
                </motion.div>
                <motion.div
                  ref={refImage5}
                  initial={{
                    opacity: 0,
                    y: -700,
                  }}
                >
                  <Paper
                    p="xs"
                    radius="md"
                    withBorder
                    mb={-50}
                    ml={200}
                    shadow="xl"
                    w={300}
                    h={400}
                    style={{
                      transform: "rotate(5deg)",
                    }}
                    visibleFrom="lg"
                  >
                    <Image
                      radius="md"
                      h={380}
                      src={data[active]?.event_images[4]?.image}
                    />
                  </Paper>
                </motion.div>
                <motion.div
                  ref={refImage6}
                  initial={{
                    opacity: 0,
                    y: -900,
                  }}
                >
                  <Paper
                    p="xs"
                    radius="md"
                    withBorder
                    shadow="xl"
                    w={300}
                    h={400}
                    style={{
                      transform: "rotate(-2deg)",
                    }}
                    visibleFrom="lg"
                  >
                    {" "}
                    <Image
                      radius="md"
                      h={380}
                      src={data[active]?.event_images[5]?.image}
                    />
                  </Paper>
                </motion.div>
              </Stack>
            </div>

            <div className={classes.flower}>
              <MotionProjectFlower
                animate={showText}
                color={data[active]?.text}
              />
            </div>
          </div>

          <div className={classes.actions}>
            <Stack gap="xs">
              <motion.div
                variants={variantGeneralDelay(0)}
                initial="initial"
                animate={showText ? "visible" : ""}
              >
                <Text
                  hiddenFrom="lg"
                  className="kc-heading"
                  ta="center"
                  ml={54}
                  fw={700}
                  c={data[active]?.text || "var(--kc-color-800)"}
                  style={{
                    fontSize: "3rem !important",
                    lineHeight: "3.5rem !important",
                  }}
                >
                  {data[active]?.shortname}
                </Text>

                <Text size="md" ta="right" visibleFrom="lg">
                  An <b> Event</b> of <b>{data[active]?.fullname}</b>
                </Text>
              </motion.div>

              <motion.div
                variants={variantGeneralDelay(0.1)}
                initial="initial"
                animate={showText ? "visible" : ""}
              >
                <Text size="xs" opacity={0.6} ta="right" visibleFrom="lg">
                  Hosted at {data[active]?.venue}
                  <br />
                  {String(data[active]?.event_date).substring(0, 10)}
                </Text>
              </motion.div>

              <Container hiddenFrom="lg" ml={"3rem"} pl="xl">
                <motion.div
                  variants={variantGeneralDelay(0)}
                  initial="initial"
                  animate={showText ? "visible" : ""}
                >
                  <Text size="md" ta="center">
                    An <b> Event</b> of <b>{data[active]?.fullname}</b>
                  </Text>
                </motion.div>

                <motion.div
                  variants={variantGeneralDelay(0.1)}
                  initial="initial"
                  animate={showText ? "visible" : ""}
                >
                  <Text size="xs" opacity={0.6} ta="center">
                    Hosted at {data[active]?.venue}
                    <br />
                    {String(data[active]?.event_date).substring(0, 10)}
                  </Text>
                </motion.div>
              </Container>

              <Space h="sm" />
              <motion.div
                variants={variantGeneralDelay(0.2)}
                initial="initial"
                animate={"visible"}
              >
                <Group gap="xs" justify="flex-end">
                  <Button
                    size="xl"
                    variant="white"
                    color="var(--kc-color-500)"
                    tt="uppercase"
                    fw={800}
                    rightSection={<ArrowUpRight />}
                    onClick={() =>
                      Router.push(
                        `/kapa-celebrations/events/profile/${data[active]?.id}`
                      )
                    }
                    style={{ fontSize: "var(--mantine-font-size-sm)" }}
                  >
                    View full details
                  </Button>
                  <ActionIcon
                    size={62}
                    variant="light"
                    color="var(--kc-color-500)"
                    onClick={() => {
                      animateExit(0);
                    }}
                  >
                    <CaretLeft />
                  </ActionIcon>
                  <ActionIcon
                    onClick={() => {
                      animateExit(1);
                    }}
                    size={62}
                    variant="white"
                    color="var(--kc-color-500)"
                  >
                    <CaretRight />
                  </ActionIcon>
                </Group>
              </motion.div>
            </Stack>
          </div>
        </Container>
      </section>
    </>
  );
}
