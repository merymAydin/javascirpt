let order1={
    id:10248,
    date:"09.03.2025",
    customerID:"ALFKI",
    employeeID:5,
    shippingAddres:"İstanbul / Beşiktaş",
    products:[
        {urunID:11,
         urunAdi:"Samsung Oled TV 55 inc",
         Fiyat:70000,
         Adet: 2,
         KDV: 0.20
        },
        {
            urunID:45,
            ÜrünAdi:"SSD Harddisk 1 TB",
            Fiyat: 5000,
            Adet: 5,
            KDV: 0.20
        }
    ],
};

let order2={
    id:10250,
    date:"08.03.2025",
    customerID:"CDEKI",
    employeeID:5,
    shippingAddres:"İstanbul / Şişli",
    products:[
        {
        urunID:145,
         urunAdi:"Dell Precision 3560",
         Fiyat:120000,
         Adet: 1,
         KDV: 0.20,
        },
        {
            urunID: 34,
            urunAdi: "Samsonite Laptop Çantası",
            Fiyat: 10000,
            Adet: 1,
            KDV: 0.20,
        }
    ],
};

result=order1;
console.log(result);

result=order1.id;
console.log(result);

result=order1.date;
console.log(result);

result=order1.customerID;
console.log(result);

result=order1.employeeID;
console.log(result);

result=order1.shippingAddres;
console.log(result);

result=order1.products[0].urunID;
console.log(result);

result=order1.products[0].urunAdi;
console.log(result);

result=order1.products[0].Fiyat;
console.log(result);

result=order1.products[0].Adet;
console.log(result);

result=order1.products[0].KDV;
console.log(result);

result=order1.products[1].urunID;
console.log(result);

result=order1.products[1].urunAdi;
console.log(result);

result=order1.products[1].Fiyat;
console.log(result);

result=order1.products[1].Adet;
console.log(result);

result=order1.products[1].KDV;
console.log(result);

result=order2;
console.log(result);

result=order2.id;
console.log(result);
result=order2.date;
console.log(result);
result=order2.customerID;
console.log(result);
result=order2.employeeID;
console.log(result);
result=order2.shippingAddres;
console.log(result);
result=order2.products[0].urunID;
console.log(result);
result=order2.products[0].urunAdi;
console.log(result);
result=order2.products[0].Fiyat;
console.log(result);
result=order2.products[0].Adet;
console.log(result);
result=order2.products[0].KDV;
console.log(result);
result=order2.products[1].urunID;
console.log(result);
result=order2.products[1].urunAdi;
console.log(result);
result=order2.products[1].Fiyat;
console.log(result);
result=order2.products[1].Adet;
console.log(result);
result=order2.products[1].KDV;
console.log(result);
