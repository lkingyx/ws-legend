export interface Room {
  id: number
  roomName: string
  roomDesc: string
}

export interface LocationMap {
  up?: Room
  down?: Room
  left?: Room
  right?: Room
  leftUp?: Room
  leftDown?: Room
  rightUp?: Room
  rightDown?: Room
  location: Room
}
