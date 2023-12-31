import './index.css';
import {useState} from "react";
import FormConnect from './formConnect.jsx';
import FormTransaction from './addTransactions.jsx';
import DisplayTransactions from './displayTransactions.jsx';
import ButtonFormTransaction from './buttonFormTransaction.jsx';
import ButtonDisplayTransaction from './buttonDisplayTransaction.jsx';




function NavbarConnect() {
    const [isOpen, setIsOpen] = useState(false);
    
    function toggle() {
      setIsOpen((isOpen) => !isOpen);
    }

    return (
        <div className="flex w-full m-1.5">
            <ButtonFormTransaction />
            <ButtonDisplayTransaction />

        </div>


    )
}

export default NavbarConnect