import CustomButton from './Button.vue';
import {buttonType, buttonSize, buttonVariant} from "./Button.constants";
import {IconsList} from "../Icon/index";

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

const Template = (args: any) => ({
  components: { CustomButton },
  setup() {
    return { args };
  },
  template: '<custom-button v-bind="args" />',
});

export const Primary: any = Template.bind({});
Primary.args = {
  type: 'primary',
  label: 'Login',
};

export const Secondary: any = Template.bind({});
Secondary.args = {
  type: 'secondary',
  label: 'Login',
};

export const Small: any = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Login',
};

export const Medium: any = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Login',
};

export const Large: any = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Login',
};
