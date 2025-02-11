
const itemList = document.getElementById("item-list");
const addButton = document.getElementById("add-button");
const newItemInput = document.getElementById("new-item"); // Renamed for clarity

addButton.addEventListener("click", () => { // Use arrow function for conciseness
    const newItemText = newItemInput.value.trim(); // Get value and remove leading/trailing spaces

    if (newItemText !== "") {  // Check for empty or whitespace-only input
        const listItem = document.createElement("li"); // More descriptive variable name
        listItem.textContent = newItemText; // Use textContent for setting text

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";  // Use textContent
        deleteButton.classList.add("delete-button"); // Add a class for styling/targeting

        deleteButton.addEventListener("click", () => { // Arrow function
            listItem.remove(); // Remove the list item
        });

        listItem.appendChild(deleteButton);
        itemList.appendChild(listItem);
        newItemInput.value = ""; // Clear the input field
    }
});

// Optional: Add event listener for "Enter" key press in the input field
newItemInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addButton.click(); // Trigger the add button click
    }
});
