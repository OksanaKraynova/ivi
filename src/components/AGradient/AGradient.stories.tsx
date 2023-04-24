import type { Meta, StoryObj } from '@storybook/react';
import { AGradient } from './AGradient';

const meta: Meta<typeof AGradient> = {
  title: 'AGradient',
  component: AGradient,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AGradient>;

export const Primary: Story = {
  args: {
    text: "Very Long Text",
    href: "!#",
  },
};