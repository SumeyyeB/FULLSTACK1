// ? =========================================================
// ?                    FONKSİYONLAR
// ?==========================================================

//!----------------------------------------------------------
//! 2.YÖNTEM  : FUNCTION EXPRESSION
//!-----------------------------------------------------------

//**********************************************************/
//! * --------Function-Expression----------------------------*/
// 1-Fonksiyon bir değişkene tanımlanır.
// 2-Function kelimesini ardından fonksiyonun ismi verilir.
// 3-Sonra da bir parantez açılıp kapatılır.
//? önce fonksiyon oluşturmak şart - hoisting olmaz

const adYazdir = function () {
  console.log("Merhaba");
};
adYazdir();

// ***********Parametreli function exp.***************
const isEvenOdd = function (a) {
  // a=67
  let result = a % 2 === 0 ? "Even" : "Odd";
  //     return "yeni sonuc"
  //   return a % 2 === 0 ? "Even" : "Odd";
  //   return "odd"
  if (a < 10) {
    return a;
  } else {
    return result;
  }
};
let sayi = 34;
console.log(isEvenOdd(sayi));

// *****Verilen 3 sayıdan en büyüğünü bulun. (Math.max kullanmadan)****
// a=67
// b=34
// c=98
// !-----------------------------------------------------------
// const enBuyuk = function (a, b, c) {
//   if (a >= b && a >= c) {
//     return a;
//   } else if (b >= a && b >= c) {
//     return b;
//   } else {
//     return c;
//   }
// };

// let a = 67;
// let b = 34;
// let c = 98;
// console.log("En büyük sayı:", enBuyuk(a, b, c));
// !-----------------------------------------------------------
// !-----------------------------------------------------------
// let a = 67;
// let b = 34;
// let c = 98;

// const enb = function () {
//   if (a > b && a > c) {
//     console.log(a);
//   } else if (b > a && b > c) {
//     console.log(b);
//   } else {
//     console.log(c);
//   }
// };
// enb();
//
// !-----------------------------------------------------------

let a = 67;
let b = 34;
let c = 98;

const enb = function () {
  let biggest = a;
  if (b > biggest) {
    biggest = b;
  }
  if (c > biggest) {
    biggest = c;
  }
  console.log(biggest);
};
enb();
