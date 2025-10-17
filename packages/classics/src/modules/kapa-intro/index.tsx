"use client";

import React, { useEffect, useRef, useState } from "react";
//mantine
import {
  Box,
  Center,
  Container,
  Group,
  Image,
  Loader,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
} from "@mantine/core";
//styles
import cx from "clsx";
import classes from "./entry.module.css";
//images

//motion
import { AnimatePresence, motion, useTime } from "framer-motion";
import { useRouter } from "next/navigation";

import { animate } from "framer-motion";
import { useHover } from "@mantine/hooks";

import { _MotionIntroFlower } from "./motion/intro.flower";
import { MotionCorporateLine } from "./motion/corporate.line";
import { images } from "../../assets";

const branches = [
  {
    id: 1,
    label: "Celebrations",
    description: "Celebrations with your loved ones",
    quote: "For Your Cherished Moments",
    url: "/kapa-celebrations",
    image: images.logo.celebrations_small,
    background: "var(--kc-color-200)",

    hovered: (
      <>
        <div
          key={2}
          style={{
            position: "absolute",
            left: -460,
            top: 300,
            zIndex: 10,
          }}
        >
          <_MotionIntroFlower />
        </div>
        <div
          key={3}
          style={{
            position: "absolute",
            right: -460,
            top: 300,
            transform: "rotate(180deg)",
            zIndex: 10,
          }}
        >
          <_MotionIntroFlower />
        </div>
      </>
    ),
  },
  {
    id: 2,
    label: "Events",
    description: "Memorable events to cherish forever",
    quote: "For Your Public & Corporate Events",
    url: "/kapa-events",
    image: images.logo.events_small,
    background: "var(--ke-color-200)",
    hovered: (
      <>
        <div
          key={2}
          style={{
            position: "absolute",
            left: -460,
            top: 300,
            zIndex: 10,
          }}
        >
          <MotionCorporateLine />
        </div>
        <div
          key={3}
          style={{
            position: "absolute",
            right: -460,
            top: 300,
            transform: "rotate(180deg)",
            zIndex: 10,
          }}
        >
          <MotionCorporateLine />
        </div>
      </>
    ),
  },
  {
    id: 3,
    label: "Societies",
    description: "Connecting communities worldwide",
    quote: "For Unique Event Goods & Décor",
    url: "/kapa-societies",
    image: images.logo.society_small,
    background: "var(--mantine-color-sky-3)",
    hovered: <></>,
  },
  {
    id: 4,
    label: "Creations",
    description: "Innovative designs and masterpieces",
    quote: "For Meaningful Social Causes",
    url: "/kapa-creations",
    image: images.logo.creation_small,
    hovered: <></>,
  },
];

