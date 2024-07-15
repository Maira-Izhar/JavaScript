//Write a sync and Async funtion to fetch data from 3 APIs with delays 10000, 5000 and 7000 respectively.

// Sync function



function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchDataSync(){
    console.log("Starting Synchronous fetch...");

    await delay(10000);
    console.log("Fetched data from API 1 after 10 seconsd");

    await delay(5000);
    console.log("Fetched data from API 2 after 5 seconsd");
    
    await delay(7000);
    console.log("Fetched data from API 3 after 7 seconsd");

    console.log("All data fetched synchronously");
}

fetchDataSync();