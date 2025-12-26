export const sportsFormulas = {

batting: (inputs: Record<string, any>) => {
  const hits = Number(inputs.hits);
  const atBats = Number(inputs.atBats);

  if (isNaN(hits) || isNaN(atBats) || atBats <= 0) {
    return "0.000 | Invalid input";
  }

  const battingAverage = hits / atBats;

  return `
Batting Average: ${battingAverage.toFixed(3)} |
Hits: ${hits} |
At-Bats: ${atBats}
  `.trim();
},


};