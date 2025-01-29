// Updated code to use await/async functionality
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 1000);
    });
}

// Now, we can use async/await with this function:
// Example
async function getData() {
    try {
        const data = await fetchData();
        console.log(data); // "Data received"
    } catch (error) {
        console.error(error);
    }
}

getData();
