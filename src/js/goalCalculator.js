export function calculateIdealCalorieIntake(caloricExpenditure, goal) {
    // Declare a variable to store the Ideal Caloric Intake (ICI)
    let ici
    
    // Adjust the caloric intake based on the user's goal
    if (goal == 'Lose Weight') {
        ici = caloricExpenditure - 300 // Reduce calories by 300 for weight loss
    } else if (goal == 'Maintain Weight') {
        ici = caloricExpenditure // Keep caloric intake the same to maintain weight
    } else if (goal == 'Gain Weight') {
        ici = caloricExpenditure + 300 // Increase calories by 300 for weight gain
    }

    // Return the calculated Ideal Caloric Intake
    return ici
}