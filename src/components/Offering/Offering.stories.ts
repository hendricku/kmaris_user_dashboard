import type { Meta, StoryObj } from "@storybook/react";
import { Offering } from "./Offering";

const meta: Meta<typeof Offering> = {
  title: "Components/Offering",
  component: Offering,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof Offering>;

export const Default: Story = {
  args: {
    imageSrc: "/offering.png",
  },
};





