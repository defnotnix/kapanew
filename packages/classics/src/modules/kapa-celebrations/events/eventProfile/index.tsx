"use client";

import {
  Container,
  Grid,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Title,
  Center,
  Loader,
} from "@mantine/core";
import { Diamond } from "@phosphor-icons/react";
import { MotionHeroFlower } from "./motion/hero.flower";

import { motion } from "framer-motion";

import { useQuery } from "@tanstack/react-query";

import { useParams } from "next/navigation";
import {
  variantTextAnimate,
  variantGeneralDelay,
  usePageContext,
} from "@classics/ui";
import { getData } from "./page.api";

export function PageEventProfile() {
  const Params: any = useParams();
  const { state, dispatch } = usePageContext();

  const { data, isFetching } = useQuery({
    queryKey: ["events", "profile"],
    queryFn: async () => {
      const res = await getData(Params.id);
      dispatch({
        type: "SET_PRE_DATA",
        payload: {},
      });
      return res;
    },
  });

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
        style={{
          background: "#EEDACEAA",
        }}
      >
        <Space h={100} />

        <Container size="lg">
          <Stack mt={64} mb={48} gap={0}>
            <motion.div
              variants={variantTextAnimate(0.1)}
              initial="initial"
              animate="visible"
            >
              <h1
                className="kc-heading"
                style={{
                  textAlign: "center",
                  fontWeight: 700,
                }}
              >
                {data?.shortname || ""}
              </h1>
            </motion.div>

            <motion.div
              variants={variantTextAnimate(0)}
              initial="initial"
              animate="visible"
            >
              <Text size="xs" ta="center" fw={700} mt={{ base: 32, lg: 0 }}>
                {`${data?.fullname} | ${String(new Date(data?.event_date || "")).substring(0, 10)} | ${data?.venue} | ${data?.theme}`}
              </Text>
            </motion.div>
          </Stack>
        </Container>

        <Container size="sm" pos="relative">
          <motion.div
            variants={variantGeneralDelay(0.1)}
            initial="initial"
            animate="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <Stack>
              <Paper
                p="sm"
                withBorder
                shadow="sm"
                pos="relative"
                style={{
                  zIndex: 2,
                }}
              >
                <Image src={data?.event_images[0]?.image} />
              </Paper>

              <div
                style={{
                  position: "absolute",
                  right: -200,
                  top: 0,
                  zIndex: 1,
                }}
              >
                <MotionHeroFlower />
              </div>
              <div
                style={{
                  position: "absolute",
                  left: -200,
                  top: 500,
                  zIndex: 1,
                  transform: "rotate(180deg)",
                }}
              >
                <MotionHeroFlower />
              </div>
            </Stack>
          </motion.div>
        </Container>

        <Container size="sm" py="xl">
          <Text size="sm" ta="center" my="xl">
            {data?.event_description || ""}
          </Text>

          <Space h="sm" />

          <motion.div
            variants={variantTextAnimate(0.1)}
            initial="initial"
            animate="visible"
          >
            <h1
              className="kc-heading"
              style={{
                textAlign: "center",
                marginBottom: "2rem",
                color: "var(--kc-color-700)",
              }}
            >
              {data?.highlight_message || ""}
            </h1>
          </motion.div>
        </Container>

        <Container size="lg">
          {/* <SimpleGrid cols={{ base: 1, lg: 3 }} py={100}>
            <motion.div
              variants={variantGeneralDelay(0.1)}
              initial="initial"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <Paper
                p="sm"
                style={{
                  transform: "rotate(-8deg)",
                }}
              >
                <Image
                  h={{
                    base: 300,
                    lg: 500,
                  }}
                  src="https://images.prismic.io/marie-guillaume/c3554ec4-911b-4ce4-b603-7d3066179e59_coralie-et-alexandre-marrakech16.jpg?fm=webp&w=1100&q=45"
                />
                <Text mt="sm" ff="WindSong" size="lg">
                  Joy in XX
                </Text>
              </Paper>
            </motion.div>
            <motion.div
              variants={variantGeneralDelay(0.1)}
              initial="initial"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <Paper p="sm">
                <Image
                  h={{
                    base: 300,
                    lg: 500,
                  }}
                  src="https://images.prismic.io/marie-guillaume/c3554ec4-911b-4ce4-b603-7d3066179e59_coralie-et-alexandre-marrakech16.jpg?fm=webp&w=1100&q=45"
                />
                <Text mt="sm" ff="WindSong" size="lg">
                  Joy in XX
                </Text>
              </Paper>
            </motion.div>
            <motion.div
              variants={variantGeneralDelay(0.1)}
              initial="initial"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <Paper
                mt={50}
                p="sm"
                style={{
                  transform: "rotate(6deg)",
                }}
              >
                <Image
                  h={{
                    base: 300,
                    lg: 500,
                  }}
                  src="https://images.prismic.io/marie-guillaume/c3554ec4-911b-4ce4-b603-7d3066179e59_coralie-et-alexandre-marrakech16.jpg?fm=webp&w=1100&q=45"
                />
                <Text mt="sm" ff="WindSong" size="lg">
                  Joy in XX
                </Text>
              </Paper>
            </motion.div>
          </SimpleGrid> */}

          <SimpleGrid cols={2}>
            <Stack key={1}>
              {data?.event_images
                .filter((_: any, index: number) => index % 2 !== 0)
                .map((item: any, index: number) => (
                  <Paper key={index} p={6} withBorder shadow="md">
                    <Image src={item?.image} />
                  </Paper>
                ))}
            </Stack>
            <Stack key={2}>
              {" "}
              {data?.event_images
                .filter((_: any, index: number) => index % 2 == 0)
                .map((item: any, index: number) => (
                  <Paper key={index} p={6} withBorder shadow="md">
                    <Image src={item?.image} />
                  </Paper>
                ))}
            </Stack>
          </SimpleGrid>

          <Space h={100} />
        </Container>
      </section>
    </>
  );
}
