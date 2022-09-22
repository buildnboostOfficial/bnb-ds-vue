<template>
  <component :is="type" :class="classes" :style="style">{{ text }}</component>
</template>

<script setup>
import '../style.css';
import {computed} from "vue";

const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    validator: function (value) {
      return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'].includes(value) !== -1;
    },
    default: 'span'
  },
  color: {
    type: String,
  },
})

const classes = computed(() => ({
  'text-5xl font-bold': props.type === 'h1',
  'text-4xl font-bold': props.type === 'h2',
  'text-3xl font-bold': props.type === 'h3',
  'text-2xl font-semibold': props.type === 'h4',
  'text-xl font-semibold': props.type === 'h5',
  'text-lg font-semibold': props.type === 'h6',
  'font-medium': props.type === 'p',
  'text-base': props.type === 'p' || props.type === 'span',
}));

const style = computed(() => ({
  color: props.color,
}));
</script>
