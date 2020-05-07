import React from 'react';
import {Switch, Route} from 'react-router-dom';

import ArticleList from "../components/articleList";
import Article from "../components/article";

const Routes = () => {
    return (
        <Switch>
            <Route path={'/'} component={ArticleList} exact />
            <Route path={'/articles/:slug'} component={Article} />
        </Switch>
    )
}

export default Routes