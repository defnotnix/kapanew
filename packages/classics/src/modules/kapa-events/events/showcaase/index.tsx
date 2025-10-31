"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ActionIcon,
  Button,
  Center,
  Container,
  Group,
  Loader,
  Menu,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import classes from "./events.module.css";
import cx from "clsx";

import {
  ArrowUpRightIcon,
  CaretLeft,
  CaretRightIcon,
  CaretUpIcon,
} from "@phosphor-icons/react";
import { animate, motion } from "framer-motion";
import { variantGeneralDelay } from "@classics/ui";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { getData } from "./page.api";

export function PageEventShowcase() {
  const Router = useRouter();

  const [active, setActive] = useState(0);
  const [showText, setShowText] = useState(false);

  const { data, isFetching } = useQuery({
    queryKey: ["events", "events"],
    queryFn: async () => {
      const res: any = await getData();
      return res;
    },
    initialData: [],
  });

  const refImage1: any = useRef(null);
  const refImage2: any = useRef(null);
  const refImage3: any = useRef(null);
  const refImage4: any = useRef(null);
  const refImage5: any = useRef(null);
  const refImage6: any = useRef(null);

  useEffect(() => {
    animateEntry();
  }, []);

  const imageRefs = [
    refImage1,
    refImage2,
    refImage3,
    refImage4,
    refImage5,
    refImage6,
  ];

  const animateEntry = () => {
    animate(
      "#eventheading",
      { filter: "blur(0px)", opacity: 1 },
      { type: "spring", stiffness: 80, damping: 18 }
    );

    imageRefs.forEach((ref, idx) => {
      animate(
        ref.current,
        { opacity: 1, y: 80 },
        {
          delay: idx * 0.08,
          type: "spring",
          stiffness: 100,
          damping: 20,
          mass: 0.8,
        }
      );
    });

    animate(
      imageRefs[5].current,
      { opacity: 1, y: 0 },
      { delay: 0.4, type: "spring", stiffness: 90, damping: 20 }
    ).then(() => {
      setShowText(true);
    });
  };

  const animateExit = (index: number) => {
    setShowText(false);

    animate(
      "#eventheading",
      { filter: "blur(8px)", opacity: 0 },
      { type: "spring", stiffness: 100, damping: 15 }
    );

    imageRefs.forEach((ref, idx) => {
      animate(
        ref.current,
        { opacity: 0, y: idx === 0 ? -500 : -700 },
        { delay: idx * 0.05, type: "spring", stiffness: 120, damping: 18 }
      );
    });

    animate(
      imageRefs[5].current,
      { opacity: 0, y: -900 },
      { delay: 0.3, type: "spring", stiffness: 120, damping: 20 }
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

  const animateTo = (index: number) => {
    setShowText(false);

    animate(
      "#eventheading",
      { filter: "blur(8px)", opacity: 0 },
      { type: "spring", stiffness: 100, damping: 15 }
    );

    imageRefs.forEach((ref, idx) => {
      animate(
        ref.current,
        { opacity: 0, y: idx === 0 ? -500 : -700 },
        { delay: idx * 0.05, type: "spring", stiffness: 120, damping: 18 }
      );
    });

    animate(
      imageRefs[5].current,
      { opacity: 0, y: -900 },
      { delay: 0.3, type: "spring", stiffness: 120, damping: 20 }
    ).then(() => {
      setActive(index);
      animateEntry();
    });
  };

  if (!data) {
    return (
      <Center style={{ height: "100vh" }}>
        <Loader type="dots" color="var(--ke-color-600)" />
      </Center>
    );
  }

  return (
    <section
      className={classes.root}
      style={{
        transition: ".5s ease-in-out",
        // background: `${data[active]?.color || "#000"}`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Fullscreen YouTube Background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/qcTG5NXzuR0?autoplay=1&controls=0&modestbranding=1&rel=0&mute=1"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            border: "none",
          }}
          allow="autoplay; fullscreen"
        />
        {/* Black Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.65)",
            zIndex: 1,
          }}
        />
      </div>

      {/* Event Content Above Overlay */}
      <Container pos="relative" style={{ zIndex: 2 }}>
        <div
          className={cx(classes.video_container)}
          style={{ background: "transparent" }}
        >
          {/* Image placeholders (kept refs for animations) */}
          <div className={classes.imageContainer}>
            <Stack gap={-300}>
              <motion.div ref={refImage1} initial={{ opacity: 0, y: -500 }} />
              <motion.div ref={refImage2} initial={{ opacity: 0, y: -700 }} />
              <motion.div ref={refImage3} initial={{ opacity: 0, y: -900 }} />
            </Stack>
          </div>

          <div className={classes.imageContainer_left}>
            <Stack gap={-300}>
              <motion.div ref={refImage4} initial={{ opacity: 0, y: -500 }} />
              <motion.div ref={refImage5} initial={{ opacity: 0, y: -700 }} />
              <motion.div ref={refImage6} initial={{ opacity: 0, y: -900 }} />
            </Stack>
          </div>
        </div>

        {/* Actions + Heading */}
        <div className={classes.actions}>
          <Group justify="space-between">
            <motion.div id="eventheading">
              <Text
                maw={400}
                className="ke-heading"
                fw={700}
                c={"var(--ke-color-50)"}
                style={{
                  fontSize: "4rem !important",
                }}
              >
                {data[active]?.shortname}
              </Text>
            </motion.div>

            <Stack gap="xs">
              <motion.div
                variants={variantGeneralDelay(0)}
                initial="initial"
                animate={showText ? "visible" : ""}
              >
                <Text size="md" ta="right" c="white">
                  <b>{data[active]?.fullname}</b>
                </Text>
              </motion.div>

              <motion.div
                variants={variantGeneralDelay(0.1)}
                initial="initial"
                animate={showText ? "visible" : ""}
              >
                <Text size="xs" opacity={0.8} ta="right" c="white">
                  Hosted at {data[active]?.venue}
                  <br />
                  {String(data[active]?.event_date).substring(0, 10)}
                </Text>
              </motion.div>

              <Space h="sm" />
              <motion.div
                variants={variantGeneralDelay(0.2)}
                initial="initial"
                animate={"visible"}
              >
                <Group gap="4px" justify="flex-end">
                  <Menu withArrow>
                    <Menu.Target>
                      <Button
                        variant="subtle"
                        color="white"
                        rightSection={<CaretUpIcon />}
                      >
                        All Events
                      </Button>
                    </Menu.Target>
                    <Menu.Dropdown>
                      {data.map((item: any, i: number) => (
                        <Menu.Item key={i} onClick={() => animateTo(i)}>
                          <Text size="xs">{item.shortname}</Text>
                          <Text size="xs" opacity={0.8} c="var(--ke-color-700)">
                            {item.fullname}
                          </Text>
                        </Menu.Item>
                      ))}
                    </Menu.Dropdown>
                  </Menu>

                  <Button
                    size="lg"
                    variant="white"
                    color="var(--ke-color-700)"
                    tt="uppercase"
                    fw={800}
                    rightSection={<ArrowUpRightIcon />}
                    onClick={() =>
                      Router.push(
                        `/kapa-events/events/profile/${data[active]?.id}`
                      )
                    }
                    style={{ fontSize: "var(--mantine-font-size-sm)" }}
                  >
                    View full details
                  </Button>
                  <ActionIcon
                    size={52}
                    variant="filled"
                    color="var(--ke-color-700)"
                    onClick={() => animateExit(0)}
                  >
                    <CaretLeft />
                  </ActionIcon>
                  <ActionIcon
                    onClick={() => animateExit(1)}
                    size={52}
                    variant="white"
                    color="var(--ke-color-700)"
                  >
                    <CaretRightIcon />
                  </ActionIcon>
                </Group>
              </motion.div>
            </Stack>
          </Group>
        </div>
      </Container>
    </section>
  );
}
