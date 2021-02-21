import React from 'react';
import './reviews.css';
import Carousel from 'react-elastic-carousel';

import review1 from '../../../images/reviews/thanks1.jpg';
import review2 from '../../../images/reviews/thanks2.jpg';
import review3 from '../../../images/reviews/thanks3.jpg';
import review4 from '../../../images/reviews/thanks4.jpg';
import review5 from '../../../images/reviews/thanks5.jpg';
import review6 from '../../../images/reviews/thanks6.jpg';
import review7 from '../../../images/reviews/thanks7.jpg';

export default class Reviews extends React.Component {
    state = {
        items: [
          {id: 11, image: review1},
          {id: 22, image: review2},
          {id: 33, image: review3},
          {id: 44, image: review4},
          {id: 55, image: review5},
          {id: 66, image: review6},
          {id: 77, image: review7}
        ]
      }
    render(){
        const { items } = this.state;
        return (
            <div className='reviews'>
                <a name='reviews' />
                <h3>Отзвыв наших клиентов:</h3>
                <Carousel>
                    {items.map(item => <img key={item.id} src={item.image}/>)}
                </Carousel>
            </div>
        )
    }
}