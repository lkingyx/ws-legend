<script setup lang="ts">
import GrayEdgeButton from '@/components/GrayEdgeButton.vue'
import MessageContent from '@/components/MessageContent.vue'
import OperationMap from '@/components/OperationMap.vue'
import RoomCreatureList from '@/components/RoomCreatureList.vue'
import RoomDescription from '@/components/RoomDescription.vue'
import type { IBaseAttribute, ICharacterInfo } from '@/entitys/character'
import type { LocationMap } from '@/entitys/map'
import { ILogType } from '@/enums/logtype'
import { logListStore } from '@/stores/log'
import { Game } from '@/system/game'
import { LogSystem } from '@/system/LogSystem'
import { ref } from 'vue'
const testName = ref('逍遥派-青草坪')
const testDesc = ref(
  '这里是树林中的一片比较大的空地，名曰：青草坪。因为处于密林之中所以这里平时很少有人来，但是不知道为什么，这里却经常有人迹出现。'
)
const btnClick = () => {
  alert(1)
}
const mapdata = ref<LocationMap>({
  up: {
    id: 1,
    roomName: '青草坪',
    roomDesc: ''
  },
  down: {
    id: 2,
    roomName: '青草坪',
    roomDesc: ''
  },
  left: {
    id: 3,
    roomName: '青草坪',
    roomDesc: ''
  },
  right: {
    id: 4,
    roomName: '青草坪',
    roomDesc: ''
  },
  leftUp: {
    id: 6,
    roomName: '青草坪',
    roomDesc: ''
  },
  leftDown: {
    id: 7,
    roomName: '青草坪',
    roomDesc: ''
  },
  rightUp: {
    id: 8,
    roomName: '青草坪',
    roomDesc: ''
  },
  rightDown: {
    id: 9,
    roomName: '青草坪',
    roomDesc: ''
  },
  location: {
    id: 5,
    roomName: '青草坪',
    roomDesc: ''
  }
})

const creatureList = ref<IBaseAttribute[] & ICharacterInfo[]>([
  {
    currentHp: 200,
    currentMp: 200,
    totalHp: 400,
    totalMp: 400,
    power: 0,
    physique: 0,
    speed: 0,
    wuxing: 0,
    name: '百里生命',
    sex: '',
    levelVaue: 1,
    levelName: '武士',
    birthday: new Date(),
    age: '',
    title: '神王'
  },
  {
    currentHp: 240,
    currentMp: 340,
    totalHp: 400,
    totalMp: 400,
    power: 0,
    physique: 0,
    speed: 0,
    wuxing: 0,
    name: '百里力量',
    sex: '',
    levelVaue: 6,
    levelName: '武神',
    birthday: new Date(),
    age: '',
    title: '神王'
  }
])

const messageList = logListStore()
messageList.addLog({
  id: 1,
  content: '你好吗！',
  type: ILogType.ENVLOG,
  colour: ''
})
</script>

<template>
  <div>
    <div class="text-color">组件：</div>
    <RoomDescription :room-name="testName" :room-desc="testDesc" />
    <div class="text-color">组件：</div>
    <GrayEdgeButton style="width: 60px" radius="5" @click="btnClick">青草坪</GrayEdgeButton>
    <div class="text-color">组件：</div>
    <div style="display: table; margin: 0 auto">
      <OperationMap :map-data="mapdata"></OperationMap>
    </div>

    <div style="height: 400px; display: flex;flex-direction: column;">
      <div class="text-color">组件：</div>
      <RoomCreatureList :creature-list="creatureList"></RoomCreatureList>
      <div class="text-color">组件：</div>
      <MessageContent :message-list="messageList.logs"></MessageContent>
    </div>
  </div>
</template>

<style scoped>
.text-color {
  color: #fff;
}
</style>
