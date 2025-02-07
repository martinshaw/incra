import { SFSymbolIcon } from "@incra/collection";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Incra/Icon",
  component: SFSymbolIcon,
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
} satisfies Meta<typeof SFSymbolIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ArrowLeft: Story = {
  name: 'arrow.left',
  args: {
    name: "arrow.left",
    size: 'large'
  },
};

export const ArrowRight: Story = {
  name: 'arrow.right',
  args: {
    name: "arrow.right",
    size: 'large'
  },
};

export const ArrowUp: Story = {
  name: 'arrow.up',
  args: {
    name: "arrow.up",
    size: 'large'
  },
};

export const ArrowDown: Story = {
  name: 'arrow.down',
  args: {
    name: "arrow.down",
    size: 'large'
  },
};


