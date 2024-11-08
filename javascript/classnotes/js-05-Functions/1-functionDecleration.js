// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================
//! Fonksiyon tanımlama yöntemleri
// Function Declaration (Fonksiyon Bildirimi):
// Function Expression (Fonksiyon İfadesi):
// Arrow Function (Ok Fonksiyonları):

// ----------------------------------------------------------
// recursive Function
// IIFE   (Immediatel Invoked Function Expression)
// Callback Function

// !-----------------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------
//? Bir fonksiyon belirli bir görevi gerçekleştirmek için tasarlanmış,
//? yeniden kullanılabilir, (tek bir görev için tek fonksiyon olması daha iyidir)
//? test etmesi kolaydır

//! * --------Function-Declaration----------------------------*/
// /JavaScript'te function declaration (fonksiyon bildirimi), bir fonksiyonun ismini ve içeriğini önceden belirleyerek tanımlamanın temel yoludur.
// Function declaration, function anahtar kelimesi kullanılarak yapılır
//? Bir fonksiyonun çalışması için çağırmak gereklidir.Çağırılmadığında işleme alınmaz.Bu çağırma işlemine invoke yada call denir.

function yazdir() {
  console.log("Merhaba Nasılsınız?");
}
console.log("Fonksiyondan önceyim");
yazdir();
console.log("Fonksiyondan sonrayım");
// fonksiyonlar 1 defa yaz defalarca kullan

yazdir();
yazdir();
yazdir();
yazdir();
yazdir();
yazdir();

// Hoisting: yukarı kaldırma
// ! sadece function declerationda Hoisting yapılıyor.
// Hoisting: Function declaration ile tanımlanan fonksiyonlar, JavaScript tarafından kodun en başına "yükseltilir" (hoist edilir), bu nedenle fonksiyon tanımlanmadan önce bile çağrılabilir.

topla();

function topla() {
  console.log(25 + 987654);
}

// JS motoru kodu aşağıdaki şekilde gördüğü için hoisting olabiliyor.
function topla() {
  console.log(25 + 987654);
}
topla();

console.clear();

// ? PARAMETRELİ FONKSİYON
// Parametreli fonksiyonlar, belirli girdilerle işlem yapabilen fonksiyonlardır.
//?Parametreler, fonksiyon tanımlanırken parantez içinde belirtilir ve fonksiyon çağrıldığında değerler gönderilerek (argüman olarak) kullanılır.
//* Fonksiyon tanımlanırken verilen değerlere arguments denir

function toplam(a, b, c) {
  //  arguments
  console.log(a + b + c);
}
toplam(45, 67, 89); // parametre
toplam(4235, 6127, 8239);
toplam(415, 627, 829);
toplam(4345, 637, 8339);
toplam(415, 367, 849);

// fonksiyonlarda değişkenin değeri gönderilir. Değişkenin kendi gitmez.

function selamla(ad, yas = 34, meslek = "developer") {
  console.log(ad);
  console.log(yas);
  console.log(meslek);
}
let name = "Sema";
let age = 40;
let job = "developer";
let meyveListesi = ["elma", "armut"];
let kilo = 67;

selamla(name);

// ------------------------------------------------------------------------------------
// birçok değer gönderilecekse arguments keyword faydalanılabilir.
function degerler(a, b) {
  console.log(a);
  console.log(b);
  console.log(arguments);
}
degerler(34, 56, 6, 67, 7890, 890, 222, 65432, 98765, 5432);

// ------------------------------------------------------------------------------------------------

// ! return keyword

function yasHesapla(isim, tarih) {
  //   console.log(`Merhaba ben ${isim}, ben ${2024 - tarih}yasındayım.`);
  let yasBul = 2024 - tarih;
  return yasBul;
}
const yas = yasHesapla("Neva", 1990);
console.log(yas);
if (yas > 30) {
  console.log("Yası 30dan büyük");
} else {
  console.log("yası 30dan küçüktür.");
}
