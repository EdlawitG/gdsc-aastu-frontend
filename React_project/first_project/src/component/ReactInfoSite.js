import React from 'react';
import logo from '../logo.svg';
function ReactInfoSite  (props){
    return(
    <div className='container'>
        <nav className='navigation'>
        <img src={logo} className="App-logo" alt="logo" width='50px' />
        <h3>ReactFacts</h3>
        <h4>React Course - Project 1</h4>
        </nav>
        <main className='main'>
        <h1>Fun Facts about React </h1>
        <ul>
            <li>
            <span>{props.name} first released in 2013</span>
            </li>
            <li>
            <span>Was originally created by Jordan Walke</span>
            </li>
            <li>
            <span>Has well over 100K stars on GitHub</span>
            </li>
            <li>
            <span>Is maintained by Facebook</span>
            </li>
            <li>
            <span>Powers thousands of enterprise apps, including mobile apps</span>
            </li>
        </ul>
        </main>
    </div>
    )
}
export default ReactInfoSite