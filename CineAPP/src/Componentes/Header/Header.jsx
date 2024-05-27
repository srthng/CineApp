import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
        <header className="flex  justify-between bg-black text-white" >
            <span>Olá, visitante!</span>
            <h1>Bem-vindo ao kflix</h1>
            <Navbar></Navbar>
        </header>
     );
}

export default Header;