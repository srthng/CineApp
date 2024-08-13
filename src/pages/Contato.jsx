import { useState } from 'react';
import emailjs from '@emailjs/browser'

function Contato() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function SendEmail(e){
        e.preventDefault();

        if(name === '' || email === '' || message === ''){
            alert("Preencha todos os Campos");
            return;
        }

        const templeteParams = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs.send("service_hl051ql","template_jpicc8b", templeteParams, "FAdyUyqqldeILY0aP")
        .then((response) =>{
            console.log("Email Enviado", response.status, response.text)
            setName('')
            setEmail('')
            setMessage('')
        }, (err)=> {
            console.log("error: ", err)
        })
    }
    return ( 
        <>
        <div className="h-screen">
            <h1 className="text-4xl flex justify-center mb-10">Contato</h1>
            <div className="flex justify-center items-center">
                <form className="ml-10 w-1/2 flex flex-col " onSubmit={SendEmail}>
                <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            Nome:
                        </label>
                        <input type="text" className="appearance-none border rounded w-full py-2 px-3 text-white bg-searchBar" placeholder="Digite o seu Email para contato" onChange={(e) => setName(e.target.value)} value={name}/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            Email:
                        </label>
                        <input type="text" className="appearance-none border rounded w-full py-2 px-3 text-white bg-searchBar" placeholder="Digite o seu Email para contato" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                            Message:
                        </label>
                        <textarea id="message" className="appearance-none border rounded w-full py-2 px-3 text-white bg-searchBar" placeholder="Digite a sua mensagem" onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
                    </div>
                    <button type="submit" className="bg-headerRed hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-32"> Enviar </button>
                </form>
            </div>
        </div>
            
        </>
     );
}

export default Contato ;