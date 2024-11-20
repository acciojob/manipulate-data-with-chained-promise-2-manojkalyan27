// Your array
let arr = [1, 2, 3, 4];

// Select the output div
let output = document.querySelector("#output");

// Function to return a promise that resolves after 3 seconds with the array
function createPromiseWithArray(array) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(array);
        }, 3000);
    });
}

// Chained promises to manipulate the array
createPromiseWithArray(arr)
    .then((array) => {
        // Filter out odd numbers
        return new Promise((resolve) => {
            setTimeout(() => {
                const filteredArray = array.filter((num) => num % 2 === 0);
                output.innerHTML = `Filtered (Even Numbers): ${filteredArray.join(", ")}<br>`;
                resolve(filteredArray);
            }, 1000);
        });
    })
    .then((filteredArray) => {
        // Multiply even numbers by 2
        return new Promise((resolve) => {
            setTimeout(() => {
                const transformedArray = filteredArray.map((num) => num * 2);
                output.innerHTML += `Transformed (Doubled Even Numbers): ${transformedArray.join(", ")}`;
                resolve(transformedArray);
            }, 2000);
        });
    });
