import React,{useState,useEffect} from 'react';
import MovieBox from "./MovieBox"
import "./searchBox.css"

const API_URL = "https://api.themoviedb.org/3/movie/550?api_key=e877d96bc01964bf9e20c9198bf677f2";

const SearchBox = (props) =>{
    const [searchMovie,setSearchMovie] = useState("")
    const [movies, setMovies]=useState([]);

    useEffect(() => {
        fetch(API_URL)
        .then((res)=>res.json())
        .then(data=>{
          console.log(data);
          setMovies(data);
        })
      }, [])


    const MovieName = (event) =>{
        setSearchMovie(event.target.value)
    }


    const SendMovie = async(event) =>{
        event.preventDefault();

        try{
      const url=`https://api.themoviedb.org/3/search/movie?api_key=e877d96bc01964bf9e20c9198bf677f2&query=${searchMovie}`;
      const res= await fetch(url);
      const data= await res.json();
      console.log(data);
      setMovies(data.results);
    }
    catch(e){
      console.log(e);
    }
    }
    


    return(
        <div>
        <form onSubmit={SendMovie} className="searchField">
        <img src="https://s1.bunnycdn.ru/assets/template_1/style_2/images/logo.png"  width="70px" height="80px" alt="logo" />
        <h2>FBOX</h2>
        <div className="sec-search">
        <input value={searchMovie} onChange={MovieName} type="text" id="search" placeholder="Enter your keywords..."/>
        <button type="submit">Search</button>
        </div>
        </form>
        <div>
        {movies.length > 0 ?(
          <div className="container">
          <div className="grid">
            {movies.map((movieReq)=>
            <MovieBox key={movieReq.id} {...movieReq}/>)}
              </div>
      </div>
        ):(
          <h2>Sorry !! No Movies Found</h2>
        )}
      </div>   
        </div>
        
    );
}
export default SearchBox;