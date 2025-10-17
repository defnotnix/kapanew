"use client";

import { Container, Image, SimpleGrid, Text } from "@mantine/core";
import { animate, motion } from "framer-motion";
import { variantTextAnimate } from "../../../../../animation";
import { images } from "../../../../../assets";
import classes from "./phase.module.css";
import { useHover } from "@mantine/hooks";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function SectionHomePhase() {
  const Router = useRouter();
  const [hovered, setHover]: any = useState(0);

  return (
    <section
      style={{
        position: "relative",
        background: "var(--kc-color-300)",
      }}
    >
      <div className={classes.leaf_backdrop}>
        <Image opacity={0.1} width="100%" src={images.graphics.leaf} />
      </div>

      <motion.div
        variants={variantTextAnimate(0.1)}
        initial="initial"
        animate="visible"
        style={{
          position: "absolute",
          top: 100,
          width: "100%",
        }}
      >
        <Text size="xs" fw={600} ta="center" c="var(--kc-color-900)">
          SPLITS BY KAPA
        </Text>
      </motion.div>

      <motion.div
        variants={variantTextAnimate(0.1)}
        initial="initial"
        animate="visible"
        style={{
          position: "absolute",
          bottom: 100,
          width: "100%",
        }}
      >
        <Text size="xs" fw={600} ta="center" c="var(--kc-color-900)">
          HOVER ON ANY SIDE
        </Text>
      </motion.div>

      <Container
        style={{
          height: "100vh",
        }}
      >
        <SimpleGrid cols={{ base: 1, lg: 2 }}>
          <div
            onMouseEnter={() => {
              setHover(1);
            }}
            onMouseLeave={() => {
              setHover(0);
            }}
            style={{
              background:
                hovered == 1
                  ? "linear-gradient(var(--kc-color-500),var(--kc-color-700))"
                  : "",
            }}
          >
            <motion.div
              variants={variantTextAnimate(0.1)}
              initial="initial"
              animate={hovered == 2 ? "" : "visible"}
              onClick={() => {
                Router.push("/kapa-celebrations/split/decor");
              }}
              style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Text
                ta="center"
                c={hovered == 1 ? "var(--kc-color-100)" : "var(--kc-color-900)"}
                style={{
                  fontSize: "6rem",
                  lineHeight: "6.8rem",
                  fontFamily: "var(--kc-font-heading)",
                }}
                fw={700}
              >
                Decors
                <br />
                by KaPa.
              </Text>
              <Text
                c={hovered == 1 ? "var(--kc-color-100)" : "var(--kc-color-900)"}
                size="xs"
                ta="center"
                mt="md"
                fw={700}
              >
                Aesthetic Elegance, Made Simple
              </Text>
            </motion.div>
          </div>

          <div
            onMouseEnter={() => {
              setHover(2);
            }}
            onMouseLeave={() => {
              setHover(0);
            }}
            style={{
              background:
                hovered == 2
                  ? "linear-gradient(var(--kc-color-500),var(--kc-color-700))"
                  : "",
            }}
          >
            <motion.div
              variants={variantTextAnimate(0.1)}
              initial="initial"
              animate={hovered == 1 ? "" : "visible"}
              onClick={() => {
                Router.push("/kapa-celebrations/split/full-circle");
              }}
              style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Text
                ta="center"
                c={hovered == 2 ? "var(--kc-color-100)" : "var(--kc-color-900)"}
                style={{
                  fontSize: "6rem",
                  lineHeight: "6.8rem",
                  fontFamily: "var(--kc-font-heading)",
                }}
                fw={700}
              >
                Full Circle
                <br />
                by KaPa.
              </Text>

              <Text
                size="xs"
                ta="center"
                mt="md"
                c={hovered == 2 ? "var(--kc-color-100)" : "var(--kc-color-900)"}
                fw={700}
              >
                A premium full-service package designed for stress-free,
                seamless execution.
              </Text>
            </motion.div>
          </div>
        </SimpleGrid>
      </Container>
    </section>
  );
}
