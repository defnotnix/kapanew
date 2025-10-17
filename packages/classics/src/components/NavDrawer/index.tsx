"use client";

import React, { useEffect } from "react";
//next
import { useRouter, usePathname } from "next/navigation";
//mantine
import {
  ActionIcon,
  Anchor,
  Drawer,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
//motion
import { motion } from "framer-motion";
//styles
import classes from "./drawer.module.css";

import cx from "clsx";
import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react";
//components

const socialLinks = [
  { label: "Instagram", url: "https://instagram.com", icon: InstagramLogoIcon },
  { label: "Facebook", url: "https://facebook.com", icon: FacebookLogoIcon },

  { label: "Whatsapp", url: "https://whatsapp.com", icon: WhatsappLogoIcon },
];

export function NavDrawer({
  context,
  imgLogo,
  cover,
  type,
  title,
  baseUrl,
}: any) {
  // * DEFINITIONS

  const Router = useRouter();
  const Pathname = usePathname();

  // * CONTEXT

  const { state, dispatch } = context();

  console.log(state, dispatch);

  const { navStatus } = state;

  // * STATE

  const navCelebrations = [
    {
      url: baseUrl + "",
      label: "Home",
    },
    {
      url: baseUrl + "/about",
      label: "About",
    },
    {
      url: baseUrl + "/events/category",
      label: title,
    },

    {
      url: baseUrl + "/events/showcase",
      label: "Showcase",
    },
    {
      url: baseUrl + "/testimonials",
      label: "Testimonials",
    },
    {
      url: baseUrl + "/faq",
      label: "FAQs",
    },
  ];

  // * FUNCTIONS

  // * COMPONENTS

  // * ANIMATIONS

  const close = () => {
    dispatch({
      type: "SET_NAV_STATUS",
      payload: false,
    });
  };

  // * FUNCTIONS

  // * COMPONENTS

  // * ANIMATIONS

  return (
    <Drawer
      opened={navStatus}
      position="top"
      size="100%"
      onClose={close}
      withCloseButton={false}
      transitionProps={{
        transition: "fade",
        duration: 150,
      }}
      styles={{
        content: {
          background: `var(--${type}-color-200)`,
        },
        header: {
          background: `var(--${type}-color-200)`,
        },
        inner: {
          background: `var(--${type}-color-200)`,
        },
        body: {
          padding: 0,
        },
      }}
    >
      <SimpleGrid cols={{ base: 1, lg: 2 }}>
        <Image
          visibleFrom="lg"
          style={{
            filter: "brightness(.8)",
          }}
          h="100vh"
          src={
            cover ||
            "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />

        <div
          className="relative"
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100vh",
            maxWidth: "754px",
          }}
        >
          <div>
            <Group h={70}>
              <Text tt="uppercase" opacity={0.5} size="sm" fw={500}>
                Navigation
              </Text>
            </Group>

            <Stack mt={{ base: 100, lg: 100 }}>
              {navCelebrations.map((navlink: any, index: number) => (
                <motion.div
                  key={index}
                  className={cx(classes.navlink, {
                    [classes.active]: Pathname === navlink.url,
                  })}
                  style={{
                    fontFamily:
                      type == "kc"
                        ? "var(--kc-font-heading)"
                        : "var(--ke-font-heading)",
                    color:
                      type == "kc"
                        ? " var(--kc-color-dark)"
                        : " var(--ke-color-dark)",
                  }}
                  onClick={() => {
                    close();
                    Router.push(navlink.url);
                  }}
                >
                  {navlink.label}
                </motion.div>
              ))}
            </Stack>
          </div>

          <div>
            <Text ta="center" size="xs" opacity={0.5} fw={800}>
              Connect With Us On Social Media
            </Text>

            <Group mt="xs" gap={"xs"} pb="xl" justify="center">
              {socialLinks.map((socialLink, index) => (
                <motion.div
                  key={index}
                  onClick={() => {
                    close();
                  }}
                >
                  <ActionIcon color="dark" variant="subtle">
                    <socialLink.icon size={24} weight="duotone" />
                  </ActionIcon>
                </motion.div>
              ))}
            </Group>
          </div>
        </div>
      </SimpleGrid>
    </Drawer>
  );
}
