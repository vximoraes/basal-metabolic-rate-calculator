export function calculateIdealCalorieIntake(caloricExpenditure, goal) {
    let ici
    if (goal == 'Lose Weight') {
        ici = caloricExpenditure - 300
    } else if (goal == 'Maintain Weight') {
        ici = caloricExpenditure
    } else if (goal == 'Gain Weight') {
        ici = caloricExpenditure + 300
    }
    return ici
}