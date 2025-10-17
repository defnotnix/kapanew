"use client";

import { PropsWithChildren, useState } from "react";
//mantine
import { mantineHtmlProps, MantineProvider } from "@mantine/core";
//react-query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//context
import {
  ContextPageProvider,
  usePageContext,
  Header,
  NavDrawer,
} from "@classics/ui";
//theme

import { images } from "../../assets";
//styles
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
//pre-styles
import "../../styles/global.css";
import "../../styles/clippath.css";
import "../../styles/events.css";

export function LayoutIntroMain({ children }: PropsWithChildren) {
  const [client] = useState(new QueryClient({}));

  return (
    <>
      <MantineProvider>
        <QueryClientProvider client={client}>
          <ContextPageProvider>{children}</ContextPageProvider>
        </QueryClientProvider>
      </MantineProvider>
    </>
  );
}
