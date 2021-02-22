import React from 'react';
import logo from '../../images/logo.jpg';
import './header.css';

export default class Header extends React.Component {
    render(){
        return (
            <div className='header'>
                <a href='/'>
                    <img id='logo' src={logo} />
                </a>
                <div id='header_links'>
                    <ul>
                        <li>
                            <a href='/'>Главная</a>
                        </li>
                        <li>
                            <a href='#services'>Услуги</a>
                        </li>                        
                        <li>
                            <a href='#portfolio'>Портфолио</a>
                        </li>
                        <li>
                            <a href='#reviews'>Отзывы</a>
                        </li>
                        <li>
                            <a href='#showroom'>Шоурум</a>
                        </li>
                        <li>
                            <a href='#about'>О нас</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
