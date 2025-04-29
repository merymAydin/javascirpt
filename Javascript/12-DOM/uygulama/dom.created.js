const bodyElement = document.querySelector("#body");
console.log(bodyElement);
const containerElement = document.querySelectorAll(".container");
console.log(containerElement);


const newh1Element = document.createElement("h1");
//<h1>yeni eklediğim başlık</h1> =>InnerText elementin text değerini atar
newh1Element.innerText="yeni eklediğim başlık";

const newPElement=document.createElement("p");
newPElement.className="text-red";
newPElement.classList.add("f-xl");
newPElement.classList.remove("text-red");
newPElement.classList.add("text-light");
newPElement.style.backgroundColor="black";
newPElement.style.padding ="15px";
newPElement.style.margin="5px";

const newPElement = document.createElement("p");
newPElement.innerHTML= `
<strong>Paragraf başlıyor</strong> <em>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</em> Modi doloribus et aut magni atque. Nihil repellendus molestias aliquid cupiditate illo neque repellat fuga sint quidem!
`;

const contentElement = document.getElementById("content");
contentElement.prepend(newPElement);

bodyElement.appendChild(newh1Element);
containerElement.prepend(newh1Element);