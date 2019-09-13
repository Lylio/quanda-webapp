import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import Questions from "./Questions/Questions";
import LyleTest from "./LyleTest/LyleTest";

class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Questions/>
                <LyleTest/>
            </div>
        );
    }
}

export default App;
