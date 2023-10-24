import { Meta, Story } from '@storybook/react';
import { GridImage, GridImageProps } from '.';

import mock from './mock';

export default {
  title: 'GridImage',
  component: GridImage,
  args: mock,
} as Meta;

export const Template: Story<GridImageProps> = (args) => {
  return (
    <div>
      <GridImage {...args} />
    </div>
  );
};
