// Çıktı Alma ve Kullanıcı İle Etkileşim Yolları
// ***** Console Kullanımı *****

console.log("Harici dosyadayız.");
console.error("Bu bir hata mesajıdır.");
console.warn("Bu bir uyarı mesajıdır.");

// console.clear();
console.table([
  { name: "Harvey", age: 30 },
  { name: "Helen", age: 38 },
]);

// ****ALERT****
// kullanıcıya bir popup ile uyarı mesajı verilir.
// alert("bu size inceden bir uyarıdır.");

// ***  DOCUMENT.WRITE() ***
document.write("<h1>Browser'da sonucu bu şekilde gösterebilirsin.</h1>");

//  **** PROMPT KULLANIMI ****
// Kullanıcıdan bilgi alınmasını sağlar.
let ad = prompt("Adınızı Girin:");
console.log(ad, "merhaba nasılsın");
console.log(ad);
