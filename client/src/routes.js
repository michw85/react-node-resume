import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {HomePage} from "./pages/Home"
import {Experience} from './pages/Experience'
import {Works} from './pages/Works'
import {Contacts} from './pages/Contacts'

export const useRoutes = () => {

        return (
            <Switch>
                <Route path="/home" exact>
                    <HomePage />
                </Route>
                <Route path="/experience" component={Experience} />
                <Route path="/works" component={Works} />
                <Route path="/contacts" component={Contacts} />
                <Redirect to="/home" />
            </Switch>
        )
}