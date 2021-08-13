
import React, { useEffect, useState } from 'react';
import "../banner/_banner.styles.scss";

import axios from "../../axios";//make sure you import the file and not the global package here.
import requests from '../../request';


const Banner = () => {

    const [movie, setMovie] = useState([]);

    //fetching the API data 
    useEffect(() => {

        async function fetchData() {

            const request = await axios.get(requests.fetchNetflixOriginals);

            setMovie(

                request.data.results[

                    Math.floor(Math.random() * request.data.results.length - 1)
                ]

                
            );

            return request;
            
        };

        fetchData();

    }, []);

    console.log(movie);
   

    
   
    //wrap the movie description text when it reachs a certain number
    const wrapDescription = (string, n) => {

        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }



    return (

       
        <header className="banner"

            style = {{backgroundSize: "cover", 
            backgroundPosition: "center center", 
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}}>


            <div className="bannerContents">

                <h1 className="banner_title"> {movie?.name || movie?.original_name || movie?.title} </h1>

                
                <h1 className="bannerDescription">{wrapDescription(`${movie?.overview}`, 140)}</h1>

                <div className="banner_buttons">

                    <button className = "banner_button"> &#9658; Play</button>
                    <button className = "banner_button"> &#9432;  More information</button>
                </div>


            </div>
            
            <div className="bannerFade_bottom"/>

         </header>

       
    )
}

export default Banner;
