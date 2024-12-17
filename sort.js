const crypto = require("crypto");

function generateHash(data) {
  return crypto.createHash("sha256").update(JSON.stringify(data)).digest("hex");
}

const [, , modulePath] = process.argv;

const numbersLists = require("./data/nested_numbers_large_array.json");
const numbersListsHash = require("./data/nested_numbers_large_array_hash.json");

const stringsLists = require("./data/nested_strings_large_array.json");
const stringsListsHash = require("./data/nested_strings_large_array_hash.json");

if (!modulePath) {
  console.error("Please provide a module path.");
  process.exit(1);
}

try {
  const fn = require(`./sort/${modulePath}.js`);

  if (typeof fn === "function") {
    console.info(`Running sort: ${modulePath}\n`);

    numbersLists.forEach((list, index) => {
      console.time(`Numbers list ${index + 1}`);
      const result = fn(list);
      console.timeEnd(`Numbers list ${index + 1}`);
      console.log(
        "Result: ",
        generateHash(result) === numbersListsHash[index] ? "SUCCESS" : "FAIL"
      );
    });

    stringsLists.forEach((list, index) => {
      console.time(`Strings list ${index + 1}`);
      const result = fn(list);
      console.timeEnd(`Strings list ${index + 1}`);
      console.log(
        "Result: ",
        generateHash(result) === stringsListsHash[index] ? "SUCCESS" : "FAIL"
      );
    });
  } else {
    console.log("The module doesn't export a callable function.");
  }
} catch (error) {
  console.error(`Failed to load module: ${error.message}`);
}
