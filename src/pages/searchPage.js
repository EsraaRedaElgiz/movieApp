import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import MovieItem from "../componentes/movieItem";
import { useEffect, useState } from "react";
import { searchForMovie } from "../apis/movies";
import Loader from "../componentes/loader";
import { useTranslation } from "react-i18next";

const SearchList = () => {
    const [t] = useTranslation("global")
    const params = useParams();
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const language = useSelector(state => state.changeLanguage.language)
    const navigation = useNavigate()
    useEffect(() => {
        searchForMovie(`query=${params.searchValue}`, `language=${language}`)
            .then((res) => {
                setLoading(false)
                setMovies(res.data.results)
                setError(false)
            })
            .catch((err) => {
                setLoading(false)
                setError(true)

            })
    }, [])
    return (
        <>
            {loading === true ?
                <Loader /> :
                error === true ?
                    <div style={{ height: "70vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span >{t("apiRequests.requestError")}</span>
                    </div> :
                    movies.length === 0 ?
                        <div style={{ display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center", height: "70vh" }}>
                            <h6>{t("searchPage.noMovies")}</h6>

                            <button type="button" className="btn btn-warning px-5" onClick={() => { navigation("/") }}>{t("backHome.buttonText")}</button>

                        </div>
                        :
                        <div className="container">

                            <div className="row row-cols-1 row-cols-md-4 g-4 mb-3 ">
                                {movies.map((item, index) => {
                                    return (
                                        <div key={item.id} >
                                            <MovieItem movies={item} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
            }
        </>

    )

}
export default SearchList;