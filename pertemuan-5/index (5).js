// ====================
// Array Exercises
// ====================
let people = ["Greg", "Mary", "Devon", "James"];

// 1. for-loop iterate & log
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// 2. forEach iterate & log
people.forEach(person => console.log(person));

// 3. Remove "Greg"
people = people.filter(p => p !== "Greg");

// 4. Remove "James"
people = people.filter(p => p !== "James");

// 5. Add "Matt" to front
people.unshift("Matt");

// 6. Add your name to the end
people.push("Your Name");

// 7. for-loop iterate till "Mary" then exit
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Mary") break;
}

// 8. Copy array without "Mary" & "Matt"
let copy = people.slice().filter(p => p !== "Mary" && p !== "Matt");
console.log("Copy without Mary & Matt:", copy);

// 9. Redefine people, remove "Devon", add "Elizabeth" & "Artie"
people = ["Greg", "Mary", "Devon", "James"];
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);

// 10. Create withBob array concatenated with "Bob"
let withBob = people.concat("Bob");
console.log(withBob);


// ====================
// Object Exercises
// ====================
let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// 1. Add "Go" to languages
programming.languages.push("Go");

// 2. Change difficulty to 7 (bracket notation)
programming["difficulty"] = 7;

// 3. Remove jokes key
delete programming.jokes;

// 4. Add isFun = true (dot notation)
programming.isFun = true;

// 5. Map languages to index - language and log
programming.languages.map((lang, i) => {
  console.log(`${i} - ${lang}`);
});

// Log final programming object for check
console.log(programming);
