<script setup lang="ts">
defineProps<{
  roomName: string
  roomDesc: string
}>()
</script>

<template>
  <div>
    <div class="roomName">{{ roomName }}</div>
    <div class="roomDesc">
      {{ roomDesc }}
    </div>
  </div>
</template>

<style scoped>
.roomName {
  color: #ffff00;
}
.roomDesc {
  text-indent: 2em;
}
</style>
