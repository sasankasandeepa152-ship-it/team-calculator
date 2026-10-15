
function add(a, b) {
    return a + b;
}

function handleAddition() {
    const firstInput = document.getElementById("num1");
    const secondInput = document.getElementById("num2");
    const result = document.getElementById("result");

    const num1 = firstInput.valueAsNumber;
    const num2 = secondInput.valueAsNumber;

    if (
        firstInput.value.trim() === "" ||
        secondInput.value.trim() === "" ||
        Number.isNaN(num1) ||
        Number.isNaN(num2)
    ) {
        result.textContent = "Please enter both numbers.";
        return;
    }

    const answer = add(num1, num2);

    result.textContent = "Result: " + answer;
}
