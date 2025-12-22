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

export const educationFormulas = {

  gpa: (inputs: Record<string, any>) => {
    const courses = inputs.courses || []
    const gradeScale = String(inputs.gradeScale)

    if (!courses || courses.length === 0) {
      return "0.00"
    }

    let totalPoints = 0
    let totalCredits = 0

    courses.forEach((course: any) => {
      const grade = Number(course.grade)
      const credits = Number(course.credits)

      if (!isNaN(grade) && !isNaN(credits) && credits > 0) {
        totalPoints += grade * credits
        totalCredits += credits
      }
    })

    if (totalCredits === 0) {
      return "0.00"
    }

    let gpa = totalPoints / totalCredits

    if (gradeScale === "5.0") {
      gpa = (gpa / 4.0) * 5.0
    }

    const letterGrade = getLetterGrade(gpa, gradeScale)

    return `GPA: ${gpa.toFixed(2)} | Credits: ${totalCredits} | Grade: ${letterGrade}`
  },

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

satConversion: (inputs: Record<string, any>) => {
  const mode = inputs.conversionMode || "raw-to-scaled"
  const section = inputs.section || "math"
  const scoreInput = Number(inputs.scoreInput) || 0

  if (scoreInput < 0) return "0 | Invalid score"

  const conversionTables: Record<string, { raw: number[]; scaled: number[] }> = {
    math: {
      raw: Array.from({ length: 61 }, (_, i) => i),
      scaled: Array.from({ length: 61 }, (_, i) => 200 + Math.round((i / 60) * 600)) 
    },
    reading: {
      raw: Array.from({ length: 61 }, (_, i) => i),
      scaled: Array.from({ length: 61 }, (_, i) => 200 + Math.round((i / 60) * 600))
    },
    writing: {
      raw: Array.from({ length: 61 }, (_, i) => i),
      scaled: Array.from({ length: 61 }, (_, i) => 200 + Math.round((i / 60) * 600))
    }
  }

  const table = conversionTables[section]
  if (!table) return "0 | Invalid section"

  let convertedScore = 0

  if (mode === "raw-to-scaled") {
    const clampedScore = Math.min(scoreInput, 60)
    convertedScore = table.scaled[clampedScore]
  } else if (mode === "scaled-to-raw") {
    const closestIndex = table.scaled.findIndex(s => s >= scoreInput)
    convertedScore = table.raw[closestIndex >= 0 ? closestIndex : 60]
  }

  return `Section: ${section.toUpperCase()} | Mode: ${mode.replace(/-/g, " ")} | Input: ${scoreInput} | Converted Score: ${convertedScore}`
},

readSpeed: (inputs: Record<string, any>) => {
  const totalWords = Number(inputs.totalWords) || 0
  const minutes = Number(inputs.minutes) || 1
  const textTypeMultiplier = Number(inputs.textType) || 1
  const goal = String(inputs.goal) || "speed"

  if (totalWords <= 0 || minutes <= 0) {
    return "0 WPM | Invalid input"
  }

  let wpm = totalWords / minutes

  wpm *= textTypeMultiplier

  wpm = Math.round(wpm)

  let output = `Reading Speed: ${wpm} WPM`

  if (goal === "comprehension") {
    const comprehensionWPM = Math.round(wpm * 0.75)
    output += ` | Recommended Comprehension Speed: ${comprehensionWPM} WPM`
  }

  return output
},

studytime: (inputs: Record<string, any>) => {
  const chapters = Number(inputs.chapters) || 0
  const hoursPerChapter = Number(inputs.hoursPerChapter) || 0
  const speedType = String(inputs.speedType || "normal")
  const goal = String(inputs.goal || "revision")

  if (chapters <= 0 || hoursPerChapter <= 0) {
    return "0 hours | Invalid input"
  }

  let totalHours = chapters * hoursPerChapter

  const speedMultipliers: Record<string, number> = {
    slow: 1.25,
    normal: 1,
    fast: 0.75
  }

  const goalMultipliers: Record<string, number> = {
    revision: 0.75,
    deep: 1.5
  }

  totalHours *= speedMultipliers[speedType] || 1
  totalHours *= goalMultipliers[goal] || 1

  totalHours = Math.round(totalHours * 100) / 100

  return `Estimated Study Time: ${totalHours} hours | Chapters: ${chapters} | Speed: ${speedType} | Goal: ${goal}`
},

exampredict: (inputs: Record<string, any>) => {
  const currentScore = Number(inputs.currentScore) || 0
  const completedWeight = Number(inputs.completedWeight) || 0
  const finalWeight = Number(inputs.finalWeight) || 0
  const difficulty = String(inputs.difficulty || "moderate")
  const targetType = String(inputs.targetType || "pass")

  if (completedWeight + finalWeight !== 100) {
    return "Error: Completed weight + Final weight must equal 100%"
  }

  const weightedCurrent = (currentScore * completedWeight) / 100

  let targetScore = 0
  if (targetType === "pass") targetScore = 50
  if (targetType === "gradeB") targetScore = 80
  if (targetType === "gradeA") targetScore = 90

  let difficultyFactor = 1
  if (difficulty === "easy") difficultyFactor = 0.95    
  if (difficulty === "moderate") difficultyFactor = 1
  if (difficulty === "hard") difficultyFactor = 1.10     

  let requiredRaw = targetScore - weightedCurrent

  let requiredFinal = (requiredRaw / finalWeight) * 100

  requiredFinal = requiredFinal * difficultyFactor

  if (requiredFinal < 0) requiredFinal = 0
  if (requiredFinal > 100) requiredFinal = 100

  return `You need ${requiredFinal.toFixed(2)}% on the final exam to achieve your target. Current Weighted Score: ${weightedCurrent.toFixed(2)}%. Target: ${targetScore}%. Difficulty Factor: ${difficultyFactor}.`
},

assignment: (inputs: Record<string, any>) => {
  const tasks = inputs.tasks || []
  const scale = String(inputs.scale || "100")

  if (!tasks || tasks.length === 0) {
    return "0 | No tasks"
  }

  let totalWeightedScore = 0
  let totalWeight = 0

  tasks.forEach((task: any) => {
    const score = Number(task.taskScore)
    const weight = Number(task.taskWeight)

    if (!isNaN(score) && !isNaN(weight) && weight > 0) {
      totalWeightedScore += (score * weight) / 100
      totalWeight += weight
    }
  })

  if (totalWeight === 0) {
    return "0 | Invalid weights"
  }

  const percentage = (totalWeightedScore / totalWeight) * 100

  let finalResult = percentage

  if (scale === "4") {
    finalResult = (percentage / 100) * 4
  }

  return `Result: ${finalResult.toFixed(2)} / ${scale} | Percentage: ${percentage.toFixed(2)}% | Total Weight: ${totalWeight}%`
},


studyplanner: (inputs: Record<string, any>) => {
  const hoursPerDay = Number(inputs.hours) || 0;
  const totalDays = Number(inputs.days) || 0;
  const tasks = inputs.tasks || [];

  if (hoursPerDay <= 0 || totalDays <= 0) {
    return "Invalid input values";
  }

  if (!tasks.length) {
    return "No tasks provided";
  }

  const difficultyMultiplier: Record<string, number> = {
    easy: 1,
    medium: 1.5,
    hard: 2
  };

  const totalAvailableHours = hoursPerDay * totalDays;

  let totalWeightedHours = 0;

  tasks.forEach((task: any) => {
    const hours = Number(task.hoursNeeded) || 0;
    const mult = difficultyMultiplier[String(task.difficulty)] || 1;
    totalWeightedHours += hours * mult;
  });

  if (totalWeightedHours === 0) {
    return "0 hours needed";
  }

  const hourUnitValue = totalAvailableHours / totalWeightedHours;

  let plan = `Study Plan (${totalDays} days | ${hoursPerDay} hours/day):\n`;

  tasks.forEach((task: any, index: number) => {
    const baseHours = Number(task.hoursNeeded) || 0;
    const diff = String(task.difficulty);
    const mult = difficultyMultiplier[diff] || 1;

    const allocated = baseHours * mult * hourUnitValue;
    plan += `\nTask ${index + 1}: ${task.taskName}\n`;
    plan += `- Difficulty: ${diff}\n`;
    plan += `- Suggested Hours: ${allocated.toFixed(2)} hrs\n`;
  });

  return plan.trim();
},

adaptivegrading: (inputs: Record<string, any>) => {
  const assessments = inputs.assessmentList || [];
  const gradeScale = String(inputs.gradeScale || "4.0");
  const extraCredit = Number(inputs.extraCredit) || 0;

  if (!assessments || assessments.length === 0) {
    return "0.00 | No assessments entered";
  }

  // Calculate total weight
  const totalWeight = assessments.reduce((sum: number, a: any) => {
    const w = Number(a.weight);
    return !isNaN(w) && w > 0 ? sum + w : sum;
  }, 0);

  if (totalWeight <= 0) {
    return "0.00 | Invalid weight distribution";
  }

  let weightedScore = 0;

  assessments.forEach((a: any) => {
    const score = Number(a.score);
    const weight = Number(a.weight);
    const difficulty = Number(a.difficulty);

    if (!isNaN(score) && !isNaN(weight) && !isNaN(difficulty) && weight > 0) {
      const normalizedWeight = weight / totalWeight;
      const adjustedScore = (score * difficulty);

      weightedScore += adjustedScore * normalizedWeight;
    }
  });

  // Add extra credit
  weightedScore += extraCredit;

  // Cap score at 100
  if (weightedScore > 100) weightedScore = 100;

  // Convert to GPA
  let gpa = (weightedScore / 100) * 4.0;

  if (gradeScale === "5.0") {
    gpa = (weightedScore / 100) * 5.0;
  }

  return `
Final Score: ${weightedScore.toFixed(2)}% |
GPA: ${gpa.toFixed(2)} / ${gradeScale} |
Extra Credit: +${extraCredit}
  `.trim();
},

ielts: (inputs: Record<string, any>) => {
  const testType = String(inputs.testType || "");
  const listening = Number(inputs.listeningScore);
  const reading = Number(inputs.readingScore);
  const writing = Number(inputs.writingBand);
  const speaking = Number(inputs.speakingBand);

  // Validate
  if (
    isNaN(listening) || isNaN(reading) ||
    isNaN(writing) || isNaN(speaking)
  ) {
    return "0.0 | Invalid input";
  }

  // Listening band conversion table
  const listeningTable: Record<string, number[]> = {
    academic: [
      4, 5, 6, 7, 8, 9, 10, 11, 12, 13, // 0–9
      14,14,15,15,16,16,17,17,18,18,   // 10–19
      19,19,20,20,21,21,22,22,23,23,   // 20–29
      24,24,25,25,26,26,27,27,28,28,   // 30–39
      29,29                            // 40
    ],
    general: [
      4, 4, 5, 5, 6, 6, 7, 7, 8, 8,
      9, 9, 10,10,11,11,12,12,13,13,
      14,14,15,15,16,16,17,17,18,18,
      19,19,20,20,21,21,22,22,23,23,
      24,24
    ]
  };

  // Reading band conversion table
  const readingTable: Record<string, number[]> = {
    academic: listeningTable.academic,
    general: [
      4,4,4,5,5,6,6,7,7,8,
      8,9,9,10,10,11,11,12,12,13,
      13,14,14,15,15,16,16,17,17,18,
      18,19,19,20,20,21,21,22,22,23,
      24,24
    ]
  };

  // Convert listening score → band
  const listeningBand = (
    listeningTable[testType]?.[listening] || 0
  ) / 3;

  // Convert reading score → band
  const readingBand = (
    readingTable[testType]?.[reading] || 0
  ) / 3;

  // Overall IELTS band
  const rawBand = (listeningBand + readingBand + writing + speaking) / 4;

  // IELTS rounding: nearest 0.5
  const finalBand = Math.round(rawBand * 2) / 2;

  return `
Final Band: ${finalBand.toFixed(1)} |
Listening Band: ${listeningBand.toFixed(1)} |
Reading Band: ${readingBand.toFixed(1)} |
Writing Band: ${writing.toFixed(1)} |
Speaking Band: ${speaking.toFixed(1)}
  `.trim();
},

impactfactor: (inputs: Record<string, any>) => {
  const citations = Number(inputs.citationsCurrentYear);
  const articlesY1 = Number(inputs.articlesYear1);
  const articlesY2 = Number(inputs.articlesYear2);
  const year = Number(inputs.calculationYear);

  if (
    isNaN(citations) ||
    isNaN(articlesY1) ||
    isNaN(articlesY2) ||
    isNaN(year)
  ) {
    return "0.00 | Invalid input";
  }

  const totalArticles = articlesY1 + articlesY2;

  if (totalArticles <= 0) {
    return "0.00 | No articles available for calculation";
  }

  const impactFactor = citations / totalArticles;

  return `
Impact Factor (${year}): ${impactFactor.toFixed(3)} |
Citations: ${citations} |
Articles (Last 2 Years): ${totalArticles}
  `.trim();
},



};