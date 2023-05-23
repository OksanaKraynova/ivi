import type { Meta, StoryObj } from '@storybook/react';
import { Comment } from './Comment';

const meta: Meta<typeof Comment> = {
  title: 'Comment',
  component: Comment,
  tags: ['autodocs'],
  argTypes: {
    comment: {
      description: 'Комментарий',
    },
    type: {
      type: 'string',
      description: 'Тип',
      options: ["fullLength", "less"],
      control: {
        type: 'select'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Comment>;

export const Example: Story = {
  args: {
    comment: {
      id: 123,
      userName: "userName",
      date: "17 мая 2023",
      comment: "Комментарий",
      parentComment: null
    },
    type: "fullLength"
  },
};