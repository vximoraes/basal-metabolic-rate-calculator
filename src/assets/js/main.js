import { calculateBMR } from './bmrCalculator.js'
import { calculateCaloricExpenditure } from './activityCalculator.js'
import { calculateIdealCalorieIntake } from './goalCalculator.js'

document.querySelector('.calculate').addEventListener('click', (e) => {
    e.preventDefault()

    // Get input values
    let weight = parseInt(document.getElementById('weight').value)
    let height = parseInt(document.getElementById('height').value)
    let age = parseInt(document.getElementById('age').value)
    let selectedGender = document.querySelector("input[name='gender']:checked").value

    // Calculate BMR
    let bmr = calculateBMR(weight, height, age, selectedGender)

    // Get activities
    let activitiesPerformed = []
    document.querySelectorAll("[type='checkbox']").forEach(item => {
        if (item.checked) {
            activitiesPerformed.push(item.value)
        }
    })

    // Calculate caloric expenditure
    let caloricExpenditure = calculateCaloricExpenditure(bmr, activitiesPerformed)

    // Get goal
    let selectedGoal = document.getElementById('goal').value
    
    // Calculate ideal calorie intake
    let ici = calculateIdealCalorieIntake(caloricExpenditure, selectedGoal)

    // Output
    document.getElementById('output-box').innerHTML = `Basal Metabolic Rate (BMR): ${bmr.toFixed(2)} <br>
    Caloric Expenditure: ${caloricExpenditure.toFixed(2)} <br>
    Ideal Calorie Intake: ${ici.toFixed(2)}`
})