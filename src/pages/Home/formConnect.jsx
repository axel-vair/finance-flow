import './index.css'

function FormConnect() {
    return (
        <div class="form">
            <label>
                Login:
                <input type="text" name="login" />
            </label>
            <label>
               Mot de passe:
                <input type="password" name="password" />
            </label>

            <input type="submit" value="Submit" />
        </div>

    )
}

export default FormConnect