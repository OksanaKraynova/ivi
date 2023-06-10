import Select from './Select'
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Select> = {
    title: 'Select',
    component: Select,
    tags: ['autodocs'],
    argTypes: {
        options: {
            description: 'Список пунктов выбора'
        },
        placeholder: {
            type: 'string',
            description: 'Подпись в поле для ввода ответа'
        },
        type: {
            type: 'string',
            description: 'Тип выбора',
            options: ["multiple", "one"],
            control: {
                type: 'select'
            }
        },
        error: {
            required: false,
            description: 'Наличие ошибки'
        },
        addCheck: {
            required: false,
            description: 'Действие при добавлении варианта выбора'
        },
        deliteCheck: {
            required: false,
            description: 'Действие при удалении варианта выбора'
        }
    }
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Example: Story = {
    args: {
        options: ["1", "2", "3", "4", "5"],
        placeholder: "Цифра",
        type: "multiple"
    }
};
