import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
        <header className="flex justify-around bg-black text-white p-5 mb-3">
            <span>Olá, visitante!</span>
            <h1>Bem-vindo ao MovieApp!</h1>
            <Navbar/>
        </header>
     );
}

export default Header ;