const mission = process.argv[2];
// console.log(process.argv);

if (mission == "learn") {
  console.log("Time to write some Node code!");
} else {
    console.log(`Is ${mission} really more fun?`); // Using template strings
}

// process.argv
// first value is always path to node executable. It can also be accessed using process.argv0.
// In our case second value will be first parameter which will be path to our hello.js file.
