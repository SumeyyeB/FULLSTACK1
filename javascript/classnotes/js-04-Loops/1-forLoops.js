/* -------------------------------------------------------------------------- */
//!                                 FOR LOOP                                  */
/* -------------------------------------------------------------------------- */
// for (başlangıç; koşul; artış) {
//     // Döngü bloğu
//   }

// Başlangıç: Döngünün başlangıcında yapılacak işlem. Bu genellikle bir sayaç değişkeni tanımlar.
// Koşul: Döngünün çalışmaya devam etmesi için gereken koşuldur. Koşul sağlanmadığında döngü sona erer.
// Artış: Her döngü sonunda sayaç değişkeninin nasıl değişeceğini belirler.

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// *************************************************************************
// 3 kişinin iki notunu alan ve ortalamsını (herbirinin ve hepsinin) bulan programı yazın.
// !-------------------------------------------------------------------------------------------------
// let sum = 0;
// for (let t = 1; t <= 3; t++) {
//   const no1 = +prompt("1.notu girin:");
//   const no2 = +prompt("2.notu girin:");
//   let ort = (no1 + no2) / 2;
//   console.log(`${t}. ögrencinin ortalaması:${ort}`);
//   sum = sum + ort;
// }

// let genelOrtalama = sum / 3;
// console.log(`Genel ortalama: ${genelOrtalama}`);
// !-------------------------------------------------------------------------------------------------
// console.clear();
// ! Yapmamanız gereken durumlar: Döngünün çalışmaması örneği
// şart yok burada =  1===50;

// for (let i = 1; 1 === 50; i++) {
//   console.log(i);
// }
// console.log("döngüye girmedim");

//! Yapmamanız gereken durumlar : Auto Save kapat bunu yaparken: Bir döngü, koşul sağlanmaya devam ettikçe çalışır. Eğer koşul hiç sağlanmazsa, döngü sonsuz döngüye girer ve program donabilir.
// for (let i = 1; 1 != 50; i = i * 2) {
//   console.log(i);
// }

// ! geri doğru döngü kullanılabilir.
// for (let i = 50; i > 0; i--) {
//   console.log(i);
// }

console.clear();
// ! BREAK ve CONTINUE keywordleri kullanımı
console.clear();
for (let i = 0; i <= 10; i++) {
  if (i % 3) {
    continue;
  }
  if (i === 6) {
    break;
  }
  console.log(i);
}

//?break: Döngüyü tamamen durdurur ve döngüden çıkar.
//?continue: Döngünün o adımını atlayarak bir sonraki adıma geçer.

//! continue ve break loop içinde kullanılır if yapısında kullanılmaz.
// Örnek hatalı kullanım:
// let number=5;
// if(number===5){
// break;    (hata verir çünkü break sadece döngülerde kullanılabilir.)
// }

// if (number%2 === 0){
//     continue; (Hata verir çünkü continue sadece döngülerde kullanılabilir )
// }
