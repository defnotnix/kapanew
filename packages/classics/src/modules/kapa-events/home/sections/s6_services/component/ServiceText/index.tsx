"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Box } from "@mantine/core";

export const ServiceText = ({
  id,
  text = "Service Text",
}: {
  id: string;
  text: string;
}) => {
  return (
    <motion.div
      id={id}
      style={{
        fontWeight: 900,
        //fontFamily: "var(--ke-font-heading)",
        fontSize: "4rem",
        display: "inline-block",
        textTransform: "uppercase",
        overflow: "hidden",
        height: "4.5rem",
        color: "var(--ke-color-950)",
      }}
    >
      {text}
    </motion.div>
  );
};
