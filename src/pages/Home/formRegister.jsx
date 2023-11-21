import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import {useState} from "react";

function FormRegister() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [checkPassword, setCheckPassword] = useState("");

    const [email, setEmail] = useState("");

    async function save(event) {
        event.preventDefault();
        await api.post("/create", {
            email: email,
            password: password,
            checkPassword: checkPassword
        });
        alert("Publisher Record Saved");
        // reset state
        setId("");
        setEmail("");
        setPassword("");
        setCheckPassword("");
        load();
    }

    return (
        <div className="form flex flex-col justify-center">
            <label>
                Email:
                <input type="text" name="mail"
                       value={email}
                       className="block rounded-md p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-emerald-500 sm:text-sm sm:leading-6"
                       onChange={e => setEmail(e.target.value)}/>
            </label>
            <label>
                Mot de passe:
                <input type="password" name="password"
                       value={password}
                       className="block rounded-md p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-emerald-500 sm:text-sm sm:leading-6"
                       onChange={e => setPassword(e.target.password)}/>
            </label>
            <label>
                Vérification du mot de passe:
                <input type="password" name="checkPassword"
                       value={checkPassword}
                       className="block rounded-md p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-emerald-500 sm:text-sm sm:leading-6"
                       onChange={e => setCheckPassword(e.target.checkPassword)}
                />
            </label>
            <div>
                <input type="submit" value="Soumettre"
                       className="bg-emerald-600 hover:bg-emerald-400 text-white font-bold py-2 px-4 mx-4 rounded"
                       onClick={save}/>
            </div>
        </div>

    )
}

export default FormRegister