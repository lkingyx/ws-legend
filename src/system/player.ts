import { getAllByICharacter, type ICharacter, type IInitAttribute } from "@/entitys/character";
import { System } from "./system";
import { CharacterStatus } from "@/enums/characterstatus";
import { generateId } from "@/utils/IdUtils";

export class CreatePlayerSystem extends System {

    /**
     * 创建角色
     * @param name 名称
     * @param sex 性别，男、女
     * @param baseAtt 先天属性
     */
    createPlayer(name: String, sex: String , baseAtt: IInitAttribute) {
        const playerInfo = baseAtt as ICharacter;
        playerInfo.id = generateId();
        const playerAttributes = getAllByICharacter(playerInfo);
        // 人物信息
        playerAttributes.characterCharacterInfo.name = name;
        playerAttributes.characterCharacterInfo.age = sex;
        playerAttributes.characterCharacterInfo.age = '十四岁';
        playerAttributes.characterCharacterInfo.birthday = new Date();
        playerAttributes.characterCharacterInfo.levelVaue = 0;
        playerAttributes.characterCharacterInfo.levelName = '普通百姓';
        playerAttributes.characterCharacterInfo.title = ''
        //基础属性
        playerAttributes.characterBaseAtt.currentHp = 100;
        playerAttributes.characterBaseAtt.totalHp = 100;
        playerAttributes.characterBaseAtt.currentMp = 0;
        playerAttributes.characterBaseAtt.totalMp = 0;
        playerAttributes.characterBaseAtt.power = 0;
        playerAttributes.characterBaseAtt.physique = 0;
        playerAttributes.characterBaseAtt.speed = 0;
        playerAttributes.characterBaseAtt.wuxing = 0;
        // 战斗属性
        playerAttributes.characterFightAtt.attack = 0,
        playerAttributes.characterFightAtt.hit = 0,
        playerAttributes.characterFightAtt.defense = 0,
        playerAttributes.characterFightAtt.zhaojia = 0,
        playerAttributes.characterFightAtt.dodge = 0,
        playerAttributes.characterFightAtt.crit = 0,
        playerAttributes.characterFightAtt.attackSpeed = 0,
        
        // 效果属性
        playerAttributes.characterEffectAtt.finalDamage = 0;
        playerAttributes.characterEffectAtt.ignoreDefense = 0;
        playerAttributes.characterEffectAtt.critDamage = 1.50;
        playerAttributes.characterEffectAtt.reductionDamage = 0;
        playerAttributes.characterEffectAtt.dazuoRatio = 0;
        playerAttributes.characterEffectAtt.studyRatio = 0;
        playerAttributes.characterEffectAtt.practiceRatio = 0;
        //人物状态
        playerAttributes.characterCharacterStatus.status = CharacterStatus.IDLE;
        this.game.playerInfo = playerInfo;
        return playerInfo;
    }
}