import type { Meta, StoryObj } from '@storybook/react';
import { CommentParent } from './Comment';

const meta: Meta<typeof CommentParent> = {
  title: 'Comment',
  component: CommentParent,
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

type Story = StoryObj<typeof CommentParent>;

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