//!  ************  TERNARY OPERATOR ************
// Şarta bağlı durumlar yazmak için başka ve daha kısa bir yöntem de ternary operator
// ES6 ile gelen bir özellik
let yas = 30;
if (yas >= 18) {
  console.log("oy kullanabilirsin");
} else {
  console.log("Oy kullanamazsın");
}

//  1. kullanım

yas >= 18 ? console.log("oy kullanabilirsin") : console.log("oy kullanamzsın");

yas >= 18 ? console.log("oy kullanabilir") : null;

console.clear();
// 2. kullanım  (daha yaygın)
let message = yas > 18 ? "oy kullanabilir" : "oy kullanamaz";
console.log(message);

// *********************************************************************

// yas18den büyük sağlıklı ve erkek : askerlik yapabilir

let age = 20;
let gender = "erkek";
let health = true;

if (age >= 18 && gender == "erkek" && health == true) {
  console.log("askerlik yapabilir");
} else {
  console.log("askerlik yapamaz");
}

const sonuc =
  age >= 18 && gender == "erkek" && health == true
    ? "askerlik yapabilir"
    : "askerlik yapamaz";
console.log(sonuc);
console.clear();
// ****************************************************************
// verilen sayı cift mi tek mi kontrol eden ternary ifade

let sayi = +prompt("Bir sayı giriniz:");
console.log(sayi);
let result = sayi % 2 === 0 ? "çifttir" : "tektir";
console.log(result);

// Hızı 120 den büyükse hızlı, 90dan büyükse normal, 90 altıysa yavaş yazan ternary

let speed = 70;
if (speed >= 120) {
  console.log("hızlı");
} else if (speed >= 90) {
  console.log(normal);
} else {
  console.log("yavas");
}

// nested ternary
let hız = speed > 120 ? "hızlı" : speed > 90 ? "normal" : "yavas";
console.log(hız);

// Verilen gün cumartesi ya da pazar ise hafta sonu değilse hafta içi yazsın.

let gün = "pazartesi";

let day = gün === "cumartesi" || gün === "pazar" ? "hafta sonu" : "hafta içi";
console.log(day);

console.clear();
