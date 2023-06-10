import type { Meta, StoryObj } from '@storybook/react';
import Comment from './Comment';

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
      options: ["full", "preview"],
      control: {
        type: 'select'
      }
    },
    movietId: {
      type: { name: 'number', required: true },
      description: 'ID фильма для отправки комментария',
    }
  }
};

export default meta;

type Story = StoryObj<typeof Comment>;

export const Example: Story = {
  args: {
    comment: {
      id: 1,
      author: [{ user_id: 1, user_login: "login" }],
      createdAt: "2023-01-17-16",
      comment: "Комментарий",
      parent: 0
    },
    type: "full",
    movietId: 1
  },
};