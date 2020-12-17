const fs = require('fs')
const strArr = fs.readFileSync('./str.txt', {encoding: 'UTF-8'} ).toString().split('\n');

class Node{
  constructor(key, bag){
    this.key = key
    this.bag = bag
  }
}
class Day7{
  constructor(arr, gold){
    this.arr = arr
    this.gold = gold
  }
  directly(){
    let output;
    const directArr = []
    for(let i=0; i<this.arr.length; i++){
      if (this.arr[i].indexOf(this.gold) > 10) {
        const contain = this.arr[i].indexOf('bags contain')
        output = new Node(i, this.arr[i].substr(0,contain-1))
        directArr.push(output)
      }
    }
    return directArr
  }
  eitherOfWhich(str,i){
    
    const directArr = []
    const doubleCheck = this.directly()
    for(const v of doubleCheck){
      if(str.indexOf(v.bag) > 10){
        let output
        const contain = str.indexOf('bags contain')
        let yX = str.indexOf(v.bag)
        let l = v.bag.length
        output = new Node(i,  str.substr(0,contain-1) + ',' + str.substr(yX-2,l))
        // output = new Node(i,  +str.substr(yX-2,1))
        return output
      }
    }
  }
}

const round1 = new Day7(strArr,'shiny gold')

let checkAgain = []
for(let i=0; i<strArr.length; i++){
  checkAgain.push( round1.eitherOfWhich(strArr[i],i) )
}
const bagColors = round1.directly().length 
const otherBags = checkAgain.filter(d => d != null)

console.log('Sum of all Bags: ',bagColors + otherBags.length )
console.log('Directly: ',round1.directly() )
console.log('Either of Which: ',otherBags)
