import data from '../../articles.json'
import {useState} from "react";

export default function Home() {
    const [query, setQuery] = useState("")
    return ( 
        <>
        
        <div className='flex flex-col justify-center items-center p-5'>
                <input className="appearance-none border rounded w-6/12 py-2 px-3 text-white bg-searchBar" placeholder="Digite o Nome do Post"onChange={event => setQuery(event.target.value)} />
            </div>
            <div className='grid grid-cols-3 gap-4'>
            {
          data.filter(post => {
            if (query === '') {
              return post;
            } 
            else if (post.title.toLowerCase().includes(query.toLowerCase())) {
              return post;
            }
          
          })

                .map( (artigo, index) => (
                    <div className='card' key={index}>
                        <img className="mb-2" src={artigo.image} alt={artigo.title} />
                        <h2 className='text-3xl'>{artigo.title}</h2>
                        <div className='tags flex items-center'>
                            <h1>Tags : </h1>
                            {artigo.tags.map( (tag, index) => (
                                <span className="bg-purple-600 p-1 m-1" key={index}>{tag}</span>
                            ))}
                        </div>
                        <div className='texto'>
                        {artigo.text.map( (paragrafo,index) => (
                            <p key={index}>{paragrafo}</p>
                        ))}
                        </div>

                    </div>
                ))
            }
            </div>
        </>
        
    );
}
