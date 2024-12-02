import { Outlet } from "react-router-dom";
import Menu from "./Menu";

function Layout(){
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Menu />
                    </div>
                </div>
                <div className="row vh-100">
                    <div className="col-3 border border-primary">
                        SIDEBAR
                    </div>
                    <div className="col">
                        <Outlet />
                    </div>
                </div>
                <div className="row">
                    <div className="col border border-primary text-center">
                        FOOTER
                    </div>
                </div>
            </div>
        </>
    );
}

export default Layout;