"use client";

import {
  AspectRatio,
  Center,
  Container,
  Image,
  Loader,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
} from "@mantine/core";

import { motion } from "framer-motion";

import { useQuery } from "@tanstack/react-query";

import {
  usePageContext,
  variantGeneralDelay,
  variantTextAnimate,
} from "@classics/ui";
import { useParams } from "next/navigation";
import { getData } from "./page.api";

export function PageEventProfile() {
  const Params: any = useParams();
  const { dispatch } = usePageContext();

  const { data, isFetching } = useQuery({
    queryKey: ["events", "eventprofile"],
    queryFn: async () => {
      const res = await getData(Params.id);
      console.log(res);
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
        <Loader type="dots" color="var(--ke-color-600)" />
      </Center>
    );
  }

  return (
    <>
      <section>
        <Container size="md">
          <Stack mt={150} mb={48} gap={0}>
            <motion.div
              variants={variantTextAnimate(0)}
              initial="initial"
              animate="visible"
            >
              <Text size="lg" w="80%" fw={700}>
                Event Showcase
              </Text>
            </motion.div>

            <motion.div
              variants={variantTextAnimate(0.1)}
              initial="initial"
              animate="visible"
              className="mantine-visible-from-lg"
            >
              <h1
                style={{
                  fontFamily: "var(--ke-font-heading)",
                  fontWeight: 700,
                  fontSize: "6rem",
                  lineHeight: "6.5rem",
                }}
              >
                {data?.shortname || ""}
              </h1>
            </motion.div>

            <motion.div
              variants={variantTextAnimate(0.1)}
              initial="initial"
              animate="visible"
              className="mantine-hidden-from-lg"
            >
              <h1
                style={{
                  fontFamily: "var(--ke-font-heading)",
                  fontWeight: 700,
                  fontSize: "3rem",
                  lineHeight: "3.5rem",
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
              <Text
                mt="xl"
                c="var(--ke-color-700)"
                size="lg"
                w="80%"
                fw={700}
                visibleFrom="lg"
              >
                {`${data?.fullname} | ${String(new Date(data?.event_date || "")).substring(0, 10)} | ${data?.venue} | ${data?.theme}`}
              </Text>

              <Text
                mt="sm"
                c="var(--ke-color-700)"
                size="xs"
                w="80%"
                fw={700}
                hiddenFrom="lg"
              >
                {`${data?.fullname} | ${String(new Date(data?.event_date || "")).substring(0, 10)} | ${data?.venue} | ${data?.theme}`}
              </Text>
            </motion.div>
          </Stack>
        </Container>

        <Container size="lg">
          <AspectRatio ratio={16 / 9}>
            <iframe
              src="https://www.youtube.com/embed/qcTG5NXzuR0?autoplay=1&controls=0&modestbranding=1&rel=0&mute=1"
              style={{
                width: "100%",
                height: "100%",

                top: 0,
                left: 0,
                border: "none",
              }}
              allow="autoplay; fullscreen"
            />
          </AspectRatio>
        </Container>

        <Container size="md" py="xl">
          <Text size="xl" fw={900}>
            Event Brief
          </Text>

          <Text size="md" my="xl" fw={700}>
            {data?.event_description || ""}
          </Text>

          <Space h="sm" />

          <motion.div
            variants={variantTextAnimate(0.1)}
            initial="initial"
            animate="visible"
          >
            <h1
              className="ke-heading"
              style={{
                marginBottom: "2rem",
                color: "var(--ke-color-700)",
              }}
            >
              {data?.highlight_message || ""}
            </h1>
          </motion.div>
        </Container>

        <Container size="lg">
          <motion.div
            variants={variantGeneralDelay(0.1)}
            initial="initial"
            animate="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <Stack mb="sm">
              <Paper withBorder>
                <Image h={400} src={data?.event_images[0]?.image} />
              </Paper>
            </Stack>
          </motion.div>

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

          <SimpleGrid cols={2} spacing="sm">
            <Stack key={1}>
              {data?.event_images
                .filter((_: any, index: number) => index % 2 !== 0)
                .map((item: any, index: number) => (
                  <Paper key={index} withBorder shadow="md">
                    <Image src={item?.image} />
                  </Paper>
                ))}
            </Stack>
            <Stack key={2}>
              {" "}
              {data?.event_images
                .filter((_: any, index: number) => index % 2 == 0)
                .map((item: any, index: number) => (
                  <Paper key={index} withBorder shadow="md">
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
