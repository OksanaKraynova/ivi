import Response from './Response'
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Response> = {
    title: 'Response',
    component: Response,
    tags: ['autodocs'],
    argTypes: {
        buttonColor: ["pink", "lightGrey"],
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
