import { useEffect, useState } from "react";
import MovieItem from "../componentes/movieItem";
import { getMoviesList } from "../apis/movies";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import Loader from "../componentes/loader";
const MoviesList = () => {
    const [t] = useTranslation("global")
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    const language = useSelector(state => state.changeLanguage.language)
    const page = useSelector(state => state.changePage.page)
    const [searchValError, setSearchValError] = useState(false)
    const navigation = useNavigate()
    const goToSearchPage = () => {
        if (searchValue) {
            setSearchValError(false)
            navigation(`/searchList/${searchValue}`)
        } else {
            setSearchValError(true)
        }
    }
    useEffect(() => {
        getMoviesList(`language=${language}`, `page=${page}`)
            .then((res) => {
                setMovies(res.data.results)
                setLoading(false)
                setError(false)
            })
            .catch((err) => {
                setLoading(false)
                setError(true)
            });

    }, [language, page])

    return (
        <div className="container-fluid">
            <div className="container">
                <div style={{ backgroundColor: "#EEF0E5" }} className="row  py-4 ">
                    <h5 className="col-sm-12 mb-3">{t("search.header")}</h5>
                    <p className="col-sm-12 mb-3">{t("search.header2")}</p>
                    <div className="input-group d-flex justify-content-between">
                        <div className="form-outline col-11 my-1" >

                            <input onChange={(e) => setSearchValue(e.target.value)} type="search" className="form-control" placeholder={t("search.inputPlaceHolder")} />
                            {searchValError && <p className="text-danger d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none">{t("search.emptyInputError")}</p>}

                        </div>
                        <button
                            type="button"
                            className="btn  col-auto my-1"
                            style={{ borderRadius: "5px", backgroundColor: "#FFE382" }}
                            onClick={goToSearchPage}
                        >
                            {t("search.buttonText")}
                        </button>
                    </div>
                    {searchValError && <p className="text-danger d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">{t("search.emptyInputError")}</p>}

                </div>
                <h2 className="my-4">{t("popular.text")}</h2>
                {loading === true ?
                    <Loader withPagination />
                    : error === true ?
                        <div style={{ height: "35vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <span >{t("apiRequests.requestError")}</span>
                        </div>
                        :
                        <div className="row row-cols-1 row-cols-md-4 g-4 mb-3">
                            {movies.map((movie) => {
                                return (
                                    <div className="col" key={movie.id}>
                                        <MovieItem movies={movie} />
                                    </div>
                                );
                            })}
                        </div>}


            </div>
        </div>
    )
}
export default MoviesList;