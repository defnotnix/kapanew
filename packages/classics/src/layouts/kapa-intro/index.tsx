import { PropsWithChildren } from "react";
//mantine
import { mantineHtmlProps } from "@mantine/core";
import { LayoutIntroMain } from "./layout";
//react-query
//context
//theme

//theme

// meta

export function LayoutIntro({ children }: PropsWithChildren) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&family=Mr+Dafoe&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/made-mirage"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Manrope:wght@200..800&family=Yesteryear&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          transition: ".3s ease-in-out",
          background: "var(--ke-color-100)",
        }}
      >
        <LayoutIntroMain>{children}</LayoutIntroMain>
      </body>
    </html>
  );
}
