import type { Meta, StoryObj } from '@storybook/react';
import TopCard from './TopCard';
import sample from "../../../public/img/sample.jpg"

const meta: Meta<typeof TopCard> = {
  title: 'TopCard',
  component: TopCard,
  tags: ['autodocs'],
  argTypes: {
    img: {
      type: 'string',
      description: 'Ссылка на картинку',
    },
    href: {
      type: 'string',
      description: 'Ссылка',
    },
    index: {
      type: 'number',
      description: 'Цифра в подписи',
      control: {
        type: 'number',
        min: 1,
        step: 1
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof TopCard>;

export const Example: Story = {
  args: {
    img: sample.src,
    index: 1,
    href: "!#",
  },
};