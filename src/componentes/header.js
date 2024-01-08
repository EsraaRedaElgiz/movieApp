import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { changeLanguage } from "../store/slices/language";
import { useTranslation } from "react-i18next";

function Header() {
  const [t, i18n] = useTranslation("global")
  const handleChangeLangage = (value) => {
    i18n.changeLanguage(value)
  }
  const favouriteMovies = useSelector(state => state.tooglefavourite.favouriteMovies)
  const dispatch = useDispatch()
  const language = useSelector(state => state.changeLanguage.language)


  return (
    <>
      <nav className="navbar navbar-expand-lg  sticky-top mb-3 " style={{ backgroundColor: "#FFE382" }}>
        <div className="container-fluid">
          <span className="navbar-brand">{t("header.name")}</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li>
                <Link className="nav-link active" aria-current="page" to="/">{t("header.title1")}</Link>
              </li>
              <li className="nav-item dropdown">
                <Link style={{ backgroundColor: "#FFE382", borderColor: "#FFE382", color: "#000" }} className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">{t("header.title2")}</Link>
                <ul className="dropdown-menu" >
                  <li>
                    <span className="dropdown-item" onClick={() => language !== "en" ? (dispatch(changeLanguage("en")),handleChangeLangage("en")) : null}>{t("header.option1")}</span>
                  </li>
                  <li>
                    <span className="dropdown-item" onClick={() => language !== "ar" ? (dispatch(changeLanguage("ar")),handleChangeLangage("ar")) : null}>{t("header.option2")}</span>
                  </li>
                </ul>
              </li>
              <li>
                <Link className="nav-link position-relative " to="/wishlist" style={{color:"#000"}}>{t("header.title3")}
                  <span className={`position-absolute top-2 ${language==="en"?"start-100":"start-0"} translate-middle badge rounded-pill bg-danger d-none d-sm-none d-md-none d-lg-inline d-xl-inline d-xxl-inline `} >
                    {favouriteMovies.length}
                  </span>
                  <span className="text-danger d-inline d-sm-inline d-md-inline d-lg-none d-xl-none d-xxl-none px-2 ">
                    {favouriteMovies.length}
                  </span>
                </Link>
              </li>

            </ul>
          </div>

        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Header;