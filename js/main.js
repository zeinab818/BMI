
document.getElementById("calculate").addEventListener("click", () => {
    const height = parseFloat(document.getElementById("height").value) / 100;
    const weight = parseFloat(document.getElementById("weight").value);
    const age = parseInt(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const resultBox = document.getElementById("result");

    // التحقق من القيم المدخلة
    if (!height || !weight || height <= 0 || weight <= 0 || !age || !gender) {
        resultBox.textContent = "Please enter valid height, weight, age, and select gender.";
        resultBox.style.backgroundColor = "#7f1d1d";
        resultBox.classList.remove("hidden");
        return;
    }

    // حساب BMI
    const bmi = weight / (height * height);
    let message = "";
    let color = "";
    let extraMessage = "";

    // الحالة العامة حسب BMI
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

    // الرسائل الإضافية حسب السن والجنس
    if (age < 18) {
        extraMessage = "🔍 Note: BMI for people under 18 is interpreted differently depending on age and gender. Use BMI-for-age charts.";
    } else {
        if (gender === "male") {
            if (bmi > 25) {
                extraMessage = "⚠️ If you're athletic or muscular, a high BMI might reflect muscle mass, not excess fat.";
            } else {
                extraMessage = "✅ Your BMI is within a healthy range for adult males.";
            }
        } else if (gender === "female") {
            if (bmi > 25) {
                extraMessage = "⚠️ Your BMI is above the recommended range. But remember, women naturally have a higher fat percentage.";
            } else {
                extraMessage = "✅ Your BMI is within a healthy range for adult females.";
            }
        }
    }

    // إظهار النتيجة
    resultBox.innerHTML = `
        Your BMI is <strong>${bmi.toFixed(1)}</strong><br>
        Status: ${message}<br><br>
        <small>${extraMessage}</small>
    `;
    resultBox.style.backgroundColor = "#1f1f2e";
    resultBox.style.border = `2px solid ${color}`;
    resultBox.classList.remove("hidden");
});
