"use client";

import {
  usePageContext,
  variantTextAnimate as variantsTextAnimate,
} from "@classics/ui";

import {
  Container,
  Image,
  Overlay,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
} from "@mantine/core";
//motion
import { motion } from "framer-motion";
//image

//style
//image
import { services } from "./_.data";
import { useQuery } from "@tanstack/react-query";

export function PageServices() {
  // * DEFINITIONS

  // * CONTEXT

  const { dispatch } = usePageContext();

  // * PRELOADING

  const { data, isFetching } = useQuery({
    queryKey: ["celebrations", "home"],
    queryFn: async () => {
      dispatch({
        type: "SET_PRE_DATA",
        payload: {},
      });
      return true;
    },
    initialData: false,
  });
  // * FUNCTIONS

  // * COMPONENTS

  // * ANIMATIONS

  return (
    <>
      <Paper
        radius={0}
        bg="url(https://images.pexels.com/photos/9392445/pexels-photo-9392445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
        bgsz="cover"
        bgp="center"
        pos="relative"
      >
        <Overlay
          gradient="linear-gradient(to right,#190707,#350F0F00,#190707)"
          style={{
            zIndex: 9,
          }}
        ></Overlay>

        <Container
          py={{ base: 100, lg: 200 }}
          pos="relative"
          style={{ zIndex: 10 }}
        >
          <SimpleGrid cols={{ base: 1, lg: 2 }}>
            <Stack>
              <motion.div
                variants={variantsTextAnimate(0)}
                initial="initial"
                animate="visible"
              >
                <Text
                  size="xs"
                  fw={700}
                  tt="uppercase"
                  opacity={0.5}
                  c="gray.0"
                >
                  Services
                </Text>
              </motion.div>
              <motion.div
                variants={variantsTextAnimate(0)}
                initial="initial"
                animate="visible"
                className="kc-heading"
              >
                <div
                  className="kc-heading"
                  style={{
                    color: "white",
                  }}
                >
                  We offer a range
                  <br />
                  of service to make your
                  <br /> celebrations magical.
                </div>
              </motion.div>

              <motion.div
                variants={variantsTextAnimate(0)}
                initial="initial"
                animate="visible"
              >
                <Text size="sm" fw={700} c="gray.0">
                  We offer a wide range of services to make your celebrations
                  magical.
                </Text>
              </motion.div>
            </Stack>
          </SimpleGrid>
        </Container>
      </Paper>

      <Container py={100}>
        <Stack>
          {services.map((serviceinfo: any, index: number) => (
            <div key={index}>
              <SimpleGrid
                cols={{ base: 1, lg: 3 }}
                spacing="xs"
                style={{
                  background: "var(--kapa-color-celebration-200)",
                }}
              >
                <Image
                  hiddenFrom="lg"
                  h={400}
                  fit="contain"
                  src="https://i.pinimg.com/736x/a6/07/c8/a607c8b33bd87369025cdf21f65dc4ff.jpg"
                  style={{
                    mixBlendMode: "multiply",
                  }}
                />
                <motion.div
                  variants={variantsTextAnimate(0)}
                  initial="initial"
                  animate="visible"
                  className="kc-heading"
                >
                  <div
                    className="kc-heading"
                    style={{
                      fontSize: "2rem",
                      lineHeight: "2.5rem",
                    }}
                  >
                    {serviceinfo.service_name}
                  </div>

                  <Space h={24} />

                  <Text size="2rem" opacity={0.3}>
                    {index < 9 && "0"}
                    {index + 1}
                  </Text>
                </motion.div>

                <div>
                  <Text
                    size="sm"
                    fw={700}
                    c="var(--kapa-color-celebration-700)"
                  >
                    {serviceinfo.description}
                  </Text>

                  <Stack my="xl">
                    {serviceinfo.sub_services.map(
                      (subinfo: any, index: number) => (
                        <Text
                          size="sm"
                          key={index}
                          c="var(--color-celebrations-primary-700)"
                        >
                          <b>{subinfo.title}</b>
                          <br />
                          {subinfo.description}
                        </Text>
                      )
                    )}
                  </Stack>
                </div>
                <Image
                  visibleFrom="lg"
                  h={400}
                  fit="contain"
                  src="https://i.pinimg.com/736x/a6/07/c8/a607c8b33bd87369025cdf21f65dc4ff.jpg"
                  style={{
                    mixBlendMode: "multiply",
                  }}
                />
              </SimpleGrid>
            </div>
          ))}
        </Stack>
      </Container>
    </>
  );
}
