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

        // Calculate Ideal Calorie Consumption (ICC)
        let selectedGoal = document.getElementById("goal");
        let goal = selectedGoal.value;
        let icc;

        if(goal == "Perder Gordura") {
            icc = caloricExpenditure - 300;
        } else if (goal == "Manter Peso") {
            icc = caloricExpenditure;
        } else if (goal == "Ganhar Massa") {
            icc = caloricExpenditure + 300;
        }

        // Output
        document.getElementById("output-box").innerHTML = `Taxa metabólica Basal(TMB): ${bmr.toFixed(2)} <br>
        Gasto Calórico: ${caloricExpenditure.toFixed(2)} <br>
        Consumo de Calorias Ideal: ${icc.toFixed(2)}`
    }
    calculateBMR();
})
