function processIntegerList(inputList) {

    // error if length condition is not met

    if (inputList.length % 10 != 0) {
        console.error("Error: The list length must be a multiple of 10.");
        return;
    }

    // using filter function
    // removing elements which are present at indices which are multiple of 2 or 3

    const modifiedList = inputList.filter((value, index) => (index % 2 !== 0) && (index % 3 !== 0));
    console.log("Modified List:", modifiedList);

    // printing the list

    return modifiedList;
}
const inputList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
processIntegerList(inputList);
