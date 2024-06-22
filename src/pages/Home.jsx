import data from '../../articles.json'

function Home() {
    return ( 
        <>
            <div className='grid grid-cols-3 gap-4'>
            {
                data.map( (artigo, index) => (
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

export default Home ;