import React from 'react';

const Navbar = props => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">SymReact!</a>
       
    
        <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto">
            
            <li className="nav-item">
            <a className="nav-link" href="#">Clients</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Factures</a>
            </li>
           
        </ul>
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a href="" className="btn btn-success">Connexion</a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">
                    Inscription
                </a>
            </li>
            <li className="nav-item">
                <a href="" className="btn btn-danger">Déconnexion</a>
            </li>
        </ul>

        </div>
        </nav>
   );
}
 
export default Navbar;