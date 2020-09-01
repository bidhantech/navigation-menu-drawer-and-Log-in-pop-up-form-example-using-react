import React from 'react';
import SiteName from './SiteName';
import Login from './Login';
import Menu from './Menu';

class Navbar extends React.Component {

    render() {
        return (
            <div className="navbar">
                <SiteName title="MyApp" />
                <div className="menu-login">
                    <Login />
                    <Menu />
                </div>
            </div>
        )
    }
}

export default Navbar;