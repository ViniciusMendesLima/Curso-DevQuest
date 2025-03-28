/*
    == ------ igual ------ a==b -------verdadeiro se a for igual a b
    === ------- idêntico --- a===b ---- verdadeiro se a for idêntico a b
    !== ----- não idêntico --- a !== b ---- verdadeiro se o a não for idêntico a b
    != --- diferente ---- a != --- verdadeiro se o a for diferente de b
    < ---- menor que --- a < b --- verdadeiro quando a for menor que b
    <= ---- menor iguar que --- a <= b ---- verdadeiro quando a for menor ou igual a b
    > --- maior que  ---- a > b ----- verdadeiro quando a for maior que b
    >= ---- maior igual que --- a >= b ----- verdadeiro quando a for maior ou igual a b
*/

// const a = 3
// const b = 3

// console.log(a >= b)


const a = 2
const b = 2

// E

console.log(a === b && a <= b)
// v e v = v

console.log(a === b && a < b)
// v e f = f

console.log(a > b && a === b)
// f e v = f

console.log(a > b && a < b)
// f e f = f

// OR

console.log(a === b || a <= b)
//v ou v = v

console.log(a === b || a < b)
//v ou f = v

console.log(a > b || a === b)
//f ou v = v

console.log(a > b || a < b)
//f ou f = f

// NOT

console.log(!(a === b))  //false

console.log(!(a < b))  //true
