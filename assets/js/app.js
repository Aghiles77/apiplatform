import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import {HashRouter, Switch, Route} from "react-router-dom";
import CustomersPage from "./pages/CustomersPage";

//On apporte le CSS personnalisé
require ("../css/app.css");


//Javascript
console.log('Hello');


const App = () => {
    return (
        <HashRouter>
            <Navbar/>
                <main className="container pt-5">
                    <Switch>
                        <Route path="/customers" component={CustomersPage}/>
                        <Route path="/" component={HomePage}/>
                    </Switch>
                </main>
        </HashRouter>
    );
    
};

const rootElement = document.querySelector('#app');
ReactDOM.render(<App />, rootElement);