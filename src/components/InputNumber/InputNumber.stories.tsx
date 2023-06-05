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
        required: {
            type: { name: 'boolean', required: false },
            defaultValue: false,
            description: 'Поле обязательно для ввода'
        },
        min: {
            type: { name: 'number', required: false },
            description: 'Минимум'
        },
        max: {
            type: { name: 'number', required: false },
            description: 'Максимум'
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
