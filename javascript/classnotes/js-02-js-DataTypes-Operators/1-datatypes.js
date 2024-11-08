// *************** DATA TYPES **********

//!--------------------------------------
//! PRIMITIVE DATA TYPES
//!--------------------------------------

//! *********** NUMBER DATA TYPES *******
// Number : Tamsayılar ve ondalıklı sayıları tutar.

const age = 40;
console.log(typeof age);

//? MATH objesi  matematiksel işlemler için gerekli metodlar barındırır.

let pi = Math.PI;
console.log(pi);

// Dairenin Alanı
const r = 8;
console.log(pi * r * r);
// Dairenin Çevresi
console.log(2 * pi * r);
// Math pow methodu üs almak için kullanılır.
console.log(pi * Math.pow(r, 2));
// 3'ün 5. kuvvetini bulduran method
console.log(Math.pow(3, 5));
console.log(2 * pi * r);
let cevre = 2 * pi * r;
// ****************************************************************
// Decimal ( Ondalıklı) bir sayının ondalık kısımlarını yuvarlama işlemi
console.log(Math.round(cevre));

const num = 34.67;
console.log(Math.round(num));
// floor:en yakın küçük olan sayıya yuvarlar
console.log(Math.floor(num));
//ceil: en yakın büyük olan sayıya yuvarlar
const deger = 34.14;
console.log(Math.ceil(num));
console.log("ceil", Math.ceil(deger));
// Math.trunc() Decimal sayıların sadece tam kısmını alır
console.log("trunc", Math.trunc(deger));
// .toFixed() ile ondalıklı kısımdan kaç basamağın alınacağını belirtilir. Ama tofixed uygulanan sonra stringe dönüşür.
console.log(deger.toFixed(4));
// Max: Bir sayı dizisindeki en büyüğü bulur
console.log(Math.max(5, 6, 3, 62, 2345, 578.23, -34));
// Min: Bir sayı dizisindeki en küçüğü bulur
console.log(Math.min(5, 6, 3, 62, 2345, 578.23, -34));
// Random metodu rastgele bir sayı üretmek için kullanılır. 0-1 arasında bir sayı üretir.
console.log(Math.random() * 100);

let rastgele_sayı = Math.trunc(Math.random() * 10);
console.log(rastgele_sayı);

let sayi = (Math.random() * 100).toFixed(2);
console.log(sayi);
// sqrt : Square root (karekök) Bir sayının karekökünü verir.
console.log(Math.sqrt(144));

//! ********** STRING DATA TYPE********

let text = "Javascript";
let text1 = "High-Level language";
// Stringlerin her harfine ayrı ayrı bir dizi elemanı olarak ulaşılabilir.
// o elemanın 0dan başlayarak index numarasını vererek ulaşabiliriz
console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text[3]);

// stringler immutable(değiştirilemez) olduğundan parça olarak değiştirlemez. J yerine C yazdıramadım.
text[0] = "C";
console.log(text);

// ESCAPE CHARACTER (Kaçış karakterleri)
// \t   tab - 8 karakter ileri atar
// \r	Satır başı (Carriage Return)
// \n	Bir alt satıra iner
// \v	Dikey Tab
// \f	Sayfa ilerleme
// \"	Çift tırnak
// \’	Tek tırnak
// \	Backslash
let text2 = "Ben Js'in özelliklerini öğreniyorum.";
let text3 =
  "Seni iki şey anlatır\nHiçbir şey yokken gösterdiğin sabır\n\tHerşey varken gösterdiğin tavır.";
console.log(text3);
// **********************************************************************************************
//!String Birleştirme
//?  1) - + işareti ile birleştirme

let text4 = "Bu akşam saatlerinde en güzel etkinliklerden biri";
let text5 = "Javascript öğrenmek";
console.log(text4 + " " + text5);

//?  2) concat metodu
let text6 = "Hey Dünya,seni gidi Dünya\n";
let text7 = "Bir dur inecek var";

let text8 = text6.concat(text7);
console.log(text8);
// console.clear()

