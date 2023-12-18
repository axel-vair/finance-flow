import './index.css';
import {useState} from "react";
import FormConnect from './formConnect.jsx';
import FormTransaction from './addTransactions.jsx';
import DisplayTransactions from './displayTransactions.jsx';



function ButtonDisplayTransaction() {
    const [isOpen, setIsOpen] = useState(false);
    
    function toggle() {
      setIsOpen((isOpen) => !isOpen);
    }

    return (
        <div className="w-2/3 ">
            <button className="account bg-emerald-600 hover:bg-emerald-400 text-white font-bold py-2 px-4 mx-4 rounded"
            onClick={toggle}>
                Mes transactions
            </button>
            {isOpen && <DisplayTransactions />}
        </div>
    )
}

export default ButtonDisplayTransaction