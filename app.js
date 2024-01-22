let inp = document.querySelector(".add");
let btn = document.querySelector(".add_btn")
let ul = document.querySelector("ul");


btn.addEventListener("click", function () {
    let item = document.createElement("li");

    item.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "Remove";
    delbtn.classList.add("remove");
    item.appendChild(delbtn);
    if (inp.value != "") {
        ul.appendChild(item);
    }else{
        alert("Enter task to add");
    }
    inp.value = "" // this will reset the input text field
});


ul.addEventListener("click", function (event) {
    console.log(event.target.nodeName);

    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        alert("One Task deleted");
    } else {
        alert("Enter a task to add");
    }
});
