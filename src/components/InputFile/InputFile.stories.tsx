import InputFile from './InputFile'
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof InputFile> = {
    title: 'InputFile',
    component: InputFile,
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

type Story = StoryObj<typeof InputFile>;

export const Example: Story = {
    args: {
        placeholder: "Обложка"
    }
};
