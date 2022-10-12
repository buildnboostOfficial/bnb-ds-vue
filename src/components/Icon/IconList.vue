<template>
  <div class="w-full flex-1 grid gap-4 grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 flex-wrap">
    <div v-for="(icon, index) in IconsList" :key="index">
      <div class="flex flex-col items-center justify-center space-y-2 aspect-square rounded-sm cursor-pointer hover:bg-gray-100 transition-all ease-in-out duration-150"
          :class="textColor">
        <component :is="IconsList[icon.__name]" :style="style"></component>
        <span class="text-xs">{{icon.__name}}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import {IconsList} from "./";
import {computed} from "vue";

const props = defineProps({
  iconSizes: {
    type: Number,
    default: 24,
  },
  type: {
    type: String,
    validator: function (value) {
      return ['primary', 'secondary'].indexOf(value) !== -1;
    },
    default: 'primary'
  },
})

const style = computed(() => ({
  width: props.iconSizes + "px",
  height: props.iconSizes + "px",
}));

const textColor = computed(() => {
  switch (props.type) {
    case 'primary':
      return 'text-primary';
    case 'secondary':
      return 'text-secondary';
    default:
      return 'text-primary';
  }
})
</script>
