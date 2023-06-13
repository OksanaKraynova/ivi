import TextArea from './TextArea'
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TextArea> = {
  title: 'TextArea',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      type: { name: 'string', required: false },
      description: 'Подпись в поле для ввода ответа'
    },
    reset: {
      type: { name: 'boolean', required: false },
      description: 'Сброс к исходному виду'
    },
    onChange: {
      required: false,
      description: 'Действие при введении текста'
    }
  }
};

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Example: Story = {
  args: {
    placeholder: "Написать ответ",
  }
};
