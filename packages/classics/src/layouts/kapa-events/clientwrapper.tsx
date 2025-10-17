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

export function ClientWrapper({ children }: PropsWithChildren) {
  return (
    <ContextPageProvider>
      <LoadingOverlay />

      <Header
        context={usePageContext}
        imgLogo={images.logo.events_small}
        type="ke"
        title="Events"
        description={`We turn every corporate, public, and entertainment moment into a brand story.`}
        baseUrl="/kapa-events"
        revertStyleUrls={["/kapa-events/events/showcase"]}
      />

      <NavDrawer
        context={usePageContext}
        imgLogo={images.logo.events_small}
        cover="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        type="ke"
        title="Events"
        baseUrl="/kapa-events"
      />

      {children}
    </ContextPageProvider>
  );
}
