for (let i = 1; i<= 20; i++)
    console.log(i)
for (let b = 20; b >= 1; b--)
    console.log(b)

for (let g = 2; g <= 50; g +=2 ){
    console.log(g)
}
let sum = 0
for (let l = 1; l <= 100; l += 1 ){
    sum += l;
}
console.log(sum)
let res = 0
for (let k = 1; k <= 10; k++ ){
    console.log(k ** 2)
}
for (let u = 0; u <= 100; u += 5)
    console.log(u)

const user = {
    name : "syima",
    age : 15,
    city : "bishkek"
}
console.log(user.name , user.age, user.city)
user.age = 16

user.phone = '996 509 999 909'

delete user.city

console.log( 
    "email" in user
)
for (let key in user){
    console.log(key)
}
for (let key in user) {
  console.log(user[key])
}

const keysCount = Object.keys(user).length
console.log('Количество свойств:', keysCount)



const kotop = [1, 2, 3, 4, 5]

for (let m = 0; m < kotop.length; m++) {
    console.log(kotop[m])
}

let totalSum = 0
for (let m = 0; m < kotop.length; m++) {
    totalSum += kotop[m]
}
console.log(totalSum)

let max = kotop[0]
for (let m = 0; m < kotop.length; m++) {
    if (kotop[m] > max) {
        max = kotop[m]
    }
}
console.log(max)

let min = kotop[0]
for (let m = 0; m < kotop.length; m++) {
    if (kotop[m] < min) {
        min = kotop[m]
    }
}
console.log(min)

console.log(kotop.length)

let evenSum = 0
for (let m = 0; m < kotop.length; m++) {
    if (kotop[m] % 2 === 0) {
        evenSum += kotop[m]
    }
}
console.log(evenSum)

let legendaCount = 0
for (let m = 0; m < kotop.length; m++) {
    if (kotop[m] < 0) {
        legendaCount++
    }
}
console.log(legendaCount)

let mult = 1
for (let m = 0; m < kotop.length; m++) {
    mult *= kotop[m]
}
console.log(mult)

let maxIdx = 0
for (let m = 0; m < kotop.length; m++) {
    if (kotop[m] > kotop[maxIdx]) {
        maxIdx = m
    }
}
console.log(maxIdx)

let minIdx = 0
for (let m = 0; m < kotop.length; m++) {
    if (kotop[m] < kotop[minIdx]) {
        minIdx = m
    }
}
console.log(minIdx)

let topor = false
for (let m = 0; m < kotop.length; m++) {
    if (kotop[m] === 10) {
        topor = true
    }
}
console.log(topor)

let hCount = 0
for (let m = 0; m < kotop.length; m++) {
    if (kotop[m] === 7) {
        hCount++
    }
}
console.log(hCount)