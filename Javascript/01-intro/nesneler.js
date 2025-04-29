/* Nesneler, birden çok değeri bir arada tutan veri yapılarıdır. Nesneler,süslü parantezler içerisinde tanımlanır ve her bir değer bir anahtar(key) ile ilişkilendirilir. Nesnelerdeki değerlere erişmek için nokta(.) veya köşeli parantez[] kullanılır. key-value


 */

let product= {
    id:1,
    name: "Samsung S6",
    unitPrice: 5000,
};

let result;

result=product;
result=product.name;
result=product["name"];

let category1={
    id:1,
    name:"elektronik",
    products:[
                {id:103,name:"Seagate SSD 1 TB",unitPrice:1500},
                {id:105,name:"Logitech Mouse",unitPrice:150}
             ],
};

let category2={
    id:1,
    name:"Bahçe Malzemeleri",
    products:[
                {id:103,name:"Koltuk Takımı",unitPrice:55000},
                {id:105,name:"Şemsiye",unitPrice:4500}
             ],
};

//aşağıda öğrenci tanımlanırken dersler içerisinde birer adet tek seçenek olduğundan dizi olarak [] tanımlanabilir. Adres bilgisi içinde yine key-value şeklinde data tutmak istediğimiz için adres bilgisi object [] olarak tanımlanabilir.
 let ogrenci={
    id:1,
    name:"ahmet",
    lastname:"ay",
    yas:15,
    dersler:["mat","türkçe","fizik"],
    adres: {
        il:"istanbul",
        ilçe:"beşiktaş",
    },
 };


result=category1;
result=category1.name;
result=category1.products;
result=category1.products[1].name;
result=ogrenci.adres.il
console.log(result);
//console.log(categories);

