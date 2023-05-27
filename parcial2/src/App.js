import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cafes from './components/galery/List';
import Login from './components/login/Login';
import Header from './components/header/Header';
import {IntlProvider} from 'react-intl';
import localeEnMessages from "./components/locales/en";
import localeEsMessages from "./components/locales/es";
import { FormattedMessage } from "react-intl";


function determinarIdiomaNavegador() {
  const idiomasDisponibles = ['en', 'es', "es-ES"];
  const idiomaNavegador = navigator.language || navigator.userLanguage;

  if (idiomasDisponibles.includes(idiomaNavegador)) {
    return idiomaNavegador;
  }
  return 'en';
}


function App() {

  const idioma = determinarIdiomaNavegador();
  let mensajes;
  console.log(idioma)
  if (idioma.includes("es")) {
    mensajes = localeEsMessages;
  } else {
    mensajes = localeEnMessages;
  }

  return (
    <div className="App">
      <IntlProvider locale={idioma} messages={mensajes}>
        <div>
          <Header/>
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cafes" element={ <Cafes /> } />
            </Routes>
          </BrowserRouter>
        </div>
        <h4 className="ByMe-H4 ByMe-Margin"><FormattedMessage id="contacto" />+57 3102105253 - info@elaromamagico.com - @elaromamagico</h4>
      </IntlProvider>
    </div>
  );
}

export default App;
