import React from 'react';
import './portfolio.css';
import Carousel from 'react-elastic-carousel';

import img1 from '../../../images/gallery/laki1.jpg';
import img2 from '../../../images/gallery/laki2.jpg';
import img3 from '../../../images/gallery/laki3.jpg';
import img4 from '../../../images/gallery/laki4.jpg';
import img5 from '../../../images/gallery/laki5.jpg';

export default class Portfolio extends React.Component {
  state = {
    items: [
      {id: 1, image: img1},
      {id: 2, image: img2},
      {id: 3, image: img3},
      {id: 4, image: img4},
      {id: 5, image: img5}
    ]
  }

  render () {
    const { items } = this.state;
    return (
        <div className='portfolio'>
            <a name ='portfolio' />
            <h3>Фото наших работ:</h3>
            <Carousel>
                {items.map(item => <img key={item.id} src={item.image}/>)}
            </Carousel>
            <br></br>
            <h3>Видео наших работ:</h3>
            <div className='video'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/SH3-cdemzio" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/nscTvdbYa74" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
            </div>
        </div>
    )
  }
}