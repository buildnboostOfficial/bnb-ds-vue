<template>
  <button type="button" :class="classes" @click="emit('click')" :disabled="loading">
    <Icon :icon="startIcon" :size="iconSize"></Icon>
    <Icon icon="puff" :size="iconSize" v-if="loading"></Icon>
    <span>{{ label }}</span>
    <Icon :icon="endIcon" :size="iconSize"></Icon>
  </button>
</template>

<script setup>
import {computed} from 'vue';
import Icon from "../Icon/Icon.vue";
import {IconsList} from "../Icon";
import {buttonType, buttonSize, buttonVariant} from "./Button.constants.js";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    validator: function (value) {
      return buttonVariant.indexOf(value) !== -1;
    },
    default: 'filled'
  },
  type: {
    type: String,
    validator: function (value) {
      return buttonType.indexOf(value) !== -1;
    },
    default: 'primary'
  },
  size: {
    type: String,
    validator: function (value) {
      return buttonSize.indexOf(value) !== -1;
    },
    default: 'medium'
  },
  startIcon: {
    type: String,
    validator: function (value) {
      return Object.values(IconsList).map(icon => icon.__name).indexOf(value) !== -1;
    },
    default: ''
  },
  endIcon: {
    type: String,
    validator: function (value) {
      return Object.values(IconsList).map(icon => icon.__name).indexOf(value) !== -1;
    },
    default: ''
  },
  iconSize: {
    type: Number,
    default: 22,
  },
});

const emit = defineEmits(['click']);

const classes = computed(() => ({
  'flex items-center space-x-2 border-none rounded-sm cursor-pointer disabled:cursor-not-allowed': true,
  'bg-primary disabled:bg-primary-disabled text-white': props.type === 'primary' && props.variant === "filled",
  'border border-primary text-primary': props.type === 'primary' && props.variant === "outline",
  'bg-secondary text-gray-700': props.type === 'secondary',
  'text-sm px-3 py-1': props.size === 'small',
  'px-4 py-2': props.size === 'medium',
  'text-lg px-6 py-2.5': props.size === 'large',
}));
</script>
