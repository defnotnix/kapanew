"use client";

import React, { useEffect, useState } from "react";
//mantine
import {
  Box,
  Center,
  Container,
  Group,
  Image,
  SimpleGrid,
  Space,
  Stack,
  Text,
  UnstyledButton,
} from "@mantine/core";
//icons
import {} from "@phosphor-icons/react";
//motion
import { animate, AnimatePresence, motion } from "framer-motion";
//styles

//components

//styles
import classes from "./intro.module.css";
//assets

import { FeaturedSectionCard } from "./featureCard";
import { useRouter } from "next/navigation";

import {
  usePageContext,
  variantTextAnimate,
  variantGeneralDelay,
} from "@classics/ui";

export function SectionHomeFeatured() {
  // * CONTEXT

  const { state } = usePageContext();

  // * STATES

  const [active, setActive] = useState(0);
  const [sectionData, setSectionData] = useState<any | null>(null);

  const Router = useRouter();

  // * PRERENDER

  function getFormattedData() {
    return {
      events: state.preData?.events,
    };
  }

  useEffect(() => {
    console.log(state.preData);

    if (state.preData?.cms?.length > 0) {
      setSectionData(getFormattedData());
    }
  }, [state]);

  if (!sectionData) {
    return <></>;
  }

  return (
    <motion.section
      viewport={{ once: true }}
      style={{
        position: "relative",
        background: "var(--kc-color-200)",
      }}
    >
      <Container
        py={{
          base: 50,
          lg: 100,
        }}
        size="xl"
        pos="relative"
        style={{ zIndex: 2 }}
      >
        <Group>
          <motion.div
            variants={variantTextAnimate(0)}
            initial="initial"
            animate="visible"
          >
            <Text size="xs" tt="uppercase" fw={600}>
              Featured Celebrations
            </Text>
          </motion.div>
        </Group>

        <Group py="xl" justify="space-between" visibleFrom="lg">
          <motion.div
            variants={variantTextAnimate(0)}
            initial="initial"
            animate="visible"
          >
            <div className="kc-heading">
              Explore Our
              <br /> Featured Celebrations
            </div>
          </motion.div>

          <motion.div
            variants={variantTextAnimate(0)}
            initial="initial"
            animate="visible"
          >
            <div
              className="celebration-heading"
              style={{
                color: "var(--kc-color-400)",
                fontSize: "2rem",
                lineHeight: "2rem",
              }}
            >
              A deep dive into how we
              <br /> transform a celebration vision
              <br /> into reality.
            </div>
          </motion.div>
        </Group>

        <SimpleGrid cols={{ base: 1, lg: 3 }} my="md">
          {sectionData?.events
            .filter((e: any) => {
              return e.company == 1;
            })
            .slice(0, 3)
            .map((item: any, index: number) => {
              return (
                <motion.div
                  key={index}
                  variants={variantGeneralDelay(0)}
                  initial="initial"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <FeaturedSectionCard
                    id={item.id}
                    image={
                      item.event_images && item.event_images.length
                        ? item?.event_images[0]?.image
                        : "https://images.prismic.io/marie-guillaume/e0d32bc8-8fee-47b8-985a-c7256f882ecc_lucie-et-paul-le-touquet6.jpg?fm=webp&w=1100&q=45"
                    }
                    year={new Date(item.event_date).getFullYear()}
                    title={item.shortname}
                  />
                </motion.div>
              );
            })}
        </SimpleGrid>

        <Space h={50} />
      </Container>

      <div
        style={{
          position: "absolute",
          top: "50%",
          backgroundImage:
            "linear-gradient(to right, var(--kc-color-300), var(--kc-color-400))",
          display: "block",
          width: "100%",
          height: "50px",
          zIndex: 0,
          transform: "rotate(2deg)",
        }}
      ></div>
    </motion.section>
  );
}
