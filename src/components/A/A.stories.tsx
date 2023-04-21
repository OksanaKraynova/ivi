import type { Meta, StoryObj } from '@storybook/react';
import { A } from './A';

const meta: Meta<typeof A> = {
  title: 'A',
  component: A,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'color',
    },
    hoverColor: {
      control: 'color',
    },
  },
};

export default meta;

// export default {
//   title: 'A',
//   component: A,
// };

// export const Primary = () =>
//   <A
//     text='Text'
//     href='!#'
//     color='Blue'
//     hoverColor='Red'
//     fontSize={16}
//   />

type Story = StoryObj<typeof A>;

export const Primary: Story = {
  args: {
    text: "Text",
    href: "!#",
  },
};

export const AGreyNormal: Story = {
  args: {
    color: "rgba(255,255,255,.48)",
    hoverColor: "#FFFFFF",
  },
};

export const AGreyMedium: Story = {
  args: {
    color: "rgba(255,255,255,.48)",
    hoverColor: "#FFFFFF",
    fontWeight: 500,
  },
};