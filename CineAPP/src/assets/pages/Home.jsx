import data from '../../../artigos.json'

function Home() {
    return ( 
        <>
        <input type='text' id="busca" placeholder='Digite sua busca'/>
        <div className='grid grid-cols-3'>
        {
            data.map( filme =>(
                <div className='card' key={filme.title}>
                    <h1> {filme.title} </h1>
                    <img className='mb-2' src={filme.image} alt={filme.title} />
                    <div className='tag'>
                        {filme.tags.map(tag =>(
                            <span key={tag} className=''>{tag}</span>
                        ))}
                    </div>
                    <div className='texto'>
                        {filme.text.map(texto =>(
                            <p key={texto}>{texto}</p>
                        ))}
                    </div>
                </div>

                
            ))
        }
        </div>
        
        </>
        
     );
} 

export default Home;
