import { GridTwoColumn } from '.';

import mock from './mock';

export default {
  title: 'GridTwoColumns',
  component: GridTwoColumn,
  args: mock,
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumn {...args} />
    </div>
  );
};
