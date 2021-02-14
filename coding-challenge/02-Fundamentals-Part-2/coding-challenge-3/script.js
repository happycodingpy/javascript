// Coding Challenge #3

// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)

// Your tasks:

// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)

// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method

// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall

// Task 1
const markMiller = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    // Task 2
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

// Task 1
const johnSmith = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    // Task 2
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

markMiller.calcBMI();
johnSmith.calcBMI();
console.log(markMiller.bmi, johnSmith.bmi);

// Task 3

if (markMiller.bmi > johnSmith.bmi) {
    console.log(`${markMiller.fullName} BMI (${markMiller.calcBMI()}) is higher than ${johnSmith.fullName} (${johnSmith.calcBMI()})!`);
} else {
    console.log( `${johnSmith.fullName} BMI (${johnSmith.calcBMI()}) is higher than ${markMiller.fullName} (${markMiller.calcBMI()})!`);
}

// const higherBMI = (a,b) => markMiller.bmi > johnSmith.bmi ? `${markMiller.fullName} BMI (${markMiller.calcBMI()} is higher than ${johnSmith.fullName} (${johnSmith.calcBMI()})` : `${johnSmith.fullName} BMI (${johnSmith.calcBMI()} is higher than ${markMiller.fullName} (${markMiller.calcBMI()})`;
// console.log(higherBMI);