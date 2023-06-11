import Search from './Search'
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Search> = {
    title: 'Search',
    component: Search,
    tags: ['autodocs'],
    argTypes: {
        options: {
            description: 'Список пунктов выбора'
        },
        placeholder: {
            type: 'string',
            description: 'Подпись в поле для ввода ответа'
        },
        addItem: {
            required: false,
            description: 'Действие при добавлении варианта выбора'
        },
        renderItem: {
            description: 'Функция для определения способа отображения элементов списка'
        },
        compareItem: {
            required: false,
            description: 'Функция для определения способа фильтрации списка по введеному тексту'
        },
        onChange: {
            required: false,
            description: 'Действие при изменении текста в поле для ввода'
        }
    }
};

export default meta;

type Animal = {
    type: "Собака" | "Кошка" | "Кролик";
    name: string;
}

type Story = StoryObj<typeof Search<Animal>>;

export const Example: Story = {
    args: {
        options: [
            { type: "Собака", name: "Шарик" },
            { type: "Собака", name: "Тузик" },
            { type: "Кошка", name: "Мурка" },
            { type: "Кошка", name: "Василий" },
            { type: "Кролик", name: "Зая" },
            { type: "Кролик", name: "Кроля" }
        ],
        placeholder: "Животные",
        renderItem: (animal => animal.name),
        compareItem: ((animal, value) => animal.type.includes(value))
    }
};
