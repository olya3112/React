import logo from './logo.svg';
import React, {useState} from "react";
import './App.css';
import PostNews from "./components/PostNews/PostNews";
import data from "./assets/mock-data.json";


function App() {

    const content = data

    return (

        <div>
            {content.map(item => <PostNews title = {item.title} text={item.text} currentLikes={item.currentLikes}/>)}
        </div>
    );
}

export default App;
