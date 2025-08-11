"use client";

import React from "react";
import { HeroProps } from "./interface";
import { HeroSection, HeroInner, HeroImageWrap, BgImage, Overlay, Content, ContentBox, Description, CtaRow, AccentLine, ContentRow } from "./elements";
import { AppButton } from "@/components/Button/Button";
import { Heading } from "@/components/Heading/Heading";

export function Hero({
  title,
  description,
  ctaLabel,
  ctaHref = "#",
  backgroundSrc = "/herologo.webp",
}: HeroProps) {
  return (
    <HeroSection>
      <HeroInner>
        <HeroImageWrap>
          <BgImage src={backgroundSrc} />
          <Overlay />
          <Content>
            <ContentRow>
              <AccentLine />
              <ContentBox>
                <Heading level={1} variant="hero" color="#fff" marginBottom={16}>{title}</Heading>
                <Description>{description}</Description>
                <CtaRow>
                  <AppButton label={ctaLabel} href={ctaHref} />
                </CtaRow>
              </ContentBox>
            </ContentRow>
          </Content>
        </HeroImageWrap>
      </HeroInner>
    </HeroSection>
  );
}

export default Hero;


