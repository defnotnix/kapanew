"use client";

import { Container, Image, SimpleGrid, Text } from "@mantine/core";
import { usePageContext } from "@classics/ui";
//icons

export function SectionClients() {
  const { state, dispatch } = usePageContext();

  const { preData } = state;

  const { cms = [] } = preData;

  const sectionData = cms?.filter((item: any) => {
    return item?.holder == "ke-home-company";
  });

  return (
    <>
      <Container py={{ base: 50, lg: 80 }}>
        <Text
          pt="xs"
          size="xs"
          ta="center"
          mb="xl"
          fw={600}
          style={{
            lineHeight: 1.3,
          }}
          hiddenFrom="lg"
        >
          We have proudly organised events for
        </Text>

        <SimpleGrid cols={{ base: 3, lg: 7 }}>
          <Text
            pt="xs"
            size="md"
            fw={600}
            style={{
              lineHeight: 1.3,
            }}
            visibleFrom="lg"
          >
            We have proudly
            <br />
            organised events for
          </Text>

          {sectionData?.map((item: any, key: number) => {
            return <Image src={item.image} key={key} />;
          })}
        </SimpleGrid>
      </Container>
    </>
  );
}
