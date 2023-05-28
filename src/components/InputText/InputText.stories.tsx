import { InputText } from './InputText'
import type { Meta, StoryObj } from '@storybook/react';
import closeIcon from '../../../public/icons/close.svg';

const meta: Meta<typeof InputText> = {
    title: 'InputText',
    component: InputText,
    tags: ['autodocs'],
    argTypes: {
        placeholder: {
            type: { name: 'string', required: false },
            description: 'Подпись в поле для ввода ответа'
        },
        buttonIcon: {
            type: { name: 'string', required: false },
            description: 'Путь к иконке для кнопки'
        },
        buttonClass: {
            type: { name: 'string', required: false },
            description: 'Класс кнопки'
        },
        disabled: {
            type: { name: 'boolean', required: false },
            defaultValue: false,
            description: 'Блокировка доступа и изменения'
        },
        required: {
            type: { name: 'boolean', required: false },
            defaultValue: false,
            description: 'Поле обязательно для ввода'
        },
        readOnly: {
            type: { name: 'boolean', required: false },
            defaultValue: false,
            description: 'Поле только для чтения'
        },
        value: {
            type: { name: 'string', required: false },
            description: 'Программно введеный текст'
        },
        minSize: {
            type: { name: 'number', required: false },
            defaultValue: 0,
            description: 'Минимальная длина вводимого текста'
        },
        onClick: {
            type: { name: 'function', required: false },
            description: 'Действие при клике на кнопку'
        },
        onChange: {
            required: false,
            description: 'Действие при введении текста'
        }
    }
};

export default meta;

type Story = StoryObj<typeof InputText>;

export const Example: Story = {
    args: {
        placeholder: "Написать ответ",
        buttonIcon: closeIcon.src
    }
};
