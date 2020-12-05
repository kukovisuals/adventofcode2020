// f = front 
// b = back
// l = left
// r = right
// chars < 8 = [f,b]
// rows = 128  	
// chars[0] < 63 = front 
// char[0] > [63-127] = back 

const x = ['FBFBBFFRLR'];
const start = [0,127]
const rows = [0,127]
const f1 = rows[0] // lower half 
const b1 = Math.ceil(f1/2) // upper half to 32-63
const f2 = Math.floor( (f1-b1)/2) + b1 // lower half ^
const b2 = Math.ceil( (f2-b1)/2 ) + b1 // upper half
const b3 = Math.ceil( (f2-b2)/2 ) + b2 // upper half 
const f3 = Math.floor( (f2-b3)/2 ) + b3 // lower half

const colm = [4,7]
const r1 = Math.ceil(colm[1]/2) // upper half
const l1 = Math.floor((colm[1]-r1)/2 ) + r1 // lower half 


const f = half(127,'f')
const b = fx(half(f,'b'), f, 'b')
// console.log("b", b)

function half(num,char){
	const x = char == 'f' ? Math.floor(num/2) : Math.ceil(num/2)
	console.log(x)
	return x
}

function fx(num, index, chr) {
	const x = ( (num)/2) + index
	console.log(x)
	const y = chr == 'f' ? Math.floor(x) : Math.ceil(x) 
	return x 
}