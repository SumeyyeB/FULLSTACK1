// *** JAVASCRIPT DEĞİŞKENLER ***
// Değişken bir değer tutar ve çağrıldığı her yerde o değer işleme girer.

const degiskenAdi = "Javascript";
let sayi = 10;
var isFalse = true;

console.log(degiskenAdi);
console.log(sayi * 10);

// ***GLOBAL SCOPE VE LOCAL SCOPE***
//? Global Scope: Program içerisinde fonksiyonların dışında tanımlanan ve her yerden erişilebilen scope tipidir.
//? Kodu yamaya bağladığımızda global scope yazarız.SAdece tek global scope var.
const x = "Bu global alanda oluşturuldu";

// Local Scope: Bir block içi (fonksiyon, if bloğu gibi alanlar)

// ===================  CONST  ======================
// ? const ve let Modern JS ile gelmiş yeni değişken tanımlama keyword'leridir.
// ! CONST: Sadece başlangıçta değer atanabilir.
// ! Sonradan değeri değiştirilemez (non-primitive'ler (array..) hariç).
console.clear();
const pi = 3.14;
const ad1 = "Nida";
console.log(ad1);
{
  console.log(ad1);
}

// ======================  LET  ========================
//? LET de CONST gibi yaygın kullanılan değişken tanımlama yöntemidir.
//! CONST'dan farkı, sadece tanımlama kısmında değil istenildiği zaman değeri değiştirilebilir.
// Const kullanamadığımız durumlarda (değişkenin değeri sürekli değişecekse) Let kullanmalıyız.

let lang = "Javascript";
console.log(lang);

lang = "PhP";
console.log(lang);

let num = 300;
console.log(num);
{
  console.log(num);
  num = 320;
}
console.log(num);

// ============ VAR VERİ TİPİ ============
// Var ile bir değişken tanımlandığında LET de olduğu gibi değeri sonradan değiştirilebilir.
// Eğer değişken fonksiyonların dışında tanımlandı ise tüm her yerden erişilebilir.(Global-scoped)

// Günümüzde programcılar global değişken gerekmedikçe VAR ile değişken tanımlamayı seçmemektedir.

var kimlikNo = "12345678";
console.log(kimlikNo);
kimlikNo = "567890";
console.log(kimlikNo);

var kimlikNo = "23093587906";
{
  console.log(kimlikNo);
}

// hoistin önce kullan sonra ödersin(tanımlarsın)

console.log(y);
var y = 5;

// JS HOİSTİNG DESTEKLEYEN BİR DİLDİR.
