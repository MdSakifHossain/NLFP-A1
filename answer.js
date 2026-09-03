// Q1
export const describeValue = (v) =>
  `${typeof v} | ${!!v === true ? "truthy" : "falsy"}`;

// Q2
// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch#taking_advantage_of_fall-through
export const getDayType = (d = "") => {
  switch (d.toLocaleLowerCase()) {
    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return "Working Day";
    case "friday":
      return "Weekend";
    case "saturday":
      return "Weekend";
    default:
      return "Invalid Day";
  }
};

// Q3
export const validateUsername = (s = "") => {
  if (s.length < 4) return "Too Short";
  if (s.includes(" ")) return "No Space Allowed";
  if (s.toLocaleLowerCase().includes("admin")) return "Reserved Word";
  return "Available";
};

// Q4
export const getCngFare = (
  distance = 2,
  isNight = false,
  waitingMinutes = 0,
) => {
  const minimumDistancePrice = 50;
  let distancePrice;
  let waitingPrice;

  if (distance <= 2) {
    distancePrice = minimumDistancePrice;
  } else {
    distancePrice = minimumDistancePrice + (distance - 2) * 15;
  }

  if (waitingMinutes > 0) {
    waitingPrice = waitingMinutes * 2;
  }

  if (isNight) {
    const totalMainPrice = distancePrice + waitingPrice;
    return totalMainPrice + totalMainPrice * (20 / 100);
  }

  return distancePrice + waitingPrice;
};

// Q5
export const getChaseVerdict = (target, scored, ballsLeft) => {
  const runsNeeded = target - scored;
  let verdict;

  if (runsNeeded <= 0) return "Won";
  if (ballsLeft <= 0) return "Lost";

  const requiredRate = (runsNeeded / ballsLeft) * 6;

  if (requiredRate <= 6) verdict = "Comfortable";
  else if (requiredRate <= 12) verdict = "Tough";
  else verdict = "Almost Impossible";

  return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};

console.log(getChaseVerdict(200, 200, 12));
console.log(getChaseVerdict(200, 190, 0));
console.log(getChaseVerdict(100, 90, 12));
console.log(getChaseVerdict(100, 80, 12));
console.log(getChaseVerdict(100, 70, 12));
console.log(getChaseVerdict(150, 149, 1));
