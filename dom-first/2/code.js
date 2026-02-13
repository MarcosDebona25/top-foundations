/*
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World!");

 */

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  alert("Hello World");
});

function alertFunction() {
  alert("YAY! YOU DID IT!");
}
const btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", alertFunction);

btn.addEventListener("click", function (e) {
  console.log(e.target);
});

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});