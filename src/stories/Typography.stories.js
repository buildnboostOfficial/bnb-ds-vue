import Typography from '../components/Typography.vue';

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    color: { control: 'color' },
    type: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
    },
  },
};

const Template = (args) => ({
  components: { Typography },
  setup() {
    return { args };
  },
  template: '<typography v-bind="args" />',
});

export const Header = Template.bind({});
Header.args = {
  text: 'Header',
  type: 'h1'
};

export const Paragraph = Template.bind({});
Paragraph.args = {
  text: 'Paragraph',
  type: 'p'
};

export const Normal = Template.bind({});
Normal.args = {
  text: 'Hello world',
};
