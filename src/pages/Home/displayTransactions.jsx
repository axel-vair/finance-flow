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
            .then(response => response.json()) // Parse the response as JSON
            .then(data => {
                setTransactions(data);
            });
    }); // Empty dependency array to run the effect only once on mount

    return (
        <div id="displayAllTransaction" className="flex flex-col items-center text-center overflow-auto m-1.5">
            {transactions.map((transactionsObj, index) => (
                <div
                    key={index}
                    className="w-full rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
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

