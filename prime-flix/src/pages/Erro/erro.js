import {Link} from 'react-router-dom'
import './erro.css'

function Erro(){

    return(
        <div className='erro'>
            <h1>404</h1>
            <h2>Página não encontrada</h2>
            <Link to='/'>Todos os filmes aqui!</Link>
        </div>
        
    )

}
export default Erro