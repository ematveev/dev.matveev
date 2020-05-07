import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Routes from "../routes";
import Loader from "./loader";

const App = () => {
    return (
        <div className={'app'}>
            <Loader />
            <div className={'app__container'}>
                <h3>Welcome to my personal website</h3>
                <BrowserRouter>
                    <Routes />
                </BrowserRouter>
            </div>
        </div>
    )
}

export default App;
