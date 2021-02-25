import React from 'react';
import './showroom.css';

export default class Showroom extends React.Component {
    render(){
        return (
            <div className='showroom'>
                <a name='showroom' />
                <h3>ШОУРУМ ДЕКОРАТИВНОЙ ШТУКАТУРКИ.</h3>
                <p>Приглашаем Вас посетить наш шоурум, который находится в Минске в ТЦ «Ленинград» по адресу: г.Минск, ул. Ленина, 27 на 2ом этаже.</p>
                <p>Здесь вы сможете увидеть выставку наших работ росписи стен и достаточно много образцов, актуальных для стильных решений современных интерьеров.</p>
                <p>С удовольствием поможем вам подобрать текстуру и цвет декоративной штукатурки, которые сделают ваш дом красивым и уникальным!</p>
                <iframe src="https://www.youtube.com/embed/svV6cVot2Fw" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
            </div>
        )
    }
}