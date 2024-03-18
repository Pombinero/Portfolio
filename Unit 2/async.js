// Step 2: Create the async function
async function race() {
    // Step 2a: Create variables
    let runner1 = false;
    let runner2 = false;
    let loser = '';

    // Step 2b: Create promises
    const runner1Go = new Promise((resolve) => {
        setTimeout(() => {
            loser = 'runner1';
            resolve(true);
        }, 5000); // Timeout set to 5 seconds
    });

    const runner2Go = new Promise((resolve) => {
        setTimeout(() => {
            loser = 'runner2';
            resolve(true);
        }, 8000); // Timeout set to 8 seconds
    });

    // Step 2c: Return array with promises and loser
    return [await runner1Go, await runner2Go, loser];
}

// Step 3: Call the async function and log the loser
race().then((result) => {
    console.log('Loser:', result[2]); // Log the loser
}).catch((error) => {
    console.error('Error:', error);
});