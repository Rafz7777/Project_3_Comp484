// Task 1: Verification Log
console.log("Status Manager Started");

// Global variable setup (required for Task 10 using setInterval/clearInterval)
let intervalId = null;

// Use const to target required elements for easier access later in the script
// We use querySelector or getElementById to retrieve specific DOM nodes [3].
const mainTitle = document.querySelector("#main-title");
const toggleButton = document.getElementById("toggle-button");
const statusOutput = document.querySelector("#status-output");
const timerButton = document.getElementById("timer-button");
const controlPanel = document.getElementById("control-panel");
const itemList = document.getElementById("item-list");

/* ======================================= */
// --- Task 3: Selecting and Changing Inner HTML ---
// Write the code here to select the mainTitle and update its innerHTML:
// Example: mainTitle.innerHTML = "New Title";
mainTitle.innerHTML = "DOM Project: Ready!";

/* ======================================= */
// --- Task 4: Attribute Modification ---
// Write the code here to use setAttribute() on the toggleButton element
// to add the required 'data-action' attribute.
toggleButton.setAttribute("data-action", "status-toggle");

/* ======================================= */
// --- Task 9: Looping and Applying Changes ---
// Define and call the highlightListItems() function here so it runs on load.
// You will need to use document.querySelectorAll('li') and a loop structure
// (like a 'for' loop or 'forEach') to iterate over all list items [3-5].
function highlightListItems() {
    const listItems = document.querySelectorAll('#item-list li');
    listItems.forEach(item => {
        item.style.color = "blue";
    });
}

// Run the function once when the page loads
highlightListItems();

/* ======================================= */
// --- Tasks 5, 6, 7 & 8: Toggle Functionality ---
// Define the functions (e.g., toggleStatus, createTimestamp) and event listeners
// here to handle the click event on the toggleButton [6, 7].
function toggleStatus(e) {
    e.preventDefault(); // Task 6: Prevent default behavior

    // Toggle the 'hidden' class to show/hide the div
    statusOutput.classList.toggle("hidden");

    // Task 7: Apply inline styles based on visibility
    if (!statusOutput.classList.contains("hidden")) {
        mainTitle.style.backgroundColor = "yellow"; // visible → highlight
        createTimestamp(); // Task 8: Add timestamp
    } else {
        mainTitle.style.backgroundColor = ""; // hidden → reset
    }
}

// Bind the click event to the toggle button
toggleButton.addEventListener("click", toggleStatus);

function createTimestamp() {
    // Create a new <span> element
    const timeSpan = document.createElement("span");

    // Set its innerHTML to the current time
    timeSpan.innerHTML = new Date().toLocaleTimeString();

    // Optionally add a space or separator for readability
    timeSpan.innerHTML += " "; 

    // Append the span to the status-output div
    statusOutput.appendChild(timeSpan);
}

/* ======================================= */
// --- Task 10: Timed Animation ---
// Define the startFlashing() and stopFlashing() functions using
// setInterval() and clearInterval() [8, 9], and bind them to the
// timerButton using addEventListener for 'click' and 'dblclick' [10].
function startFlashing() {
    // Prevent multiple intervals from stacking
    if (intervalId) return;

    intervalId = setInterval(() => {
        controlPanel.classList.toggle("hidden");
    }, 500); // toggle every 500ms
}

function stopFlashing() {
    clearInterval(intervalId); // stop the interval
    intervalId = null;         // reset the global variable
    // Ensure the control panel is visible after stopping
    controlPanel.classList.remove("hidden");
}
// Click → start flashing
timerButton.addEventListener("click", startFlashing);

// Double click → stop flashing
timerButton.addEventListener("dblclick", stopFlashing);
