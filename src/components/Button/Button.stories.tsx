import Button from './Button'
import type { Meta, StoryObj } from '@storybook/react';

const btn = {
    title: 'Button',
    component: Button,
    argTypes: {
        variant: {
            type: 'string',
            description: 'Форма ссылки',
            defaultValue: 'medium',
            options: ["minimal", "small", "medium", "large", "huge", "circle", "square", "long"],
            control: {
                type: 'select'
            }
        }
    }
} satisfies Meta<typeof Button>;

export default btn


type Story = StoryObj<typeof btn>;

export const Example = {
    args: {
        variant: "medium",
        color: "darkBlue",
        href: "",
        children: 'Click'
    },
} satisfies Story;
