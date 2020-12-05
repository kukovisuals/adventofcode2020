// f = front 
// b = back
// l = left
// r = right
// chars < 8 = [f,b]
// rows = 128  	
// chars[0] < 63 = front 
// char[0] > [63-127] = back 

const x = ['FBFBBFFRLR'];
const rows = [63,64]
const f1 = rows[0] // lower half 
const b1 = Math.ceil(f1/2) // upper half to 32-63
const f2 = Math.floor( (f1-b1)/2) + b1 // lower half ^
const b2 = Math.ceil( (f2-b1)/2 ) + b1 // upper half
const b3 = Math.ceil( (f2-b2)/2 ) + b2 // upper half 
const f3 = Math.floor( (f2-b3)/2 ) + b3 // lower half
console.log( b1,f1 )
console.log( b1, f2 )
console.log( b2, f2 )
console.log( b3, f2 )
console.log( b3, f3, '\n' )

const colm = [4,7]
const r1 = Math.ceil(colm[1]/2) // upper half
const l1 = Math.floor((colm[1]-r1)/2 ) + r1 // lower half 

console.log(r1, 7)
console.log(r1 , l1)