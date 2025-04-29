const numbers = [1,9,15,4,7,26,12,13,6,2,35,34,22,54,75];

//forEach() => dizi elemanlarını tek tek dolaşır.
numbers.forEach((number,index) => {
    console.log(`${index+1}.eleman\t`,number)   ;
});

// const newArray  =numbers.forEach(number => {
//     return number;
// });
// console.log(newArray);

const newNumbers = numbers.map(number => {
    return number;
});
const numbers2 = numbers.map(number =>{
    return number*2;
})    
//numbers.push(100);
console.log("numbers:",numbers);
console.log("newnumbers: ", newNumbers);
console.log("numbers2",numbers2);

const notes = [55,67,89,63,78,92,96,45,32,71,69,83];

const calculatedNotes = notes.map(note => {
    return note * 0.4;
})
notes.forEach(note => {
    console.log(note*0.4);
})
console.log(notes);
console.log(calculatedNotes);

const numbers3 = [1,2,3,4,5,6,7,8,9,10];
const squareNumbers = numbers3.map(item =>{
    return item ** 2;
});
console.log(numbers3);
console.log(squareNumbers);

