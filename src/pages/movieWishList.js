import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MovieItem from "../componentes/movieItem";
import { useTranslation } from "react-i18next";

const WishList = () => {
    const [t]=useTranslation("global")
    const favouriteMovies = useSelector(state => state.tooglefavourite.favouriteMovies)
    const navigation = useNavigate()
    return (
        <>
            {favouriteMovies.length === 0 ?
                <div style={{ display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center", height: "70vh" }}>
                    <img src={require("../assets/images/heart.png")} alt="..." style={{ height: "100px" }} />
                    <h6>{t("watchList.noMovies")}</h6>
                    <button type="button" className="btn btn-warning px-5" onClick={() => { navigation("/") }}>{t("backHome.buttonText")}</button>

                </div>
                :
                <div className="container">
                
                <div className="row row-cols-1 row-cols-md-4 g-4 mb-3 ">
                    {favouriteMovies.map((item, index) => {
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
export default WishList;