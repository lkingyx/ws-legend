import type { ICharacter, ICharacterStatus } from "@/entitys/character";
import { System } from "./system";
import { setInterval } from "timers";
import { CharacterStatus } from "@/enums/characterstatus";

/**
 * 打坐系统
 */
export class DazuoSystem extends System {

    /**
     * 开始打坐
     */
    start(character?: ICharacter){

        if(!character) character = this.game.playerInfo
        const status = character as ICharacterStatus;
        status.status = CharacterStatus.DAZUO;
        const dzInterval = setInterval(() => {
            if(status.status == CharacterStatus.IDLE) {
                clearInterval(dzInterval)
            }
            character.dazuoProgressValue += character.dazuoInterval
            if(character.dazuoProgressValue >= character.maxDazuoProgressValue){
                if(character.currentHp <= character.totalHp) {
                    character.currentHp += character.dazuoProgressValue
                    character.dazuoProgressValue = character.maxDazuoProgressValue - character.dazuoProgressValue
                }
            }
        }, 1000)
    }

    /**
     * 结束打坐
     */
    end(character?: ICharacter){

        if(!character) character = this.game.playerInfo
        const status = character as ICharacterStatus;
        if(status.status != CharacterStatus.DAZUO) return
        status.status = CharacterStatus.IDLE;
    }
}