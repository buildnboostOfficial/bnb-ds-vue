<template>
  <div class="inline-flex space-x-2 items-center px-3 py-2 border border-gray-200 rounded-md">
    <Icon :icon="startIcon" className="cursor-pointer" :size="iconSize"></Icon>
    <input
        v-model="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
        @blur="emit('blur')"
        :type="!show ? type : 'text'"
        :placeholder="placeholder"
        class="bg-transparent focus:outline-none"
    />
    <Icon :icon="endIcon" className="cursor-pointer" :size="iconSize"></Icon>
    <Icon icon="eye" class="stroke-gray-400 cursor-pointer" v-if="type === 'password' && !show" @click="show = true" :size="iconSize"></Icon>
    <Icon icon="eye-slash" class="stroke-gray-400 cursor-pointer" v-else-if="type === 'password' && show" @click="show = false" :size="iconSize"></Icon>
  </div>
</template>

<script setup>
import {ref} from "vue";
import Icon from "../Icon/Icon.vue";
import {IconsList} from "../Icon";

defineProps({
  placeholder: String,
  modelValue: String,
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
  type: {
    type: String,
    validator: function (value) {
      return ['text', 'email', 'password'].indexOf(value) !== -1;
    },
    default: 'text'
  },
});

const emit = defineEmits(["update:modelValue", "blur"]);

const show = ref(false);
</script>
