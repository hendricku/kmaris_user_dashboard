"use client";

import React from "react";
import { HeroProps } from "./interface";
import { HeroSection, HeroInner, HeroImageWrap, BgImage, Overlay, Content, ContentBox, Description, CtaRow, AccentLine, ContentRow } from "./elements";
import { AppButton } from "@/components/Button/Button";
import { Heading } from "@/components/Heading/Heading";

export function Hero({
  title = "IMMIGRATION\nFORMS EXPERT",
  description = "We Specialized In Family-Based Immigration, Adjustment Of Status, Consular Processing, Asylum/Refugee Application/Petition, Non-Immigrant Visa, VAWA, & Other Services.",
  ctaLabel = "LEARN MORE",
  ctaHref = "#",
  backgroundSrc = "/Herologo.webp"
}: Partial<HeroProps>) {
  return (
    <HeroSection>
      <HeroInner>
        <HeroImageWrap>
          <BgImage src={backgroundSrc} className="hover-scale" />
          <Overlay />
          <Content>
            <ContentRow>
              <AccentLine className="animate-slide-in-left" />
              <ContentBox className="animate-fade-in-up">
                <Heading level={1} variant="hero" color="#fff" marginBottom={16}>{title}</Heading>
                <Description>{description}</Description>
                <CtaRow>
                  <AppButton label={ctaLabel} href={ctaHref} className="btn-shine" />
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


