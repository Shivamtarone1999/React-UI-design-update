import React from 'react';
import Content from './Content';
import Sidebar from './Sidebar';
import './Sidebar.css';
import SurroundSoundIcon from '@material-ui/icons/SurroundSound';
import HomeIcon from '@material-ui/icons/Home';
import ClassIcon from '@material-ui/icons/Class';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Publication from './Publication';
import Category from './Category';
import Story from './Story';

import ReactDOM from "react-dom";
import { Switch, Route, Link, NavLink } from "react-router-dom";


import './Main.css';

function Main() {
    return (
        <div className="main">
            {/* <Sidebar className="sidebar" /> */}

            <div className="sidebar">
                <p className="sidebar__head">Voice News Times
            </p> <br /> <br />
                <hr />

                <div className="sidebar__items">
                    <DashboardIcon className="sidebar__icon" />
                    <NavLink className="link__" exact to="/">Dashboard</NavLink>
                </div>

                <hr /> <br />

                <div className="sidebar__items">
                    <HomeIcon className="sidebar__icon" />
                    <NavLink className="link__" to="/publication"><p>Publication</p></NavLink>

                </div>

                <div className="sidebar__items">
                    <SurroundSoundIcon className="sidebar__icon" />
                    <NavLink className="link__" to="/story"><p>Story List</p></NavLink>

                </div>

                <div className="sidebar__items">
                    <ClassIcon className="sidebar__icon" />
                    <NavLink className="link__" to="/category"><p>Category List</p></NavLink>

                </div>

                <hr />
            </div>

            <Switch>
                {/* <Content className="content" /> */}
                <Route exact path='/' component={Content} />
                <Route path='/publication' component={Publication} />
                <Route path='/story' component={Story} />
                <Route path='/category' component={Category} />
            </Switch>

        </div>
    )
}

export default Main;
