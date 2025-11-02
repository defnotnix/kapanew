"use client";

import {
  Burger, Button, Container, Grid, Group, Image, Text, ThemeIcon, UnstyledButton,
} from "@mantine/core";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import classes from "./header.module.css";
import { MailboxIcon, PhoneIcon, HandWavingIcon } from "@phosphor-icons/react";

const NAV_HEIGHT = 100; // px — match your CSS scroll-padding-top

export function Header({
  context,
  imgLogo,
  type,
  title,
  description,
  baseUrl,
  revertStyleUrls = [],
  absolute,
}: any) {
  const revertStyleUrl: any = [baseUrl, ...revertStyleUrls];
  const router = useRouter();
  const pathname: any = usePathname();
  const { state, dispatch } = context();

  const [heroOut, setHeroOut] = useState(false);
  const snapRootRef = useRef<HTMLElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);

  // Mount: resolve elements once client-side DOM is ready
  useEffect(() => {
    snapRootRef.current = document.querySelector<HTMLElement>("[data-snap-root]");
    heroRef.current = document.querySelector<HTMLElement>("[data-hero]");
  }, []);

  // IntersectionObserver on the hero, with the snap container as the root
  useEffect(() => {
    const root = snapRootRef.current;
    const hero = heroRef.current;
    if (!root || !hero) return;

    let io: IntersectionObserver | null = null;

    try {
      io = new IntersectionObserver(
        ([entry]) => {
          // "Out" when the hero is mostly gone OR fully hidden
          setHeroOut(entry.intersectionRatio < 0.1);
        },
        {
          root,                  // <== observe within the snap container
          threshold: [0, 0.1, 1],
          // Account for the fixed header height so the trigger happens when content clears it:
          rootMargin: `-${NAV_HEIGHT}px 0px 0px 0px`,
        }
      );
      io.observe(hero);
    } catch (e) {
      // Fallback handled below
    }

    return () => io?.disconnect();
  }, []);

  // Fallback: listen to the container's scrollTop if IO didn't toggle (or in weird browsers)
  useEffect(() => {
    const root = snapRootRef.current;
    if (!root) return;

    const handler = () => {
      // Trigger once we've scrolled past the hero height minus header height
      const heroHeight = heroRef.current?.offsetHeight ?? root.clientHeight;
      const threshold = Math.max(0, heroHeight - NAV_HEIGHT * 0.9);
      setHeroOut(root.scrollTop >= threshold);
    };

    // If IO never fires, this ensures it still works
    root.addEventListener("scroll", handler, { passive: true });
    // Run once to set initial state
    handler();

    return () => root.removeEventListener("scroll", handler);
  }, []);

  // Also open the fixed header when the mobile nav is opened
  const navActive = useMemo(
    () => heroOut || Boolean(state?.navStatus),
    [heroOut, state?.navStatus]
  );

  const NavContent = ({ overrule }: { overrule?: boolean }) => (
    <Container>
      <Grid>
        <Grid.Col span={{ base: 8, lg: 6 }}>
          <Group>
            <UnstyledButton onClick={() => router.push("/")}>
              <Group wrap="nowrap">
                <Image h={28} w={28} src={imgLogo} alt="Celebration Logo" />
                <Text
                  size="xs"
                  fw={900}
                  lh=".9rem"
                  c={
                    revertStyleUrl.includes(pathname) && !overrule
                      ? `var(--${type}-color-200)`
                      : ""
                  }
                >
                  The KaPa
                  <br />
                  {title}
                </Text>
              </Group>
            </UnstyledButton>

            <Text
              visibleFrom="lg"
              size="md"
              c={
                revertStyleUrl.includes(pathname) && !overrule
                  ? `var(--${type}-color-50)`
                  : ""
              }
            >
              *
            </Text>

            <Text
              w={250}
              visibleFrom="lg"
              size="xs"
              opacity={0.8}
              fw={900}
              lh=".9rem"
              c={
                revertStyleUrl.includes(pathname) && !overrule
                  ? `var(--${type}-color-50)`
                  : ""
              }
            >
              {description}
            </Text>
          </Group>
        </Grid.Col>

        <Grid.Col span={{ base: 4, lg: 6 }}>
          <Group gap="4px" justify="flex-end">
            <Group visibleFrom="lg" gap={0}>
              <Button
                variant="subtle"
                color="dark"
                size="sm"
                style={{ fontSize: "var(--mantine-font-size-xs)", fontWeight: 900 }}
                leftSection={<PhoneIcon weight="fill" />}
                component="a"
                href="tel:+97798121231223"
                c={
                  revertStyleUrl.includes(pathname) && !overrule
                    ? `var(--${type}-color-50)`
                    : ""
                }
              >
                +977 98121231223
              </Button>

              <Button
                variant="subtle"
                color="dark"
                size="sm"
                style={{ fontSize: "var(--mantine-font-size-xs)", fontWeight: 900 }}
                leftSection={<MailboxIcon weight="fill" />}
                component="a"
                href="mailto:hello@classicsprojects.com.np"
                c={
                  revertStyleUrl.includes(pathname) && !overrule
                    ? `var(--${type}-color-50)`
                    : ""
                }
              >
                hello@classicsprojects.com.np
              </Button>
            </Group>

            <a href="#contact">
              <Button
                radius="sm"
                size="sm"
                px="md"
                color={`var(--${type}-color-gradient)`}
                visibleFrom="lg"
                style={{ fontSize: "var(--mantine-font-size-xs)" }}
                rightSection={<HandWavingIcon weight="duotone" size={16} />}
              >
                Get in touch
              </Button>
            </a>

            <ThemeIcon size={36} variant="light" color="gray">
              <Burger
                lineSize={2}
                size={14}
                opened={state?.navStatus}
                onClick={() =>
                  dispatch({ type: "SET_NAV_STATUS", payload: !state?.navStatus })
                }
                aria-label="Toggle navigation menu"
                color={
                  revertStyleUrl.includes(pathname) && !overrule
                    ? `var(--${type}-color-50)`
                    : ""
                }
              />
            </ThemeIcon>
          </Group>
        </Grid.Col>
      </Grid>
    </Container>
  );

  return (
    <>
      {/* Top header over the hero */}
      <motion.header
        className={classes.header}
        style={
          absolute
            ? { position: "absolute", top: 0, left: 0, right: 0, width: "100%" }
            : {}
        }
      >
        <NavContent />
      </motion.header>

      {/* Fixed header that slides in after hero */}
      <motion.header
        className={classes.fixedHeader}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: type === "kc" ? "#f8d0d1aa" : "#bae1fdaa",
          backdropFilter: "blur(8px)",
        }}
        initial={{ y: -100 }}
        animate={navActive ? { y: 0 } : { y: -100 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <NavContent overrule />
      </motion.header>
    </>
  );
}
