"use client";

import React, { useState, useEffect, useRef } from "react";
import { HeroProps } from "./interface";
import {
  HeroSection,
  HeroInner,
  HeroImageWrap,
  BgImage,
  Overlay,
  Content,
  ContentBox,
  Description,
  CtaRow,
  AccentLine,
  ContentRow,
} from "./elements";
import { AppButton } from "@/components/Button/Button";
import { Heading } from "@/components/Heading/Heading";

// A helper function for linear interpolation (lerp) to create a smooth "lag" effect
const lerp = (start: number, end: number, t: number) => {
  return start * (1 - t) + end * t;
};

export function Hero({
  title = "IMMIGRATION\nFORMS EXPERT",
  description = "We Specialized In Family-Based Immigration, Adjustment Of Status, Consular Processing, Asylum/Refugee Application/Petition, Non-Immigrant Visa, VAWA, & Other Services.",
  ctaLabel = "LEARN MORE",
  ctaHref = "#",
  backgroundSrc = "/Herologo.webp",
}: Partial<HeroProps>) {
  // Use a ref to store the target scroll position. This prevents re-renders on every scroll event.
  const scrollYRef = useRef(0);

  // State for the actual animated CSS values that will be applied to the image.
  const [animatedStyle, setAnimatedStyle] = useState({ scale: 1, translateY: 0 });

  useEffect(() => {
    const handleScroll = () => {
      // Update the ref with the latest scroll position
      scrollYRef.current = window.scrollY;
    };

    // Add a passive scroll listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    let animationFrameId: number;

    // The animation loop function
    const animate = () => {
      // 1. Calculate the TARGET values based on the scroll position
      // The image will zoom up to a max of 20% (1.2)
      const targetScale = 1 + scrollYRef.current / 2500;
      // The image will also move upwards as you scroll down, creating a parallax effect
      const targetTranslateY = scrollYRef.current / 5;

      // 2. Use LERP to smoothly move the CURRENT animated values towards the TARGET values.
      // The third argument (0.08) is the "smoothing factor". A smaller number creates a more noticeable lag.
      const newScale = lerp(animatedStyle.scale, targetScale < 1.2 ? targetScale : 1.2, 0.08);
      const newTranslateY = lerp(animatedStyle.translateY, targetTranslateY, 0.08);

      // 3. Update the state with the new smoothed values
      setAnimatedStyle({ scale: newScale, translateY: newTranslateY });

      // 4. Request the next frame to continue the loop
      animationFrameId = requestAnimationFrame(animate);
    };

    // Start the animation loop
    animate();

    // Cleanup function to remove the listener and cancel the animation frame
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
    // The dependency array includes the state values to ensure lerp has the latest 'start' value.
  }, [animatedStyle.scale, animatedStyle.translateY]);

  return (
    <HeroSection>
      <HeroInner>
        <HeroImageWrap>
          <BgImage
            src={backgroundSrc}
            style={{
              // Apply the smoothed transform values directly as an inline style
              transform: `scale(${animatedStyle.scale}) translateY(${animatedStyle.translateY}px)`,
            }}
          />
          <Overlay />
          <Content>
            <ContentRow>
              <AccentLine className="animate-slide-in-left" />
              <ContentBox className="animate-fade-in-up">
                <Heading level={1} variant="hero" color="#fff" marginBottom={16}>
                  {title}
                </Heading>
                <Description>{description}</Description>
                <CtaRow>
                  <AppButton
                    label={ctaLabel}
                    href={ctaHref}
                    className="btn-shine"
                  />
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