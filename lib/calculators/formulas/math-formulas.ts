function getLetterGrade(gpa: number, scale: string): string {
  const normalizedGPA = scale === "5.0" ? (gpa / 5.0) * 4.0 : gpa

  if (normalizedGPA >= 3.7) return "A"
  if (normalizedGPA >= 3.3) return "A-"
  if (normalizedGPA >= 3.0) return "B+"
  if (normalizedGPA >= 2.7) return "B"
  if (normalizedGPA >= 2.3) return "B-"
  if (normalizedGPA >= 2.0) return "C+"
  if (normalizedGPA >= 1.7) return "C"
  if (normalizedGPA >= 1.3) return "C-"
  if (normalizedGPA >= 1.0) return "D"
  return "F"
}

export const mathFormulas = {


  gradePercentage: (inputs: Record<string, any>) => {
    const assessments = inputs.assessments || []
    const extraCredit = Number(inputs.extraCredit) || 0
    const roundingOption = inputs.roundingOption || "nearest"

    if (!assessments || assessments.length === 0) {
      return "0.00%"
    }

    let totalWeightedScore = 0
    let totalWeight = 0

    assessments.forEach((a: any) => {
      const score = Number(a.scoreObtained)
      const total = Number(a.totalScore)
      const weight = Number(a.weightage)

      // Skip invalid entries
      if (isNaN(score) || isNaN(total) || total <= 0 || isNaN(weight) || weight <= 0) {
        return
      }

      // Calculate percentage for this assessment
      const percentage = (score / total) * 100

      // 🔥 FIX: Weight should be divided by 100 since it's a percentage
      // If weight is 30%, it should contribute 30% to final grade
      const weightFraction = weight / 100

      // Add this assessment's contribution to the total
      totalWeightedScore += percentage * weightFraction
      totalWeight += weightFraction
    })

    if (totalWeight === 0) {
      return "0.00%"
    }

    // 🔥 FIX: Don't divide by totalWeight again - it's already normalized
    // The totalWeight should equal 1.0 (100%) if weights sum to 100%
    let finalPercentage = totalWeightedScore + extraCredit

    // Cap at 100%
    if (finalPercentage > 100) finalPercentage = 100

    // Apply rounding
    if (roundingOption === "up") finalPercentage = Math.ceil(finalPercentage)
    else if (roundingOption === "down") finalPercentage = Math.floor(finalPercentage)
    else finalPercentage = Math.round(finalPercentage)

    const getLetterGrade = (percentage: number) => {
      if (percentage >= 90) return "A+"
      if (percentage >= 80) return "A"
      if (percentage >= 70) return "B"
      if (percentage >= 60) return "C"
      if (percentage >= 50) return "D"
      return "F"
    }

    const letterGrade = getLetterGrade(finalPercentage)

    // Show warning if weights don't sum to 100%
    const totalWeightPercentage = (totalWeight * 100).toFixed(1)
    const warning = totalWeight !== 1.0 ? ` (Warning: Weights sum to ${totalWeightPercentage}%)` : ""

    return `Grade Percentage: ${finalPercentage.toFixed(2)}% | Grade: ${letterGrade}${warning}`
  },

  attendance: (inputs: Record<string, any>) => {
    const totalClasses = Number(inputs.totalClasses) || 0
    const attendedClasses = Number(inputs.attendedClasses) || 0

    if (totalClasses <= 0) {
      return "0.00% | Invalid total classes"
    }

    if (attendedClasses < 0) {
      return "0.00% | Invalid attended classes"
    }

    let attendancePercentage = (attendedClasses / totalClasses) * 100

    attendancePercentage = Math.round(attendancePercentage * 100) / 100

    const status = attendancePercentage >= 75 ? "Satisfactory" : "Unsatisfactory"

    return `Attendance: ${attendancePercentage.toFixed(2)}% | Status: ${status} | Attended ${attendedClasses} out of ${totalClasses} classes`
  },

  percentageChange: (inputs: Record<string, any>) => {
    const original = Number(inputs.originalValue);
    const newValue = Number(inputs.newValue);

    if (isNaN(original) || isNaN(newValue) || original === 0) {
      return "0%";
    }

    const change = newValue - original;
    const percentage = (change / original) * 100;

    let type = "No Change";
    if (percentage > 0) type = "Increase";
    else if (percentage < 0) type = "Decrease";

    return `Change: ${percentage.toFixed(2)}% | Type: ${type}`;
  },


  quadratic: (inputs: Record<string, any>) => {
    const a = Number(inputs.coeffA);
    const b = Number(inputs.coeffB);
    const c = Number(inputs.coeffC);

    if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
      return "Invalid coefficients (a cannot be 0)";
    }

    const discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
      const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      return `Root 1: ${root1.toFixed(2)} | Root 2: ${root2.toFixed(2)} | Type: Two Real Roots`;
    } else if (discriminant === 0) {
      const root = -b / (2 * a);
      return `Root: ${root.toFixed(2)} | Type: One Repeated Root`;
    } else {
      const realPart = (-b / (2 * a)).toFixed(2);
      const imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
      return `Roots: ${realPart} ± ${imagPart}i | Type: Complex Roots`;
    }
  },

  average: (inputs: Record<string, any>) => {
    const numbersStr = String(inputs.numbers);
    const numbers = numbersStr
      .split(',')
      .map(n => Number(n.trim()))
      .filter(n => !isNaN(n));

    if (numbers.length === 0) {
      return "No valid numbers entered";
    }

    const sum = numbers.reduce((acc, n) => acc + n, 0);
    const average = sum / numbers.length;
    const count = numbers.length;

    return `Average: ${average.toFixed(2)} | Sum: ${sum.toFixed(2)} | Count: ${count}`;
  },

  percentagecalculator: (inputs: Record<string, any>) => {
    const percentage = Number(inputs.percentage);
    const value = Number(inputs.value);

    if (isNaN(percentage) || isNaN(value)) {
      return "0.00 | Invalid input";
    }

    const result = (percentage / 100) * value;

    return `
    Result: ${result.toFixed(2)} 
  `.trim();
  },


  cuberoot: (inputs: Record<string, any>) => {
    const number = Number(inputs.number);

    if (isNaN(number)) {
      return "0 | Invalid input";
    }

    const cubeRoot = Math.cbrt(number);

    return `
Cube Root: ${cubeRoot.toFixed(4)}
  `.trim();
  },

  digitalroot: (inputs: Record<string, any>) => {
    const number = Number(inputs.number);

    if (isNaN(number) || number < 0) {
      return "0 | Invalid input";
    }

    let n = Math.floor(number);

    while (n >= 10) {
      n = n
        .toString()
        .split("")
        .reduce((sum, digit) => sum + Number(digit), 0);
    }

    return `
Digital Root: ${n}
  `.trim();
  },

  division: (inputs: Record<string, any>) => {
    const dividend = Number(inputs.dividend);
    const divisor = Number(inputs.divisor);

    if (isNaN(dividend) || isNaN(divisor)) {
      return "0 | Invalid input";
    }

    if (divisor === 0) {
      return "Undefined | Division by zero";
    }

    const result = dividend / divisor;

    return `
Result: ${result}
  `.trim();
  },

  decimalCalculator: (inputs: Record<string, any>) => {
    const first = Number(inputs.firstNumber);
    const second = Number(inputs.secondNumber);
    const operation = String(inputs.operation || "add");
    const decimalPlaces = Number(inputs.decimalPlaces) || 2;

    if (isNaN(first) || isNaN(second)) {
      return "0 | Invalid input";
    }

    let result: number;

    switch (operation) {
      case "add":
        result = first + second;
        break;
      case "subtract":
        result = first - second;
        break;
      case "multiply":
        result = first * second;
        break;
      case "divide":
        if (second === 0) return "∞ | Division by zero";
        result = first / second;
        break;
      default:
        return "0 | Invalid operation";
    }

    return `
Result: ${result.toFixed(decimalPlaces)}
  `.trim();
  },



};