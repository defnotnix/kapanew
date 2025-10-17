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
  // * STORE

  const { state, dispatch } = usePageContext(
    (state: any) => state.disablePageLoading
  );

  // * CONTENT GET

  const { data, isFetching } = useQuery({
    queryKey: ["celebrations", "about"],
    queryFn: async () => {
      const dataCMS = await getCMS();

      setTimeout(() => {
        dispatch({
          type: "SET_PRE_DATA",
          payload: {
            cms: dataCMS,
          },
        });
      }, 1000);

      return true;
    },
    initialData: false,
  });

  return (
    <section
      style={{
        position: "relative",
      }}
    >
      <PageHeaderOverlay />

      <SectionAboutHero />

      <SectionAboutGlimpse />

      <Space h={100} />

      <SectionAboutRecipe />

      <SectionCelebrationsAboutShowcase />
    </section>
  );
}
