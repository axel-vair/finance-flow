import './index.css'
import {useState} from "react"
import FormRegister from './formRegister.jsx'
import FormConnect from './formConnect.jsx'

function ButtonRegisterForm({isOpenRegister, setIsOpenRegister}) {
    // const [isOpenRegister, setIsOpenRegister] = useState(false);
    
    function toggle() {
      setIsOpenRegister((isOpenRegister) => !isOpenRegister);
    }

    return (
            <div className="w-1/3">
                <button className="register bg-emerald-600 hover:bg-emerald-400 text-white font-bold py-2 px-4 mx-4 rounded"
                onClick={toggle}>
                    Inscription
                </button>
            </div>

    )
}

export default ButtonRegisterForm