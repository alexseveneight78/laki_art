import React from 'react';
import logo from '../../images/logo.jpg';
import './header.css';

export default class Header extends React.Component {
    render(){
        return (
            <div className='header'>
                <a href='#'>
                    <img id='logo' src={logo} />
                </a>
                <div id='header_links'>
                    <ul>
                        <li>
                            <a href='#'>Главная</a>
                        </li>
                        <li>
                            <a href='#'>Услуги</a>
                        </li>                        
                        <li>
                            <a href='#'>Портфолио</a>
                        </li>
                        <li>
                            <a href='#'>О нас</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
