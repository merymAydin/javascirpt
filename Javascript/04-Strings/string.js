let firstname = "akın";
let lastname="cengiz";
let language ="java";

let fullname = firstname + " "+ lastname;
let text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa fugiat eius possimus amet recusandae beatae ex quibusdam. Ut vel tenetur aperiam, aliquid consequuntur accusantium unde nostrum architecto deserunt, maxime cum fugit sapiente voluptate voluptates culpa, illum voluptatem ea libero minima laboriosam dolor perspiciatis numquam aliquam. Alias quia iste reiciendis?";

let text2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit." + firstname + " " + lastname + " Rem ipsa fugiat eius possimus amet recusandae beatae ex quibusdam. Ut vel tenetur aperiam, aliquid consequuntur accusantium unde nostrum architecto deserunt, maxime cum fugit sapiente voluptate voluptates culpa, illum voluptatem ea libero minima " + language + "ibero minima laboriosam dolor perspiciatis numquam aliquam. Alias quia iste reiciendis?"
console.log(fullname);
console.log(text2);

//string template literal
text = `Lorem ipsum dolor sit amet consectetur  ${firstname}  ${lastname} adipisicing elit. Rem ipsa fugiat eius possimus amet recusandae beatae ex quibusdam. Ut vel tenetur aperiam, aliquid consequuntur accusantium unde nostrum architecto deserunt, maxime cum fugit sapiente voluptate voluptates culpa, illum voluptatem ea libero minima laboriosam dolor perspiciatis numquam aliquam. ${language} Alias quia iste reiciendis? toplam = ${5+7}`;

console.log(text);

//methodları ve özellikleri
const charCount = text.length;
console.log(charCount);


//repeat() => string değişkenini kaç kez tekrar etmesi gerektiği parametre ile belirtilerek parametre değeri kadar tekrarlanır. 
let repeat = "asd";

let repeatText = `herkes bir anda ${repeat.repeat(3)} alkışlamaya başladı`;
console.log(repeatText);
repeatText = "herkes bir anda" +"asd".repeat(3)+ "alkışlamaya başladı"
console.log(repeatText);

//split() => parametre olarak verilen değere göre stringin içeriğini parametre değerlerinden ayırarak dizi döner.
const splitvalue = text.split( " , ");
console.log(splitvalue);

//toLowerCase() ve toUpperCase() => toLowerCase() metnin bütün karakterlerini küçük harfe dönüştürür, touppercase metnin bütün karakterlerini büyük harfe dönüştürür.
console.log(text);
console.log(text.toLowerCase());
console.log(text.toUpperCase());

//trim() metnin başındaki ve sonundaki boşlukları kaldırır.
//trimstart metnin başındakı boşlukları kaldırır.
//trimend() metnin sonundaki boşlukları kaldırır
let trimText = "      akın cengiz"
console.log(trimText);
console.log(trimText.trim());
console.log(trimText.trimStart());
console.log(trimText.trimEnd(), " deneme ");

//concat parametre olarak verilen string değerleri birleştirerek döner.
const concatText = firstname.concat(" ", lastname);
console.log(" concat text :", concatText)

//slice dizinin parametre ile verilen indexsinden belli bir kısmını almamızı sağlar.
//1.kullanım : slice(5) dizinin 5.indexsinden başlayarak sonuna kadar olan kısmı döner.
console.log(fullname);
let newText = fullname.slice(3);
console.log(fullname);
newText =fullname.slice(3,7);
console.log(newText);

//include parametre ile verilen değerin metinde olup olmadığını döner.
console.log(text);
let varMi = text.includes("akın");
console.log(varMi);
varMi=text.includes("akinn");
console.log(varMi);

//startsWith() ve endsWith()

varMi = fullname.startsWith("Akın");
console.log("Akın",varMi)
varMi = fullname.startsWith("Ce");
console.log("Ce",varMi)

varMi = fullname.endsWith("iz");
console.log("iz",varMi)
varMi = fullname.startsWith("ın");
console.log("ın",varMi)

//replace() => Metnin içerisindeki ilk parametre ile verilen değeri ikinci parametre ile değiştirir.
let metin = " Html,CSS,JavaScript, React,CSHARP";
console.log(metin);
metin = metin.replace(",","-");
console.log(metin);
metin = metin.replace(",","-");
console.log(metin);
metin = metin.replaceAll("a","s");
console.log(metin);
metin = metin.replaceAll("a","A");
console.log(metin);