import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { CommentsPage } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/comments" exact component={CommentsPage} />
            </Switch>
        </Router>
    )
}

export default App