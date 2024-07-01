import type { CharacterStatus } from '@/enums/characterstatus'

export interface INormalAttack {
  /**
   * 普通攻击
   */
  normalAttack(): void
}

/**
 * 初始出生属性
 */
export interface IInitAttribute {
  /**
   * 先天力量
   */
  basePower: number

  /**
   * 先天体质
   */
  basePhysique: number

  /**
   * 先天速度
   */
  baseSpeed: number

  /**
   * 先天悟性
   */
  baseWuxing: number
}

/**
 * 基础属性
 */
export interface IBaseAttribute {
  /**
   * 当前血量
   */
  currentHp: number
  /**
   * 当前内力
   */
  currentMp: number
  /**
   * 总血量
   */
  totalHp: number
  /**
   * 总内力
   */
  totalMp: number

  /**
   * 力量
   */
  power: number

  /**
   * 体质
   */
  physique: number

  /**
   * 速度
   */
  speed: number

  /**
   * 悟性
   */
  wuxing: number
}

/**
 * 战斗属性接口
 */
export interface IFightAttribute {
  /**
   * 攻击
   */
  attack: number

  /**
   * 命中
   */
  hit: number

  /**
   * 防御
   */
  defense: number

  /**
   * 招架
   */
  zhaojia: number

  /**
   * 闪避
   */
  dodge: number

  /**
   * 暴击率
   */
  crit: number

  /**
   * 攻击速度
   */
  attackSpeed: number
}

/**
 * 效果属性
 */
export interface IEffectAttribute {
  /**
   * 最终伤害
   */
  finalDamage: number

  /**
   * 忽视防御
   */
  ignoreDefense: number

  /**
   * 暴击伤害
   */
  critDamage: number

  /**
   * 伤害减免
   */
  reductionDamage: number

  /**
   * 打坐效率
   */
  dazuoRatio: number

  /**
   * 学习效率
   */
  studyRatio: number

  /**
   * 练习效率
   */
  practiceRatio: number
}

/**
 * 人物信息
 */
export interface ICharacterInfo {
  /**
   * 人物名称
   */
  name: String

  /**
   * 人物性别
   */
  sex: String

  /**
   * 人物等级表示值
   */
  levelVaue: number
  /**
   * 人物等级（显示）
   */
  levelName: String
  /**
   * 人物出生日期
   */
  birthday: Date
  /**
   * 人物年龄
   */
  age: String
  /**
   * 人物称号
   */
  title: String
}

/**
 * 人物状态接口
 */
export interface ICharacterStatus {
  /**
   * 人物状态
   */
  status: CharacterStatus
}

/**
 * 进度值接口
 */
export interface IProgressValue {
  /**
   * 打坐进度值
   */
  dazuoProgressValue: number

  /**
   * 最大打坐进度值
   */
  maxDazuoProgressValue: number

  /**
   * 打坐每秒增加
   */
  dazuoInterval: number

  /**
   * 治疗每秒增加
   */
  zhiliaoInterval: number

  /**
   * 治疗进度值
   */
  treatmentProgressValue: number

  /**
   * 最大进度值
   */
  maxTreatmentProgressValue: number
}

/**
 * 人物接口
 */
export interface ICharacter
  extends ICharacterInfo,
    IInitAttribute,
    IFightAttribute,
    IBaseAttribute,
    ICharacterStatus,
    IEffectAttribute,
    IProgressValue {
  /**
   * 人物角色ID
   */
  id: number
}

/**
 * 获取所有子接口
 * @param character
 * @returns
 */
export function getAllByICharacter(character: ICharacter) {
  const characterInitAtt = character as IInitAttribute
  const characterBaseAtt = character as IBaseAttribute
  const characterFightAtt = character as IFightAttribute
  const characterEffectAtt = character as IEffectAttribute
  const characterCharacterInfo = character as ICharacterInfo
  const characterCharacterStatus = character as ICharacterStatus
  const characterProgressValue = character as IProgressValue
  return {
    characterInitAtt,
    characterBaseAtt,
    characterFightAtt,
    characterEffectAtt,
    characterCharacterInfo,
    characterCharacterStatus,
    characterProgressValue
  }
}
