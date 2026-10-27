/* function sub(x:number, y:number){
    return x - y;
} */ 

const sub = (x:number, y: number): number => x - y;

const result = sub(5,10);
console.log(result);

const greet = (name: string): void => {
    console.log(`hello, ${name}!`);
}
greet("d")