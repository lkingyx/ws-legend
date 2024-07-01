import type { ICharacter, IFightAttribute } from "@/entitys/character";
import { System } from "./system";

/**
 * 属性计算系统
 */
export class AttributeComputeSystem extends System {

    /**
     * 计算战斗属性
     */
    computeFightAttribute(character: ICharacter) {
        if(!character) character = this.game.playerInfo
        const fa = character as IFightAttribute;

        fa.attack = character.basePower
        fa.attack += character.basePower / 10 * character.power

        fa.zhaojia = character.basePower / 0.5

        fa.attackSpeed = character.baseSpeed * 0.04
        fa.crit = character.baseSpeed * 0.001
        fa.zhaojia += character.baseSpeed * 0.5
        fa.dodge += character.baseSpeed / 10 * character.speed
        
    }
}

/**
 * 血量计算系统
 */
export class HPComputeSystem extends System { 

    zhiliao(value: number, character?: ICharacter){
        if(!character) character = this.game.playerInfo
        let newHp = character.currentHp + value
        if(newHp > character.totalHp) {
            newHp = character.totalHp;
        }
        character.currentHp = newHp
    }
}