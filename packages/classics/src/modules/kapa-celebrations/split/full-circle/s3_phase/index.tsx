"use client";

import { useState } from "react";
//mantine
import {
  ActionIcon,
  Center,
  Container,
  Grid,
  Group,
  Image,
  Stack,
  Text,
} from "@mantine/core";
//styles
import classes from "./phase.module.css";
//motion
import { motion } from "framer-motion";
//components

import { images } from "@classics/ui";

import {
  CaretLeft,
  CaretLeftIcon,
  CaretRightIcon,
  CircleIcon,
} from "@phosphor-icons/react";
import { CardClassics } from "./Cards/CardClassics";
import { CardDetails } from "./Cards/CardDetails";
import { CardDuringCover } from "./Cards/CardDuring";
import { CardPostCover } from "./Cards/CardPost";
import { CardPreCover } from "./Cards/CardPre";
import { CardQuote } from "./Cards/CardQuote";
import {
  variantClassicsLeft,
  variantClassicsRight,
  variantCoverLeft,
  variantCoverRight,
} from "./phase.variants";

import { usePageContext } from "@classics/ui";

export function SectionHomePhase() {
  // * DEFINITIONS

  const [active, setActive] = useState<null | number>(null);
  const [animateStatus, setAnimateStatus] = useState(false);

  // * CONTEXT

  const { state } = usePageContext();

  // * STATE

  // * FUNCTIONS

  const initiatePhaseChange = (nextPhase: number | null) => {
    setAnimateStatus(true);
    setTimeout(() => {
      setActive(nextPhase);
      setAnimateStatus(false);
    }, 500);
  };

  // * COMPONENTS

  const transition = {
    duration: 0.3,
  };

  const activeData: any = {
    "0": state.preData?.cms?.find(
      (item: any) => item.holder == "kc-home-phase-pre"
    ),
    "1": state.preData?.cms?.find(
      (item: any) => item.holder == "kc-home-phase-during"
    ),
    "2": state.preData?.cms?.find(
      (item: any) => item.holder == "kc-home-phase-post"
    ),
  };

  return (
    <>
      <section className="pos_relative">
        <Image
          src={images.graphics.curveShape}
          pos="absolute"
          style={{
            top: "30%",
            left: 0,
          }}
        />

        <Container pb={100}>
          <Stack>
            <Text size="md" ta="center" fw={600} c="var(--kc-color-600)">
              A deep dive into how we transform a celebration vision into
              reality.
            </Text>

            <Grid my="xl" gutter={0} h={650}>
              <Grid.Col
                span={{ base: 12, lg: 4 }}
                offset={{ base: 0, lg: 4 }}
                pos="relative"
              >
                <motion.div
                  id="card-pre-cover-left"
                  className={classes.card_cover}
                  style={{
                    position: "absolute",
                    width: "100%",
                    zIndex: 5,
                  }}
                  variants={variantClassicsLeft}
                  initial="initial"
                  animate={animateStatus ? "initial" : "visible"}
                  transition={{
                    ...transition,
                    delay: 0.1,
                  }}
                >
                  <CardClassics />
                </motion.div>

                <motion.div
                  id="card-pre-cover-left"
                  className={classes.card_cover}
                  style={{
                    position: "absolute",
                    width: "100%",
                    zIndex: 4,
                  }}
                  variants={variantCoverLeft}
                  initial="initial"
                  animate={
                    animateStatus ? "initial" : active !== null ? "visible" : {}
                  }
                  transition={{
                    ...transition,
                    delay: 0.2,
                  }}
                >
                  <CardQuote
                    data={{
                      ...activeData[String(active) || "0"],
                      phase: active,
                    }}
                  />
                </motion.div>

                <motion.div
                  id="card-pre-cover-left"
                  className={classes.card_cover}
                  style={{
                    position: "absolute",
                    width: "100%",
                    zIndex: 4,
                    opacity: active == null || active == 0 ? 1 : 0,
                  }}
                  variants={variantCoverLeft}
                  initial="initial"
                  animate={
                    animateStatus ? "initial" : active == null ? "visible" : {}
                  }
                  transition={{
                    ...transition,
                    delay: 0.2,
                  }}
                  onClick={() => initiatePhaseChange(0)}
                >
                  <CardPreCover />
                </motion.div>

                <motion.div
                  id="card-during-cover-center"
                  className={classes.card_cover}
                  style={{
                    position: "absolute",
                    width: "100%",
                    zIndex: 5,
                    opacity: active == null || active == 1 ? 1 : 0,
                  }}
                  transition={{
                    ...transition,
                  }}
                  onClick={() => initiatePhaseChange(1)}
                >
                  <CardDuringCover />
                </motion.div>
                <motion.div
                  id="card-post-cover-right"
                  className={classes.card_cover}
                  style={{
                    position: "absolute",
                    width: "100%",
                    zIndex: 3,
                    opacity: active == null || active == 2 ? 1 : 0,
                  }}
                  variants={variantCoverRight}
                  initial="initial"
                  animate={
                    animateStatus ? "initial" : active == null ? "visible" : {}
                  }
                  transition={{
                    ...transition,
                    delay: 0.2,
                  }}
                  onClick={() => initiatePhaseChange(2)}
                >
                  <CardPostCover />
                </motion.div>

                <motion.div
                  id="card-post-cover-right"
                  className={classes.card_cover}
                  style={{
                    position: "absolute",
                    width: "100%",
                    zIndex: 3,
                  }}
                  variants={variantCoverRight}
                  initial="initial"
                  animate={
                    animateStatus ? "initial" : active !== null ? "visible" : {}
                  }
                  transition={{
                    ...transition,
                    delay: 0.2,
                  }}
                >
                  <CardDetails
                    data={{
                      ...activeData[String(active) || "0"],
                      phase: active,
                    }}
                  />
                </motion.div>

                <motion.div
                  id="card-pre-cover-right"
                  className={classes.card_cover}
                  style={{
                    position: "absolute",
                    width: "100%",
                    zIndex: 5,
                  }}
                  variants={variantClassicsRight}
                  initial="initial"
                  animate={animateStatus ? "initial" : "visible"}
                  transition={{
                    ...transition,
                    delay: 0.1,
                  }}
                >
                  <CardClassics />
                </motion.div>
              </Grid.Col>
            </Grid>
          </Stack>

          <Group justify="center">
            <ActionIcon
              disabled={active && active == 0 ? true : false}
              color="var(--kc-color-600)"
              size="xs"
              variant="subtle"
              mt="14px"
              onClick={() => {
                initiatePhaseChange(active ? active - 1 : 0);
              }}
            >
              <CaretLeftIcon weight="fill" />
            </ActionIcon>
            <motion.div
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                initiatePhaseChange(0);
              }}
            >
              <Center opacity={active == 0 ? 1 : 0} mb="xs">
                <CircleIcon
                  size={10}
                  weight="fill"
                  color="var(--kc-color-600)"
                  style={{
                    transition: ".3s ease-in-out",
                  }}
                />
              </Center>
              <Text
                size="sm"
                fw={600}
                opacity={active == 0 ? 1 : 0.3}
                style={{
                  transition: ".3s ease-in-out",
                }}
              >
                PRE-EVENT
              </Text>
            </motion.div>
            <motion.div
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                initiatePhaseChange(1);
              }}
            >
              <Center mb="xs" opacity={active == 1 ? 1 : 0}>
                <CircleIcon
                  size={10}
                  weight="fill"
                  color="var(--kc-color-600)"
                  style={{
                    transition: ".3s ease-in-out",
                  }}
                />
              </Center>
              <Text
                size="sm"
                fw={600}
                opacity={active == 1 ? 1 : 0.3}
                style={{
                  transition: ".3s ease-in-out",
                }}
              >
                DURING EVENT
              </Text>
            </motion.div>{" "}
            <motion.div
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                initiatePhaseChange(2);
              }}
            >
              <Center mb="xs" opacity={active == 2 ? 1 : 0}>
                <CircleIcon
                  size={10}
                  weight="fill"
                  color="var(--kc-color-600)"
                  style={{
                    transition: ".3s ease-in-out",
                  }}
                />
              </Center>
              <Text
                size="sm"
                fw={600}
                opacity={active == 2 ? 1 : 0.3}
                style={{
                  transition: ".3s ease-in-out",
                }}
              >
                POST - EVENT
              </Text>
            </motion.div>
            <ActionIcon
              color="var(--kc-color-600)"
              size="xs"
              variant="subtle"
              mt="md"
              onClick={() => {
                initiatePhaseChange(active ? active + 1 : 0);
              }}
            >
              <CaretRightIcon weight="fill" />
            </ActionIcon>
          </Group>
        </Container>
      </section>
    </>
  );
}
