export const healthFormulas = {
bodyfat: (inputs: Record<string, number | string>) => {
  const waist = Number(inputs.waist)
  const neck = Number(inputs.neck)
  const height = Number(inputs.height)
  const hip = Number(inputs.hip)
  const gender = inputs.gender as string
  const unit = inputs.unit || "cm" 

  const toInches = (val: number) => (unit === "cm" ? val / 2.54 : val)

  const waistIn = toInches(waist)
  const neckIn = toInches(neck)
  const heightIn = toInches(height)
  const hipIn = toInches(hip)

  let bodyFat: number

  if (gender === "male") {
    bodyFat = 495 / (1.0324 - 0.19077 * Math.log10(waistIn - neckIn) + 0.15456 * Math.log10(heightIn)) - 450
  } else {
    bodyFat =
      495 /
        (1.29579 -
          0.35004 * Math.log10(waistIn + hipIn - neckIn) +
          0.22100 * Math.log10(heightIn)) -
      450
  }

  return bodyFat.toFixed(1)
},

bmi: (inputs: Record<string, string | number>) => {
  const weight = Number(inputs.weight)
  const height = Number(inputs.height)
  const weightUnit = inputs.weightUnit        
  const heightUnit = inputs.heightUnit        
  const gender = inputs.gender                
  
  let weightKg = weightUnit === "lb" ? weight * 0.45359237 : weight
  let heightM: number = 0

  if (heightUnit === "cm") heightM = height / 100
  else if (heightUnit === "inch") heightM = height * 0.0254
 

  if (heightM <= 0) {
    throw new Error("Invalid height value")
  }

  return (weightKg / (heightM * heightM)).toFixed(1)
},
  
calories: (inputs: Record<string, number | string>) => {
  const age = Number(inputs.age)
  let weight = Number(inputs.weight)
  let height = Number(inputs.height)
  const gender = inputs.gender as string
  const activity = Number(inputs.activity)
  const weightUnit = inputs.weightUnit as string
  const heightUnit = inputs.heightUnit as string

  if (weightUnit === "pounds") {
    weight = weight * 0.453592
  }

  if (heightUnit === "inch") {
    height = height * 2.54
  }

  const bmr =
    gender === "male"
      ? 10 * weight + 6.25 * height - 5 * age + 5
      : 10 * weight + 6.25 * height - 5 * age - 161

  return Math.round(bmr * activity)
},

water: (inputs: Record<string, number | string>) => {
  const weight = Number(inputs.weight) || 0
  const age = Number(inputs.age) || 0
  const gender = (inputs.gender || "").toString().toLowerCase()
  const activity = Number(inputs.activity) || 0

  let baseIntakePerKg = 35 
  if (age > 0 && age < 14) baseIntakePerKg = 40 
  if (age > 55) baseIntakePerKg = 30 

  let dailyIntake = (weight * baseIntakePerKg) / 1000

  if (gender === "male") dailyIntake += 0.5
  else if (gender === "female") dailyIntake += 0.3

  if (activity >= 0) dailyIntake += activity * 0.4

  if (isNaN(dailyIntake) || dailyIntake <= 0) return "0.0"

  return dailyIntake.toFixed(1)
},
pace: (inputs: { distance: number; distanceUnit: string; hours: number; minutes: number; seconds: number }) => {
  let distance = Number(inputs.distance)
  const unit = inputs.distanceUnit
  const hours = Number(inputs.hours) || 0
  const minutes = Number(inputs.minutes) || 0
  const seconds = Number(inputs.seconds) || 0

  if (distance <= 0 || (hours === 0 && minutes === 0 && seconds === 0)) 
    return "Please enter valid distance and time."

  if (unit === "mi") distance *= 1.60934

  const totalSeconds = hours * 3600 + minutes * 60 + seconds
  const paceSeconds = totalSeconds / distance

  const paceHours = Math.floor(paceSeconds / 3600)
  const paceMinutes = Math.floor((paceSeconds % 3600) / 60)
  const paceRemainingSeconds = Math.round(paceSeconds % 60)

  const speed = distance / (totalSeconds / 3600)

  return `Distance: ${inputs.distance} ${unit}, Time: ${hours}h ${minutes}m ${seconds}s, Pace: ${paceHours > 0 ? paceHours + 'h ' : ''}${paceMinutes}m ${paceRemainingSeconds}s per km, Average Speed: ${speed.toFixed(2)} km/h`
},



heartRate: (inputs: { age: number; goal: string }) => {
  const age = Number(inputs.age)
  const goal = inputs.goal

  let restingHR: number
  if (age < 18) restingHR = 75
  else if (age < 25) restingHR = 65
  else if (age < 40) restingHR = 70
  else if (age < 55) restingHR = 72
  else restingHR = 75

  const maxHR = 220 - age
  const reserve = maxHR - restingHR

  let intensity: number
  switch (goal) {
    case "warmup": intensity = 0.5; break
    case "fatburn": intensity = 0.6; break
    case "endurance": intensity = 0.7; break
    case "highintensity": intensity = 0.8; break
    case "maxeffort": intensity = 0.9; break
    default: intensity = 0.6
  }

  const targetHR = Math.round(reserve * intensity + restingHR)

  return `Goal: ${goal}, Resting HR: ${restingHR} bpm, Max HR: ${Math.round(maxHR)} bpm, Target HR: ${targetHR} bpm`
},
protein: (inputs: Record<string, number | string>) => {
  const weight = Number(inputs.weight)
  const goal = Number(inputs.goal) // 0.8, 1.4, 1.9
  const activityFactor = {
    sedentary: 1,
    moderate: 1.1,
    active: 1.2
  }[inputs.activity as string] || 1

  const protein = weight * goal * activityFactor
  return protein.toFixed(1)
},

tdee: (inputs: Record<string, number | string>) => {
  const age = Number(inputs.age)
  let weight = Number(inputs.weight)
  let height = Number(inputs.height)
  const gender = inputs.gender as string
  const activity = Number(inputs.activity)
  const formula = inputs.formula as string
  const heightUnit = inputs.heightUnit as string
  const weightUnit = inputs.weightUnit as string

  // --- Unit Conversion ---
  if (heightUnit === "inch") height = height * 2.54
  if (weightUnit === "pound") weight = weight * 0.453592

  let bmr = 0

  switch (formula) {
    case "mifflin": 
      bmr =
        gender === "male"
          ? 10 * weight + 6.25 * height - 5 * age + 5
          : 10 * weight + 6.25 * height - 5 * age - 161
      break

    case "harris": 
      bmr =
        gender === "male"
          ? 66.5 + 13.75 * weight + 5.003 * height - 6.755 * age
          : 655.1 + 9.563 * weight + 1.850 * height - 4.676 * age
      break

    case "revisedHarris":
      bmr =
        gender === "male"
          ? 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age
          : 447.593 + 9.247 * weight + 3.098 * height - 4.330 * age
      break

    case "katch": 
      const bodyFatPercent = Number(inputs.bodyFat || 20) 
      const leanMass = weight * (1 - bodyFatPercent / 100)
      bmr = 370 + 21.6 * leanMass
      break

    case "schofield": 
      if (gender === "male") {
        if (age >= 18 && age <= 30) bmr = 15.057 * weight + 692.2
        else if (age > 30 && age <= 60) bmr = 11.472 * weight + 873.1
        else bmr = 11.711 * weight + 587.7
      } else {
        if (age >= 18 && age <= 30) bmr = 14.818 * weight + 486.6
        else if (age > 30 && age <= 60) bmr = 8.126 * weight + 845.6
        else bmr = 9.082 * weight + 658.5
      }
      break

    default:
      bmr =
        gender === "male"
          ? 10 * weight + 6.25 * height - 5 * age + 5
          : 10 * weight + 6.25 * height - 5 * age - 161
  }

  const tdee = Math.round(bmr * activity)
  return tdee
},

macros: (inputs: Record<string, number | string>) => {
  const gender = String(inputs.gender)
  const age = Number(inputs.age)
  let height = Number(inputs.height)
  let weight = Number(inputs.weight)
  const activity = Number(inputs.activity)
  const goal = String(inputs.goal)
  const heightUnit = String(inputs.heightUnit || "cm")
  const weightUnit = String(inputs.weightUnit || "kg")

  if (heightUnit === "inch") height *= 2.54
  if (weightUnit === "pounds") weight *= 0.453592

  const bmr =
    gender === "male"
      ? 10 * weight + 6.25 * height - 5 * age + 5
      : 10 * weight + 6.25 * height - 5 * age - 161

  let calories = bmr * activity
  if (goal === "change") calories += 0 
  const carbs = (calories * 0.4) / 4
  const protein = (calories * 0.3) / 4
  const fat = (calories * 0.3) / 9

  return `Calories: ${calories.toFixed(0)} kcal | Carbs: ${carbs.toFixed(0)}g | Protein: ${protein.toFixed(0)}g | Fat: ${fat.toFixed(0)}g`
},
bfp: (inputs: Record<string, number | string>) => {
  const gender = inputs.gender as string;

  let height = Number(inputs.height);
  if (inputs.heightUnit === "inch") height *= 2.54;

  let weight = Number(inputs.weight);
  if (inputs.weightUnit === "lb") weight *= 0.453592;

  let waist = Number(inputs.waist);
  let neck = Number(inputs.neck);
  let hip = Number(inputs.hip);

  if (gender === "male") {
    return (86.010 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76).toFixed(1);
  } else {
    return (163.205 * Math.log10(waist + hip - neck) - 97.684 * Math.log10(height) - 78.387).toFixed(1);
  }
},

starbucks: (inputs: Record<string, any>) => {
  const menuItem = String(inputs.menuItem || "");
  const drinkSize = String(inputs.drinkSize || "");
  const milkType = String(inputs.milkType || "");
  const syrupPumps = Number(inputs.syrupPumps) || 0;
  const whippedCream = String(inputs.whippedCream || "none");
  const extraToppings = inputs.extraToppings || [];

  if (!menuItem || !drinkSize || !milkType) {
    return "0 kcal | Invalid selection";
  }

  const baseCalories: Record<string, number> = {
    latte: 120,
    cappuccino: 90,
    americano: 15,
    mocha: 160,
    frappuccino: 220,
    tea: 0,
  };

  const sizeMultiplier: Record<string, number> = {
    tall: 1,
    grande: 1.3,
    venti: 1.6,
    trenta: 2,
  };

  const milkCalories: Record<string, number> = {
    whole: 80,
    "2percent": 60,
    nonfat: 40,
    almond: 30,
    oat: 70,
    soy: 65,
    coconut: 50,
  };

  const whippedCalories: Record<string, number> = {
    none: 0,
    regular: 70,
    extra: 120,
  };

  const toppingCalories: Record<string, number> = {
    "caramel-drizzle": 30,
    "chocolate-chips": 50,
    cinnamon: 5,
    "vanilla-powder": 20,
  };

  let calories =
    (baseCalories[menuItem] || 0) *
    (sizeMultiplier[drinkSize] || 1);

  calories += milkCalories[milkType] || 0;
  calories += syrupPumps * 20;
  calories += whippedCalories[whippedCream] || 0;

  extraToppings.forEach((t: string) => {
    calories += toppingCalories[t] || 0;
  });

  return `
Total Calories: ${Math.round(calories)} kcal |
Drink: ${menuItem} |
Size: ${drinkSize} |
Milk: ${milkType}
  `.trim();
},


}
