import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import {useState} from "react";

function FormConnect() {
    const [connect, setConnect] = useState({
        mail: "",
        password: "",
        checkPassword: "",
    });
    const handleChangeConnect = (e) => {
        const {name, value} = e.target
        setConnect({...connect, [name]: value})
    }

    const handleSubmitConnect = async (e) => {
        e.preventDefault();
        const allInputValueConnect = {
            mail: connect.mail,
            password: connect.password,
        }

        let data = await fetch("http://localhost:9092/api/users/checkUser", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Origin': 'http://localhost:5173',
            },
            body: JSON.stringify(allInputValueConnect)
        });

        if (!data.ok) {
            throw new Error(`${data.status}`);
        }else{
            alert("ok");
        }


    };

    return (
        <form className="flex justify-center m-1.5" onSubmit={handleSubmitConnect}>
            <div className="w-full addConnects w-3/12">
                <label name="mail">
                    Mail:
                </label>
                <input type="text" id="mail" name="mail" value={connect.mail}
                       className="block rounded-md p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-emerald-500 sm:text-sm sm:leading-6"
                       onChange={handleChangeConnect}/>

                <label name="password">
                    Mot de passe:
                </label>
                <input type="password" name="password" id="password" value={connect.password}
                       className="block w-full rounded-md p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-emerald-500 sm:text-sm sm:leading-6"
                       onChange={handleChangeConnect}/>


                <div>
                    <button type="submit"
                            className="m-1.5 bg-emerald-600 hover:bg-emerald-400 text-white font-bold py-2 px-4 mx-4 rounded">Connectez-vous !
                    </button>
                </div>
            </div>
        </form>


    )
}

export default FormConnect