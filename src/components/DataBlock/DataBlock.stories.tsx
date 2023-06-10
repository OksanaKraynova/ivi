import DataBlock from './DataBlock'
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DataBlock> = {
    title: 'DataBlock',
    component: DataBlock,
    tags: ['autodocs'],
    argTypes: {
        items: {
            description: 'Список пунктов блока'
        },
        placeholder: {
            type: { name: "string", required: false },
            description: 'Подпись блока с данными'
        },
        deliteItem: {
            required: false,
            description: 'Действие при удалении данных из блока'
        }
    }
};

export default meta;

type Story = StoryObj<typeof DataBlock>;

export const Example: Story = {
    args: {
        items: ["11111", "22222", "33333", "44444", "55555"],
    }
};
