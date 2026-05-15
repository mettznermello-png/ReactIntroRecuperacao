import { Link } from 'react-router-dom'
import './style.css'

function Home(event) {

    return (

        <>

        <h1>
            Home
        </h1>

            <Link to="/Operaçôes">
                <button>
                    4 Operaçoes Basicas
                </button>
            </Link>

            <Link to="/LugaresDoMundo">
                <button>
                    Lugares do mundo
                </button>
            </Link>

        </>

    )

}

export default Home