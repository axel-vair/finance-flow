import './index.css'
import {useState} from "react"
import FormRegister from './formRegister.jsx'
import FormConnect from './formConnect.jsx'

function ButtonConnectForm({isOpenConnect, setIsOpenConnect}) {
   // const [isOpen, setIsOpen] = useState(false);
    
    function toggle() {
      setIsOpenConnect((isOpenConnect) => !isOpenConnect);
    }
    let nameButton="";
    {isOpenConnect === false ? nameButton = "Je veux me connecter" : nameButton = "Je veux m'enregistrer"}


    return (

            <div className="w-1/3 flex justify-items-center w-full m-1.5">
                <button className="register text-center bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 mx-4 rounded flex justify-items-center text-centerw-1/2"
                onClick={toggle}>
                    {nameButton}
                </button>
            </div>
    )
}

export default ButtonConnectForm