import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
        <header className="flex  justify-between bg-black text-white" >
            <span>Olá, gyatante!</span>
            <h1>Bem-vindo ao Gyyatflix</h1>
            <Navbar></Navbar>
        </header>
     );
}

export default Header;