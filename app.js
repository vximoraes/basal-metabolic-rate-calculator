document.getElementById("calculate").addEventListener('click', (e) => {
    e.preventDefault();
    function calculateBMR() {
        // Calculate Basal Metabolic Rate (BMR)
        let weight = parseInt(document.getElementById("weight").value);
        let height = parseInt(document.getElementById("height").value);
        let age = parseInt(document.getElementById("age").value);
        let selectedGender = document.querySelector("input[name='gender']:checked").value;
        let bmr;
        
        if (selectedGender == "Male") {
            bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
        } else if (selectedGender == "Female") {
            bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
        }

        // Calculate Caloric Expenditure
        let activitiesPerformed = [];
        document.querySelectorAll("[type='checkbox']").forEach(item => {
            if (item.checked == true) {
                activitiesPerformed.push(item.value);
            }
        })

        let caloricExpenditure;

        if (activitiesPerformed.length == 1) {
            caloricExpenditure = bmr * 1.4
        } else if (activitiesPerformed.length == 2) {
            caloricExpenditure = bmr * 1.5
        } else if (activitiesPerformed.length == 3) {
            caloricExpenditure = bmr * 1.6
        }

        // Calculate Ideal Calorie Intake (ICI)
        let selectedGoal = document.getElementById("goal");
        let goal = selectedGoal.value;
        let ici;

        if(goal == "Lose Weight") {
            ici = caloricExpenditure - 300;
        } else if (goal == "Maintain Weight") {
            ici = caloricExpenditure;
        } else if (goal == "Gain Weight") {
            ici = caloricExpenditure + 300;
        }

        // Output
        document.getElementById("output-box").innerHTML = `Basal Metabolic Rate (BMR): ${bmr.toFixed(2)} <br>
        Caloric Expenditure: ${caloricExpenditure.toFixed(2)} <br>
        Ideal Calorie Intake: ${ici.toFixed(2)}`;
    }
    calculateBMR();
})