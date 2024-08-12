function Contato() {
    
    return ( 
        <>
        <div className="h-screen">
            <h1 className="text-4xl flex justify-center mb-10">Contato</h1>
            <div className="flex justify-center items-center">
                <form className="ml-10 w-1/2 flex flex-col ">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            Email:
                        </label>
                        <input type="email" className="appearance-none border rounded w-full py-2 px-3 text-white bg-searchBar" placeholder="Digite o seu Email para contato"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                            Message:
                        </label>
                        <textarea id="message" className="appearance-none border rounded w-full py-2 px-3 text-white bg-searchBar" placeholder="Digite a sua mensagem"></textarea>
                    </div>
                    <button type="submit" className="bg-headerRed hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-32"> Enviar </button>
                </form>
            </div>
        </div>
            
        </>
     );
}

export default Contato ;