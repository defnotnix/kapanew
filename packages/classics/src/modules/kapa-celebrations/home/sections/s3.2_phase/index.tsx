"use client";

import { Container, Image, SimpleGrid, Text } from "@mantine/core";
import { animate, AnimatePresence, motion } from "framer-motion";
import { variantTextAnimate } from "../../../../../animation";
import { images } from "../../../../../assets";
import classes from "./phase.module.css";
import { useHover } from "@mantine/hooks";
import { useState } from "react";
import { useRouter } from "next/navigation";

import imgCelebration from "../../../../../assets/images/events/3.jpg";
import imgFulLCircle from "../../../../../assets/images/events/26.jpg";

export function SectionHomePhase() {
  const Router = useRouter();
  const [hovered, setHover]: any = useState(0);

  const animates: any = {
    initial: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  return (
    <section
      style={{
        position: "relative",
        background: "var(--kc-color-300)",
      }}
    >
      <AnimatePresence>
        {(hovered === 1 || hovered === 2) && (
          <motion.div
            key={hovered} // important: unique key per hover state
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{
              position: "absolute",
              zIndex: 0,
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${
                hovered === 1 ? imgCelebration.src : imgFulLCircle.src
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        )}
      </AnimatePresence>

      <div className={classes.leaf_backdrop}>
        <Image opacity={0.1} width="100%" src={images.graphics.leaf} />
      </div>

      <motion.div
        variants={variantTextAnimate(0.1, true)}
        initial="initial"
        animate={hovered !== 0 ? "" : "visible"}
        style={{
          zIndex: 5,
          position: "absolute",
          top: 100,
          width: "100%",
        }}
      >
        <Text
          size="sm"
          fw={600}
          ta="center"
          c={hovered ? "var(--kc-color-50)" : "var(--kc-color-800)"}
          style={{
            transition: ".2s ease-in-out",
          }}
        >
          What are you looking for?
        </Text>
      </motion.div>

      <motion.div
        variants={variantTextAnimate(0.1)}
        initial="initial"
        animate={hovered !== 0 ? "" : "visible"}
        style={{
          zIndex: 5,
          position: "absolute",
          bottom: 100,
          width: "100%",
        }}
      >
        <Text
          size="sm"
          fw={600}
          ta="center"
          c={hovered ? "var(--kc-color-50)" : "var(--kc-color-800)"}
          style={{
            transition: ".2s ease-in-out",
          }}
        >
          Explore what suits your Celebrations.
        </Text>
      </motion.div>

      <Container
        visibleFrom="lg"
        style={{
          height: "100vh",
          position: "relative",
          zIndex: 3,
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
                hovered == 1 ? "linear-gradient(#db585b66,#a72e31)" : "",
              backdropFilter: hovered == 1 ? "blur(9px)" : "",
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
                justifyContent: "space-between",
                cursor: "pointer",
                padding: "100px 0",
              }}
            >
              <Text
                size="sm"
                c="var(--kc-color-50)"
                fw={800}
                ta="center"
                style={{ transition: ".2s ease-in-out" }}
                opacity={hovered == 1 ? 0.5 : 0}
              >
                Decors by KaPa
              </Text>

              <div>
                <Text
                  ta="center"
                  c={
                    hovered == 1 ? "var(--kc-color-100)" : "var(--kc-color-900)"
                  }
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
                  c={
                    hovered == 1 ? "var(--kc-color-100)" : "var(--kc-color-900)"
                  }
                  size="sm"
                  ta="center"
                  mt="md"
                  fw={700}
                >
                  For planners at heart who want their event
                  <br /> beautifully styled and flawlessly managed on the décor
                  front.
                </Text>
              </div>

              <Text
                size="sm"
                c="var(--kc-color-50)"
                fw={800}
                ta="center"
                style={{ transition: ".2s ease-in-out" }}
                opacity={hovered == 1 ? 0.5 : 0}
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
                hovered == 2 ? "linear-gradient(#db585b66,#a72e31)" : "",
              backdropFilter: hovered == 2 ? "blur(9px)" : "",
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
                justifyContent: "space-between",
                cursor: "pointer",
                padding: "100px 0",
              }}
            >
              <Text
                size="sm"
                c="var(--kc-color-50)"
                fw={800}
                ta="center"
                style={{ transition: ".2s ease-in-out" }}
                opacity={hovered == 2 ? 0.5 : 0}
              >
                Full-Circle by KaPa
              </Text>

              <div>
                <Text
                  ta="center"
                  c={
                    hovered == 2 ? "var(--kc-color-100)" : "var(--kc-color-900)"
                  }
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
                  size="sm"
                  ta="center"
                  mt="md"
                  c={
                    hovered == 2 ? "var(--kc-color-100)" : "var(--kc-color-900)"
                  }
                  fw={700}
                >
                  A premium full fledged service <br /> package designed for
                  stress-free, seamless execution.
                </Text>
              </div>

              <Text
                size="sm"
                c="var(--kc-color-50)"
                fw={800}
                ta="center"
                style={{ transition: ".2s ease-in-out" }}
                opacity={hovered == 2 ? 0.5 : 0}
              >
                Designed for Stress-free & Seamless Execution
              </Text>
            </motion.div>
          </div>
        </SimpleGrid>
      </Container>
    </section>
  );
}
