

import React from "react";
import "../homescreen/_homescreen.styles.scss";

//COMPONENTS
import NavBar from "../../components/navbar/navbar.component";
import Banner from "../../components/banner/banner.component";
import MovieRow from "../../components/movierow/movieRow.component";

//API
import requests from "../../request";



const HomeScreen = () => {




    return (

        <div className="homeScreen">

         <NavBar/>
         <Banner/>

         <MovieRow title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
         <MovieRow title="Top Rated" fetchUrl={requests.fetchTopRated}/>
         <MovieRow title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
         <MovieRow title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
         <MovieRow title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
        <MovieRow title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>

        </div>
    )
}


export default HomeScreen;