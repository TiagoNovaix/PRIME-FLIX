import axios from "axios";

//BASE DA URL: https://api.themoviedb.org/3/
//URL COMPLETA: https://api.themoviedb.org/3/movie/now_playing?api_key=f8669b8f37dd2ea38cdda998eb45e577&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;
