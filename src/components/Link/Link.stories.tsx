import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './Link';

const meta: Meta<typeof Link> = {
  title: 'Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    text: {
      type: 'string',
      description: 'Текст ссылки',
    },
    href: {
      type: 'string',
      description: 'Ссылка',
    },
    color: {
      type: 'string',
      description: 'Цвет ссылки',
      options: ["white", "grey", "greyLight", "pinkGradient"],
      control: {
        type: 'select'
      }
    },
    fontWeight: {
      type: { name: 'number', required: false },
      description: 'Толщина шрифта',
      defaultValue: 400,
    },
    linkClass: {
      type: { name: 'string', required: false },
      description: 'Класс стиля ссылки',
    },
    onMouseOver: {
      type: 'function',
      description: 'Действие при наведении на ссылку',
    },
  }
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Example: Story = {
  args: {
    text: "Text",
    href: "!#",
  },
};