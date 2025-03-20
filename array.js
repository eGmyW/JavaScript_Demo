// create array
let array = ["Bob","Tom","Jone","Talye"];
// array length 在练习代码的时候必须要先心里面有一个值，这样才能能够起到练习效果
console.log(array.length) 
// 改变数组的大小
array.length = 7;

console.log(array)

for(let i=0; i<array.length;i++){
    console.log(array[i])
}

array[4] = "kingen";
array[5] = "berly"