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

import imgLogo from "@/public/img/logo/classics.svg";

import classes from "./_.module.css";

import { animateSvg } from "@classics/ui";

export function CardQuote({ data }: { data: any }) {
  return (
    <Paper radius="xl" shadow="xl" h={650} bg="var(--kc-color-100)" p="3rem">
      <Group justify="space-between">
        <Group gap="xs">
          <Text fw={600} size="10px" c="var(--kc-color-dark)">
            ABOUT
          </Text>
        </Group>
      </Group>

      <Text
        mt={30}
        className={classes.heading}
        fw={600}
        c="var(--kc-color-600)"
      >
        {data?.text?.quote || ""}
      </Text>

      <div className={classes.flower_svg}>
        <animateSvg.MotionLilyLeaf />
      </div>
    </Paper>
  );
}
