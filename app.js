document.getElementById("calculate").addEventListener('click', function () {
    function calculateBMR() {
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

        document.getElementById("output-box").value = `Taxa metabólica Basal(TMB): ${bmr}`
    }
    calculateBMR();
})
