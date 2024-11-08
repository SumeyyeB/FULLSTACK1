//!              OPERATORS             */
//! Aritmatik Operatorler

let a = 10;
let b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** 10);
console.log(a % b); // mod alma operatoru : kalan bulma

// İşlem Önceliği : üs ,parantez içi, çarpma/bölme, çıkarma/toplama

// Dakika olarak verilen aşağıdaki değer kaç saat kaç dakika

let sure = 377;
let saat = Math.floor(sure / 60);
console.log(saat);

let dakika = sure % 60;
console.log(dakika);

console.log(`${saat}:${dakika}`);

// INCREMENT ++  -  DECREMENT --

// x ++ önce yazdır sonra arttır
// ++ x önce arttır sonra yazdır

let x = 10;

console.log("Increment");
console.log(++x);

console.log("decrement");
console.log(x--);
console.log(--x);

// ++x: Artırma işlemi önce yapılır, sonra yazdırılır.
// x--: Yazdırma işlemi önce yapılır, sonra azaltma işlemi gerçekleşir.

// ASSIGNMENT OPERATORS
// console.clear();

let t = 7;
let z = 6;
console.log(t);
// atama operatoru =
// t=z    z değerini t ye aktarıyoruz.
t = z;

t = t + z;
console.log(t);
t += z;
console.log(t);
t -= z;
console.log(t);
t *= 3; // t=t*3
console.log(t);
t /= 4;
console.log(t);
t %= 3;
console.log(t);
t **= 5;
console.log(t);

// console.clear();

/* ---------------------------------- */
/*        COMPARISON OPERATORS        */
/* ---------------------------------- */
//Karşılaştırma opretörleri bize Boolean bir değer döndürür.

let c = 2;
let d = "2";

console.log(typeof c);
console.log(typeof d);
console.log("c ve d birbirine eşit mi?", c == d);
// == veri tipine bakmaz. Sadece değeri kontrol eder.
console.log("c ve d birbirine eşit mi?", c === d);
// === Veri tipi ve değeri kontrol eder.

// otomatik tip dönüşümü  - Type Conversion
//  + hariç diğerlerinde bir string ve number ifade işleme alınıyorsa js inisiyatif kullanır ve işlemi gerçekleştirir.

console.log(c - d);

console.log(c * d);

console.log(c != d); //Burada sadcee değere bakar. 2 = 2 ye eşittir. buradaki soru 2 2 ye eşit değildir mi?  yani sonuç olarak false döner.

console.log(c !== d); // Hem veri tipi bakar. Hem de değere bakar. Değer eşit fakat veri tipi eşit olmadığından false döner. Fakat !== bunun anlamı eşit değildir mi? yani evet eşit değildir. Sonuç olarak true döner.
// console.clear();
// *******************************************************************************************************************************************************************************************************************************************

console.log(5 > 4);
console.log(3 < 10);
console.log(6 >= 6);
console.log(9 >= 6);
console.log(12 <= 19);

// console.clear();

/* ---------------------------------- */
/*        LOGICAL OPERATORS        */
/* ---------------------------------- */

//! AND operatoru &&
// Mükemmelliyetçidir. Her şey true olmalı. False gördüğü an işlem biter.

console.log(Boolean(""));
console.log(Boolean({}));
console.log(Boolean([]));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(false));

console.log(true && false && true);
console.log("elma" && "armut" && "portakal" && "kiraz");
/* ------------------------------------------------------------------------------------------------ */
//! OR operatoru ||
//? true varsa true döndürür. Hepsi false ise en son değeri döndürür.
console.log(false || false || false || false || true || false);
console.log(null || 0 || "" || "tr" || [] || "merhaba");
