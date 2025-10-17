"use client";

import { Container, Group, Paper, SimpleGrid, Text } from "@mantine/core";
//classics
import {
  usePageContext,
  variantGeneral,
  variantGeneralDelay,
} from "@classics/ui";
//motion
import { motion } from "framer-motion";

export function SectionNumbers() {
  const { state, dispatch } = usePageContext();

  const { preData } = state;

  const { cms = [] } = preData;

  const sectionData = cms?.filter((item: any) => {
    return item?.holder == "ke-home-numbers";
  });

  return (
    <>
      <Container pb={100}>
        <Paper p="4rem" radius="md" shadow="xl">
          <Group>
            <motion.div>
              <Text
                fw={900}
                size="xl"
                style={{
                  fontFamily: "var(--ke-font-heading)",
                }}
              >
                Numbers
              </Text>
            </motion.div>
            <motion.div>
              <Text fw={900} size="xl" opacity={0.3}>
                We let our stats speak for us.
              </Text>
            </motion.div>
          </Group>

          <SimpleGrid cols={{ base: 1, lg: 3 }} py={{ base: 32, lg: 50 }}>
            {sectionData?.map((item: any, key: number) => {
              return (
                <motion.div key={key}>
                  <Text size="4rem" fw={900}>
                    {item?.text?.stat}
                  </Text>
                  <Text size="xl">{item?.text?.title}</Text>
                </motion.div>
              );
            })}
          </SimpleGrid>

          <Text maw={600} size="sm" fw={600}>
            We turn every event into your brand’s stage, crafted with
            creativity, unified with intention, and delivered with ease to
            engage audiences and make moments unforgettable.
          </Text>
        </Paper>
      </Container>
    </>
  );
}
