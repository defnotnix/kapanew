"use client";

import {
  Box,
  Container,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { usePageContext } from "@classics/ui";
import { useHover } from "@mantine/hooks";

export function SectionShowcase() {
  const { state, dispatch } = usePageContext();

  const { preData } = state;

  const { cms = [] } = preData;

  const sectionData = cms?.filter((item: any) => {
    return item?.holder == "ke-home-showcase";
  });

  function EventCard({ data }: any) {
    const { hovered, ref } = useHover();

    const transitionStyle = {
      style: {
        transition: ".3s ease-in-out",
        fontFamily: "var(--ke-font-heading)",
      },
    };

    return (
      <Box
        ref={ref}
        px={4}
        style={{
          cursor: "pointer",
        }}
      >
        <Stack gap="xs">
          <Group justify="space-between">
            <Text
              {...transitionStyle}
              opacity={hovered ? 1 : 0}
              tt="uppercase"
              size="xs"
              fw={900}
            >
              {data?.text?.year}
            </Text>

            <Text
              {...transitionStyle}
              opacity={hovered ? 1 : 0}
              tt="uppercase"
              size="xs"
              fw={900}
            >
              {data?.text?.category}
            </Text>
          </Group>

          <Image src={data?.image} />

          <Text
            {...transitionStyle}
            opacity={hovered ? 1 : 0}
            tt="uppercase"
            size="xs"
            fw={900}
          >
            {data?.text?.title}
          </Text>

          <Text
            {...transitionStyle}
            opacity={hovered ? 0.5 : 0}
            size="xs"
            fw={600}
          >
            {data?.text?.description}
          </Text>
        </Stack>
      </Box>
    );
  }

  return (
    <>
      <Container py={100}>
        <SimpleGrid cols={{ base: 2, lg: 5 }} spacing={0}>
          {sectionData?.map((item: any, key: number) => {
            return <EventCard key={key} data={item} />;
          })}
        </SimpleGrid>
      </Container>
    </>
  );
}
