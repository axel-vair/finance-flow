import './index.css';
import { useEffect, useState } from 'react';

function DisplayTransactions() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9092/api/transactions", {
            method: 'GET',
            headers: {
                'Origin': 'http://localhost:5173',
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
    }, []); // Empty dependency array means this effect will run once when the component mounts

    return (
        <main>
            {transactions.map((transactionsObj, index) => (
                <li key={index}>
                    <div>Title: {transactionsObj.title}</div>
                    <div>Amount: {transactionsObj.amount}</div>
                    <div>Date: {transactionsObj.date}</div>
                </li>
            ))}
        </main>
    );
}

export default DisplayTransactions;
