async function showAllTransactions(){
    let response = fetch("http://localhost:9092/api/transactions");
    let transactions = await response.json();
    console.log(transactions);
}

showAllTransactions();