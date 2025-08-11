"use client";

import React from "react";
import { FeedbackProps } from "./interface";
import {
  Section,
  Container,
  Grid,
  CardInner,
  Avatar,
  Text,
  MetaRow,
  NameRole,
  Name,
  Role,

  Subheading,
 
  StarsRow,
  MetaCol,
} from "./elements";
import { Heading } from "@/components/Heading/Heading";
import { Card } from "@/components/Card/Card";

export function Feedback({ items }: FeedbackProps) {
  return (
    <Section>
      <Container>
        <Subheading>CUSTOMER FEEDBACKS</Subheading>
        <Heading level={2} variant="section" color="#ffffff" align="center" marginBottom={56}>
          SEE WHAT OUR CLIENTS HAVE TO SAY
        </Heading>
        <Grid>
          {(items ?? defaultItems).map((f) => (
            <Card key={f.id} padding={32} elevation="md" as="div" clickable={false}>
              <CardInner>
                <Avatar src={f.avatarSrc } alt={f.name} />
                <Text>{f.text}</Text>
                <StarsRow aria-label={`Rating ${f.rating ?? 0} out of 5`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>{i < (f.rating ?? 0) ? "★" : "☆"}</span>
                  ))}
                </StarsRow>
                <MetaCol>
                  <NameRole>
                    <Name>{f.name}</Name>
                    {f.role && <Role>{f.role}</Role>}
                  </NameRole>
                </MetaCol>
              </CardInner>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

const defaultItems = [
  {
    id: 1,
    name: "KUMAN TUNMAN",
    role: "LOREM IPSUM",
    avatarSrc: "/blackk.png",
    rating: 5,
    text:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
  },
  {
    id: 2,
    name: "MADISON OLIVIA",
    role: "LOREM IPSUM",
    avatarSrc: "/red.png",
    rating: 4,
    text:
      "sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
] as const;

export default Feedback;