//!Temlate Literal - String Template -ES6
//? Backtik işareti ``  (alt gr + ; = ``)
console.log(`Bu yazıyı 
    bactick ile yazarsam
    daha iyi olur`);

let ad = "Sümeyye";
let soyad = "BALKAYA";
let meslek = "Developer";

let text9 = `Personelimiz ${ad} ${soyad}, firmamızda ${meslek} olarak çalışmaktadır.`;
console.log(text9);

// console.clear();

//! ********** BOOLEAN DATA TYPE********
// true yada false değerlerini tutar.
// Daha çok mantıksal karşılaştırmalarda kullanıyoruz.

let isSignUp = true;
console.log(isSignUp);
console.log(typeof isSignUp);

//Falsy Values

//false: Boolean değeri.
// 0: Sayı sıfır.
// -0: Negatif sıfır.
// 0n: BigInt sıfır.
// "" veya '': Boş string (dize).
// null: Değer yok.
// undefined: Tanımsız değer.
// NaN: Sayı değil (Not-a-Number).

// Truthy values - Falsy değer üretenler dışındaki herşey
// sayılar,karakterler,işaretler .....
// console.clear()

//! ********** UNDEFINED DATA TYPE********
// Js de bir değişkenin türü ilk atanan değere göre belirliniyor. İlk değer atanmadığında değişken undefined olarak tanımlanır.

let deger1 = 10;
let deger2 = "Merhaba";
let deger3;

console.log(typeof deger1);
console.log(typeof deger2);
console.log(typeof deger3);

// Değer göndermeyen bir fonksiyon undefined dönebilir.

function example() {
  let sum = 45435 + 6456;
}

console.log(example());
// console.clear()

//! ***********NULL DATA TYPE *************
// Boş bir değişken üretmek için kullanılır.

let nedirAcaba = null;
console.log(nedirAcaba);
console.log(typeof nedirAcaba);
// console.clear();

//!--------------------------------------
//! NONPRIMITIVE DATA TYPES -REFERENCE BASED
//!--------------------------------------

//! *********** ARRAY *******
//Birden fazla değer tutabilen değişkenlere array(dizi) denir.
// Sıralı şekilde tutulan verilerdir.

let yas = 30;
let siniftaki_ogrencilerin_yaslari = [23, 24, 22, 21, 25];

//! *********** OBJECT *******

let obj = {
  name: "Helen",
  lastname: "Steve",
  age: 40,
};
console.log(obj);
console.clear()

//! *********** FUNCTION *******
function example() {
  let sum = 45435 + 6456;
}

console.log(example());
// console.clear();

//!--------------------------------------
//! TYPE CONVERSION
//!--------------------------------------

// Kullanıcıdan alınan bilgi yapılarından bilgi her zaman string olarak gelir. Sayısal bir ifade bile olsa...

//! Automatically type conversion
let deger4 = 40;
let deger5 = "14";
console.log(deger4 + deger5); // + işareti stringlerde kullandığımız concatanation işlemi olabilir diye matematiksel toplama yapmaz string toplaması yapıyor(yan yana yazıyor)
console.log(deger4 - deger5); // Automatically type conversion : Sevgili js motoru çıkarma, çarpma, bölmede Automatically type conversiona göre davranıyor.

console.log(deger4 * deger5);
console.log(deger4 / deger5);

//? STRING TO NUMBER
// Number
// parseInt
// parseFloat
// başına + işareti koyularak

let deger6 = "20.24";
console.log(typeof deger6);

let newDeger = Number(deger6);
console.log(newDeger);
console.log(typeof newDeger);

// let maas = prompt("Lütfen maaşınızı giriniz:");
// console.log(typeof maas);

//? NUMBER OF STRING
// String()
// str.toString
let birthday = 17;
console.log(typeof birthday);

let newBirthday = String(birthday);
console.log(typeof newBirthday);
console.log(typeof birthday.toString());

//! DATA OBJECT
const now = new Date();
console.log(now);

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

console.log(`${now.getHours()}:${now.getMinutes()}`);
