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


magicnumber: (inputs: Record<string, any>) => {
  const totalGames = Number(inputs.totalGames);
  const teamWins = Number(inputs.teamWins);
  const opponentLosses = Number(inputs.opponentLosses);

  if (
    isNaN(totalGames) ||
    isNaN(teamWins) ||
    isNaN(opponentLosses) ||
    totalGames <= 0
  ) {
    return "0 | Invalid input";
  }

  const magicNumber =
    totalGames + 1 - teamWins - opponentLosses;

  return `
Magic Number: ${magicNumber}
  `.trim();
},


};