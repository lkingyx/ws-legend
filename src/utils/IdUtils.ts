
export function generateId(): number {
    
    const timeStamp = new Date().getTime();
    const randomNum = Math.min(Math.ceil(Math.random() * 1000) + 1000, 9998);
    console.log(randomNum)
    return parseInt(timeStamp.toString() + randomNum.toString());
}