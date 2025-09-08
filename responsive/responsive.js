// Select all buttons inside cards
const buttons = document.querySelectorAll(".card button");

// Loop through buttons and add event listener
buttons.forEach(button => {
    button.addEventListener("click", function() {
        // Get card name from the <h2> element inside the same card
        const cardName = button.parentElement.querySelector("h").textContent;
        
    });
});
