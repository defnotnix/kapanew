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

import { MotionLilyLeaf } from "@/public/svg/leaf";

export function CardDetails({ data }: { data: any }) {
  return (
    <Paper
      radius="xl"
      shadow="xl"
      h={650}
      p="3rem"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Text ta="center" fw={600} size="sm" c="var(--kc-color-dark)">
        THE {data?.phase == 0 ? "PRE" : data?.phase == 1 ? "DURING" : "POST"}{" "}
        EVENT
      </Text>

      <div>
        <Image
          h={350}
          style={{
            objectFit: "contain",
          }}
          src={data?.image}
        />

        <Text
          mt="sm"
          ta="center"
          size="sm"
          style={{
            fontFamily: "var(--font-cursive)",
          }}
        >
          <i>{data?.text?.subquote}</i>
        </Text>
      </div>

      <Text ta="center" fw={600} size="sm" c="var(--kc-color-700)">
        {data?.text?.actions}
      </Text>
    </Paper>
  );
}
