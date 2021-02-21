import React from 'react';
import './reviews.css';
import Carousel from 'react-elastic-carousel';

import review1

export default class Reviews extends React.Component {
    state = {
        items: [
          {id: 1, image: img1},
          {id: 2, image: img2},
          {id: 3, image: img3},
          {id: 4, image: img4},
          {id: 5, image: img5}
        ]
      }
    render(){
        return (
            <div className='reviews'>
                <h3>Отзвыв наших клиентов:</h3>
                <Carousel>
                    {items.map(item => <img key={item.id} src={item.image}/>)}
                </Carousel>
            </div>
        )
    }
}