import { Response } from './Response'
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Response> = {
    title: 'Response',
    component: Response,
    tags: ['autodocs'],
    argTypes: {
        placholder: {
            type: 'string',
            description: 'Подпись в поле для ввода ответа',
        },
        buttonColor: {
            type: 'string',
            description: 'Цвет кнопки для отправки ответа',
            options: ["pink", "lightGrey"],
            control: {
                type: 'select'
            }
        }
    }
};

export default meta;

type Story = StoryObj<typeof Response>;

export const Example: Story = {
    args: {
        placholder: "Написать отзыв",
        buttonColor: "lightGrey"
    },
};
