import React, { Component } from 'react';
import {Route} from "react-router";
import NavBar from './NavBar/NavBar';
import Questions from './Questions/Questions';
import Question from './Question/Question';
import Callback from './Callback';
import NewQuestion from './NewQuestion/NewQuestion';
import SecuredRoute from './SecuredRoute/SecuredRoute';
import LyleComponent from "./LyleComponent/LyleComponent";

class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Route exact path='/' component={Questions}/>
                <Route exact path='/question/:questionId' component={Question}/>
                <Route exact path='/callback' component={Callback}/>
                <SecuredRoute path='/new-question' component={NewQuestion} />
                <LyleComponent/>
            </div>
        );
    }
}

export default App;
