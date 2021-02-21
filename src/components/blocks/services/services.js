import React from 'react';
import './services.css';
import consulting_help from '../../../images/icons/consulting.svg';


export default class Services extends React.Component {
    render(){
        return (
            <div className='general_services'>
                <div className='services'>
                    <h3>Наши услуги:</h3>
                    <ul>
                        <li>
                            <img src={consulting_help}/>
                            <p>Оказываем супервизирование технической части вашего проекта – бесплатно!</p>
                        </li>
                        <li>
                            <img src={consulting_help}/>
                            <p>Опираемся на высокие европейские стандарты.</p>
                        </li>
                        <li>
                            <img src={consulting_help}/>
                            <p>Решаем проект любой сложности так, как Вы себе его и представляете. Превосходим Ваши ожидания!</p>
                        </li>
                        <li>
                            <img src={consulting_help}/>
                            <p>Умеем организовать работу так, чтобы сделать ремонт быстро.</p>
                        </li>
                        <li>
                            <img src={consulting_help}/>
                            <p>На каждом этапе ремонта - строгий контроль процесса. Вы всегда можете выехать на текущие объекты “в ремонте”, чтобы убедиться в качестве выполняемых работ.</p>
                        </li>
                        <li>
                            <img src={consulting_help}/>
                            <p>Гарантия до 5 лет на выполненные работы.</p>
                        </li>
                    </ul>
                    <h3>ПОЗВОЛЬТЕ  СЕБЕ УДОВОЛЬСТВИЕ ОТ РЕМОНТА, В КОТОРОМ ОЖИДАНИЯ И РЕАЛЬНОСТЬ СОВПАДАЮТ!</h3>
                </div>
            </div>
        )
    }
}