
const generateBtn = document.getElementById("generateBtn");
const numberList = document.getElementById("numberList");

function generateNumbers() {

    // Clear existing items
    numberList.textContent = "";

    // Generate numbers from 1 to 5
    for (let i = 1; i <= 5; i++) {

        const listItem = document.createElement("li");

        listItem.textContent = "The number is " + i;

        numberList.appendChild(listItem);
    }
}

// Add click event listener
generateBtn.addEventListener("click", generateNumbers);
