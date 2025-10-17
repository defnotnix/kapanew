"use client";

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
//motion
import { AnimatePresence, motion } from "framer-motion";
//data
import { useHover } from "@mantine/hooks";

//styles

import { useState } from "react";
import {
  usePageContext,
  variantGeneralDelay,
  variantTextAnimate,
} from "@classics/ui";

import cx from "clsx";
import classes from "./services.module.css";

import { getData } from "./page.api";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function PageEventCategory() {
  // * DEFINITIONS

  const { state, dispatch } = usePageContext();

  const [active, setActive] = useState<number>(0);

  const Router = useRouter();

  // * CONTENT GET

  const { data, isFetching } = useQuery({
    queryKey: ["celebrations", "faq"],
    queryFn: async () => {
      const res = await getData();
      dispatch({
        type: "SET_PRE_DATA",
        payload: {},
      });
      console.log(res);
      return res;
    },
  });

  // * CONTEXT

  // * STATE

  // * FUNCTIONS

  // * COMPONENTS

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

  const ProjectCategory = ({
    categoryinfo,
    index,
  }: {
    categoryinfo: any;
    index: number;
  }) => {
    return (
      <motion.div
        className={classes.category_container}
        onMouseEnter={() => {
          setActive(index);
        }}
        onClick={() => {
          Router.push("/kapa-celebrations/events/showcase");
        }}
      >
        <div className={cx(classes.category_label, "kc-heading")}>
          {categoryinfo.label}
        </div>
      </motion.div>
    );
  };
  // * ANIMATIONS

  return (
    <>
      <section
        style={{
          position: "relative",
          background: "var(--kc-color-300)",
        }}
      >
        <Container
          py={160}
          pos="relative"
          style={{
            zIndex: 3,
          }}
        >
          <Stack>
            <motion.div
              variants={variantTextAnimate(0)}
              initial="initial"
              animate="visible"
            >
              <Text size="sm" fw={700} opacity={0.5}>
                Celebrating Life’s Milestones with KaPa Celebrations
              </Text>
            </motion.div>
          </Stack>
          <Space h={{ base: "xl" }} />

          <Box pos="relative">
            <AnimatePresence>
              <SimpleGrid cols={{ base: 1, lg: 2 }}>
                <Stack gap={0}>
                  {data?.map((categoryinfo: any, index: number) => (
                    <ProjectCategory
                      categoryinfo={categoryinfo}
                      index={index}
                      key={index}
                    />
                  ))}

                  <motion.div
                    variants={variantTextAnimate(0)}
                    initial="initial"
                    animate="visible"
                  >
                    <Text size="xs" fw={700} opacity={0.5} py="xl">
                      & GENERALLY A WIDE RAGE OF PRIVATE & PUBLIC EVENTS
                    </Text>
                  </motion.div>
                </Stack>

                <motion.div className="mantine-visible-from-lg">
                  <Paper
                    mt={{ base: 0, lg: -100 }}
                    shadow="md"
                    p="8px"
                    pb="10px"
                    style={{
                      transform: "rotate(-2deg)",
                    }}
                  >
                    <Image
                      h={600}
                      style={{
                        objectPosition: "center",
                      }}
                      src={data[active || 0]?.image}
                    />
                  </Paper>

                  <Group justify="flex-end">
                    <Stack mt="xl" pl={{ base: 0, lg: 200 }}>
                      <Text size="md" fw={700}>
                        {data[active].description}
                      </Text>
                      <Group gap={4}>
                        {data
                          ? data[active]?.subCategory.map(
                              (categoryinfo: any, index: number) => (
                                <Text
                                  fw={700}
                                  size="sm"
                                  key={index}
                                  c="var(--kc-color-700)"
                                >
                                  {categoryinfo}
                                  {index < data[active]?.subCategory.length - 1
                                    ? ","
                                    : "."}
                                </Text>
                              )
                            )
                          : ""}
                      </Group>
                    </Stack>
                  </Group>
                </motion.div>
              </SimpleGrid>
            </AnimatePresence>
          </Box>
        </Container>
      </section>
    </>
  );
}
