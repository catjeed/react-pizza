import React from 'react';
import Card from './Card';

function Main(params) {
  return (
    <div className="main">
      <h2 className="mainTitle">Все пиццы</h2>
      <div className="cards">
        <Card name={'Чизбургер-пицца'} imageUrl={'./images/pizza.png'} />
        <Card name={'Сырная'} imageUrl={'./images/cheese.png'} />
        <Card name={'Креветки по-азиатски'} imageUrl={'./images/krevedko.png'} />
        <Card name={'Сырный цыпленок'} imageUrl={'./images/cheesyChicken.png'} />
      </div>
    </div>
  );
}

export default Main;
