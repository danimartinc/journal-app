//Functional Component

import React from 'react';
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";



export const AppRouter = () => {
    return (
        <Router>
            {/* div dentro para controlar la agrupacion del Switch */}
            <div>
                <Switch>
                    <Route
                        path="/auth"
                        component= { AuthRouter }
                    />

                    <Route
                        exact
                        path="/" 
                        component={ JournalScreen }
                    />
                </Switch>
            </div>
        </Router>
    )
}
