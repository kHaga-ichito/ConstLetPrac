// /**
//  * const letの変数宣言
//  */
// // var var1 = "こおろぎ";
// // console.log(var1);

// // // var変数は上書き可能
// // var1 = 45 + "際";
// // console.log(var1);

// // // varは再宣言可能
// // var var1 = "これも可能";
// // console.log(var1);

// let var2 = "let変数";
// console.log(var2);

// // letは上書き可能
// var2 = "letは上書き可能";
// console.log(var2);

// // 再宣言は不可
// // let var2 = "再宣言は不可";

// // const
// const var3 = "const変数";

// // constは再宣言不可
// // var3 = "";
// // const var3 = "ss";

// const var4 = {
//   name: "じゃけdぇ",
//   age: 28
// };
// console.log(var4);

// // constでもオブジェクトの中身は変更可能
// var4.name = "再宣言可能";
// var4.address = "地球";
// console.log(var4);

// // const配列
// const var5 = ["dog", "cat"];
// console.log(var5);

// // 上書き、追加可能
// var5[0] = "wolf";
// var5.push("monster");
// console.log(var5);

/**
 * テンプレート文字列
 */
// const name = "かず";
// const age = 28;
// // 「私の名前はかずです。28歳です。」

// // 従来の方法
// // const message1 = "私の名前は" + name + "です。" + age + "歳です。";
// // console.log(message1);

// // テンプレートを用いた方法
// const message2 = `私の名前は${name}です。${age}歳です。`;
// console.log(message2);

/**
 * アロー関数
 */

// 従来の関数
const func1 = function (str) {
  return str;
};

// console.log(func1("func1です"));

// アロー関数
const func2 = (str) => {
  return str;
};
// console.log(func2("func2です"));

const func3 = (num1, num2) => {
  return num1 + num2;
};

console.log(func3(1, 14334343));
