import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Nav} from "./components/Nav";
import {Profile} from "./components/Profile";


const App = () => {
    return (
        <div className="app-wrapper">
            <Header img={"https://www.eurohandball.com/media/f45ofcxo/ehf_og_image2.jpg?anchor=center&mode=crop&width=1200&height=630&rnd=132375557452270000"}/>
            <Nav profile={"Profile"} message={"Message"} news={"News"} music={"Music"} settings={"Settings"}/>
            <Profile img={"https://i.sportarena.com/2022/05/ehf.jpg"} img2 = {"https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/European_Handball_Federation_logo.svg/1200px-European_Handball_Federation_logo.svg.png"} myPost={"My post1"} newPost={"My new post"} post={"My post 2"}/>
        </div>
    );
}


export default App;
