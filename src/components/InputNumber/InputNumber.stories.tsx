import InputNumber from './InputNumber'
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof InputNumber> = {
  title: 'InputNumber',
  component: InputNumber,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      type: { name: 'string', required: false },
      description: 'Подпись в поле для ввода ответа'
    },
    min: {
      type: { name: 'number', required: false },
      description: 'Минимум'
    },
    max: {
      type: { name: 'number', required: false },
      description: 'Максимум'
    },
    error: {
      type: { name: 'boolean', required: false },
      description: 'Наличие ошибки'
    },
    reset: {
      type: { name: 'boolean', required: false },
      description: 'Сброс к исходному виду'
    },
    integer: {
      type: { name: 'boolean', required: false },
      description: 'Возможность вводить только целые числа'
    },
    onChange: {
      required: false,
      description: 'Действие при введении текста'
    }
  }
};

export default meta;

type Story = StoryObj<typeof InputNumber>;

export const Example: Story = {
  args: {
    placeholder: "Число"
  }
};
