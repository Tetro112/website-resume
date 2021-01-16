import React, { Component } from 'react';
import { Navbar } from './components/Navbar/Navbar.jsx';
import "./App.css";
import About from './components/About/About.jsx';
import Updates from './components/Updates/Updates.jsx'

class App extends Component {
    state = {  }
    render() { 
        return (
            <>
                <Navbar className = 'NavBar'/>
                <About className='About' />
                <Updates/>
            </> );
    }
}
export default App;