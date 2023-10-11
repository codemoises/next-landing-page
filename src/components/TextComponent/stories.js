import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi animi soluta corrupti consequuntur nesciunt provident aut, iusto veniam sunt nisi commodi eum dicta voluptates exercitationem delectus distinctio totam maiores assumenda!`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
