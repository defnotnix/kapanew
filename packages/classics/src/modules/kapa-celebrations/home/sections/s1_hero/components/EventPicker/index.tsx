"use client";

import { Image, Paper } from "@mantine/core";
import { useHover } from "@mantine/hooks";

import classes from "./_.module.css";
import cx from "clsx";

export function EventPicker({ data, onSlideChange }: any) {
  const { hovered, ref } = useHover();

  return (
    <div ref={ref} className={classes.root}>
      {data?.map((item: any, index: number) => {
        return (
          <Paper
            onClick={() => {
              onSlideChange(index);
            }}
            key={index}
            withBorder
            shadow="xl"
            p={6}
            pb={16}
            className={classes.eventcard}
          >
            <Image src={item.image} h={200} w={150} />
          </Paper>
        );
      })}
    </div>
  );
}
