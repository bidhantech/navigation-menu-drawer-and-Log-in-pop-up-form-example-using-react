import React from 'react';

class SiteName extends React.Component{
    render() {
        return (
            <a className="sitename" href="/">
                {this.props.title}
            </a>
        )
    }
}
export default SiteName;