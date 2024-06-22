import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


export default function Filmes() {


    const [filmes, setFilmes] = useState([])
    const apiKey='api_key=7c572a9f5b3ba776080330d23bb76e1e'
    const urlBase = 'https://api.themoviedb.org/3/movie/'
    const urlImg = 'https://image.tmdb.org/t/p/w342/'

    useEffect(() => {
        fetch(`${urlBase}popular?${apiKey}`)
        .then(response => response.json())
        .then(response => setFilmes(response.results))
        .catch (error => console.log(error))
    },[])



    return ( 
        <>
        <h1 className="text-4xl flex justify-center mb-10">Catálogo</h1>
        <div className="listaFilmes flex flex-row gap-3 flex-wrap justify-center">
            {
                filmes.map(
                    filme => (
                        <div className="card-filme mb-6" key={filme.id}>
                            <img className="h-90" src={`${urlImg}${filme.poster_path}`}/>
                            <div className="flex justify-between">
                                <h1 className="">{filme.title}</h1>
                                <Link to={`${filme.id}`} className="bg-blue-500">Saber Mais</Link>
                            </div>
                        </div>
                    )
                )
            }
           
        </div>
        </>

     );
}