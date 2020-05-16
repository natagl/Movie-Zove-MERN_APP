
import React, { useEffect, useState } from 'react'
import { API_URL, API_KEY, IMAGE_BASE_URL, IMAGE_SIZE, POSTER_SIZE } from '../../Config.js';
import MainImage from '../LandingPage/Section/MainImage';



function MovieDetaliPage(props) {

    const movieId = props.match.params.movieId;
    const [Movie, setMovie] = useState([])


    useEffect(() => {

        fetch(`${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setMovie(response)
            })
    }, []);

    return (
        <div>
            <div>
                {/* Main Img */}
                {Movie &&
                    <MainImage
                        image={`${IMAGE_BASE_URL}${IMAGE_SIZE}${Movie.backdrop_path}`}
                        title={Movie.original_title}
                        text={Movie.overview}
                    />
                }
            </div>

            <div style={{ width: '85%', margin: '1 rem auto' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button>Add to Favorite</button>
                </div>
                {/* Movie Info */}


            </div>
        </div>
    )

}

export default MovieDetaliPage;