function calculateBMI(weight: number, height: number): number | string {
    try {
        if (weight <= 0 || height <= 0) {
            throw new Error("Cân nặng hoặc chiều cao không hợp lệ");
        }

        const bmi = weight / (height * height);
        return parseFloat(bmi.toFixed(2));
    } catch (error: any) {
        return error.message;
    }
}

const weightInKg = 70;
const heightInMeters = 1.75;

const result = calculateBMI(weightInKg, heightInMeters);
console.log(result);
