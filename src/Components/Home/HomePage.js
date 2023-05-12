import React, { Component } from 'react'
import "./HomePage.css"
import Navbar from '../Navbar/Navbar';
import MainPage from '../MainPage/MainPage';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return (
            <div>
                <Navbar/>
                <MainPage/>
            </div>
        );
    }
}

export default HomePage;