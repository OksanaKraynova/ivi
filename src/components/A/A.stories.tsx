import type { Meta, StoryObj } from '@storybook/react';
import { A } from './A';

const meta: Meta<typeof A> = {
  title: 'A',
  component: A,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof A>;

export const Primary: Story = {
  args: {
    text: "Text",
    href: "!#",
  },
};