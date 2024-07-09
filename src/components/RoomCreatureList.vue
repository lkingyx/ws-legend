<script setup lang="ts">
import type { IBaseAttribute, ICharacterInfo } from '@/entitys/character'
import { levelColor } from '@/entitys/level'

defineProps<{
  creatureList: IBaseAttribute[] & ICharacterInfo[]
}>()
</script>

<template>
  <div class="creature-box">
    <div
      v-for="(item, index) in creatureList"
      :key="index"
      :style="'color:' + levelColor[item.levelVaue]"
      class="wrapper-flex"
    >
      <div>
        <span v-if="item.title" style="margin-right: 5px">
          {{ item.title }}
        </span>
        <span v-if="item.levelName" style="margin-right: 5px">
          {{ item.levelName }}
        </span>
        <span>
          {{ item.name }}
        </span>
        <span class="hp-display"> [{{ item.currentHp }}/{{ item.totalHp }}] </span>
      </div>
      <div class="creature-status">
        <div class="progress hp">
          <div
            class="progress-bar"
            :style="'width:' + (item.currentHp / item.totalHp) * 100 + '%'"
          ></div>
        </div>
        <div class="progress mp">
          <div
            class="progress-bar"
            :style="'width:' + (item.currentMp / item.totalMp) * 100 + '%'"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mp > .progress-bar {
  background-color: darkblue;
}
.hp > .progress-bar {
  background-color: darkred;
}
.progress-bar {
  transition-duration: 1s;
  transition-property: width;
  transition-timing-function: ease-out;
  height: 0.25em;
  float: right;
}
.progress {
  border: 1px solid #343434;
  display: block;
  height: 0.3em;
  width: 6.25em;
  position: relative;
  margin-top: 2px;
  box-sizing: content-box;
}
.creature-status {
  margin-left: auto;
}
.hp-display {
  color: #ffff00;
}
.creature-box > .wrapper-flex {
  cursor: pointer;
}
.creature-box {
  max-height: 8rem;
  overflow-y: auto;
}
</style>
