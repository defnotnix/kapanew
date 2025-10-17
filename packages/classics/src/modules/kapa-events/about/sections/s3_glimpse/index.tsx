"use client";

import { variantTextAnimate } from "@classics/ui";

import { Container, Grid, Image, Stack, Text } from "@mantine/core";

import { motion } from "motion/react";

const images = [
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export function SectionAboutGlimpse() {
  return (
    <>
      <section
        style={{
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "calc(30% - 100px)",
            display: "block",
            height: 200,
            width: "120%",
            transform: "rotate(6deg)",
            background:
              "linear-gradient(to right,var(--color-celebrations-primary-500), var(--color-celebrations-primary-700))",
            marginLeft: "-10%",
            zIndex: 1,
            opacity: 0.8,
          }}
        />

        <Container
          pos="relative"
          style={{
            zIndex: 2,
          }}
        >
          <Grid gutter={"xs"}>
            <Grid.Col span={{ base: 6, lg: 4 }}>
              <Image radius="md" h={{ base: 200, lg: 450 }} src={images[0]} />
              <Image
                mt="xs"
                radius="md"
                ml={{
                  base: 0,
                  lg: "20%",
                }}
                w={{ base: "100%", lg: "80%" }}
                h={{ base: 200, lg: 350 }}
                src={images[0]}
              />

              <Text
                visibleFrom="lg"
                mt="sm"
                ta="right"
                size="sm"
                fw={800}
                mb="sm"
                c="var(--color-celebrations-primary-600)"
              >
                An effort that becomes someone’s lifelong memory diary. The
                thing we like the most about our profession.
              </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 6, lg: 4 }} pt={{ base: 0, lg: 64 }}>
              <Image radius="md" h={{ base: 200, lg: 450 }} src={images[0]} />
              <Image
                mt="xs"
                radius="md"
                h={{ base: 200, lg: 450 }}
                src={images[0]}
              />
            </Grid.Col>
            <Grid.Col
              visibleFrom="lg"
              span={{ base: 6, lg: 4 }}
              pt={{ base: 0, lg: 160 }}
            >
              <Text
                size="sm"
                fw={800}
                mb="md"
                c="var(--color-celebrations-primary-600)"
              >
                Joy is best felt when you're fully present—we take care of the
                rest so you don’t miss a moment.
              </Text>

              <Image radius="md" w={"80%"} h={350} src={images[0]} />
              <Image mt="xs" radius="md" h={450} src={images[0]} />
            </Grid.Col>
          </Grid>

          <Text
            mt="sm"
            ta="right"
            size="sm"
            fw={800}
            mb="md"
            c="var(--color-celebrations-primary-600)"
          >
            Our focus is ensuring you experience the joy,
            <br /> fully immersed in the celebration without any distractions
          </Text>
        </Container>
      </section>

      <Container
        size="sm"
        py={100}
        pos="relative"
        style={{
          zIndex: 2,
        }}
      >
        <Stack>
          <motion.div
            variants={variantTextAnimate(0)}
            initial="initial"
            animate="visible"
          >
            <Text size="xs" fw={700} ta="center" tt="uppercase" opacity={0.5}>
              THE RECIPE
            </Text>
          </motion.div>
          <motion.div
            variants={variantTextAnimate(0)}
            initial="initial"
            animate="visible"
            className="ke-heading"
            style={{
              textAlign: "center",
            }}
          >
            Our Recipe For
            <br />
            Better Celebrations.
          </motion.div>

          <motion.div
            variants={variantTextAnimate(0)}
            initial="initial"
            animate="visible"
          >
            <Text size="sm" fw={700} ta="center" opacity={0.5}>
              A perfect blend of creativity, meticulous planning, and seamless
              execution, all designed to deliver unforgettable, stress-free
              celebrations.
            </Text>
          </motion.div>
        </Stack>
      </Container>

      <Container
        pb={{
          base: 100,
          lg: 200,
        }}
      >
        <Grid gutter="xl" align="center">
          <Grid.Col
            span={{ base: 12, lg: 3.5 }}
            offset={{ base: 0, lg: 2.5 }}
            pos="relative"
          >
            {/* <div
              style={{
                position: "absolute",
                top: "-30%",
                right: "90%",
                transform: "rotate(180deg) scaleY(-1)",
                zIndex: 1,
              }}
            >
              <animateSvg.MotionFlowerLeaves />
            </div> */}

            <Image
              pos="relative"
              style={{
                zIndex: 2,
              }}
              radius="lg"
              h={250}
              src="https://images.unsplash.com/photo-1580795478844-5ed694336c90?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 4 }} pt="xl">
            <Text
              c="var(--ke-color-900)"
              fw={600}
              className="ke-heading"
              style={{
                fontSize: "1.5rem !important",
                lineHeight: "2rem !important",
              }}
              visibleFrom="lg"
            >
              Understanding
              <br />
              your Vision.
            </Text>
            <Text size="sm" mt="md" opacity={0.5} visibleFrom="lg">
              We start by deeply understanding your unique vision—ensuring every
              detail reflects your dreams, desires, and personal style. It’s
              about creating a celebration that’s unmistakably you.
            </Text>

            <Text
              ta="center"
              c="var(--ke-color-900)"
              fw={600}
              className="ke-heading"
              style={{
                fontSize: "1.5rem !important",
                lineHeight: "2rem !important",
              }}
              hiddenFrom="lg"
            >
              Understanding
              <br />
              your Vision.
            </Text>
            <Text ta="center" size="sm" mt="md" opacity={0.5} hiddenFrom="lg">
              We start by deeply understanding your unique vision—ensuring every
              detail reflects your dreams, desires, and personal style. It’s
              about creating a celebration that’s unmistakably you.
            </Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 4 }} offset={{ base: 0, lg: 2 }}>
            <Text
              c="var(--ke-color-900)"
              fw={600}
              ta={{ base: "center", lg: "right" }}
              className="ke-heading"
              style={{
                fontSize: "1.5rem !important",
                lineHeight: "2rem !important",
              }}
            >
              Crafting a concept
              <br />
              Around Your Vision
            </Text>
            <Text
              size="sm"
              mt="md"
              opacity={0.5}
              ta={{ base: "center", lg: "right" }}
            >
              Next, we shape your ideas into a thoughtful, inspired
              concept—blending creativity with precision to design an experience
              that feels both deeply personal and truly extraordinary.
            </Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 4 }}>
            <Image
              visibleFrom="lg"
              pos="relative"
              style={{
                zIndex: 2,
              }}
              radius="lg"
              h={250}
              src="https://images.unsplash.com/photo-1580795478844-5ed694336c90?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </Grid.Col>
          <Grid.Col
            span={{ base: 12, lg: 5 }}
            offset={{ base: 0, lg: 1 }}
            pos="relative"
          >
            {/* <div
              style={{
                position: "absolute",
                top: "75%",
                right: "-30%",
                transform: "scaleY(-1)",
                zIndex: 1,
              }}
            >
              <animateSvg.MotionFlowerLeaves />
            </div> */}

            <Image
              pos="relative"
              style={{
                zIndex: 2,
              }}
              radius="lg"
              h={250}
              src="https://images.unsplash.com/photo-1580795478844-5ed694336c90?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 4 }} pt="xl">
            <Text
              c="var(--ke-color-900)"
              fw={600}
              className="ke-heading"
              visibleFrom="lg"
            >
              Smooth Execution,
              <br />
              Made Effortless
            </Text>
            <Text size="sm" mt="md" opacity={0.5} visibleFrom="lg">
              With the concept in place, we handle every detail with care and
              professionalism—ensuring a seamless flow from start to finish, so
              you can simply relax and savor each moment.
            </Text>

            <Text
              c="var(--ke-color-900)"
              fw={600}
              className="ke-heading"
              hiddenFrom="lg"
              ta="center"
            >
              Smooth Execution,
              <br />
              Made Effortless
            </Text>
            <Text ta="center" size="sm" mt="md" opacity={0.5} hiddenFrom="lg">
              With the concept in place, we handle every detail with care and
              professionalism—ensuring a seamless flow from start to finish, so
              you can simply relax and savor each moment.
            </Text>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}
