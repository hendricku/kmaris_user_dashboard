"use client";

import React from "react";
import { ServicesProps } from "./interface";
import { Section, Container, HeaderRow, Grid, ThumbWrap, Thumb, CardBody, ButtonRow } from "./elements";
import { AppButton } from "@/components/Button/Button";
import { Heading } from "@/components/Heading/Heading";
import { Card } from "@/components/Card/Card";

export function Services({ title, ctaLabel, ctaHref = "#", items, hideHeader = false }: ServicesProps) {
  return (
    <Section>
      <Container>
        {!hideHeader && (
          <HeaderRow>
            <Heading level={2} variant="section" maxWidth={560}>{title}</Heading>
            <AppButton label={ctaLabel} href={ctaHref} size="medium" variant="compact" long />
          </HeaderRow>
        )}
        <Grid>
          {items.map((item) => (
            <Card key={item.id} href={item.href || "#"} padding={0}>
              <ThumbWrap>
                <Thumb src={item.imageSrc} alt={item.title} />
              </ThumbWrap>
              <CardBody>
                <Heading level={3} variant="card">{item.title}</Heading>
                <ButtonRow>
                  <AppButton label={"READ MORE"} size="small" variant="compact" withArrow />
                </ButtonRow>
              </CardBody>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default Services;


