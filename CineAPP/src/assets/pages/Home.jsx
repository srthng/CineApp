import data from '../../artigos.json'

function Home() {
    console.log(data)
    return ( 
        <main>
            <input type="text" name="busca"  id="busca" placeholder='Digite aqui sua busca'/>
            <div className='lista-filmes'> 
                
            </div>
        </main>
     );
} 

export default Home;
