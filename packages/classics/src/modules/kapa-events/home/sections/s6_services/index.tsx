"use client";

import React, { useEffect, useRef, useState } from "react"; // ⬅️ add useRef
//mantine
import {
  Box,
  Button,
  Container,
  Grid,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
} from "@mantine/core";
//icons
import {} from "@phosphor-icons/react";
//motion
import { animate, motion } from "framer-motion";
//styles
import { usePageContext } from "@classics/ui";
//components

import { useInterval, useIntersection } from "@mantine/hooks"; // ⬅️ add useIntersection
import { ServiceText } from "./component/ServiceText";

const eventServices = [
  "Seminars",
  "Events",
  "Award",
  "Ceremonies",
  "Workshops",
  "Product Demonstrations",
  "Concerts",
  "Brand Launch",
  "Shows",
  "Fundraisers",
  "Webminars",
  "Conferences",
  "Networking Events",
];

export function SectionEServices() {
  // * CONTEXT

  const { state } = usePageContext();

  // * STATES

  const [sectionData, setSectionData] = useState<any | null>(null);

  const [activeServices, setActiveServices] = useState(eventServices);

  const [extra, setExtra] = useState([
    "Teambuilding",
    "Hackathons",
    "Trainings",
    "Panels",
    "Keynotes",
    "Auctions",
    "Booksignings",
    "Screenings",
    "Tradeshows",
    "Exhibitions",
    "Retreats",
    "Pressconferences",
    "Gatherings",
    "Townhalls",
    "Virtualevents",
    "Fitness",
    "Foodtastings",
    "Artexhibitions",
    "Festivals",
    "Pitches",
    "Workshops",
    "Mixers",
    "Popups",
    "Galas",
    "AGMs",
  ]);

  // * REFS / VISIBILITY
  const sectionRef = useRef<HTMLElement | null>(null);
  const { ref: observerRef, entry } = useIntersection({
    root: null,
    threshold: 0.15, // start/stop when ~15% of the section is visible
  });

  // Keep both refs pointing at the same node
  useEffect(() => {
    if (sectionRef.current) {
      observerRef(sectionRef.current as HTMLElement);
    }
  }, [observerRef]);

  // * FUNCTION

  const initiateAnimateFunction = async () => {
    try {
      const dataId = Math.floor(Math.random() * activeServices.length) + 1; // Assuming this is a number, not a string.

      // Animate color to transparent
      await animate(
        `#srv_${dataId}`,
        { color: "var(--mantine-color-yellow-6)" },
        { duration: 1 }
      );

      // Animate width to 0
      await animate(`#srv_${dataId}`, { width: 0 });

      // Generate a random new data ID
      const newDataId = Math.floor(Math.random() * extra.length); // Index, no +1 needed

      // Get the previous data and the new replacement data
      const prevData = activeServices[dataId - 1];
      const newData = extra[newDataId];

      // Update activeServices and extra without directly mutating state
      setActiveServices((prevActive) => {
        const updatedActive = [...prevActive];
        updatedActive[dataId - 1] = newData;
        return updatedActive;
      });

      setExtra((prevExtra) => {
        const updatedExtra = [...prevExtra];
        updatedExtra[newDataId] = prevData;
        return updatedExtra;
      });

      // Animate width back to "auto"
      await animate(`#srv_${dataId}`, { width: "auto" });

      // Animate color back to original
      await animate(`#srv_${dataId}`, {
        color: "var(--ke-color-600)",
      });
    } catch (err) {}
  };

  const interval = useInterval(() => initiateAnimateFunction(), 2000);

  // * VISIBILITY-CONTROLLED LOOP
  useEffect(() => {
    const shouldRun =
      !!entry?.isIntersecting && !document.hidden;

    if (shouldRun) {
      interval.start();
    } else {
      interval.stop();
    }

    // Pause/resume when tab visibility changes
    const onVisibility = () => {
      if (entry?.isIntersecting && !document.hidden) {
        interval.start();
      } else {
        interval.stop();
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      interval.stop();
      document.removeEventListener("visibilitychange", onVisibility);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entry?.isIntersecting]); // re-evaluate when section enters/leaves viewport

  return (
    <>
      <section
        ref={sectionRef} // ⬅️ attach ref
        style={{
          minHeight: "100vh",
        }}
      >
        <Container py={{ base: 50, lg: 160 }}>
          <Text size="sm" fw={600} ta="center" c="var(--kc-color-950)">
            We manage a diverse array of events.
          </Text>

          <Stack gap="xs" py={50} visibleFrom="lg">
            <Group justify="center">
              <ServiceText id="srv_1" text={activeServices[0]} />
              <ServiceText id="srv_2" text={activeServices[1]} />
            </Group>
            <Group justify="center">
              <ServiceText id="srv_3" text={activeServices[2]} />
              <ServiceText id="srv_4" text={activeServices[3]} />
              <ServiceText id="srv_5" text={activeServices[4]} />
            </Group>
            <Group justify="center">
              <ServiceText id="srv_6" text={activeServices[5]} />
            </Group>
            <Group justify="center">
              <ServiceText id="srv_7" text={activeServices[6]} />{" "}
              <ServiceText id="srv_8" text={activeServices[7]} />
            </Group>
            <Group justify="center">
              <ServiceText id="srv_9" text={activeServices[8]} />{" "}
              <ServiceText id="srv_10" text={activeServices[9]} />{" "}
              <ServiceText id="srv_11" text={activeServices[10]} />
            </Group>
            <Group justify="center">
              <ServiceText id="srv_12" text={activeServices[11]} />{" "}
              <ServiceText id="srv_13" text={activeServices[12]} />
            </Group>
            <Group justify="center">
              <ServiceText id="srv_14" text={activeServices[13]} />
            </Group>
          </Stack>

          <Group justify="center" hiddenFrom="lg" my="xl">
            {activeServices.map((item: any, index: number) => {
              return (
                <Text size="1.5rem" tt="uppercase" fw={700} key={index}>
                  {item}
                </Text>
              );
            })}
          </Group>

          <Text
            size="sm"
            fw={600}
            ta="center"
            opacity={0.5}
            c="var(--kc-color-950)"
          >
            Our Offerings
          </Text>
        </Container>
      </section>
    </>
  );
}
