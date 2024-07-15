function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchDataAsync() {
    console.log("Starting asynchronous fetch...");

    const fetchApi1 = delay(10000).then(() => console.log("Fetched data from API 1 after 10 seconds"));
    const fetchApi2 = delay(5000).then(() => console.log("Fetched data from API 2 after 5 seconds"));
    const fetchApi3 = delay(7000).then(() => console.log("Fetched data from API 3 after 7 seconds"));

    await Promise.all([fetchApi1, fetchApi2, fetchApi3]);

    console.log("All data fetched asynchronously");
}

fetchDataAsync();
