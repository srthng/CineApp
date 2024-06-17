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
        <img src={`${urlImg}${filme.backdrop_path}`}/>
        <h1>{filme.title}</h1>
        <p>{filme.overview}</p>
        </>
    )
}