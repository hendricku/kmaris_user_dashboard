import type { Meta, StoryObj } from "@storybook/nextjs";
import { Hero } from "./Hero";

const meta: Meta<typeof Hero> = {
  title: "Components/Hero",
  component: Hero,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    title: "IMMIGRATION\nFORMS EXPERT",
    description:
      "We Specialized In Family-Based Immigration, Adjustment Of Status, Consular Processing, Asylum/Refugee Application/Petition, Non-Immigrant Visa, VAWA, & Other Services.",
    ctaLabel: "LEARN MORE",
    backgroundSrc: "/herologo.webp",
  },
};


