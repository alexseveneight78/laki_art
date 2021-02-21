import React from 'react';
import './about.css';

export default class About extends React.Component {
    render(){
        return (
            <div className='about'>
                <a name='about' />
                <h3>О нас</h3>
                <ul>
                    <li>Мы – команда Laki Art – эксперт в ремонте премиум и люкс-класса.</li>
                    <li>Опыт работы  – с 2004 г. в Сербии, с 2009 года – в Беларуси.</li>
                    <li>Наша миссия – создания уюта, красоты и комфортной организации Вашего жилья!</li>
                    <li>Наш ресурс – постоянная, технически опытная команда узкопрофильных специалистов.</li>
                </ul>
                <h3>Шоурум декоративной штукатурки.</h3>
                <p>Приглашаем Вас посетить наш шоурум, который находится в Минске в ТЦ «Ленинград» по адресу: г.Минск, ул. Ленина, 27 на 2ом этаже.</p>
                <p>Здесь вы сможете увидеть выставку наших работ росписи стен и достаточно много образцов, актуальных для стильных решений современных интерьеров.</p>
                <p>С удовольствием поможем вам подобрать текстуру и цвет декоративной штукатурки, которые сделают ваш дом красивым и уникальным!</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/svV6cVot2Fw" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
            </div>
        )
    }
}