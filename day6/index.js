const fs = require('fs')
const strArr = fs.readFileSync('./str.txt', {encoding: 'UTF-8'} ).toString().split('\n\n');

function Day6(arr){
  const Answers = arr.map( v => v.split('\n').join(''))
  const reducer = (acc, i) => acc + i;
  const output = Array.from(Answers, v => new Set(v).size ).reduce(reducer)
  return output
}

console.time('part1')
console.log(Day6(strArr),' Answered Yes!')
console.timeEnd('part1')