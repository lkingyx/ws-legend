<script setup lang="ts">
import type { LocationMap } from '@/entitys/map';
import GrayEdgeButton from './GrayEdgeButton.vue'

defineProps<{
  mapData: LocationMap
}>()
</script>

<template>
  <div class="wrapper line-height">
    <div>
      <div v-if="mapData.leftUp">
        <GrayEdgeButton>{{ mapData.leftUp.roomName }}</GrayEdgeButton
        ><br />
        <div class="transform-left-line" style="margin-left: 61px; margin-top: -2px"></div>
      </div>
      <div v-else class="v-empty-box"></div>
      <div v-if="mapData.left">
        <GrayEdgeButton>{{ mapData.left.roomName }}</GrayEdgeButton>
        <div class="horizontal-line"></div>
      </div>
      <div v-else class="h-empty-box"></div>
      <div v-if="mapData.leftDown">
        <div class="transform-right-line" style="margin-left: 61px; margin-top: -2px"></div>
        <br />
        <GrayEdgeButton>{{ mapData.leftDown.roomName }}</GrayEdgeButton>
      </div>
      <div v-else class="v-empty-box"></div>
    </div>
    <div>
      <div v-if="mapData.up">
        <GrayEdgeButton>{{ mapData.up.roomName }}</GrayEdgeButton>
        <br />
        <div class="vertical-line"></div>
      </div>
      <div v-else class="v-empty-box"></div>
      <GrayEdgeButton>{{ mapData.location.roomName }}</GrayEdgeButton>
      <div v-if="mapData.down">
        <div class="vertical-line"></div>
        <br />
        <GrayEdgeButton>{{ mapData.down.roomName }}</GrayEdgeButton>
      </div>
      <div v-else class="v-empty-box"></div>
    </div>
    <div>
      <div v-if="mapData.rightUp" class="right-padding">
        <GrayEdgeButton>{{ mapData.rightUp.roomName }}</GrayEdgeButton
        ><br />
        <div class="transform-right-line"></div>
      </div>
      <div v-else class="v-empty-box"></div>
      <div v-if="mapData.right">
        <div class="horizontal-line"></div>
        <GrayEdgeButton>{{ mapData.right.roomName }}</GrayEdgeButton>
      </div>
      <div v-else class="h-empty-box"></div>
      <div v-if="mapData.rightDown" class="right-padding">
        <div class="transform-left-line"></div>
        <br />
        <GrayEdgeButton>{{ mapData.rightDown.roomName }}</GrayEdgeButton>
      </div>
      <div v-else class="v-empty-box"></div>
    </div>
  </div>
</template>

<style scoped>
.right-padding {
  padding-left: 10.9px;
}
.v-empty-box {
  width: 64px;
  height: 31px;
}
.h-empty-box {
  width: 64px;
  height: 21px;
}
.line-height {
  line-height: 0;
}
.transform-left-line {
  width: 1px;
  height: 13px;
  background-color: #aaa;
  display: inline-block;
  transform: rotate(315deg);
}
.transform-right-line {
  width: 1px;
  height: 13px;
  background-color: #aaa;
  display: inline-block;
  transform: rotate(45deg);
}
.horizontal-line {
  width: 10px;
  height: 1px;
  background-color: #aaa;
  display: inline-block;
  margin-bottom: 5px;
}
.vertical-line {
  width: 1px;
  height: 10px;
  background-color: #aaa;
  display: inline-block;
  margin-left: 27px;
}
</style>
