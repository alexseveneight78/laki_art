import React from 'react';
import './about.css';

export default class About extends React.Component {
    render(){
        return (
            <div className='about'>
                <h3>О НАС</h3>
                <a name='about' />
                <ul>
                    <li>Команда Laki Art – эксперт в ремонте премиум и люкс-класса.</li>
                    <li>Опыт работы  – с 2004 г. в Сербии, с 2009 года – в Беларуси.</li>
                    <li>Наша миссия – создания уюта, красоты и комфортной организации Вашего жилья!</li>
                    <li>Наш ресурс – постоянная, технически опытная команда узкопрофильных специалистов.</li>
                </ul>
            </div>
        )
    }
}