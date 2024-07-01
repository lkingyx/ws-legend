import type { ILogType } from "@/enums/logtype";

/**
 * 日志接口
 */
export interface ILog {

    /**
     * 日志ID
     */
    id: number;

    /**
     * 日志内容
     */
    content: String;

    /**
     * 日志类型
     */
    type: ILogType;

    /**
     * 日志默认颜色
     */
    colour: String;
}