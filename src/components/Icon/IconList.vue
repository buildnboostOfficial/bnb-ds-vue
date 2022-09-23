<template>
  <div class="w-full flex-1 flex space-x-4 flex-wrap">
    <div v-for="(icon, index) in IconsList" :key="index">
      <component :is="IconsList[icon.__name]" :className="className" :style="style"></component>
    </div>
  </div>
</template>

<script setup>
import {IconsList} from "./";
import {computed} from "vue";

const props = defineProps({
  className: {
    type: String,
    default: ''
  },
  iconSizes: {
    type: Number,
    default: 24,
  }
})

const style = computed(() => ({
  width: props.iconSizes + "px",
  height: props.iconSizes + "px",
}));
</script>
