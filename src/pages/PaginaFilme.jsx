import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";

export default function PaginaFilmes(){

    const { id } = useParams();
    const [filme, setFilmes] = useState({});


    const apiKey='api_key=7c572a9f5b3ba776080330d23bb76e1e'
    const urlBase = 'https://api.themoviedb.org/3/movie/'
    const urlImg = 'https://image.tmdb.org/t/p/w342/'

    useEffect(() => {
        fetch(`${urlBase}${id}?${apiKey}&language=pt-BR`)
        .then(response => response.json())
        .then(response => setFilmes(response))
        .catch (error => console.log(error))
    },[])

    return(
        <>
        <div className="flex h-screen">
            <img className="m-10 " src={`${urlImg}${filme.poster_path}`}/>
            <div className="flex items-center justify-center flex-col ">
                <h1 className="text-7xl mb-10">{filme.title}</h1>
                <p className="text-xl m-10">{filme.overview}</p>
            </div>
        </div>
        </>
    )
}