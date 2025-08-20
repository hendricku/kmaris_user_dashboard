"use client";

import React from "react";
import { ServicesProps } from "./interface";
import { Section, Container, HeaderRow, Grid, ThumbWrap, Thumb, CardBody, ButtonRow, ServiceButton } from "./elements";
import { AppButton } from "@/components/Button/Button";
import { Heading } from "@/components/Heading/Heading";
import { Card } from "@/components/Card/Card";
const defaultItems = [
  { id: 1, title: "FAMILY PETITION & ADJUSTMENT OF STATUS", imageSrc: "/petition.webp" },
  { id: 2, title: "VAWA – Violence Against Women’s Act", imageSrc: "/greencard.webp" },
  { id: 3, title: "ASYLUM/REFUGEE APPLICATION", imageSrc: "/asylum.webp" },
  { id: 4, title: "NATURALIZATION & CERTIFICATE OF CITIZENSHIP", imageSrc: "/conditions.webp" },
   { id: 5, title: "U-VISA", imageSrc: "/visa.webp" },
  { id: 6, title: "CHANGE OF STATUS FROM B1/B2 VISITOR TO F1 STUDENT", imageSrc: "/greencard.webp" },
  { id: 7, title: "RENEWAL OF WORK AUTHORIZATION", imageSrc: "/asylum.webp" },
  { id: 8, title: "RENEWAL OF GREEN CARD", imageSrc: "/conditions.webp" },
];

export function Services({ 
  title = "We offer payment plans for our Service Fees",
  ctaLabel = "VIEW ALL CATEGORIES",
  ctaHref = "/services_categories",
  items = defaultItems,
  hideHeader = false 
}: Partial<ServicesProps>) {
  return (
    <Section>
      <Container>
        {!hideHeader && (
          <HeaderRow className="animate-fade-in-up">
            <Heading level={2} variant="section" maxWidth={560}>{title}</Heading>
            <AppButton label={ctaLabel} href={ctaHref} size="medium" variant="compact" long />
          </HeaderRow>
        )}
        <Grid>
          {(hideHeader ? items : items.slice(0, 4)).map((item) => (
            <Card key={item.id} href={item.href || "#"} padding={0} className="stagger-item card-hover">
              <ThumbWrap>
                <Thumb src={item.imageSrc} alt={item.title} className="hover-scale" />
              </ThumbWrap>
              <CardBody>
                <Heading level={3} variant="card">{item.title}</Heading>
                <ButtonRow>
                  <ServiceButton>
                    <AppButton 
                      label="READ MORE"
                      size="large" 
                      variant="default" 
                      withArrow 
                      className="app-button"
                      long
                    />
                  </ServiceButton>
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


