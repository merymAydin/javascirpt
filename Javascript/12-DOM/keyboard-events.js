//keypress() => numeric,alpanumeric ve character tuşlarında çalışır. (ASCHI code karşılı olan tuşlarda çalışır.)
document.addEventListener("keypress",getKeyEvents)

document.addEventListener("keydown",getKeyEvents)

document.addEventListener("keyup",getKeyEvents)

function getKeyEvents(e) {
    console.log(e.which,e.key,e.type);
}