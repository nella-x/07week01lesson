function printName(callback) {
  setTimeout(() => {
    console.log("Hey! My name is Nella.");
    callback();
  }, 3000);
}

function printAge(callback) {
  setTimeout(() => {
    console.log("I am 35 years old.");
    callback();
  }, 3000);
}

function printLocation(callback) {
  setTimeout(() => {
    console.log("My hometown is Malmö.");
    callback();
  }, 3000);
}

function printHobbies() {
  setTimeout(() => {
    console.log("My hobbies are coding and reading.");
  }, 3000);
}

printName(() => {
  printAge(() => {
    printLocation(() => {
      printHobbies();
    });
  });
});
