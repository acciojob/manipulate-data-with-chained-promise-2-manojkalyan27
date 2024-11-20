let arr = [1, 2, 3, 4];

// Select the output div
let output = document.querySelector("#output");
function createPromiseWithArray(array) {
    return new Promise((resolve) => {
            resolve(array);
    });
}

// Chained promises to manipulate the array
createPromiseWithArray(arr)
    .then((array) => {
        // Filter out odd numbers
        return new Promise((resolve) => {
            setTimeout(() => {
                const filteredArray = array.filter((num) => num % 2 === 0);
                output.innerHTML = `${filteredArray.join(",")}`;
                resolve(filteredArray);
            }, 1000);
        });
    })
    .then((filteredArray) => {
        // Multiply even numbers by 2
        return new Promise((resolve) => {
            setTimeout(() => {
                // Clear the output before displaying the transformed array
                output.innerHTML = "";
                const transformedArray = filteredArray.map((num) => num * 2);
                output.innerHTML = `${transformedArray.join(",")}`;
                resolve(transformedArray);
            }, 2000);
        });
    });
