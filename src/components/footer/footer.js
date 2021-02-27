import React from 'react';
import './footer.css';
import youtube from '../../images/icons/footer_youtube_link.svg';
import insta from '../../images/icons/footer_insta_link.svg';

export default class Footer extends React.Component {
    render(){
        return (
            <div className='footer'>
                <ul>
                    <li>
                        <a href='#'>
                        ООО «Лаки-Арт-Бел» УНП 693150029  
                        </a>
                    </li>
                    <li >
                        <a href='https://www.instagram.com/lakiart.by/' target='_blank'>
                            <img src={insta} />
                        </a>
                        <a href='https://www.youtube.com/channel/UCGg_04O1WknhQeasBRTCVgQ' target='_blank'>
                            <img src={youtube} />
                        </a>
                    </li>
                    <li>
                        <a href='tel:+375 29 339-72-37'>
                        +375 29 339-72-37   
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}