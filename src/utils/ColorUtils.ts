
/**
 * 内容转换颜色
 */
export function convertColour(content: String, colour: String): String {
    if (content.includes("</span>")) return content;
    return `<span style="color: ${colour}">${content}</span>`;
}