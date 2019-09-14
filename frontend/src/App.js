import React, { Component } from 'react';
import {Route} from "react-router";
import NavBar from './NavBar/NavBar';
import Questions from './Questions/Questions';
import Question from './Question/Question';
import LyleComponent from "./LyleComponent/LyleComponent";

class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Route exact path='/' component={Questions}/>
                <Route exact path='/question/:questionId' component={Question}/>
                <LyleComponent/>
            </div>
        );
    }
}

export default App;
