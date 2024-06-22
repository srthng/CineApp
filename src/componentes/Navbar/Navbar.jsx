import {Link} from 'react-router-dom'

function Navbar() {
    return ( 
        <nav>
            <ul className='flex gap-3'>
                <li className="text-xl"><Link to ="/"> Início</Link></li>
                <li className="text-xl"><Link to ="filmes"> Filmes </Link></li>
                <li className="text-xl"><Link to ="contato"> Contato </Link></li>
                <li className="text-xl"><Link to ="sobre"> Sobre </Link></li>
            </ul>
        </nav>
     );
}

export default Navbar ;