<script setup lang="ts">
defineProps<{
  radius?: string
}>()
const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

function btnClick(event: MouseEvent) {
  emit('click', event)
}
</script>

<template>
  <button
    @click="btnClick"
    class="btn-border"
    :style="radius ? 'border-radius: ' + radius + 'px;' : ''"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
.btn-border {
  border: 1px solid gray;
  background-color: #000;
  color: #888;
}
</style>
