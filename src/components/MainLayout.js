import React, {Component} from 'react';
import MainNavbar from './MainNavbar';

class MainLayout extends Component {
    render() {
        return (
            <div id="main-layout">
                <MainNavbar/>
                {this.props.children}
            </div>
        );
    }
}

export default MainLayout;
