import type { Meta, StoryObj } from '@storybook/react';
import Response from './Response'

const meta: Meta<typeof Response> = {
    title: 'Response',
    component: Response,
    tags: ['autodocs'],
    argTypes: {
        placeholder: {
            type: { name: 'string', required: true },
            description: 'Подпись в поле для ввода ответа',
        },
        buttonColor: {
            type: { name: 'string', required: true },
            description: 'Цвет кнопки для отправки ответа',
            options: ["pink", "lightGrey"],
            control: {
                type: 'select'
            }
        },
        movietId: {
            type: { name: 'number', required: true },
            description: 'ID фильма для отправки комментария',
        },
        parentId: {
            type: { name: 'number', required: true },
            description: 'ID комментария для отправки комментария к комментарию',
        }
    }
};

export default meta;

type Story = StoryObj<typeof Response>;

export const Example: Story = {
    args: {
        placeholder: "Написать ответ",
        buttonColor: "lightGrey",
        movietId: 1,
        parentId: 0
    },
};
