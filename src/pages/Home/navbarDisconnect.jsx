import './index.css'
import {useState} from "react"
import FormRegister from './formRegister.jsx'
import FormConnect from './formConnect.jsx'
import ButtonConnectForm from './buttonConnect.jsx';
import ButtonRegisterForm from './buttonRegister.jsx';


function NavbarDisconnect() {
    let [isOpenConnect, setIsOpenConnect] = useState(false);
    let [isOpenRegister, setIsOpenRegister] = useState(false);



    return (
        <div >
            <div className="flex justify-items-center w-full m-1.5">
                {/* <ButtonRegisterForm isOpenRegister={isOpenRegister} setIsOpenRegister={setIsOpenRegister}/> */}
                <ButtonConnectForm isOpenConnect={isOpenConnect} setIsOpenConnect={setIsOpenConnect}/>
            </div>
            <div className="flex justify-items-center w-full m-1.5">        
                {isOpenConnect === false ? <FormRegister /> : <FormConnect />}

            </div>


        </div>
    )
}

export default NavbarDisconnect