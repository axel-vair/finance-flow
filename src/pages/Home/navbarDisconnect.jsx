import './index.css'

function NavbarDisconnect() {
    return (
        <div className="navbar">
            <button className="register bg-emerald-600 hover:bg-emerald-400 text-white font-bold py-2 px-4 mx-4 rounded">
                Inscription
            </button>
            <button className="connection py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-emerald-500 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 rounded">
                Connexion
            </button>
        </div>
    )
}

export default NavbarDisconnect