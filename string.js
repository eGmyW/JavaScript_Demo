// 操作字符串
let s = "Hello,World!";
console.log(s.length); // 这个我感觉比较特殊的点是这个length是字符串的属性，而不是一个函数
s[0];

console.log(s[0]);
console.log(s[12]); // 超出的部分会返回undfßefined
console.log(s.toUpperCase()); // 将字符串全部大写 这个toUpperCase是一个方法，所以需要加上()
console.log(s.toLowerCase()); // 将字符串全部变小写；

console.log(s) // 看看s本身改变了没有，如果没有的话那就是返回了一个新的字符串 果然没有～！

// 定位指定的字符串的具体位置
let s3 = "llo";
console.log(s.indexOf(s3)); 
console.log(s.indexOf("liron"));  // 未找到指定字符串就会返回 -1

// 字符串截取 ps.自从我会使用ai以来几乎就没有自己写过代码了，这种感觉很不好，那种完全失控的感觉，就连这种字符串截取我都让ai去写
console.log(s.substring(0,6));
console.log(s.substring(6));

const name = require("./helloworld"); // 导入别的模块的变量
console.log(name);