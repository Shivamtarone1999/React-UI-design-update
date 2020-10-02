import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar, Button } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            <div className="brand__name">
                <h2>Dashboard</h2>
            </div>
            {/* <div className="header__center">
                <input type="search" placeholder="Search..." />
                <Button>
                    <SearchIcon />
                </Button>
            </div> */}
            <div className="header__right">

                <Button>
                    <Avatar />
                </Button>
            </div>
        </div>
    )
}

export default Header
