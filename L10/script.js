let a = document.querySelector("#change-btn");
a.addEventListener("click", () => {
    let d=document.querySelector("#description");
    let e=document.querySelector("h1");
    e.innerHTML="This is the new title";
    d.innerHTML="This is the new description";
});

let b = document.querySelector("#color-btn");
b.addEventListener("click", () => {
    let d=document.querySelector("#color-paragraph");
    d.style = "color: red";
});

let c = document.querySelector("#remove-btn");
c.addEventListener("click", () => {
    let d=document.querySelector("#item-list");
    let f = d.lastElementChild;
    f.remove();
});
let d = document.querySelector("#item-list");
let e = document.querySelector("#item-input");
let g = document.querySelector("#add-item-btn");
g.addEventListener("click", () => {
    let h = document.createElement("li");
    h.innerHTML = e.value;
    d.appendChild(h);
    e.value="";
});