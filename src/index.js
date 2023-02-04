/**
 * const letの変数宣言
 */
// var var1 = "こおろぎ";
// console.log(var1);

// // var変数は上書き可能
// var1 = 45 + "際";
// console.log(var1);

// // varは再宣言可能
// var var1 = "これも可能";
// console.log(var1);

let var2 = "let変数";
console.log(var2);

// letは上書き可能
var2 = "letは上書き可能";
console.log(var2);

// 再宣言は不可
// let var2 = "再宣言は不可";

// const
const var3 = "const変数";

// constは再宣言不可
// var3 = "";
// const var3 = "ss";

const var4 = {
  name: "じゃけdぇ",
  age: 28
};
console.log(var4);

// constでもオブジェクトの中身は変更可能
var4.name = "再宣言可能";
var4.address = "地球";
console.log(var4);

// const配列
const var5 = ["dog", "cat"];
console.log(var5);

// 上書き、追加可能
var5[0] = "wolf";
var5.push("monster");
console.log(var5);
