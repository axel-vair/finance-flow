import './index.css'
import {useEffect, useState} from "react";

function Index() {

    const [transactions, setTransactions] = useState([]);
    fetch("http://localhost:9092/api/transactions", {
        method: 'GET',
        headers: {
            'Origin': 'http://localhost:5173', // Remplacez par l'origine de votre application React
        }
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => setTransactions(data))
        .catch((error) => console.error("Erreur lors de la requête Fetch :", error));

    useEffect(() => {
        fetch()
    }, []);


    return (
        <main>
            {transactions && transactions.length > 0 && transactions.map((transactionsObj, index) =>
                <li key={index}>
                    <div>Title: {transactionsObj.title}</div>
                    <div>Amount: {transactionsObj.amount}</div>
                    <div>Date: {transactionsObj.date}</div>
                </li>
            )}
        </main>
    );
}

export default Index
