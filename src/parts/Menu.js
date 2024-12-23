import { Link } from "react-router-dom";


function Menu(){
    return(
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/about">Abt</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/contact">Cont</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/faculties">Fac</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/state">State</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/calc">Calc</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/crud">CRUD</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/fetch">Fetch</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/effect">Effect</Link>
                            </li>
                            
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Menu;