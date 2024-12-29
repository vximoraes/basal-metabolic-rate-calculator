import { calculateBMR } from './bmrCalculator.js'
import { calculateCaloricExpenditure } from './activityCalculator.js'
import { calculateIdealCalorieIntake } from './goalCalculator.js'

// Add event listener to the "calculate" button
document.querySelector('.calculate').addEventListener('click', (e) => {
    e.preventDefault() 

    // Get input values for weight, height, age, and gender
    let weight = parseInt(document.getElementById('weight').value)
    let height = parseInt(document.getElementById('height').value)
    let age = parseInt(document.getElementById('age').value)
    let selectedGender = document.querySelector("input[name='gender']:checked").value

    // Calculate BMR based on input values
    let bmr = calculateBMR(weight, height, age, selectedGender)

    // Collect checked activities from checkboxes
    let activitiesPerformed = []
    document.querySelectorAll("[type='checkbox']").forEach(item => {
        if (item.checked) {
            activitiesPerformed.push(item.value)
        }
    })

    // Calculate caloric expenditure using BMR and performed activities
    let caloricExpenditure = calculateCaloricExpenditure(bmr, activitiesPerformed)

    // Get the selected goal (Lose, Maintain, or Gain Weight)
    let selectedGoal = document.getElementById('goal').value
    
    // Calculate ideal calorie intake based on goal and caloric expenditure
    let ici = calculateIdealCalorieIntake(caloricExpenditure, selectedGoal)

    // Display the results: BMR, caloric expenditure, and ideal calorie intake
    document.getElementById('output-box').innerHTML = `Basal Metabolic Rate (BMR): ${bmr.toFixed(2)} <br>
    Caloric Expenditure: ${caloricExpenditure.toFixed(2)} <br>
    Ideal Calorie Intake: ${ici.toFixed(2)}`
})