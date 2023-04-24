import type { Meta, StoryObj } from '@storybook/react';
import { AImage } from './AImage';
import textStyles from '../A/A.module.scss';

const meta: Meta<typeof AImage> = {
  title: 'AImage',
  component: AImage,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AImage>;

export const Primary: Story = {
  args: {
    textUnderImg: ["Екатерина", "Гороховская"],
    href: '!#',
    img: "https://thumbs.dfs.ivi.ru/storage8/contents/1/d/350f6cb6a7ccc414fad70ebe3f27d9.jpg",
    form: "circle",
    children: <p className={textStyles.link}>актриса</p>,
  },
};