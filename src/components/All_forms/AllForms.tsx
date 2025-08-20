"use client";

import React from "react";
import {
  PageWrapper,
  Container,
  Grid,
  TabsWrapper,
  Tabs,
  Tab,
  FormCard,
  FormHeader,
  FormId,
  StatusBadge,
  StatusText,
  PackageText,
  FormContent,
  FormTitle,
} from "./elements";
import { Footer } from "@/components/Footer/Footer";

import formsData from "@/json/allforms.json";

const tabs = [
  "ALL FORMS",
  "FILING SERVICES",
  "FORM I130",
  "FORM N400",
  "ALL EBOOK",
];

interface AllFormsProps {
  items?: Array<{
    id: number;
    title: string;
    type: string;
    package?: string;
    subtitle: string;
  }>;
}

export function AllForms({ items = [] }: AllFormsProps) {
  return (
    <>
      <PageWrapper>
        <Container>
          <TabsWrapper>
            <Tabs>
              {tabs.map((tab) => (
                <Tab key={tab} $active={tab === "ALL FORMS"}>
                  {tab}
                </Tab>
              ))}
            </Tabs>
          </TabsWrapper>
          <Grid>
            {items.length > 0
              ? items.map((form) => (
                  <FormCard key={form.id}>
                    <FormHeader>
                      <FormId>{form.title}</FormId>
                      <StatusBadge>
                        <StatusText>{form.type}</StatusText>
                      </StatusBadge>
                      {form.package && <PackageText>{form.package}</PackageText>}
                    </FormHeader>
                    <FormContent>
                      <FormTitle>{form.subtitle}</FormTitle>
                    </FormContent>
                  </FormCard>
                ))
              : formsData.forms.map((form) => (
                  <FormCard key={form.id}>
                    <FormHeader>
                      <FormId>{form.title}</FormId>
                      <StatusBadge>
                        <StatusText>{form.type}</StatusText>
                      </StatusBadge>
                      {form.package && <PackageText>{form.package}</PackageText>}
                    </FormHeader>
                    <FormContent>
                      <FormTitle>{form.subtitle}</FormTitle>
                    </FormContent>
                  </FormCard>
                ))}
          </Grid>
        </Container>
      </PageWrapper>
      <Footer />
    </>
  );
}
