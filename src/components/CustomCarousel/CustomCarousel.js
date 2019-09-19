import React, { PureComponent } from 'react';
import AliceCarousel from 'react-alice-carousel';

import './CustomCarousel.scss';

export default class CustomCarousel extends PureComponent {
  render() {
    const { cards } = this.props;
    const handleOnDragStart = e => e.preventDefault();
    const renderCards = () => cards.map((card) => <div key={card.id} className="carousel-card"><img src={card.img} alt={card.title} onDragStart={handleOnDragStart} className="card-img" /></div>);
    const responsive = {
      0: { items: 3 },
      1024: { items: 5 },
    };
    return (
      <AliceCarousel
        mouseDragEnabled
        autoPlayInterval={1500}
        duration={1500}
        autoPlay
        autoHeight
        buttonsDisabled
        responsive={responsive}
      >
        {renderCards()}
      </AliceCarousel>
    );
  }
}
