<script setup lang="ts">
import type { ILog } from '@/entitys/log'

defineProps<{
  messageList: ILog[]
}>()
</script>

<template>
  <div class="content">
    <pre style="text-indent: 0">
        <span v-for="(item, index) in messageList" :key="index">{{ item.content }}<br></span>
    </pre>
  </div>
</template>

<style scoped>
.content {
  box-sizing: border-box;
  scrollbar-width: none;
  overflow-y: auto;
  flex: 1;
}
</style>
