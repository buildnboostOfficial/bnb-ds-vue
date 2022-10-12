<template>
  <component :is="IconsList[icon]" :class="className" :style="style"></component>
</template>

<script setup>
import {IconsList} from "./";
import {computed} from "vue";

const props = defineProps({
  icon: {
    type: String,
    validator: function (value) {
      return Object.values(IconsList).map(icon => icon.__name).indexOf(value) !== -1;
    },
    default: ''
  },
  className: {
    type: String,
    default: ''
  },
  size: {
    type: Number,
    default: 24,
  }
})

const style = computed(() => ({
  width: props.size + "px",
  height: props.size + "px",
}));
</script>
