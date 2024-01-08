import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMoviesDetails } from "../apis/movies";
import Rating from '@mui/material/Rating';
import { useDispatch, useSelector } from "react-redux";
import { toogleFav } from "../store/slices/addFavouriteSlice";
import { useTranslation } from "react-i18next";
const MovieDetails = () => {
    const [t]=useTranslation("global")
    const [movie, setMovie] = useState({})
    const language = useSelector(state => state.changeLanguage.language)
    const dispatch = useDispatch()
    const favouriteMovies = useSelector(state => state.tooglefavourite.favouriteMovies)
    const params = useParams();
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    useEffect(() => {
        getMoviesDetails(`${params.id}`, language)
            .then((res) => {
                setMovie(res.data)
                setLoading(false)
                setError(false)
            }).catch((err) => {
                setLoading(false)
                setError(true)
            })
    }, [language])
    return (

        <div className="container-fluid">
            {loading === true ?
                <div style={{ height: "90vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div className="spinner-border" role="status">
                    </div>
                </div> :
                error === true ?
                    <div style={{ height: "90vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span >{t("apiRequests.requestError")}</span>
                    </div> :
                    <div className="row container" >
                        <div className="col-sm-4 "  >
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} className="card-img-top" alt="..." style={{ height: "70vh" }} />
                        </div>
                        <div className="col-sm">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between">
                                    <h5 className="card-title"  >{movie.title}</h5>
                                    <p style={{ cursor: "pointer" }} onClick={() => { dispatch(toogleFav(movie)) }}>
                                        {favouriteMovies.findIndex(item => item.id === movie.id) !== -1 ?
                                            (<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#f51800" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" /></svg>)

                                            :
                                            (<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>)

                                        }                        </p>
                                </div>
                                <p className="card-text ">{movie.release_date}</p>
                                <div className="row mb-3">
                                    <Rating
                                        name="simple-controlled"
                                        value={movie.vote_average ? movie.vote_average : 0}
                                        readOnly
                                        className="col-auto"
                                    />
                                    <p className="col" >{movie.vote_count}</p>
                                </div>
                                <p className="card-text">{movie.overview}</p>
                                {(movie.genres)?.map((item) => {
                                    return (
                                        <span className="badge text-bg-warning m-2" key={item.id}>{item.name}</span>

                                    )
                                })}
                                <div className="row">
                                    <p className="card-text col-sm-4">{t("movieDetails.duration")}:<span>{movie.runtime}</span>{t("movieDetails.min")}</p>
                                    <div className="card-text col-sm d-flex  flex-wrap">{t("movieDetails.language")}: {(movie.spoken_languages)?.map((item, index) => {
                                        return (
                                            <p className="card-text me-2" key={index}>{item.name}</p>

                                        )
                                    })}
                                    </div>

                                </div>
                                <div className="row">
                                    {(movie.production_companies
                                    )?.map((item) => {
                                        return (
                                            item.logo_path &&
                                            (<img src={`https://image.tmdb.org/t/p/w500/${item.logo_path}`} className="col col-sm-5 col-md-2 col-lg-2 col-xl-2 col-xxl-2  " alt="..." key={item.id} />)

                                        )
                                    })}
                                </div>



                            </div>
                        </div>

                    </div>}

        </div>
    )

}
export default MovieDetails;