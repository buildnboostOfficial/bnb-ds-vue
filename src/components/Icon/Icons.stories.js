import IconList from "./IconList.vue";

export default {
  title: 'Icons',
  component: IconList,
  argTypes: {
    iconSizes: 24
  },
};

const Template = (args) => ({
  components: { IconList },
  setup() {
    return { args };
  },
  template: '<icon-list v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  iconSizes: 24
}