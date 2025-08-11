import type { Meta, StoryObj } from "@storybook/react";
import { AppButton } from "./Button";

const meta: Meta<typeof AppButton> = {
  title: "Components/Button",
  component: AppButton,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'compact'],
    },
    withArrow: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AppButton>;

export const Primary: Story = {
  args: { 
    label: "LEARN MORE",
    size: "large",
    variant: 'default',
  },
};

export const Small: Story = {
  args: { 
    label: "LEARN MORE",
    size: "small",
    variant: 'default',
  },
};

export const Medium: Story = {
  args: { 
    label: "LEARN MORE",
    size: "medium",
    variant: 'default',
  },
};

export const WithArrow: Story = {
  args: {
    label: 'READ MORE',
    size: 'medium',
    variant: 'compact',
    withArrow: true,
  },
};


