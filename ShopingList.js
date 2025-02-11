

addButton.addEventListener("click", function() {
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
