// function getUserGreeting(name: string, age: number) {
//   const isUserOld = age > 60;
//   const isNameCapitalized = name[0] === name[0].toUpperCase();
//   const isAgeEven = age % 2 === 0;
//   const peopleCount = 25;

//   return 25;
// }

// function main() {
//   const message = getUserGreeting("John", 25);
//   const firstThreeChars = message.substring(0, 3);
// }
function getPerson() {
  return ["Alice", 25];
}

const [name, age] = getPerson();

// Don't change the code below this line
export {};
