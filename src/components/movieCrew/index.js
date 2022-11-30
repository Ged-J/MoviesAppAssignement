import React, { useEffect, useState } from "react";
import { getMovieCredits } from "../../api/tmdb-api";
import { Link } from "react-router-dom";
import { excerpt } from "../../util";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ movie }) => {


    const [crew, setCrew] = useState([]);

    useEffect(() => {
        getMovieCredits(movie.id).then(crew => {
            setCrew(crew.crew);
        });
    }, []);

    return ( 
        <div>
            <h4>Movie Crew</h4>
            {crew.map(c => {
                return (
                    <div>
                        {c.name}
                    </div>
                );
            })}
        </div>
    );
};