/*
Javascript(js):
-Web sayfalarını dinamik hale getirmek için kullanılan bir proglamlama dilidir. Tarayıcı tabanlı web geliştirme için kullanılmış olsa da günümüzde:

backend(sunucu) tarafında da kullanılmaktadır.(Node.js) mobil uygulama geliştirme (React Native, NativeScript,Ionic,Cordova)
oyun geliştirme(unity,Phaser)
masaüstü uygulama geliştirme(electron.Js)

JS, dinamik yüksek seviyeli, yorumlanabilir ve nesne tabanlı bir proglama dilidir.Özellikle web geliştirme alanında çok popülerdir.
*/ 

//alert("merhaba dünya");

//Değişkenler:
console.log("Deneme");

//Degişken tanımlarken var, let kullanabilirsiniz.
var a=20;
var b="hi";
var c=564.45;
var d=true;

let e="istanbul eğitim"; 

console.log(e);

var urunAdi="elma";
var urunFiyati=100;
var urunStokAdedi=10;
var urunBittiMi=false;
var urunPuani=4.5;

var kdvliFiyat= urunFiyati + (urunFiyati*0.18);
console.log(kdvliFiyat)

//değişken türü bulalım
console.log(typeof urunAdi);
console.log(typeof urunFiyati);
console.log(typeof urunStokAdedi);
console.log(typeof urunPuani);
console.log(typeof urunBittiMi); 
console.log(
    urunAdi+
    " "+
    urunFiyati+
    " "+
    urunStokAdedi+
    " "+
    urunPuani+
    " "+
    urunBittiMi
);

var metin = 'Satın alınan ürün bilgisi : ${urunAdi} ${urunFiyati} ${urunStokAdedi}';
console.log(metin);

//string metodları
var companyName = "İstanbul eğitim";
var result;

result=companyName.toLowerCase();
result=companyName.toUpperCase();
result=companyName.slice(0,5);
result=companyName.indexOf("eğitim");
result=companyName.substring(0,9);
result=companyName.replace("istanbul","van");
result=companyName.split(" ");
result=companyName.split(" ")[1];
result=companyName.split(" ")[0];
result=companyName.replaceAll("ğ","g");


console.log(result);
    
//number:
let number;

number=100;
number="100";

number=Number(number);
number=parseInt(number);
number=parseFloat(number);

let testNumber="abc100";
number= isNaN(testNumber);

testNumber=isNaN(testNumber)//is not a number

console.log(testNumber); //Nan > not a number
console.log(typeof testNumber);

let testNum=54.6668;

//testNum=testNum.toFixed(3); //ondalık kısmı 3 basamak olarak sabitler.
testNum=testNum.toPrecision(3);

//math fonksiyonları
testNum=Math.PI;
testNumt=Math.E;
testNum=Math.round(2,4);
testNum=Math.ceil(2,4);
testNum=Math.floor(2,4);
testNum=Math.sqrt(64);
testNum=Math.abs(-3);
testNum=Math.pow(0,2);
testNum=Math.min(2,33,4,1,55,6,3);
testNum=Math.max(2,33,4,1,55,6,3);

testNum=Math.floor(Math.random()*20);

console.log(testNum);

//Diziler 
let products=["iphone 15 pro","Samsung S21"];
console.log(products);

console.log(products[0]);
products[0]="iphone 15 pro";

let urun=[
    "Yapay zeka destekli web geliştirici",
    "300 Saat",
    "Caner Molla","Osman Uzun",
];
console.log(urun[0]);
console.log(urun[2][0]);
console.log(urun[3][2]);

//Dizi metotları
let cities =["istanbul","Ankara","İzmir","Adana","Bursa"];
let sonuc;

sonuc=cities.length;
sonuc=cities.toString();
sonuc=cities.join("-");
sonuc=cities.indexOf("Adana");
sonuc=cities.lastIndexOf("Ankara");
sonuc=cities.includes("Adana"); //true,false
sonuc=cities.push("kars"); //sona eleman ekler
sonuc=cities.pop();//tüm elemanı siler
sonuc=cities.shift(); //ilk elemanı siler
sonuc=cities.unshift("van");//başa eleman ekler
sonuc=cities.reverse();
sonuc=cities.sort();
sonuc=cities.splice(0,2); //0.indexten itibaren 1 eleman siler.
sonuc=cities.splice(0,0,"malatya");//0.indexten itibaren 1 eleman ekler.
sonuc=cities.splice(0,0,"malatya","rize");//0.indexten itibaren 2 eleman ekler.

console.log(sonuc);
console.log(cities);
