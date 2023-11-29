import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import {useState} from "react";

function FormRegister() {
    const [register, setRegister] = useState({
        mail: "",
        password: "",
        checkPassword: "",
    });
    const handleChangeRegister = (e) => {
        const {name, value} = e.target
        setRegister({...register, [name]: value})
    }

    const handleSubmitRegister = async (e) => {
        e.preventDefault();
        const allInputValueRegister = {
            mail: register.mail,
            password: register.password,
            checkPassword: register.checkPassword
        }

        let data = await fetch("http://localhost:9092/api/users", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Origin': 'http://localhost:5173',
            },
            body: JSON.stringify(allInputValueRegister)
        });

        if (!data.ok) {
            throw new Error(`${data.status}`);
        }else{
            alert("ok");
        }


    };

    return (
        <form className="flex justify-center" onSubmit={handleSubmitRegister}>
            <div className="w-full addregisters w-3/12">
                <label name="mail">
                    Mail:
                </label>
                <input type="text" id="mail" name="mail" value={register.mail}
                       className="block rounded-md p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-emerald-500 sm:text-sm sm:leading-6"
                       onChange={handleChangeRegister}/>

                <label name="password">
                    Mot de passe:
                </label>
                <input type="password" name="password" id="password" value={register.password}
                       className="block w-full rounded-md p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-emerald-500 sm:text-sm sm:leading-6"
                       onChange={handleChangeRegister}/>

                <label name="checkPassword">
                    Vérifier le mot de passe:
                </label>
                <input type="password" name="checkPassword" id="checkPassword" value={register.checkPassword}
                       className="block w-full rounded-md p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-emerald-500 sm:text-sm sm:leading-6"
                       onChange={handleChangeRegister}/>

                <div>
                    <button type="submit"
                            className="bg-emerald-600 hover:bg-emerald-400 text-white font-bold py-2 px-4 mx-4 rounded">Enregistrez-vous !
                    </button>
                </div>
            </div>
        </form>


    )
}

export default FormRegister