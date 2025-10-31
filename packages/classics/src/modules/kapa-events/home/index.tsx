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
import { getCMS, getEvents } from "./page.api";
import { Center, Group, Loader, Paper, Text } from "@mantine/core";
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
      const events = await getEvents();

      dispatch({
        type: "SET_PRE_DATA",
        payload: {
          cms: dataCMS,
          events: events,
        },
      });

      return true;
    },
  });

  if (isFetching) {
    return (
      <section>
        <Center
          style={{
            height: "100vh",
          }}
        >
          <Loader type="dots" color="var(--ke-color-300)" />
        </Center>
      </section>
    );
  }

  return (
    <>
      <SectionHomeHero />
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
