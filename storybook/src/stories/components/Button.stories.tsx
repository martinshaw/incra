import { Button, SFSymbolIcon } from "@incra/collection";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Incra/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    // onClick: fn()
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    text: "Button",
    size: "base",
    leftIcon: undefined,
    rightIcon: undefined,
    disabled: false,
    intent: "none",
  },
};

export const Disabled: Story = {
  args: {
    text: "Disabled Button",
    size: "base",
    leftIcon: undefined,
    rightIcon: undefined,
    disabled: true,
    intent: "none",
  },
};

export const Small: Story = {
  args: {
    text: "Small Button",
    size: "small",
    leftIcon: undefined,
    rightIcon: undefined,
    disabled: false,
    intent: "none",
  },
};

export const Large: Story = {
  args: {
    text: "Large Button",
    size: "large",
    leftIcon: undefined,
    rightIcon: undefined,
    disabled: false,
    intent: "none",
  },
};

export const Fill: Story = {
  decorators: [
    (Story) => (
      <div style={{ borderStyle: 'dashed', borderWidth: 1, width: "50vw", height: "50vh", display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    text: "Fill Button",
    size: "fill",
    leftIcon: undefined,
    rightIcon: undefined,
    disabled: false,
    intent: "none",
  },
};

export const FillHorizontal: Story = {
  decorators: [
    (Story) => (
      <div style={{ borderStyle: 'dashed', borderWidth: 1, width: "50vw", height: "50vh", display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    text: "Fill Horizontal Button",
    size: "fill-horizontal",
    leftIcon: undefined,
    rightIcon: undefined,
    disabled: false,
    intent: "none",
  },
};

export const FillVertical: Story = {
  decorators: [
    (Story) => (
      <div style={{ borderStyle: 'dashed', borderWidth: 1, width: "50vw", height: "50vh", display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    text: "Fill Vertical Button",
    size: "fill-vertical",
    leftIcon: undefined,
    rightIcon: undefined,
    disabled: false,
    intent: "none",
  },
};

export const LeftIcon: Story = {
  args: {
    text: "Left Button",
    size: "base",
    leftIcon: <SFSymbolIcon name="arrow.left" />,
    rightIcon: undefined,
    disabled: false,
    intent: "none",
  },
};

export const RightIcon: Story = {
  args: {
    text: "Right Button",
    size: "base",
    leftIcon: undefined,
    rightIcon: <SFSymbolIcon name="arrow.right" />,
    disabled: false,
    intent: "none",
  },
};

export const LeftSmallIcon: Story = {
  args: {
    text: "Left Button",
    size: "small",
    leftIcon: <SFSymbolIcon name="arrow.left" />,
    rightIcon: undefined,
    disabled: false,
    intent: "none",
  },
};

export const RightLargeIcon: Story = {
  args: {
    text: "Right Button",
    size: "large",
    leftIcon: undefined,
    rightIcon: <SFSymbolIcon name="arrow.right" />,
    disabled: false,
    intent: "none",
  },
};

export const SingleIcon: Story = {
  args: {
    children: <SFSymbolIcon name='arrow.down' />,
    size: "base",
    leftIcon: undefined,
    rightIcon: undefined,
    disabled: false,
    intent: "none",
  },
};

export const intentPrimary: Story = {
  args: {
    text: "Options...",
    size: "base",
    leftIcon: undefined,
    rightIcon: undefined,
    disabled: false,
    intent: "primary",
  },
};

export const intentSuccess: Story = {
  args: {
    text: "Save",
    size: "base",
    leftIcon: undefined,
    rightIcon: undefined,
    disabled: false,
    intent: "success",
  },
};

export const intentWarning: Story = {
  args: {
    text: "Hazard",
    size: "base",
    leftIcon: undefined,
    rightIcon: undefined,
    disabled: false,
    intent: "warning",
  },
};

export const intentDanger: Story = {
  args: {
    text: "Delete",
    size: "base",
    leftIcon: undefined,
    rightIcon: undefined,
    disabled: false,
    intent: "danger",
  },
};