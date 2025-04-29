console.log(Math.PI);

//MATH 
const PISAYISI =Math.PI;
const EULER = Math.E;

console.log(PISAYISI);
console.log(EULER);

//math methods
let angle = 90;

//sinus

console.log("sinus: " + Math.sin(angle));
console.log("cosinus: " + Math.cos(angle));
console.log("tanjant: " + Math.tan(angle));

let number = 10;

console.log(Math.log10(number));
console.log(Math.LN2);

//en sık kullanılan methodlar
//abs=> mutlak değer
console.log(Math.abs(number));
//sqrt => karekök
number=25
console.log(Math.sqrt(number));
//cbrt => küpkök
console.log(Math.cbrt(12));

//pow(a,b) => a üzeri b değeri verir
console.log(Math.pow(4,3));

//max() ve min()
console.log("min :", Math.min(5,15));
console.log("max : ", Math.max(5,15));
console.log("min :", Math.min(5,15,7,9,16));
console.log("max : ", Math.max(5,15,7,9,16));

//floor() - ceil() - round()
console.log(Math.floor(3,42));
console.log(Math.floor(3,62));
console.log(Math.floor(3,67));
console.log(Math.floor(3.05));
console.log("**********************");
//ceil() yukarı yuvarlama
console.log(Math.ceil(3,42));
console.log(Math.ceil(3,62));
console.log(Math.ceil(3,67));
console.log(Math.ceil(3.05));
console.log("**********************");
//round en yakın tam sayıya yuvarlama
console.log(Math.round(3,42));
console.log(Math.round(3,62));
console.log(Math.round(3,67));
console.log(Math.round(3.05));

//random 0 ile 1 arası rastgele sayı üret
console.log(Math.random());
//0-100 arası rastgele sayı
console.log(Math.ceil(Math.random(0,100)));