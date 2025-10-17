"use client";

import {
  Box,
  Container,
  Image,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import { MotionConfig, motion } from "framer-motion";
import { usePageContext, variantTextAnimate } from "@classics/ui";
import { useState } from "react";
import cx from "clsx";
import classes from "./services.module.css";
import { useRouter } from "next/navigation";

export function SectionHomeServices() {
  const Router = useRouter();
  const { state } = usePageContext();
  const [active, setActive] = useState<null | number>(null);

  // ---- Titles (smooth opacity + slight grow) ----
  const ProjectCategory = ({
    categoryinfo,
    index,
  }: {
    categoryinfo: any;
    index: number;
  }) => {
    const isActive = active === index;
    const isIdle = active === null;

    return (
      <motion.div
        className={classes.category_container}
        onMouseEnter={() => setActive(index)}
        onMouseLeave={() => setActive(null)}
        onClick={() => Router.push("/kapa-celebrations/events/showcase")}
      >
        <motion.div
          initial={false}
          animate={
            isIdle
              ? {
                  opacity: 1,
                }
              : isActive
                ? {
                    opacity: 1,
                    scale: 1.05,
                  }
                : {
                    opacity: 0.45,
                  }
          }
          transition={{
            opacity: { duration: 0.35, ease: "easeInOut" },
            scale: { type: "spring", stiffness: 180, damping: 22 },
          }}
          className={cx(classes.category_label, "kc-heading")}
        >
          {categoryinfo.label}
        </motion.div>
      </motion.div>
    );
  };

  // ---- Image cards (lift + grow + grayscale on others) ----
  const PaperCards = () => (
    <div
      style={{
        position: "relative",
        width: "800px",
        margin: "0 auto",
        padding: "40px",
      }}
    >
      {state?.preData?.serviceCategory?.map((item: any, index: number) => {
        const positions = [
          { top: -64, left: 60, rot: -3 },
          { top: -32, left: 280, rot: 5 },
          { top: 200, left: 0, rot: -6 },
          { top: 300, left: 250, rot: 4 },
          { top: -64, left: 500, rot: -5 },
          { top: 200, left: 500, rot: 6 },
        ];
        const pos = positions[index % positions.length];
        const isActive = active === index;
        const isIdle = active === null;

        return (
          <motion.div
            key={index}
            initial={false}
            animate={{
              y: isActive ? -28 : 0,
              scale: isActive ? 1.12 : 1,
            }}
            transition={{
              y: { type: "spring", stiffness: 160, damping: 18 },
              scale: { type: "spring", stiffness: 200, damping: 22 },
            }}
            style={{
              position: "absolute",
              top: pos.top,
              left: pos.left,
              // Framer transform prop (number, not string)
              rotate: pos.rot,
              width: 260,
              zIndex: index,
              cursor: "pointer",
              // Smooth grayscale via CSS (Framer handles transforms)
              filter: isIdle || isActive ? "grayscale(0)" : "grayscale(1)",
              transition: "filter 400ms ease-in-out",
            }}
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(null)}
          >
            <Paper
              shadow="xl"
              px={6}
              py={8}
              style={{ backgroundColor: "white" }}
            >
              <Image
                h={300}
                fit="cover"
                src={item.image}
                alt={`card-${index}`}
              />
            </Paper>
          </motion.div>
        );
      })}
    </div>
  );

  return (
    <MotionConfig reducedMotion="never">
      <section
        style={{
          position: "relative",
          background: "var(--kc-color-300)",
        }}
      >
        <Container py={160} pos="relative" style={{ zIndex: 3 }}>
          <Stack>
            <motion.div
              variants={variantTextAnimate(0)}
              initial="initial"
              animate="visible"
            >
              <Text size="xl" fw={700} opacity={0.5}>
                Celebrating Life’s Milestones with KaPa Celebrations
              </Text>
            </motion.div>
          </Stack>

          <Space h={{ base: "xl", lg: 80 }} />

          <Box pos="relative">
            <SimpleGrid cols={{ base: 1, lg: 2 }}>
              <Stack gap={0}>
                {state?.preData?.serviceCategory?.map(
                  (categoryinfo: any, index: number) => (
                    <ProjectCategory
                      categoryinfo={categoryinfo}
                      index={index}
                      key={index}
                    />
                  )
                )}

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

              <PaperCards />
            </SimpleGrid>
          </Box>
        </Container>
      </section>
    </MotionConfig>
  );
}
