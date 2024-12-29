export function calculateBMR(weight, height, age, selectedGender) {
    // Declare a variable to store the calculated BMR (Basal Metabolic Rate)
    let bmr
    
    // Calculate BMR based on gender
    if (selectedGender == 'Male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)
    } else if (selectedGender == 'Female') {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age)
    }

    // Return the calculated BMR
    return bmr
}