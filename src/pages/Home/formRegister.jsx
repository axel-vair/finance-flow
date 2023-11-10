import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from "react";

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
        <div class="form">
            <label>
                Email:
                <input type="text" name="mail"
                value={email}
                onChange={e => setEmail(e.target.value)} />
            </label>
            <label>
               Mot de passe:
                <input type="password" name="password" 
                value={password}
                onChange={e => setPassword(e.target.password)}/>
            </label>
            <label>
               Vérification du mot de passe:
                <input type="password" name="checkPassword" 
                value={checkPassword}
                onChange={e => setCheckPassword(e.target.checkPassword)}
                />
            </label>
            <input type="submit" value="Soumettre" onClick={save}/>
        </div>

    )
}

export default FormRegister