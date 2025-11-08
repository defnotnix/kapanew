"use client";

import {
  ActionIcon,
  Box,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Text,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";

import classes from "./_.module.css";

import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { useState } from "react";

export function EventPicker({ data = [], onSlideChange, active }: any) {
  const [hovered, setHovered] = useState<number | null>();

  return (
    <>
      <Box my={{ base: 0, lg: "4rem" }}>
        <Group justify="flex-end" gap="xs">
          <ActionIcon
            bg="none"
            variant="subtle"
            color="gray"
            onClick={() => {
              onSlideChange(active !== 0 ? active - 1 : 2);
            }}
          >
            <CaretLeftIcon weight="fill" />
          </ActionIcon>
          <ActionIcon
            variant="subtle"
            color="gray"
            onClick={() => {
              onSlideChange(active !== 2 ? active + 1 : 0);
            }}
          >
            <CaretRightIcon weight="fill" />
          </ActionIcon>
        </Group>

        <SimpleGrid>
          <div className={classes.root}>
            {data?.slice(0, 3).map((item: any, index: number) => {
              console.log(item);

              return (
                <Paper
                  onClick={() => {
                    onSlideChange(index);
                  }}
                  onMouseOver={() => {
                    setHovered(index);
                  }}
                  key={index}
                  withBorder
                  shadow="xl"
                  p={6}
                  pb={16}
                  className={classes.eventcard}
                >
                  <Image
                    src={item.image}
                    h={{ base: 150, lg: 200 }}
                    w={{ base: 140, lg: 150 }}
                  />
                </Paper>
              );
            })}
          </div>
        </SimpleGrid>
      </Box>

      <Group justify="flex-end" w="100%">
        <Text c="gray.0" size="xs" fw={700} opacity={0.5}>
          {hovered == active ? "CLICK TO PLAY SHOWREEL" : "HOVER & SELECT"}
        </Text>

        <Text c="gray.0" size="xs" fw={700} opacity={0.5}>
          EVENT SHOWREEL
        </Text>
      </Group>
    </>
  );
}
