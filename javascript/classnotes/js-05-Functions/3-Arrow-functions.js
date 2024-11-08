// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// !3.YÖNTEM  : ARROW FUNCTIONS
// !-----------------------------------------------------------

console.log("****** 3- ARROW FUNCTIONS ******");

// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir. Hoisting desteklenmez
// //! Aksi takdirde hata alırsiniz.

const selamla = () => {
  console.log("Arrow functiondan merhaba");
};
selamla();

// Tek satırlık bir kod olacaksa {} ve return gerekmez

const naber = () => console.log("Merhaba");
naber();
// ---------------------------------------------------------------------
//  sayının 3 e bölünüp bölünemediğini kontrol eden kod bloğu

const bol = (num) => (num % 3 === 0 ? "3e bölünür" : "3e bölünmez");
const uceBolum = (num) => {
  let result;
  if (num % 3 === 0) {
    result = "3ebölünür";
  } else {
    result = "3ebölünmez";
  }
  return result;
};
console.log(bol(45));
console.log(uceBolum(45));

// Parametreli fonksiyon kullanımı
const add = (a, b) => document.write(a + b);
const sub = (a, b) => document.write(a - b);
const multp = (a, b) => document.write(a * b);
const division = (a, b) => document.write(a / b);

add(45, 78);
sub(45, 78);
multp(45, 78);
division(45, 78);

// Silindirin hacmini bulduran arrow function yazın
// pi r kare * h

const hacim = (r, h) => Math.PI * r * r * h;
// return kullanılacaksa {} olmalı
const hacim1 = (r, h) => {
  return Math.PI * r * r * h;
};
console.log(Math.floor(hacim(34, 3)));

// verilen sayıya kadar olan asal sayıları bulalım.

const asal = (num) => {
  if (num < 2) {
    console.log("Bu değere kadar asal sayı yok");
    return;
  }
  for (let i = 2; i <= num; i++) {
    if (i === 2) {
      console.log(i);
    } else {
      let entry = true;
      for (let j = 2; j < num; j++) {
        if (i % j === 0) entry = false;
        break;
      }
      entry ? console.log(i) : "";
    }
  }
};

asal(9);
