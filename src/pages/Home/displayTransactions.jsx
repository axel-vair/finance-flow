import './index.css';
import { useEffect, useState } from 'react';

function DisplayTransactions() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:9092/api/transactions", {
                    method: 'GET',
                    headers: {
                        'Origin': 'http://localhost:5173',
                    }
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();

                if (isMounted) {
                    console.log('Data fetched successfully:', data);
                    setTransactions(data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, []);
    
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
