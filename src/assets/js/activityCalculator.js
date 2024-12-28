export function calculateCaloricExpenditure(bmr, activitiesPerformed) {
    let caloricExpenditure
    if (activitiesPerformed.length == 1) {
        caloricExpenditure = bmr * 1.4
    } else if (activitiesPerformed.length == 2) {
        caloricExpenditure = bmr * 1.5
    } else if (activitiesPerformed.length == 3) {
        caloricExpenditure = bmr * 1.6
    }
    return caloricExpenditure
}