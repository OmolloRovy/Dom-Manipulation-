  const itemList = document.getElementById("item-list");
const addButton = document.getElementById("add-button");
const newItem = document.getElementById("new-item");

addButton.addEventListener("click", function(newu) {
    if (newItem.value !== "") {
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", function() {
            li.remove();
        });   
        li.innerText = newItem.value;
        li.appendChild(deleteButton);
        itemList.appendChild(li);
        newItem.value = "";
    }
});
