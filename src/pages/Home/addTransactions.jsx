import {useState} from "react";
import {format} from 'date-fns';

function FormTransaction() {
    const [transaction, setTransaction] = useState({
        amount: "",
        title: "",
        date: "",
        description: "",
        place: "",
        point: "",
    });
    const handleChange = (e) => {
        const {name, value} = e.target
        setTransaction({...transaction, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const allInputValue = {
            amount: transaction.amount,
            title: transaction.title,
            date: format(new Date(transaction.date), 'dd/MM/yyyy HH:mm:ss'),
            description: transaction.description,
            place: transaction.place,
            point: transaction.point
        }

        let data = await fetch("http://localhost:9092/api/transactions", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Origin': 'http://localhost:5173',
            },
            body: JSON.stringify(allInputValue)
        });

        if (!data.ok) {
            throw new Error(`${data.status}`);
        }
    };

    return (
        <form className="flex justify-center" onSubmit={handleSubmit}>
            <div className="w-full addTransactions w-3/12">
                <label name="amount">
                    Montant:
                </label>
                <input type="number" id="amount" name="amount" value={transaction.amount}
                       className="block rounded-md p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-emerald-500 sm:text-sm sm:leading-6"
                       onChange={handleChange}/>

                <label name="title">
                    Titre:
                </label>
                <input type="text" name="title" id="title" value={transaction.title}
                       className="block w-full rounded-md p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-emerald-500 sm:text-sm sm:leading-6"
                       onChange={handleChange}/>


                <label name="description">
                    Description:
                </label>
                <input type="text" name="description" id="description" value={transaction.description}
                       className="block w-full rounded-md p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-emerald-500 sm:text-sm sm:leading-6"
                       onChange={handleChange}/>

                <label name="place">
                    place:
                </label>
                <input type="text" name="place" id="place" value={transaction.place}
                       className="block w-full rounded-md p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-emerald-500 sm:text-sm sm:leading-6"
                       onChange={handleChange}/>

                <label name="date">
                    date:
                </label>
                <input type="date" name="date" id="date" value={transaction.date}
                       className="block rounded-md p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-emerald-500 sm:text-sm sm:leading-6"
                       onChange={handleChange}/>


                <label name="point">
                    Pointer:
                </label>
                <input type="checkbox" name="point" id="point" value={transaction.point}
                       className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                       onChange={handleChange}/>

                <div>
                    <button type="submit"
                            className="bg-emerald-600 hover:bg-emerald-400 text-white font-bold py-2 px-4 mx-4 rounded">Envoyer
                    </button>
                </div>
            </div>
        </form>

    )

}

export default FormTransaction;
