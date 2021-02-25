import React from 'react';
import './portfolio.css';
import Carousel from 'react-elastic-carousel';

import img1 from '../../../images/gallery/laki1.jpg';
import img2 from '../../../images/gallery/laki2.jpg';
import img3 from '../../../images/gallery/laki3.jpg';
import img4 from '../../../images/gallery/laki4.jpg';
import img5 from '../../../images/gallery/laki5.jpg';
import img6 from '../../../images/gallery/laki6.jpg';
import img7 from '../../../images/gallery/laki7.jpg';
import img8 from '../../../images/gallery/laki8.jpg';
import img9 from '../../../images/gallery/laki9.jpg';
import img10 from '../../../images/gallery/laki10.jpg';
import img11 from '../../../images/gallery/laki11.jpg';
import img12 from '../../../images/gallery/laki12.jpg';
import img13 from '../../../images/gallery/laki13.jpg';
import img14 from '../../../images/gallery/laki14.jpg';
import img15 from '../../../images/gallery/laki15.jpg';
import img16 from '../../../images/gallery/laki16.jpg';
import img17 from '../../../images/gallery/laki17.jpg';

export default class Portfolio extends React.Component {
  state = {
    items: [
      {id: 1, image: img1},
      {id: 2, image: img2},
      {id: 3, image: img3},
      {id: 4, image: img4},
      {id: 5, image: img5},
      {id: 6, image: img6},
      {id: 7, image: img7},
      {id: 8, image: img8},
      {id: 9, image: img9},
      {id: 10, image: img10},
      {id: 11, image: img11},
      {id: 12, image: img12},
      {id: 13, image: img13},
      {id: 14, image: img14},
      {id: 15, image: img15},
      {id: 16, image: img16},
      {id: 17, image: img17}
    ]
  }

  render () {
    const { items } = this.state;
    return (
        <div className='portfolio'>
            <a name ='portfolio' />
            <h3>ФОТО НАШИХ РАБОТ:</h3>
            <Carousel>
                {items.map(item => <img key={item.id} src={item.image}/>)}
            </Carousel>
            <br></br>
            <h3>ВИДЕО НАШИХ РАБОТ:</h3>
            <div className='video'>
                <iframe src="https://www.youtube.com/embed/SH3-cdemzio" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
                <iframe src="https://www.youtube.com/embed/nscTvdbYa74" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
            </div>
        </div>
    )
  }
}