import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom'
import { Chatpage } from '../pages/Chatpage';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    return (

        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100 p-t-50 p-b-90">
                    <Router>
                        <div>
                            <Switch>

                                <Route path="/auth" component={AuthRouter} />
                                <Route exact path="/" component={Chatpage} />

                                <Redirect to="/" />
                            </Switch>
                        </div>
                    </Router>

                </div>
            </div>
        </div>
    )
}
