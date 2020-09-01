import React from 'react';

class Menu extends React.Component{


    state = {
        menuShow: false,
    }

    menuView = () => {
        this.setState(
            (previousState) => { return { menuShow: !previousState.menuShow } })
    }

    render(){
        return (
            <div>
            {this.state.menuShow ?
                <div className="menu-s">
                    <ul className="menu">
                        <li><a className="link" href="#hero" onClick={this.menuView}>Home</a></li>
                        <li><a className="link" href="#about" onClick={this.menuView}>About</a></li>
                        <li><a className="link" href="#contact" onClick={this.menuView}>Contact</a></li>
                    </ul>
                    <button className="menu-close" onClick={this.menuView}>
                        <span>C</span>
                        <span>L</span>
                        <span>O</span>
                        <span>S</span>
                        <span>E</span>
                    </button>
                </div> :
                <button className="menu-d" onClick={this.menuView}> Menu </button>}
            </div>
        )
    }
}

export default Menu;