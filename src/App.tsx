import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";


const App = () => {
    return (
        <div className="app-wrapper">
            <Header img={"https://www.eurohandball.com/media/f45ofcxo/ehf_og_image2.jpg?anchor=center&mode=crop&width=1200&height=630&rnd=132375557452270000"}/>
            <Nav profile={"Profile"}
                 message={"Message"}
                 news={"News"}
                 music={"Music"}
                 settings={"Settings"}/>
            <Profile img={"https://i.sportarena.com/2022/05/ehf.jpg"}/>
        </div>
    );
}


export default App;
