import type { Meta, StoryObj } from '@storybook/react';
import { TopCard } from './TopCard';
import sample from "../../../public/img/sample.jpg"

const meta: Meta<typeof TopCard> = {
  title: 'TopCard',
  component: TopCard,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TopCard>;

export const Primary: Story = {
  args: {
    img: sample.src,
    index: 1,
    href: "!#",
  },
};