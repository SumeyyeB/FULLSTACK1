/* -------------------------------------------------------------------------- */
//!                                CONDITONALS                             */
/* -------------------------------------------------------------------------- */
//! ******* IF -  ELSE
/*if ( şart )
{ 
    şart durumu doğru ise bu blok çalıştırılır
}
else{
    şart durumu doğru değilse bu blok çalıştırılır.
}
*/

// let sayi=Number(prompt("Bir sayı giriniz:"))
// let kalan = sayi % 2;

// if (kalan === 0) {
//   console.log("sayı çifttir");
// } else {
//   console.log("sayı tektir.");
// }

//! ******* IF - ELSE IF - ELSE
/* if ( şart1 )
{ 
    şart1 durumu doğru ise bu blok çalıştırılır
} 

else if (şart2 ){
    şart1 durumu doğru değil şart2 durumu doğru ise bu blok çalıştırılır
}

else{
    şart durumu doğru değilse bu blok çalıştırılır.
} */

// ********************************************************************

// Kullanıcıdan alınan iki sayı ve bir operator bilgisine göre  yapan programı yazınız.

const sayi1 = +prompt("Birinci sayıyı girin:");
const sayi2 = +prompt("İkinci sayıyı girinz:");
const operator = prompt("+, -, /, * işaretlerinden birini giriniz.");
let sonuc;

if (operator == "+") {
  sonuc = sayi1 + sayi2;
} else if (operator == "-") {
  sonuc = sayi1 - sayi2;
} else if (operator == "*") {
  sonuc = sayi1 * sayi2;
} else if (operator == "/") {
  // nested if yapısı (iç içe if yapısı)
  if (sayi2 != 0) {
    sonuc = sayi1 / sayi2;
  } else {
    sonuc = "infinity";
  }
} else {
  console.log("geçersiz operator girişi yaptınız.");
}

// 1. kısayol
if (sonuc) {
  console.log(sonuc);
} else {
  console.log("Bir sonuç bile elde demediniz.");
}

// 2. kısayol short circuit - kısa devre
// && ve ||

console.log(sonuc || "Bir sonuç bile elde demediniz");
