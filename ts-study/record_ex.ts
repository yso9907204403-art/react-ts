type Fruit = "apple" | "banana"

const prices: Record<Fruit, number> = {
    apple: 2000,
    banana: 1500
}
console.log(`가격: ${prices.apple}`);

type Stringmap = Record<string, string>

const translations: Stringmap = {
    hello: "안녕"
}

console.log(translations.hello);