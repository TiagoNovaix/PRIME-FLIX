import { useEffect, useState } from "react";
import { useParams, useNavigate, replace, json } from "react-router-dom";
import api from '../../services/api'
import { toast } from "react-toastify";

import "./filmes.css"


function Filmes(){

    const {id} = useParams()
    const navigate = useNavigate()

    const [filme, setFilme] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(()=>{

        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params:{
                    api_key:"f8669b8f37dd2ea38cdda998eb45e577",
                    language: "pt-BR",
                }
            })
            .then((response)=>{
                setFilme(response.data)
                setLoading(false)
            })
            .catch(()=>{
                navigate("/" , {replace: true})
                return;
            })
        }

        loadFilme()

        return () => {
            console.log("Componenete desmontado")
        }

    }, [navigate, id])



    function salvarFilme(){
        const minhaLista = localStorage.getItem("@primeflix")

        let filmesSalvos = JSON.parse(minhaLista) || []

        const hasFilme = filmesSalvos.some((filmeSalvo)=>filmeSalvo.id === filme.id)

        if(hasFilme){
            toast.error("Esse filme já está na lista!")
            return;
        }

        filmesSalvos.push(filme)
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos))

        toast.success("Filme salvo!")
    }



    if(loading){
        return(
            <div className="filme-info">
                <h1>Carregando detalhes</h1>
            </div>
        )
    }
    const formaNum = filme.vote_average.toFixed(1)
    return(
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>

            <h3>Sinopse</h3>
            <span> {filme.overview} </span>
            <strong>Avaliação {formaNum} / 10 </strong>

            <div className="area-button">
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a target='blank' rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>Trailer</a>
                </button>
            </div>
        </div>
    )
}

export default Filmes;