import IconList from "./IconList.vue";

export default {
  title: 'Icons',
  component: IconList,
  argTypes: {
    iconSizes: 24,
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
  },
};

const Template = (args: any) => ({
  components: { IconList },
  setup() {
    return { args };
  },
  template: '<icon-list v-bind="args" />',
});

export const Default: any = Template.bind({});
Default.args = {
  iconSizes: 24
}
