import type { Meta, StoryObj } from "@storybook/react";
import { Services } from "./Services";

const meta: Meta<typeof Services> = {
  title: "Components/Services",
  component: Services,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof Services>;

export const Default: Story = {
  args: {
    title: "We offer payment plans for our Service Fees",
    ctaLabel: "VIEW ALL CATEGORY",
    hideHeader: true,
    items: [
      {
        id: 1,
        title: "PETITION FOR MARRIED SON/DAUGHTER",
        imageSrc: "/petition.webp",
      },
    ],
  },
};


