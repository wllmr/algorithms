const [, , type, modulePath] = process.argv;

const numbersListsOrdered = require("./data/nested_numbers_large_array_sorted.json");
const numbersListsResultOrdered = require("./data/nested_numbers_large_array_search.json");
const stringsListsOrdered = require("./data/nested_strings_large_array_sorted.json");
const stringsListsResultOrdered = require("./data/nested_strings_large_array_search.json");

const numbersListsUnordered = require("./data/nested_numbers_large_array.json");
const numbersListsResultUnordered = require("./data/nested_numbers_large_array_search_unordered.json");
const stringsListsUnordered = require("./data/nested_strings_large_array.json");
const stringsListsResultUnordered = require("./data/nested_strings_large_array_search_unordered.json");

if (!modulePath) {
  console.error("Please provide a module path.");
  process.exit(1);
}

try {
  const fn = require(`./search/${modulePath}.js`);
  let numbersLists, numbersResultLists, stringsLists, stringsResultLists;

  if (type === "ordered") {
    numbersLists = numbersListsOrdered;
    numbersResultLists = numbersListsResultOrdered;
    stringsLists = stringsListsOrdered;
    stringsResultLists = stringsListsResultOrdered;
  }

  if (type === "unordered") {
    numbersLists = numbersListsUnordered;
    numbersResultLists = numbersListsResultUnordered;
    stringsLists = stringsListsUnordered;
    stringsResultLists = stringsListsResultUnordered;
  }

  if (typeof fn === "function") {
    console.info(`Running search: ${modulePath}\n`);

    numbersResultLists[0].forEach((search, index) => {
      console.time(`Numbers list ${index + 1}`);
      const result = fn(numbersLists[index], search);
      console.timeEnd(`Numbers list ${index + 1}`);
      console.log(
        "Result: ",
        result,
        result === numbersResultLists[1][index] ? "SUCCESS" : "FAIL"
      );
    });

    stringsResultLists[0].forEach((search, index) => {
      console.time(`Strings list ${index + 1}`);
      const result = fn(stringsLists[index], search);
      console.timeEnd(`Strings list ${index + 1}`);
      console.log(
        "Result: ",
        result,
        result === stringsResultLists[1][index] ? "SUCCESS" : "FAIL"
      );
    });
  } else {
    console.log("The module doesn't export a callable function.");
  }
} catch (error) {
  console.error(`Failed to load module: ${error.message}`);
}
