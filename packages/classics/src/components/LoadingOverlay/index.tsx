"use client";

import { usePageContext } from "@classics/ui";
import { Center, Paper, Text } from "@mantine/core";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

export function LoadingOverlay() {
  const { state } = usePageContext();

  useEffect(() => {
    if (state.pageLoading) {
      console.log("loading");
    } else {
      console.log("not loading");
    }
  }, [state.pageLoading]);

  return (
    <AnimatePresence>
      {/* {state.pageLoading && (
        <motion.div
          initial={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 999,
          }}
        >
          <Paper
            radius={0}
            h="100vh"
            w="100vw"
            bg="linear-gradient(var(--kc-color-500),var(--kc-color-600))"
          >
            <Center h="100vh" w="100vw">
              <Text size="sm">KaPa Celebrations</Text>
            </Center>
          </Paper>
        </motion.div>
      )} */}
    </AnimatePresence>
  );
}
