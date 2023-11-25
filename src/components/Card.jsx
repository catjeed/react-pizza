import React from 'react';

function Card({ name, imageUrl }) {
  return (
    <div className="cardItem">
      <img src={imageUrl} alt={name} className="cardItemImage" />
      <h3 className="cardItemName">{name}</h3>
      <div className="cardItemProps">
        <ul className="cardItemProp">
          <li className="cardItemPropType doughType">тонкое</li>
          <li className="cardItemPropType doughType">традиционное</li>
        </ul>
        <ul className="cardItemProp">
          <li className="cardItemPropType doughSize">26 см.</li>
          <li className="cardItemPropType doughSize">30 см.</li>
          <li className="cardItemPropType doughSize outOfStock">40 см.</li>
        </ul>
      </div>
      <div className="cardItemPriceAndBuy">
        <p className="cardItemPrice"> от 395 &#8381;</p>
        <button className="cardItemBuyButton">Добавить</button>
      </div>
    </div>
  );
}

export default Card;
