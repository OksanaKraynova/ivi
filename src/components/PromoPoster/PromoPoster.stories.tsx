import type { Meta, StoryObj } from '@storybook/react';
import PromoPoster from './PromoPoster';
import cornPoster from "../../../public/img/corn-poster.jpg"
import cornTitle from "../../../public/img/corn-title.png"

const meta: Meta<typeof PromoPoster> = {
  title: 'PromoPoster',
  component: PromoPoster,
  tags: ['autodocs'],
  argTypes: {
    posterImg: {
      type: 'string',
      description: 'Ссылка на картинку постера',
    },
    titleImg: {
      type: 'string',
      description: 'Ссылка на картинку названия',
    },
    description: {
      type: 'string',
      description: 'Описание',
    },
    descriptionColor: {
      type: 'string',
      description: 'Цвет описания',
      options: ["white", "grey"],
      control: {
        type: 'select'
      }
    },
    button: {
      type: 'string',
      description: 'Текст кнопки',
    },
    href: {
      type: 'string',
      description: 'Ссылка',
    },
  }
};

export default meta;

type Story = StoryObj<typeof PromoPoster>;

export const Example: Story = {
  args: {
    posterImg: cornPoster.src,
    titleImg: cornTitle.src,
    description: "Страшно, ужасно, пугающе",
    descriptionColor: "white",
    button: "Я кнопка",
    href: "!#",
  },
};