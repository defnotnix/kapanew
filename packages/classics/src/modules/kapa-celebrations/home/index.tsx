"use client";

import { usePageContext } from "@classics/ui";
import { useQuery } from "@tanstack/react-query";
import { getCMS, getEvents, getServiceCategory } from "./page.api";

import { SectionHomeHero } from "./sections/s1_hero";
import { SectionHomeIntro } from "./sections/s2_intro";
import { SectionHomePhase } from "./sections/s3.2_phase";
import { SectionHomeServices } from "./sections/s4_services";
import { SectionHomeFeatured } from "./sections/s5_featured";
import { SectionHomeStats } from "./sections/s6_stats";
import { SectionHomeInstagram } from "./sections/s7_instagram";

import styles from "./PageHome.module.css";
import { SectionContact } from "../../../components/Contact";
import { Footer } from "../../../components/Footer";
import { Center, Loader } from "@mantine/core";

export function PageHome() {
  const { dispatch } = usePageContext();

  const { isFetching } = useQuery({
    queryKey: ["celebrations", "home"],
    queryFn: async () => {
      const [cms, serviceCategory, events] = await Promise.all([
        getCMS(),
        getServiceCategory(),
        getEvents(),
      ]);

      dispatch({
        type: "SET_PRE_DATA",
        payload: { cms, serviceCategory, events },
      });
      return true;
    },
    initialData: false,
  });

  if (isFetching) {
    return (
      <section>
        <Center
          style={{
            height: "100vh",
          }}
        >
          <Loader type="dots" color="var(--kc-color-600)" />
        </Center>
      </section>
    );
  }

  return (
    <>
      <main className={styles.snapContainer}>
        <section className={styles.snapSection}>
          <SectionHomeHero />
        </section>
        <section className={styles.snapSection}>
          <SectionHomeIntro />
        </section>
        <section className={styles.snapSection}>
          <SectionHomePhase />
        </section>
        <section className={styles.snapSection}>
          <SectionHomeServices />
        </section>
        <section className={styles.snapSection}>
          <SectionHomeFeatured />
        </section>
        <section className={styles.snapSection}>
          <SectionHomeStats />
        </section>
        <section className={styles.snapSection}>
          <SectionHomeInstagram />
        </section>
        <section className={styles.snapSection}>
          <SectionContact />
          <Footer />
        </section>
      </main>
    </>
  );
}
