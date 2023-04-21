import { IButton } from '@/types/IButton'
import Button from '../components/Button/Button'
import type { Meta, StoryObj } from '@storybook/react';

const btn = {
    title: 'Button',
    component: Button,
    argTypes: {
        variant: {
            type: 'string',
            description: 'Форма ссылки',
            defaultValue: 'square',
            options: ['square', 'circle', 'minimal', 'huge'],
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
        variant: 'square',
        children: 'Click'
    },
} satisfies Story;