export function PageEntry() {
  // * DEFINITONS

  const Router = useRouter();

  // * REFS

  const overlayRef: any = useRef(null);
  const mainRef = useRef(null);

  // * STATES

  const [animateEntry, setAnimateEntry] = useState(false);

  // * PRELOADS

  // * FUNCTIONS

  useEffect(() => {
    setTimeout(() => {
      setAnimateEntry(true);
    }, 1500);
    setTimeout(() => {
      animate(overlayRef.current, {
        opacity: 0,
      });
    }, 2000);
    setTimeout(() => {
      animate(overlayRef.current, {
        display: "none",
      });
    }, 2000);
  }, []);

  // * COMPONENTS

  const RenderBranch = ({ branchdata, index }: any) => {
    const { hovered, ref } = useHover();

    return (
      <>
        <motion.div
          className={classes.companyBox}
          style={{
            opacity: hovered ? 1 : 0.8,
          }}
          ref={ref}
          onClick={() => {
            setTimeout(() => {
              Router.push(branchdata.url);
            }, 1000);
          }}
        >
          <div></div>
          <div>
            <Center mb="xl" mt={"5rem"}>
              <Image h={100} w={100} src={branchdata.image} />
            </Center>
            <Text size="lg" lh="100%" ta="center" fw={900}>
              <b
                style={{
                  fontSize: "16px",
                  opacity: 0.5,
                }}
              >
                KaPa
              </b>{" "}
              {branchdata.label}
            </Text>
          </div>
          <motion.div
            className={classes.companyContainer}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 + 0.05 * index }}
          >
            <Text size="sm" ta="center" fw={700}>
              {branchdata.quote}
            </Text>
          </motion.div>

          <AnimatePresence>{hovered && branchdata.hovered}</AnimatePresence>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            style={{
              position: "absolute",
              top: 0,
              left: "-100vw",
              width: "300vw",
              height: "100vh",
              overflow: "hidden",
              zIndex: -1,
              background: branchdata.background || "",
              pointerEvents: "none",
            }}
          />
        </motion.div>
      </>
    );
  };

  const RenderBranchMobile = ({ branchdata, index }: any) => {
    const { hovered, ref } = useHover();

    return (
      <>
        <motion.div
          style={{
            opacity: hovered ? 1 : 0.8,
          }}
          ref={ref}
          onClick={() => {
            setTimeout(() => {
              Router.push(branchdata.url);
            }, 1000);
          }}
        >
          <div></div>
          <div>
            <Center mb="xl">
              <Image h={80} w={80} src={branchdata.image} />
            </Center>
            <Text mb="xs" size="sm" lh="100%" ta="center" fw={900}>
              <b
                style={{
                  fontSize: "16px",
                  opacity: 0.5,
                }}
              >
                KaPa
              </b>{" "}
              {branchdata.label}
            </Text>
          </div>
          <motion.div
            className={classes.companyContainer}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 + 0.05 * index }}
          >
            <Text size="xs" ta="center" fw={700}>
              {branchdata.quote}
            </Text>
          </motion.div>

          <AnimatePresence>{hovered && branchdata.hovered}</AnimatePresence>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            style={{
              position: "absolute",
              top: 0,
              left: "-100vw",
              width: "300vw",
              height: "100vh",
              overflow: "hidden",
              zIndex: -1,
              background: branchdata.background || "",
              pointerEvents: "none",
            }}
          />
        </motion.div>
      </>
    );
  };

  return (
    <section className={classes.root}>
      <motion.section ref={overlayRef} className={classes.animationOverlay}>
        <Box
          mt={{ base: "calc(40vh - 80px)", lg: -12 }}
          style={{
            zIndex: 10,
            top: 0,
            height: "100vh",
            paddingTop: 430,
          }}
        >
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <AnimatePresence>
              {Array.from({ length: 11 }).map((_, index) => (
                <motion.div
                  key={index}
                  animate={
                    animateEntry
                      ? index == 4
                        ? {
                            opacity: 0,
                          }
                        : {
                            x:
                              (index - 4) * 175 +
                              (index == 3 ? 56 : index == 5 ? -56 : 0),

                            opacity: 1 - Math.abs((index - 5) / 5),
                          }
                      : {
                          x: (index - 4) * 170,

                          opacity: 1 - Math.abs((index - 5) / 5),
                        }
                  }
                  transition={
                    animateEntry
                      ? {}
                      : {
                          delay: 0.5,
                        }
                  }
                >
                  <Paper
                    key={index}
                    className={classes.loaderCircle}
                    style={{
                      background:
                        index == 4
                          ? "var(--mantine-color-gray-0)"
                          : "var(--mantine-color-gray-3)",
                    }}
                  >
                    <Center h={160}>
                      {index == 2 && (
                        <Image w={100} h={100} src={branches[0].image} />
                      )}
                      {index == 3 && (
                        <Image w={100} h={100} src={branches[1].image} />
                      )}
                      {index == 4 && (
                        <Image w={100} h={100} src={images.logo.main} />
                      )}
                      {index == 5 && (
                        <Image w={100} h={100} src={branches[2].image} />
                      )}
                      {index == 6 && (
                        <Image w={100} h={100} src={branches[3].image} />
                      )}
                    </Center>
                  </Paper>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </Box>
      </motion.section>

      <motion.section
        ref={mainRef}
        style={{
          position: "relative",
        }}
      >
        <Container size="md" pos="relative">
          <motion.div
            style={{
              zIndex: 10,
            }}
            className={classes.mainContainer}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 2,
            }}
          >
            <Center pt="2rem">
              <Stack>
                <Center>
                  <Image h={100} w={100} src={images.logo.main} />
                </Center>
                <Text size="sm" ta="center" mb="xl" fw={900}>
                  CLASSICS PROJECTS
                </Text>

                <Text size="2rem" ta="center" visibleFrom="lg">
                  We create, you{" "}
                  <i
                    style={{
                      fontSize: "4rem",
                      fontFamily: "Yesteryear",
                    }}
                  >
                    celebrate
                  </i>
                </Text>

                <Text size="xl" ta="center" hiddenFrom="lg">
                  We create, you{" "}
                  <i
                    style={{
                      fontSize: "2rem",
                      fontFamily: "Yesteryear",
                    }}
                  >
                    celebrate
                  </i>
                </Text>
              </Stack>
            </Center>
          </motion.div>

          <div
            style={{
              zIndex: 6,
            }}
            className={cx(classes.companyContainer, "mantine-visible-from-lg")}
          >
            {branches.map((branchinfo: any, index: number) => (
              <RenderBranch index={index} key={index} branchdata={branchinfo} />
            ))}
          </div>

          <div
            style={{
              zIndex: 6,
            }}
            className={cx(classes.companyContainer, "mantine-hidden-from-lg")}
          >
            <SimpleGrid cols={2} mt={350} spacing={4}>
              {branches.map((branchinfo: any, index: number) => (
                <Paper bg="rgba(255,255,255,.5)" key={index} withBorder p="md">
                  <RenderBranchMobile
                    index={index}
                    key={index}
                    branchdata={branchinfo}
                  />
                </Paper>
              ))}
            </SimpleGrid>
          </div>
        </Container>
      </motion.section>
    </section>
  );
}
