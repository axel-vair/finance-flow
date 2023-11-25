import './index.css';
import {useEffect, useState} from 'react';

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
    }, [transactions]); // Empty dependency array means this effect will run once when the component mounts

    return (
        <div className="flex flex-col items-center text-center mb-4 mt-4">
            {transactions.map((transactionsObj, index) => (

                <div
                    key={index}
                    className="mb-4 w-1/3 block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <h5
                        className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        {transactionsObj.title}
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        {transactionsObj.amount} €
                    </p>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        Le : {transactionsObj.date}
                    </p>
                </div>

            ))}

        </div>

    );
}

export default DisplayTransactions;
