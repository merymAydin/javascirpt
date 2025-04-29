let date = new Date();
console.log(date);

let date2 = new Date(2020,0,18,19,22,45,456);
console.log(date2);

let day = date2.getDate();
console.log(day);

switch(day){
    case 0 : console.log("pazar") ; break;
    case 1 : console.log("pazartesi") ; break;
    case 2 : console.log("salı") ; break;
    case 3 : console.log("çarşamba") ; break;
    case 4 : console.log("perşembe") ; break;
    case 5 : console.log("cuma") ; break;
    case 6 : console.log("cumartesi") ; break;
}

//yıl bilgisi
console.log(date.getFullYear());
date.setFullYear(2023);
console.log(date.getFullYear());
//ay bilgisi
console.log(date.getMonth());
date.setMonth(5);
console.log(date.getMonth());
//gün bilgisi
console.log(date.getDate());
date.setDate(7);
console.log(date.getDate());
//saat bilgisi
console.log(date.getHours());
date.setHours(17);
console.log(date.getHours());
//dakika bilgisi
console.log(date.getMinutes());
date.setMinutes(19);
console.log(date.getMinutes());
//saniye bilgisi
console.log(date.getSeconds());
date.setSeconds(19);
console.log(date.getSeconds());
//




console.log(date);

