//aritmetik operatorler
//(+) toplam
//(-) cikarma
//(*) carpma
//(/) bolme
//(%) mod alma

// (++) bir arttirma
// (--) bir azaltma


//(+=) toplama atama
//(-=) cikarma atama
//(*=) carpma atama
//(/=) bolme atama 
//(%=) mod alma atama

let number1 = 10;
let result = number1 + 2;

result = number1 - 6;
result = number1 * 5;
result = number1 /2;
result = number1 % 3;
console.log(result); 

let number2 = 23;
result = number2++;

result = ++number2; // once arttir sonra ata
result = number2--; 
res = --number2; // once azalt sonra ata    

//result = result + 5;
result += 5; 

result = result -7;


console.log("result: ", result);
//console.log("number2: ", number2);


/// karsilastirma operatorleri
// < kucuktur
// > buyuktur
// <= kucuk esittir
// >= buyuk esittir
// == esittir

let small = 7;
let small2 = "7";
let big = 11;


result = small < big;
result = small > big;

result = small == big;
result= small == 7;
result= small == "7";

result= small === 7;
result= small === "7";

result = small != big;


// console.log(small, typeof small);

// console.log("result: ", result);

//mantık operatorler
// && mantiksal ve (and)
// || mantiksal veya (or)
// & ve (and)
// | ya da (or)

let age = 13;

if (age> 18 && age < 30) 
{
    console.log("yetenekli genç");
}

if (age < 18 || age >= 30)
{
    console.log("18 ile 35 arasında değil.");
}