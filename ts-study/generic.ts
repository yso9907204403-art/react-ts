const scores: Array<number> = [80, 90, 100];
console.log(scores);
console.log(scores[0] + scores[1]);

function getFirst<T>(arr: T[]): T{
    return arr[0];
}

const num = getFirst<number>([10, 20, 30]);
const str = getFirst<string>(["사과", '바나나'])

console.log(num);