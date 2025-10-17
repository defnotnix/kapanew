"use client";

import { Container, createTheme, Text } from "@mantine/core";

export const configTheme: any = createTheme({
  components: {
    Container: Container.extend({
      defaultProps: {
        size: 1440,
      },
    }),
    Text: Text.extend({
      defaultProps: {
        fw: 500,
      },
    }),
  },
});
