import React from 'react';

import './main.css';

export default class Main extends React.Component {
    render(){
        return (
            <main>
                <a name='/' />
                <div className='main_name'>
                    <h3>РЕМОНТ</h3>
                    <h3>ПРЕМИУМ И</h3>
                    <h3>ЛЮКС-КЛАССА</h3>
                </div>
                <button>
                    <a href='tel:+375 29 339-72-37'>Заказать</a>
                </button>
            </main>
        )
    }
}