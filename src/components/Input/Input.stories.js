import Input from './Input.vue';
import {IconsList} from "../Icon";

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    placeholder: '',
    startIcon: {
      control: { type: 'select' },
      options: Object.values(IconsList).map((icon) => icon.__name),
    },
    endIcon: {
      control: { type: 'select' },
      options: Object.values(IconsList).map((icon) => icon.__name),
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password'],
    },
  },
};

const Template = (args) => ({
  components: { Input },
  setup() {
    return { args };
  },
  template: '<Input v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Email',
  type: 'email'
};

export const Password = Template.bind({});
Password.args = {
  placeholder: 'Password',
  type: 'password'
};
