import React from 'react';

class Login extends React.Component {


    state = {
        loginShow: false,
    }

    loginView = () => {
        this.setState(
            (previousState) => { return { loginShow: !previousState.loginShow } })
    }

    render() {
        return (
            <div>
                {this.state.loginShow ?
                    <div className="login-s">
                        <div className="login">
                            <h3>Log In</h3>
                            <label>Username: <br/>
                            <input type="text" name="username" />
                            </label>
                            <label> Password: <br/>
                            <input type="password" name="password" />
                            </label>
                            <input type="submit"
                            className="login-button" 
                            name="submit" 
                            value="Sign In" 
                            onClick={this.loginView} />
                            <button className="login-close" onClick={this.loginView} > x </button>
                        </div>
                    </div> :
                    <button className="login-d" onClick={this.loginView}> Log In </button>
                }
            </div>
        )
    }
}

export default Login;