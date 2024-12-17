const [, , modulePath] = process.argv;

const numbersLists = require("./data/nested_numbers_large_array_sorted.json");
const numbersListsResult = require("./data/nested_numbers_large_array_search.json");

const stringsLists = require("./data/nested_strings_large_array_sorted.json");
const stringsListsResult = require("./data/nested_strings_large_array_search.json");

if (!modulePath) {
  console.error("Please provide a module path.");
  process.exit(1);
}

try {
  const fn = require(`./search/${modulePath}.js`);

  if (typeof fn === "function") {
    console.info(`Running search: ${modulePath}\n`);

    numbersListsResult[0].forEach((search, index) => {
      console.time(`Numbers list ${index + 1}`);
      const result = fn(numbersLists[index], search);
      console.timeEnd(`Numbers list ${index + 1}`);
      console.log(
        "Result: ",
        result,
        result === numbersListsResult[1][index] ? "SUCCESS" : "FAIL"
      );
    });

    stringsListsResult[0].forEach((search, index) => {
      console.time(`Strings list ${index + 1}`);
      const result = fn(stringsLists[index], search);
      console.timeEnd(`Strings list ${index + 1}`);
      console.log(
        "Result: ",
        result,
        result === stringsListsResult[1][index] ? "SUCCESS" : "FAIL"
      );
    });
  } else {
    console.log("The module doesn't export a callable function.");
  }
} catch (error) {
  console.error(`Failed to load module: ${error.message}`);
}
