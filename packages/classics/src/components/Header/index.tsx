"use client";

import {
  ActionIcon,
  Burger,
  Button,
  Container,
  Grid,
  Group,
  Image,
  Text,
  ThemeIcon,
  UnstyledButton,
} from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { motion } from "motion/react";
import { usePathname, useRouter } from "next/navigation";

// Styles
import classes from "./header.module.css";

// Assets & Icons

import { MailboxIcon, PhoneIcon, HandWavingIcon } from "@phosphor-icons/react";

export function Header({
  context,
  imgLogo,
  type,
  title,
  description,
  baseUrl,
  revertStyleUrls = [],
}: any) {
  const revertStyleUrl: any = [baseUrl, ...revertStyleUrls];

  const router = useRouter();
  const pathname: any = usePathname();

  const { state, dispatch } = context();

  const [scroll] = useWindowScroll();

  const navActive = scroll?.y > 300 || state?.navStatus;

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
                style={{
                  fontSize: "var(--mantine-font-size-xs)",
                  fontWeight: 900,
                }}
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
                style={{
                  fontSize: "var(--mantine-font-size-xs)",
                  fontWeight: 900,
                }}
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

            <Button
              radius="sm"
              size="sm"
              px="md"
              color={`var(--${type}-color-gradient)`}
              visibleFrom="lg"
              onClick={() => router.push("/celebrations/contact")}
              style={{ fontSize: "var(--mantine-font-size-xs)" }}
              rightSection={<HandWavingIcon weight="duotone" size={16} />}
            >
              Get in touch
            </Button>

            <ThemeIcon size={36} variant="light" color={`gray`}>
              <Burger
                lineSize={2}
                size={14}
                opened={state?.navStatus}
                onClick={() => {
                  dispatch({
                    type: "SET_NAV_STATUS",
                    payload: !state?.navStatus,
                  });
                }}
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
      <motion.header className={classes.header}>
        <NavContent />
      </motion.header>

      <motion.header
        className={classes.fixedHeader}
        style={{
          background: type == "kc" ? "#f8d0d1aa" : "#bae1fdaa",
        }}
        initial={{ top: -100 }}
        animate={navActive ? { top: 0 } : {}}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <NavContent overrule />
      </motion.header>
    </>
  );
}
