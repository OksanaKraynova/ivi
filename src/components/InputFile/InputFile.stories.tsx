import InputText from './InputFile'
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof InputText> = {
    title: 'InputText',
    component: InputText,
    tags: ['autodocs'],
    argTypes: {
        placeholder: {
            type: { name: 'string', required: true },
            description: 'Подпись в поле для ввода ответа'
        },
        onChange: {
            required: false,
            description: 'Действие при введении текста'
        },
        accept: {
            required: false,
            description: 'Допустимые типы файлов'
        }
    }
};

export default meta;

type Story = StoryObj<typeof InputText>;

export const Example: Story = {
    args: {
        placeholder: "Написать ответ"
    }
};
