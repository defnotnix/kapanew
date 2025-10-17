"use client";

import { PropsWithChildren, useState } from "react";
//mantine
import { MantineProvider } from "@mantine/core";
//react-query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//context
import { ClientWrapper } from "./clientwrapper";
import { configTheme } from "./theme";
//theme

export function LayoutCelebrationsClient({ children }: PropsWithChildren) {
  const [client] = useState(new QueryClient({}));

  return (
    <MantineProvider theme={configTheme}>
      <QueryClientProvider client={client}>
        <ClientWrapper>{children}</ClientWrapper>
      </QueryClientProvider>
    </MantineProvider>
  );
}
