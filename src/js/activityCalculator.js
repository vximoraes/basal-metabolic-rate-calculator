export function calculateCaloricExpenditure(bmr, activitiesPerformed) {
    // Declare a variable to store the caloric expenditure result
    let caloricExpenditure
    
    // Check how many activities were performed and adjust the caloric expenditure based on it
    if (activitiesPerformed.length == 1) {
        caloricExpenditure = bmr * 1.4 // For 1 activity, increase BMR by 40%
    } else if (activitiesPerformed.length == 2) {
        caloricExpenditure = bmr * 1.5 // For 2 activities, increase BMR by 50%
    } else if (activitiesPerformed.length == 3) {
        caloricExpenditure = bmr * 1.6 // For 3 activities, increase BMR by 60%
    }

    // Return the calculated caloric expenditure
    return caloricExpenditure
}