"use client";

import { PropsWithChildren } from "react";
//classics
//context
import {
  ContextPageProvider,
  Header,
  LoadingOverlay,
  NavDrawer,
  usePageContext,
} from "@classics/ui";
//assets
import { images } from "../../assets";
//context

import imgJankuFeatured from "../../assets/events/janku/feature.jpg";
import { Footer } from "../../components/Footer";
import { SectionContact } from "../../components/Contact";

export function ClientWrapper({ children }: PropsWithChildren) {
  return (
    <ContextPageProvider>
      {/* <LoadingOverlay /> */}

      <Header
        context={usePageContext}
        imgLogo={images.logo.celebrations_small}
        type="kc"
        title="Celebrations"
        description={`We turn every corporate, public, and entertainment moment into a brand story.`}
        baseUrl="/kapa-celebrations"
        revertStyleUrls={["/kapa-celebrations", "/kapa-celebrations/services"]}
      />

      <NavDrawer
        context={usePageContext}
        imgLogo={images.logo.celebrations_small}
        cover={imgJankuFeatured.src}
        type="kc"
        title="Celebrations"
        baseUrl="/kapa-celebrations"
      />

      {children}

      <SectionContact />
      <Footer />
    </ContextPageProvider>
  );
}
