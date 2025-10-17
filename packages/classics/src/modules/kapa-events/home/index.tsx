"use client";

import {} from "react";
//query
import { useQuery } from "@tanstack/react-query";
//classics
import { usePageContext } from "@classics/ui";
//components
import { SectionClients } from "./sections/s2_clients";
import { SectionHomeHero } from "./sections/s1_hero";
//api
import { getCMS } from "./page.api";
import { Group, Paper, Text } from "@mantine/core";
import { SectionIntro } from "./sections/s3_intro";
import { SectionShowcase } from "./sections/s4_showcase";
import { SectionNumbers } from "./sections/s5_numbers";
import { SectionHomeFeatured } from "./sections/s6_featured";

import { SectionEServices } from "./sections/s6_services";
import { SectionTestimonials } from "./sections/s7_testimonials";

//React Query

// Sections

export function PageHome() {
  // * CONTEXT

  const { dispatch } = usePageContext();

  // * PRELOADING

  const { data, isFetching } = useQuery({
    queryKey: ["events", "home"],
    queryFn: async () => {
      const dataCMS = await getCMS();

      dispatch({
        type: "SET_PRE_DATA",
        payload: {
          cms: dataCMS,
          events: [],
        },
      });

      return true;
    },
  });

  if (isFetching) return <div>Loading...</div>;

  return (
    <>
      <SectionHomeHero />
      {/* <Paper
        radius={0}
        bg="var(--ke-color-950)"
        style={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Group p="md" w="1000vw">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i}>
              <Text size="md" fw={900} c="gray.0" opacity={0.1}>
                KaPa Events
              </Text>
            </div>
          ))}
        </Group>
      </Paper> */}
      <SectionClients />
      <SectionIntro />
      <SectionShowcase />
      <SectionNumbers />
      <SectionHomeFeatured />
      <SectionEServices />
      <SectionTestimonials />
    </>
  );
}
