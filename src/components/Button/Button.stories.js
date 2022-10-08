import CustomButton from './Button.vue';
import {buttonType, buttonSize, buttonVariant} from "./Button.constants.js";
import {IconsList} from "../Icon/index.js";

export default {
  title: 'Components/Button',
  component: CustomButton,
  argTypes: {
    onClick: {},
    type: {
      control: { type: 'select' },
      options: buttonType,
    },
    variant: {
      control: { type: 'select' },
      options: buttonVariant,
    },
    size: {
      control: { type: 'select' },
      options: buttonSize,
    },
    startIcon: {
      control: { type: 'select' },
      options: Object.values(IconsList).map((icon) => icon.__name),
    },
    endIcon: {
      control: { type: 'select' },
      options: Object.values(IconsList).map((icon) => icon.__name),
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/cPMAilSoUZC04knmfo4rtk/Untitled",
    }
  },
};

const Template = (args) => ({
  components: { CustomButton },
  setup() {
    return { args };
  },
  template: '<custom-button v-bind="args" />',
});

export const Primary = Template.bind({});

Primary.args = {
  type: 'primary',
  label: 'Login',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  label: 'Login',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Login',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Login',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Login',
};
