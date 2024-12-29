export function calculateBMR(weight, height, age, selectedGender) {
    let bmr
    if (selectedGender == 'Male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)
    } else if (selectedGender == 'Female') {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age)
    }
    return bmr
}