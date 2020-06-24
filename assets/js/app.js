//Les imports importants
import React from "react";
import ReactDOM from "react-dom";

//On apporte le CSS personnalisé
import '../css/app.css';


//Javascript
console.log('Hello');


const App = () => {
    return <h1>Bonjour à tous !</h1>;
};

const rootElement = document.querySelector('#app');
ReactDOM.render(<App />, rootElement);