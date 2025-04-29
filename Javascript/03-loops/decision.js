let number1 = 5;
let number2 = 20;
let number3 = 46;

if(number1 % 2 == 0)
{
    console.log("Number1 çift sayıdır.");
}
else
{
    console.log("Number1 tek sayıdır.");
}

let note = 40;

if(note > 85)
{
    console.log("AA");
}
else if (note >= 75 && note < 85)
{
    console.log("B");
}
else if (note >= 60 && note < 75)
{
    console.log("CC");
}
else if (note >= 45 && note < 60)
{
    console.log("C");
}
else 
{
    console.log("FF");
}

let day = 5;

switch(day)
{
    case 1 : console.log("Pazartesi"); break;
    case 2 : console.log("Salı"); break;
    case 3 : console.log("Çarşamba"); break;
    case 4 : console.log("Perşembe"); break;
    case 5 : console.log("Cuma"); break;
    case 6 : console.log("Cumartesi"); break;
    case 7 : console.log("Pazar"); break;
    default : console.log("Geçersiz gün");
}

switch(day)
{
    case 1 :
    case 2 :
    case 3 :
    case 4 :
    case 5 : console.log("Hafta içi"); break;
    case 6 : console.log("Cumartesi"); break;
    case 7 : console.log("haftasonu"); break;
    default : console.log("Geçersiz gün");
}