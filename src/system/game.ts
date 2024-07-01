import type { ICharacter } from '@/entitys/character';
import { LogSystem } from './LogSystem'
import { HPComputeSystem } from './compute';

export class Game {
    /**
     * 日志系统
     */
    logSystem: LogSystem = new LogSystem(this);

    /**
     * 
     */
    hpComputeSystem: HPComputeSystem = new HPComputeSystem(this);

    /**
     * 玩家
     */
    playerInfo!: ICharacter;

    constructor() {
        this.initLoad();
    }

    initLoad() {
        
    }
}