
/**
 * 技能接口
 */
export interface ISkill {
    /**
     * 技能ID
     */
    id: number;

    /**
     * 技能名字
     */
    skillName: String;

    /**
     * 技能释放词条列表
     */
    skillEntryList: Array<String>;
}