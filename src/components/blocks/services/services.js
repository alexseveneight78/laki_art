import React from 'react';
import './services.css';
import consulting_help from '../../../images/icons/consulting.svg';
import standard from '../../../images/icons/standard.svg';
import goal from '../../../images/icons/goal.svg';
import speed from '../../../images/icons/speed.svg';
import monitoring from '../../../images/icons/monitoring.svg';
import garant from '../../../images/icons/garant.svg';


export default class Services extends React.Component {
    render(){
        return (
            <div className='general_services'>
                <a name='services' />
                <div className='services'>
                    <h3>Для Вас:</h3>
                    <ul>
                        <li>
                            <img src={consulting_help}/>
                            <p>Оказываем супервизирование технической части вашего проекта – бесплатно!</p>
                        </li>
                        <li>
                            <img src={standard}/>
                            <p>Опираемся на высокие европейские стандарты.</p>
                        </li>
                        <li>
                            <img src={goal}/>
                            <p>Решаем проект любой сложности так, как Вы себе его и представляете. Превосходим Ваши ожидания!</p>
                        </li>
                        <li>
                            <img src={speed}/>
                            <p>Умеем организовать работу так, чтобы сделать ремонт быстро.</p>
                        </li>
                        <li>
                            <img src={monitoring}/>
                            <p>На каждом этапе ремонта - строгий контроль процесса. Вы всегда можете выехать на текущие объекты “в ремонте”, чтобы убедиться в качестве выполняемых работ.</p>
                        </li>
                        <li>
                            <img src={garant}/>
                            <p>Гарантия до 5 лет на выполненные работы.</p>
                        </li>
                    </ul>
                    <h3>ПОЗВОЛЬТЕ  СЕБЕ УДОВОЛЬСТВИЕ ОТ РЕМОНТА, В КОТОРОМ ОЖИДАНИЯ И РЕАЛЬНОСТЬ СОВПАДАЮТ!</h3>
                    <h3>Мы делаем:</h3>
                    <div className='our_work'>
                            <p>Демонтаж существующей отделки - если требуется.</p>
                            <p>Установка перегородок/стен.</p>
                            <p>Монтаж всех сетей по индивидуальному проекту/ создание проекта.</p>
                            <p>Подготовка и отделка под ключ, включая: </p>
                                    <li>Нанесение декоративной штукатурки любой сложности: классика, авторские нанесения.</li>
                                    <li>Барельеф, художественная роспись стен.</li>
                                    <li>Монтаж и покраска декоративных элементов: молдинги, карнизы и др. лепной декор.</li>
                    </div>
                </div>
            </div>
        )
    }
}