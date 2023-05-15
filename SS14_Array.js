// let n = prompt("nhap vao cac so ngan cach nhau bang dau ' ");
// let sum = 0;
// let a = n.split(",");
// console.log(a);
// for (i = 0; i <= a.length - 1; i++) {
//   sum = sum + parseInt(a[i]);
// }
// console.log(sum);

// Bài 2

// let n = prompt("nhap vao day so");
// let a = n.split(",");
// let min = a[0];
// for (i = 0; i <= a.length - 1; i++) {
//   if (min > a[i]) {
//     min = a[i];
//   }
// }
// console.log(min);

// Bài 3

// let numberArray = [3, 4, 6, -9, -10, -88, 2];
// let number = +prompt("Nhập vào số cần tìm");
// for (let i = 0; i < numberArray.length; i++) {
//   if (number == +numberArray[i]) {
//     console.log(`${number} is found in my array at index ${i}`);
//     break;
//   } else if (number != +numberArray[i] && i == numberArray.length - 1) {
//     console.log("is not");
//   }
// }

// Bài 4

// let todoList = ["Go to bed at 11pm", "Do homework at 8pm"];
// let action = prompt("Nhập vào 1 trong 4 chữ cái C , R , U , D");

// switch (action) {
//   case "C":
//     let newList = prompt("Nhập vào todo mới");
//     todoList.push(newList);
//     console.log(todoList);
//     for (i = 0; i <= todoList.length - 1; i++) {
//       console.log(`${i + 1}. ${todoList[i]}`);
//     }
//     break;
//   case "R":
//     for (i = 0; i <= todoList.length - 1; i++) {
//       console.log(`${i + 1}. ${todoList[i]}`);
//     }
//     break;
//   case "U":
//     let vitri = prompt("Vị trí muốn update");
//     let noidung = prompt("M muốn update gì");
//     if (noidung && vitri <= todoList.length) {
//       todoList[vitri] = noidung;
//       console.log(todoList);
//     } else {
//       alert("Lỗi");
//     }
//     for (i = 0; i <= todoList.length - 1; i++) {
//       console.log(`${i + 1}. ${todoList[i]}`);
//     }
//     break;
//   case "D":
//     let vitri2 = prompt("Vị trí muốn xoá");
//     if (vitri2 && vitri2 <= todoList.length - 1) {
//       todoList.splice(vitri2,1);
//     } else {
//       alert("Lỗi");
//     }
//     for (i = 0; i <= todoList.length - 1; i++) {
//       console.log(`${i + 1}. ${todoList[i]}`);
//     }
//     break;
// }

// Bài 5
// const bakery = ["chocolate", "marshmallow", "cookies", "chips"];
// let cart = [];
// do {
//   item = prompt("Nhập tên sản phẩm muốn mua");
//   if (!bakery.includes(item)) {
//     console.log("We don't have that item");
//   } else {
//     let soluong = +prompt("Nhập số lượng muốn mua");
//     index = -1;
//     for (let i = 0; i <= cart.length - 1; i++)
//       if (cart[i][0] == item) {
//         index = i;
//         break;
//       }
//     if (index != -1) {
//       cart[index][1] += soluong;
//     } else {
//       cart.push([item, soluong]);
//     }
//     let result = "";
//     for (let i = 0; i <= cart.length - 1; i++) {
//       result += `\n ${i + 1}. ${cart[i][0]}: ${cart[i][1]}`;
//     }
//     console.log(`tong sp mua la :${result}`);
//     isContinue = prompt("Bạn có muốn tiếp tục mua k : yes/no");
//   }
// } while (isContinue == "yes");
// console.log("thank you");
//Bài 6
// let list = prompt("nhập vào danh sách tên ngăn cách nhau bằng dấu phẩy");
// let newList = list.split(",");
// let newList2 = [];
// for (let i = 0; i <= newList.length - 1; i++) {
//   newList2.push(`<${newList[i]}>`);
// }
// alert(newList2);

//Bài 12
// let number = prompt("Nhập một chuỗi số có 3 chữ số:");
// let ones = ["", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
// let tens = [
//   "",
//   "mười",
//   "hai mươi",
//   "ba mươi",
//   "bốn mươi",
//   "năm mươi",
//   "sáu mươi",
//   "bảy mươi",
//   "tám mươi",
//   "chín mươi",
// ];
// let digit_1 = parseInt(number[0]);
// let digit_2 = parseInt(number[1]);
// let digit_3 = parseInt(number[2]);
// if (digit_2 === 0 && digit_3 === 0 && number >= 100 && number <= 999) {
//   console.log(ones[digit_1], "trăm");
// } else if (number >= 100 && number <= 999) {
//   console.log(ones[digit_1], "trăm", tens[digit_2], ones[digit_3]);
// } else {
//   console.log("lỗi");
// }

// Bài 7

// let number = prompt("Nhập vào dãy số ");
// let newNumber = number.split(",");
// let newNumber2 = [];
// for (let i = 0; i <= newNumber.length - 1; i++) {
//   if (newNumber[i] % 2 != 0) {
//     newNumber2.push(newNumber[i]);
//   }
// }
// console.log(newNumber2);

// Bài 8

let numbers = [32, 52, 1, 9, -1, 8, 4, 3, 10];
let maxNumber = numbers[0];
let minNumber = numbers[0];
let sumNumber = 0;
let multiNumber = 1;
let avgNumber = 0;
for (let i = 0; i <= numbers.length - 1; i++) {
  if (maxNumber < numbers[i]) {
    maxNumber = numbers[i];
  }
  if (minNumber > numbers[i]) {
    minNumber = numbers[i];
  }
  sumNumber = sumNumber + numbers[i];
  multiNumber = multiNumber * numbers[i];
  avgNumber = sumNumber / numbers.length;
}
console.log("max la:" + maxNumber);
console.log("min la:" + minNumber);
console.log("tong la:" + sumNumber);
console.log(multiNumber);
console.log(avgNumber);
console.log(numbers);
console.log(numbers.reverse());
numbers.sort((a, b) => a - b);
console.log(numbers);

// Bài 9

// let str = "Hello";
// let newStr = str.split("").reverse().join("");
// console.log(newStr);
