import type { Meta, StoryObj } from '@storybook/react';
import LinkAvatar from './LinkAvatar';
import textStyles from '../Link/Link.module.scss';

const meta: Meta<typeof LinkAvatar> = {
  title: 'LinkAvatar',
  component: LinkAvatar,
  tags: ['autodocs'],
  argTypes: {
    img: {
      type: 'string',
      description: 'Ссылка на картинку аватара',
    },
    href: {
      type: 'string',
      description: 'Ссылка',
    },
    textUnderImg: {
      description: 'Текст под аватаром',
    },
    textInsteadImg: {
      type: { name: 'string', required: false },
      description: 'Текст вместо аватара',
    },
    color: {
      type: { name: 'string', required: false },
      description: 'Фон вместо аватара',
      options: ["green", "grey"],
      control: {
        type: 'select'
      }
    },
    form: {
      type: 'string',
      description: 'Форма аватара',
      options: ["square", "circle", "circleBig"],
      control: {
        type: 'select'
      }
    },
    onClick: {
      type: { name: 'function', required: false },
      description: 'Действие при клике',
    },
    onMouseOver: {
      type: { name: 'function', required: false },
      description: 'Действие при наведении',
    },
    children: {
      required: false,
      description: 'Элемент внизу ссылки',
    },
  }
};

export default meta;

type Story = StoryObj<typeof LinkAvatar>;

export const Example: Story = {
  args: {
    textUnderImg: ["Екатерина", "Гороховская"],
    href: '!#',
    img: "https://thumbs.dfs.ivi.ru/storage8/contents/1/d/350f6cb6a7ccc414fad70ebe3f27d9.jpg",
    form: "circle",
    children: <p className={textStyles.link}>актриса</p>,
  },
};