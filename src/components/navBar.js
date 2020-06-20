import React, { Component } from 'react';
import Headroom from "react-headroom";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
  
  import Home from './Home'
  import Contact from './contact'

    import ListBooks from './FavourThings/ListBooks'
    import ListGraphics from './FavourThings/ListGraphics'
    import ListMusic from './FavourThings/ListMusic'
    import ScrollToTop from './ScrollToTop'
    
class navBar extends Component {
    render() {
      return (
            <Router>
                <ScrollToTop />
                    <div>
                        <Headroom style={{backgroundColor: "#080808"}}>
                            <div className="bar" >
                                <nav>
                                    <ul className="nav__links">
                                        <li><NavLink to="/">Home</NavLink></li>
                                        <li><NavLink to="/contact" className="buttonContact">Contact</NavLink></li>
                                    </ul>
                                </nav>
                            </div>
                        </Headroom>
                    </div>
                    <Switch>
                        <Route exact={true} path="/contact" render={() => <Contact />} />
                        <Route  exact={true} path="/list-music" render={() => <ListMusic />} />
                        <Route path="/list-books" render={() => <ListBooks />} />
                        <Route path="/list-graphic" render={() => <ListGraphics />} />
                        <Route path="/" render={() => <Home />} />
                    </Switch>
            </Router>
            );
    }
}

export default navBar; 