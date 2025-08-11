"use client";

import React from "react";
import { AppButton } from "@/components/Button/Button";
import { OfferingProps } from "./interface";
import { Section, Container, Grid, Image, Content, Description } from "./elements";
import { Heading } from "@/components/Heading/Heading";

export function Offering({
  title = "Company Offering All Visa & Immigration Services",
  description =
    "Lorem ipsum dolor sit amet consectetur adipiscing elit, pretium sapien mattis nulla litora proin purus varius, pulvinar diam netus volutpat morbi magnis. Porta semper potenti faucibus blandit torquent ad vehicula sociis integer, feugiat aptent netus gravida enim neque posuere penatibus, sed imperdiet maecenas venenatis scelerisque consequat tempus mauris.",
  ctaLabel = "LEARN MORE",
  ctaHref = "#",
  imageSrc = "/offering.png",
}: OfferingProps) {
  return (
    <Section>
      <Container>
        <Grid>
          <Image src={imageSrc} alt="Offering" />
          <Content>
            <Heading level={2} variant="section" marginBottom={16}>{title}</Heading>
            <Description>{description}</Description>
            <AppButton label={ctaLabel} href={ctaHref} variant="compact" />
          </Content>
        </Grid>
      </Container>
    </Section>
  );
}

export default Offering;


