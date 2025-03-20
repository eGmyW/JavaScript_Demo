// create array
let array = ["Bob","Tom","Jone","Talye"];
// array length 在练习代码的时候必须要先心里面有一个值，这样才能能够起到练习效果
console.log(array.length) 
// 改变数组的lenght会直接改变数组的大小
array.length = 7;

console.log(array)

for(let i=0; i<array.length;i++){
    console.log(array[i])
}

array[4] = "kingen";
array[5] = "berly";

console.log(array)

array[8] = "liron"; // 直接给超出索引的地方添加内容会直接改变array的长度 这个感觉真的很智能，不像c和java中的array，而且可以混着不同的类型
console.log(array);

// 数组相关函数
// indexOf 定位
 console.log(array.indexOf("liron"));

 // slice 切片 
console.log(array.slice(0,3)); // 不包括3
console.log(array.slice(5)); // 从5开始切割
console.log(array.slice()); // but i don`t pass parameters he will copy the entire array

// 从尾部添加和删除
let array1 = ["30"];
array1.push(2);
array1.push("sadfasd");
array1.pop();
console.log(array1);
array1.pop("30"); // 无法指定元素散出，穿了参数也是参数最后一个元素
console.log(array1);

array1.unshift(4)
array1.unshift(14)
console.log(array1);
array1.shift();
console.log(array1);


// 排序
array1.unshift(423);
array1.unshift(523);
array1.sort();
console.log(array1);
 
// 反转
array1.reverse();
console.log(array1);

// splice 这个方法可以指定删除的位置，并且针对该位置添加内容
array1.splice(1,1,"google","firefox","edge");
console.log(array1);


// concat
array2 = array.concat(array1);
console.log(array2);

// 如果数组中包含子数组会被全部拆出来
array3 = array1.concat([1,2,[3,4]]);
console.log(array3);
console.log(array3[8]);

// join 通过制定字符串连接
console.log(array2.join("-"));


// 多维数组
let array4 = [[1,2,3],[23,324,555],6];
console.log(array4[1][1]);






