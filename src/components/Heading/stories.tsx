import { Heading, HeadingProps } from '.';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Não sei',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Light: Story<HeadingProps> = (args) => <Heading {...args} />;
export const Dark: Story<HeadingProps> = (args) => <Heading {...args} />;

Light.parameters = {
  backgrounds: {
    default: 'light',
    colorDark: true,
  },
};

Dark.args = {
  children: 'O texto está claro',
  colorDark: false,
};
