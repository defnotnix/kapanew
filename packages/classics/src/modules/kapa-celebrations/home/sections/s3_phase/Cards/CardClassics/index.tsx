"use client";

import {
  Center,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  Paper,
  Stack,
  Text,
} from "@mantine/core";

import { images } from "@classics/ui";

export function CardClassics() {
  return (
    <Paper
      radius="xl"
      shadow="xl"
      h={650}
      bg="linear-gradient(150deg,#1F0D0D,#000000)"
      p="3rem"
    >
      <Group justify="space-between">
        <Group gap="xs" opacity={0.5}>
          <Text size="10px" c="gray.0">
            THE
            <br />
            CLASSICS
            <br /> CELEBRATIONS
          </Text>

          <Text size="10px" c="gray.0">
            THE
            <br />
            CLASSICS
            <br />
            PROJECTS
          </Text>
        </Group>

        <Text ta="right" size="10px" c="gray.0">
          THE
          <br />
          CLASSICS
          <br /> PROJECTS
        </Text>
      </Group>

      <Center mt={90} mb={30} pos="relative">
        <svg
          style={{
            position: "absolute",
            top: -60,
            left: 40,
          }}
          width="220"
          height="277"
          viewBox="0 0 220 277"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M204.05 7.00404C211.399 12.2518 215.928 20.8675 217.729 32.1166C219.531 43.3707 218.585 57.1814 215.049 72.6559C207.978 103.6 190.596 140.997 164.546 177.477C138.496 213.957 108.764 242.535 81.79 259.266C68.3008 267.633 55.5446 273.01 44.315 274.958C33.0903 276.906 23.4711 275.418 16.1223 270.17C8.77351 264.923 4.24437 256.307 2.44343 245.058C0.641694 233.804 1.58743 219.993 5.12331 204.519C12.194 173.574 29.5762 136.177 55.6264 99.6973C81.6767 63.2177 111.408 34.6391 138.382 17.908C151.872 9.54122 164.628 4.16438 175.857 2.21602C187.082 0.268521 196.701 1.75625 204.05 7.00404Z"
            stroke="#FFC978"
            strokeWidth="2"
          />
        </svg>

        <Image
          radius={999}
          w={190}
          h={280}
          src={images.logo.celebration_svg}
          fit="contain"
        />

        <Text
          size="1rem"
          pos="absolute"
          c="#F3BE6F"
          style={{
            letterSpacing: "1rem",
            bottom: 0,
          }}
        >
          THE CLASSICS
        </Text>
      </Center>

      <Group mt="md" justify="flex-end">
        <Text size="md" lh="100%" c="gray.0">
          WE
          <br />
          CREATE, YOU
          <br /> CELEBRATE
        </Text>
      </Group>

      <Group gap="xs" mt="xl">
        {Array.from({ length: 6 }).map((_, i) => (
          <Text key={i} size="10px" c="gray.0" opacity={0.5}>
            CLASSICS
          </Text>
        ))}
      </Group>

      <Group mt="md">
        <Text size="md" c="gray.0">
          X
        </Text>
        <Divider w={50} opacity={0.5} />
      </Group>
    </Paper>
  );
}
