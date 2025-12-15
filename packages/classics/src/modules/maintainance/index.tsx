"use client";

import {
  Center,
  Container,
  Group,
  Image,
  Stack,
  Text,
  SimpleGrid,
  Paper,
  Anchor,
  Box,
  Space,
  ThemeIcon,
} from "@mantine/core";
import { motion } from "framer-motion";
import { images } from "../../assets";
import { Sparkle, Calendar, Users } from "@phosphor-icons/react";
import { branches as binfo } from "../kapa-intro";

const branches = [
  {
    id: 1,
    label: "Celebrations",
    description: "Celebrations with your loved ones",
    instagram: "https://www.instagram.com/kapa.celebrations",
    // color: "var(--kc-color-100)",
    accentColor: "#8B7355",
    img: binfo[0].image,
  },
  {
    id: 2,
    label: "Events",
    description: "Memorable events to cherish forever",
    instagram: "https://www.instagram.com/kapa_events_",
    // color: "#deeefb",
    accentColor: "#5B7C99",
    icon: Calendar,
    img: binfo[1].image,
  },
  {
    id: 3,
    label: "Societies",
    description: "Connecting communities worldwide",
    instagram: "https://www.instagram.com/classicsprojects.societies",
    // color: "#E8F4F8",
    accentColor: "#5B8FA3",
    icon: Users,
    img: binfo[2].image,
  },
];

const animVariants: any = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  },
};

export function ModuleMaintainance() {
  return (
    <>
      <Container size="sm" py={60}>
        <motion.div
          variants={animVariants.container}
          initial="hidden"
          animate="visible"
        >
          {/* Header Section */}
          <motion.div variants={animVariants.item}>
            <Center mb={80}>
              <Stack align="center" gap="md">
                <motion.div
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Image w={100} h={100} src={images.logo.main} />
                </motion.div>
                <Stack gap="xs" align="center">
                  <Text size="xl" fw={700} ta="center" className="kc-heading">
                    We're Sprinkling
                    <br /> Some Magic ✨
                  </Text>
                  <Text ta="center" size="md" fw={600} opacity={0.6} maw={500}>
                    Our site is going through a quick glow-up. In the meantime,
                    slide into our Instagram DMs or catch us on socials!
                  </Text>
                </Stack>
              </Stack>
            </Center>
          </motion.div>

          {/* Branches Section */}
          <motion.div variants={animVariants.item}>
            <Box mb={60}>
              <Text
                ta="center"
                size="sm"
                fw={700}
                tt="uppercase"
                c="gray.6"
                mb={40}
              >
                Stay Connected
              </Text>

              <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={"xs"}>
                {branches.map((branch, index) => {
                  const IconComponent = branch.icon;
                  return (
                    <motion.div
                      key={branch.id}
                      whileHover={{ y: -4, transition: { duration: 0.3 } }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <Paper
                        p="xl"
                        radius={0}
                        withBorder
                        style={{
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          textAlign: "center",
                        }}
                        component="a"
                        href={branch.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Center>
                          <Image src={branch.img} w={100} h={100} />
                        </Center>

                        <Text fw={600} size="lg" mb="xs" c="dark.9">
                          KaPa {branch.label}
                        </Text>
                        <Text size="sm" maw={200} c="dark.9">
                          {branch.description}
                        </Text>
                        <Group mt="lg" gap={4} justify="center">
                          <Text size="xs" fw={500} c={branch.accentColor}>
                            Visit →
                          </Text>
                        </Group>
                      </Paper>
                    </motion.div>
                  );
                })}
              </SimpleGrid>
            </Box>
          </motion.div>

          <Space h={20} />
        </motion.div>
      </Container>

      {/* Subtle Background Elements */}
      <Box
        pos="fixed"
        top={0}
        left={0}
        right={0}
        bottom={0}
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(240,240,245,0.3) 100%)",
          pointerEvents: "none",
          zIndex: -1,
        }}
      />
    </>
  );
}
