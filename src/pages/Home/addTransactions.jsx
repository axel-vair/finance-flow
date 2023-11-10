import {useState} from "react";
import { format } from 'date-fns';

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
            <div className="addTransactions">

                <form onSubmit={handleSubmit}>

                    <label name="amount">
                        Montant:
                    </label>
                    <input type="number" id="amount" name="amount" value={transaction.amount} onChange={handleChange}/>

                    <label name="title">
                        Titre:
                    </label>
                    <input type="text" name="title" id="title" value={transaction.title} onChange={handleChange}/>

                    <label name="date">
                        date:
                    </label>
                    <input type="date" name="date" id="date" value={transaction.date} onChange={handleChange}/>

                    <label name="description">
                        Description:
                    </label>
                    <input type="text" name="description" id="description" value={transaction.description} onChange={handleChange}/>

                    <label name="place">
                        place:
                    </label>
                    <input type="text" name="place" id="place" value={transaction.place} onChange={handleChange}/>

                    <label name="point">
                        Pointer:
                    </label>
                    <input type="checkbox" name="point" id="point" value={transaction.point} onChange={handleChange}/>

                    <button type="submit">Envoyer</button>
                </form>
            </div>
        )

}
export default FormTransaction;
