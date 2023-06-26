window.onload = main;

function main() {

    // ===== Constants ===============
    const DEBUG_MODE = true;


    // ===== State variables =========
    let inputVal = 0;
    let currentVal = 0;


    // ===== Cached elements =========
    const appEl = document.getElementById("app");
    const totalEl = document.querySelector("#app > .total");
    const inputEl = document.querySelector("#app > .incrementer > input");
    const btnEls = document.querySelectorAll("#app > .incrementer > button");

    if (DEBUG_MODE)
        checkEls();


    // ===== Event listeners ==========

    // input
    inputEl.addEventListener("input", () => {
        inputVal = parseFloat(inputEl.value) || 0;
    });

    // app delegate click listener
    appEl.addEventListener("click", evt => {
        const target = evt.target;

        if (target.nodeName === "BUTTON") {
            if (target.classList.contains("dec")) {
                currentVal -= inputVal;
            } else if (target.classList.contains("inc")) {
                currentVal += inputVal;
            }

            render();
        }

    });


    // ===== Functions ===================

    // Display to the DOM
    function render() {
        // Set text
        inputEl.innerText = inputVal.toString();
        totalEl.innerText = currentVal.toString();

        // Decide styling based on total current value
        if (currentVal > 0) {
            totalEl.style.color = "#119846";
            totalEl.innerText = "+" + totalEl.innerText;
        } else if (currentVal < 0)
            totalEl.style.color = "#a20909";
        else
            totalEl.style.color = "#111111";
    }

    // Ensures elements contained are viable, logs assertion error otherwise.
    function checkEls() {
        console.assert(appEl !== null);
        console.assert(totalEl !== null);
        console.assert(inputEl !== null);
        console.assert(btnEls.length === 2);
    }
}
