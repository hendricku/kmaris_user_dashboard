"use client";

import React, { useState, useMemo } from "react";
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
  const [activeTab, setActiveTab] = useState("ALL FORMS");

  const formsToDisplay = items.length > 0 ? items : formsData.forms;

  const filteredForms = useMemo(() => {
    switch (activeTab) {
      case "FILING SERVICES":
        return formsToDisplay.filter(
          (form) =>
            form.package === "FILING SERVICES" ||
            form.type === "FILING SERVICES"
        );
      case "FORM I130":
        return formsToDisplay.filter((form) => form.title === "I-130");
      case "FORM N400":
        return formsToDisplay.filter((form) => form.title === "N-400");
      case "ALL EBOOK":
        // Assuming no ebooks in the current data, returns an empty array.
        // The filter can be adjusted if ebook data is added.
        return formsToDisplay.filter((form) => form.type === "EBOOK");
      case "ALL FORMS":
      default:
        return formsToDisplay;
    }
  }, [activeTab, formsToDisplay]);

  return (
    <>
      <PageWrapper>
        <Container>
          <TabsWrapper>
            <Tabs>
              {tabs.map((tab) => (
                <Tab
                  key={tab}
                  $active={tab === activeTab}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </Tab>
              ))}
            </Tabs>
          </TabsWrapper>
          <Grid>
            {filteredForms.map((form) => (
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