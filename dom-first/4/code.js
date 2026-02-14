const formEl = document.querySelector("form");
const ulEl = document.querySelector("ul");
const inputEl = document.querySelector("input");

formEl.addEventListener("submit", function (event) {
    event.preventDefault();

    const currentValue = inputEl.value.trim();

    if (currentValue === "") return;

    inputEl.value = "";

    const listItem = document.createElement("li");
    const spanItem = document.createElement("span");
    const btnItem = document.createElement("button");

    spanItem.textContent = currentValue;
    btnItem.textContent = "Delete";

    listItem.appendChild(spanItem);
    listItem.appendChild(btnItem);
    ulEl.appendChild(listItem);

    btnItem.addEventListener("click", function () {
        listItem.remove();
    });

    inputEl.focus();
});
