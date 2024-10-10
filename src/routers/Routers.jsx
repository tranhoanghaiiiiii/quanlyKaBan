import AutherRouter from "./AutherRouter";
import MainRouter from "./MainRouter";

function Routers() {
    const isAuthenticated = true; // Thay đổi dựa trên trạng thái hoặc logic thực tế

    return isAuthenticated ? <AutherRouter/> : <MainRouter/>;
}

export default Routers;
