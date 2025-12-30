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


fielding: (inputs: Record<string, any>) => {
  const putouts = Number(inputs.putouts);
  const assists = Number(inputs.assists);
  const errors = Number(inputs.errors);

  if (
    isNaN(putouts) ||
    isNaN(assists) ||
    isNaN(errors)
  ) {
    return "0.000 | Invalid input";
  }

  const totalChances = putouts + assists + errors;

  if (totalChances === 0) {
    return "0.000 | No fielding chances";
  }

  const fieldingPercentage =
    (putouts + assists) / totalChances;

  return `
Fielding Percentage: ${fieldingPercentage.toFixed(3)}
  `.trim();
},

slugging: (inputs: Record<string, any>) => {
  const singles = Number(inputs.singles) || 0;
  const doubles = Number(inputs.doubles) || 0;
  const triples = Number(inputs.triples) || 0;
  const homeRuns = Number(inputs.homeRuns) || 0;
  const atBats = Number(inputs.atBats) || 0;

  if (atBats <= 0) {
    return "0.000 | Invalid at-bats";
  }

  const totalBases = singles + 2 * doubles + 3 * triples + 4 * homeRuns;
  const slugging = totalBases / atBats;

  return `
Slugging Percentage: ${slugging.toFixed(3)} |
Total Bases: ${totalBases} |
At-Bats: ${atBats}
  `.trim();
},



};