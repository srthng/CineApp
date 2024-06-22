import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
        <header className="flex justify-around text-white bg-headerRed py-3.5 mb-8">
            <h1 className="text-2xl">MovieWatcher</h1>
            <Navbar></Navbar>
            <input type="text" id="buscar" placeholder='Buscar um filme' className="rounded-lg bg-searchBar text-white"/>
        </header>
     );
}

export default Header ;