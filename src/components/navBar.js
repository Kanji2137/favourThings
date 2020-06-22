import React, { Component } from 'react';
import Headroom from "react-headroom";

import books  from '../data/ListOfBooks';

import graphics  from '../data/ListOfGraphics';

import songs  from '../data/ListOfMusic';
import restOfSongs from '../data/ListRestOfGMusic';

import generalList  from '../data/GeneralList';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
  
  import Home from './primalComponents/Home'
  import Contact from './primalComponents/Contact'

    import ListBooks from './FavourThings/ListBooks'
    import ListGraphics from './FavourThings/ListGraphics'
    import ListMusic from './FavourThings/ListMusic'
    import ScrollToTop from './ScrollToTop'
    
class NavBar extends Component {
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
                        <Route  exact={true} path="/list-music" render={() => <ListMusic songs={songs} restOfSongs={restOfSongs} />} />
                        <Route path="/list-books" render={() => <ListBooks books={books} />} />
                        <Route path="/list-graphic" render={() => <ListGraphics graphics={graphics} />} />
                        <Route path="/" render={() => <Home generalList={generalList}/>} />
                    </Switch>
            </Router>
            );
    }
}

export default NavBar; 