import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
        <header className="flex justify-around text-white bg-headerRed py-3.5">
            <h1 className="text-2xl">MovieWatcher</h1>
            <Navbar></Navbar>
        </header>
     );
}

export default Header ;