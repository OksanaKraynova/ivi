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
    }
  }
};

export default meta;

type Story = StoryObj<typeof Comment>;

export const Example: Story = {
  args: {
    comment: {
      id: 1,
      author_id: "1",
      createdAt: "2023-01-17-16",
      comment: "Комментарий",
      parent: null
    },
    type: "full"
  },
};