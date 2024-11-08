//*=====================================================================
// !                         WHILE LOOP
//*=====================================================================

// Js'de while döngüsü, bir koşul doğru olduğu sürece belirli bir kod bloğunu tekrar tekrar çalıştırmak için kullanılır.

// while(şart){
// yapılacak işlemler
// }

// for döngüsü sayısı belli bir döngü için idealdir.
// while döngüsü belli bir şarta göre sayısı sürekli devam edecekse , kullanıcıya devam etmek ister misin sorusu gibi soru vss. while kullanmak daha mantıklı.
//*=====================================================================
// !  SONSUZ DÖNGÜ GİRER
// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// (i++ yapmazsan SONSUZ DÖNGÜ GİRER)
// }

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// kullanıcıya şifre bulana kadar sorsun
// let password;

// while (password !== "12m.%") {
//   password = prompt("Şifre giriniz:");
// }

// let number = +prompt("Bir sayı giriniz:");
// if (number < 0 || number > 100) {
//   alert("Sayı 0-100 arasında girilmelidir.");
// }

//! Tek başına karar yapıları ile tekrarlama işlemi yapılamaz.
//! Tekrar varsa döngu var demektir.
//! karar yapısı kontrol eder ve duruma gore programın akışını yönlendirir ama tekrar yaptırmaz

// let number1 = +prompt("Bir sayı giriniz:");

// while (number1 < 0 || number1 > 100) {
//   console.log("Sayı 0-100 arasında olmalıdır.");
//   number1=prompt("0-100 arasında bir sayı giriniz veya çıkmak için q tuşuna basınız.")
// if(number1==="q"){
//   break;
// }
// }

//! flag mechanism:
//flag (bayrak) mekanizması, belirli bir durumun kontrol edilmesi gerektiğinde kullanılır. Flag, genellikle true veya false gibi boolean değerler alır ve koşulun sağlanıp sağlanmadığını belirtir. Bu mekanizma, programın akışını kontrol etmek için yaygın olarak kullanılır.

//* Flag Mekanizmasının Avantajları
//? Kodun Akışını Kolay Kontrol Etme: Flag sayesinde, kullanıcı belirli bir eylemi gerçekleştirdiğinde (örneğin, çıkmak istediğinde) programın nasıl davranacağı netleşir.
//? Esneklik Sağlama: Flag değişkeni kullanarak farklı durumlarda farklı işlemler yapılabilir. Örneğin, bir koşul sağlandığında belirli bir işlemi durdurabilir veya değiştirebilirsiniz.
//? Kodun Okunabilirliğini Artırma: Flag değişkenlerinin anlamlı isimlerle tanımlanması, kodu okuyan kişinin programın amacını daha iyi anlamasına yardımcı olur.

// let number1 = +prompt("Bir sayı giriniz:");
// exit = false;

// while (number1 < 0 || number1 > 100) {
//   console.log("Sayı 0-100 arasında olmalıdır.");
//   number1 = prompt(
//     "0-100 arasında bir sayı giriniz veya çıkmak için q tuşuna basınız."
//   );
//   if (number1 === "q") {
//     exit = true;
//     break;
//   }
// }

// exit ? console.log("çıkış yapıldı") : console.log("girilen sayı:", number1);

console.clear();

// ! SAYI TAHMİN OYUNU
const Rastgelesayi = Math.trunc(Math.random() * 100 + 1);
console.log(Rastgelesayi);

exit = false; // Çıkış durumu için bir flag kullandım.

while (true) {
  let tahmin = prompt("1-100 arasında bir sayı girin:");
  // Çıkış kontrolü
  if (tahmin === "q") {
    exit = true;
    break;
  }

  tahmin = Number(tahmin);
  if (isNaN(tahmin)) {
    console.log(
      "Lütfen geçerli bir sayı giriniz ya da çıkış için q harfine basınız."
    );
    continue;
  }

  // tahmini kontrol edelim
  if (tahmin < Rastgelesayi) {
    console.log("Daha büyük bir sayı girin.");
  } else if (tahmin > Rastgelesayi) {
    console.log("Daha küçük bir sayı girin.");
  } else {
    console.log("tebrikler, doğru tahmin");
    break;
  }
}

exit ? console.log("oyundan çıktınız.") : console.log("oyun sona erdi.");
