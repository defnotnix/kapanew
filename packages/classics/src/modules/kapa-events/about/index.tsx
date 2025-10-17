"use client";

import { usePageContext, PageHeaderOverlay } from "@classics/ui";

import { useQuery } from "@tanstack/react-query";

import { getCMS, getCMS as getData } from "./page.api";

import { SectionAboutHero } from "./sections/s1_hero";

import { SectionAboutGlimpse } from "./sections/s3_glimpse";
import { SectionAboutRecipe } from "./sections/s4_recipe";
import { Space } from "@mantine/core";
import { SectionCelebrationsAboutShowcase } from "./sections/s6_reel";

export function PageAbout() {
  // * CONTEXT

  const { dispatch } = usePageContext();

  // * PRELOADING

  const { data, isFetching } = useQuery({
    queryKey: ["events", "about"],
    queryFn: async () => {
      const dataCMS = await getCMS();

      dispatch({
        type: "SET_PRE_DATA",
        payload: {
          cms: dataCMS,
        },
      });

      return true;
    },
  });

  if (isFetching) return <div>Loading...</div>;

  return (
    <section
      style={{
        position: "relative",
      }}
    >
      <PageHeaderOverlay type="ke" />

      <SectionAboutHero />

      <SectionAboutGlimpse />

      <Space h={100} />

      <SectionAboutRecipe />

      <SectionCelebrationsAboutShowcase />
    </section>
  );
}
