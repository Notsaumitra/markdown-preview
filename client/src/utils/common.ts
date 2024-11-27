export const numParser=(num: number)=>{
    const doubleNum = makeNumDouble(num);

    return doubleNum;
}

const makeNumDouble=(num:number)=>{
    return num*2;
}