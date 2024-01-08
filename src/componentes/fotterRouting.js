import { Outlet } from "react-router-dom";
import PaginationFotter from "./pagination";

const FottorRouting = () => {
    return (
        <>
            <Outlet />
            <PaginationFotter />
        </>
    )
}
export default FottorRouting;