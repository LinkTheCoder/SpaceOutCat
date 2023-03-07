import React from 'react'
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CardMindful from './components/CardMindful.jsx'
import CardTeaTime from './components/CardTeaTime.jsx'
import CardFitness from './components/CardFitness.jsx'
import CardPositivity from './components/CardPositivity.jsx'
import CardPWA from './components/CardPWA.jsx'
import Nav from "./components/Nav";
import Header from "./components/Header";
import {HashRouter,Route} from "react-router-dom"


ReactDOM.render(
  <HashRouter>
    <Header/>
    <Route path="/" exact component={App}></Route>
    <Route path="/Mindful"><CardMindful/></Route>
    <Route path="/TeaTime"><CardTeaTime/></Route>
    <Route path="/Fitness"><CardFitness/></Route>
    <Route path="/Positivity"><CardPositivity/></Route>
    <Route path="/PWA"><CardPWA/></Route>
    <Nav/>
    </HashRouter>,
  document.getElementById("root")
);

// Install PWA
let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
        deferredPrompt = e;
    });

    const installApp = document.getElementById('installApp');
    installApp.addEventListener('click', async () => {
        if (deferredPrompt !== null) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === 'accepted') {
                deferredPrompt = null;
            }
        }
    });
