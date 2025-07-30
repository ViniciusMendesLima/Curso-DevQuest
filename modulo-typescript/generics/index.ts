function makeArray<T>(item: T): T[] {
  return[item]
}

const numbers = makeArray(10)
console.log(numbers);


const names = makeArray("Vinicius")

console.log(names);
