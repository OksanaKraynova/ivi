import type { Meta, StoryObj } from '@storybook/react';
import { PromoPoster } from './PromoPoster';
import cornPoster from "../../../public/img/corn-poster.jpg"
import cornTitle from "../../../public/img/corn-title.png"

const meta: Meta<typeof PromoPoster> = {
  title: 'PromoPoster',
  component: PromoPoster,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PromoPoster>;

export const Primary: Story = {
  args: {
    posterImg: cornPoster.src,
    titleImg: cornTitle.src,
    description: "Страшно, ужасно, пугающе",
    descriptionColor: "white",
    button: "Я кнопка",
    href: "!#",
  },
};