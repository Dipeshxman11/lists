
var newItem = document.createElement("li");
newItem.textContent = "Item 5";


var itemsByClassName = document.getElementsByClassName("list-group-item");
itemsByClassName[itemsByClassName.length - 1].parentNode.appendChild(newItem);

