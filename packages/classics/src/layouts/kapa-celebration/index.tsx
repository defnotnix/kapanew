import { mantineHtmlProps } from "@mantine/core";
import { ReactNode } from "react";

//layout

import { LayoutCelebrationsClient } from "./layout";

// Global & vendor styles MUST be imported in a server layout
import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";

// Personal Style
import "../../styles/celebrations.css";
import "../../styles/clippath.css";
import "../../styles/events.css";
import "../../styles/global.css";

// client wrapper below

export const metadata = {
  title: "Celebrations",
  description:
    "We turn every corporate, public, and entertainment moment into a brand story.",
};

// Optional: consider next/font instead of <link> tags for Google fonts

export function LayoutCelebrations({ children }: { children: ReactNode }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&family=Mr+Dafoe&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/made-mirage"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Comforter+Brush&family=Funnel+Display:wght@300..800&family=Pacifico&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          transition: ".3s ease-in-out",
          background: "var(--kc-color-200)",
        }}
      >
        <LayoutCelebrationsClient>{children}</LayoutCelebrationsClient>
      </body>
    </html>
  );
}
