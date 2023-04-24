import type { Meta, StoryObj } from '@storybook/react';
import { AShine } from './AShine';

const meta: Meta<typeof AShine> = {
  title: 'AShine',
  component: AShine,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AShine>;

export const Primary: Story = {
  args: {
    children: "Very Long Text",
    href: "!#",
  },
};