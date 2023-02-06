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

// // 従来の関数
// const func1 = function (str) {
//   return str;
// };

// // console.log(func1("func1です"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// };
// // console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func3(1, 14334343));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "かず",
//   age: 28
// };
// // const message1 = `私の名前は${myProfile.name}です。${myProfile.age}歳です。`

// // console.log(message2);
// const {name, age} = myProfile;
// const message2 = `私の名前は${name}です。${age}歳です。`

// console.log(message2);

// const myProfile = ['かず', 28];
// const message3 = `名前は${myProfile[0]}です。${myProfile[1]}歳です。`;
// console.log(message3);

/**
 * デフォルト値
 */
// const sayHello = (name = "誰か") => console.log(`こんにちは！${name}さん！`);

// sayHello();
/**
 * スプレッド構文
 */
// // 配列の展開
// // const arr1 = [1, 2, 10];
// // // console.log(arr1);
// // // console.log(...arr1);
// // const sumFunc = (num1, num2, num3) => console.log((num1 + num2) * num3);
// // sumFunc(...arr1);

// // まとめる
// // const arr2 = [1, 2, 3, 4, 5];
// // const [num1, num2, ...arr3] = arr2;
// // console.log(num1);
// // console.log(num2);
// // console.log(arr3);

// // 配列のコピー・結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// // コピー
// // const arr6 = [...arr4];
// // // console.log(arr4);
// // console.log(arr6);
// // const arr7 = [...arr4, ...arr5];
// // console.log(arr7);
// const arr8 = arr4;
// arr4[0] *= 100;
// console.log(arr8);

/**
 * mapやfilterを使った処理
 */
const nameArr = ["田中", "山田", "渡部"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });

// console.log(nameArr2);
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);
// nameArr.map((name, index) =>
//   console.log(`${index + 1}番目は${name}さんでーす。`)

// );
const newNameArr = nameArr.map((name) => {
  if (name === "渡部") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);
