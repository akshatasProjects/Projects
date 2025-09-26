const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, AmtStroke) {
  if (AmtStroke === 1) {
    return `Hole-in-one!`;
  } else if (AmtStroke <= par - 2) {
    return `Eagle`;
  } else if (AmtStroke <= par - 1) {
    return `Birdie`;
  } else if (AmtStroke === par) {
    return `Par`;
  } else if (AmtStroke === par + 1) {
    return `Bogey`;
  } else if (AmtStroke === par + 2) {
    return `Double Bogey`;
  } else if (AmtStroke >= par + 3) {
    return `Go Home!`;
  }
}
