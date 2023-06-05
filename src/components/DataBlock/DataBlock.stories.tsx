import DataBlock from './DataBlock'
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DataBlock> = {
    title: 'DataBlock',
    component: DataBlock,
    tags: ['autodocs'],
    argTypes: {
        list: {
            description: 'Список пунктов блока'
        }
    }
};

export default meta;

type Story = StoryObj<typeof DataBlock>;

export const Example: Story = {
    args: {
        list: ["11111", "22222", "33333", "44444", "55555"],
    }
};
