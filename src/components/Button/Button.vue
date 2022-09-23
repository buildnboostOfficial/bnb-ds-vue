<template>
  <button type="button" :class="classes" @click="emit('click')" :style="style">{{ label }}</button>
</template>

<script setup>
import {computed} from 'vue';

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  primary: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    validator: function (value) {
      return ['small', 'medium', 'large'].indexOf(value) !== -1;
    },
    default: 'medium'
  },
  backgroundColor: {
    type: String,
  },
  color: {
    type: String,
  },
});

const emit = defineEmits(['click']);

const classes = computed(() => ({
  'border-none rounded-sm': true,
  'bg-primary text-white': props.primary,
  'bg-secondary text-gray-700': !props.primary,
  'text-sm px-3 py-1': props.size === 'small',
  'px-4 py-2': props.size === 'medium',
  'text-lg px-6 py-2.5': props.size === 'large',
}));

const style = computed(() => ({
  backgroundColor: props.backgroundColor,
  color: props.color,
}));
</script>
