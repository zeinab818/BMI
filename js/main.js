document.getElementById("calculate").addEventListener("click", () => {
    const height = parseFloat(document.getElementById("height").value) / 100;
    const weight = parseFloat(document.getElementById("weight").value);
    const resultBox = document.getElementById("result");

    if (!height || !weight || height <= 0 || weight <= 0) {
        resultBox.textContent = "Please enter valid height and weight.";
        resultBox.style.backgroundColor = "#7f1d1d";
        resultBox.classList.remove("hidden");
        return;
    }

    const bmi = weight / (height * height);
    let message = "";
    let color = "";

    if (bmi < 18.5) {
        message = "Underweight 🧍‍♀️";
        color = "#facc15";
    } else if (bmi < 25) {
        message = "Normal 💪";
        color = "#22c55e";
    } else if (bmi < 30) {
        message = "Overweight 😅";
        color = "#f97316";
    } else {
        message = "Obese 😔";
        color = "#ef4444";
    }

    resultBox.innerHTML = `Your BMI is <strong>${bmi.toFixed(1)}</strong><br>Status: ${message}`;
    resultBox.style.backgroundColor = "#1f1f2e";
    resultBox.style.border = `2px solid ${color}`;
    resultBox.classList.remove("hidden");
});
