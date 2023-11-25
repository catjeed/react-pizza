import React from 'react';
import Card from './components/Card';
function App() {
  return (
    <div className="App">
      <div className="page">
        <div className="content">
          <div className="header">
            <div className="headerTitle">
              <img src="/images/logo.svg" alt="лого" className="logo" />
              <div>
                <h2 className="title">React Pizza</h2>
                <p className="subtitle">самая вкусная пицца во вселенной</p>
              </div>
            </div>
            <div>
              <ul className="cartButton">
                <li className="cartButtonUnit">520 &#8381;</li>
                <span className="lineBetween"></span>
                <li className="cartButtonUnit">
                  <img src="/images/cart.svg" alt="Корзина" />
                  <p>3</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="pizzaSort">
            <ul className="pizzaTypes">
              <li className="pizzaType">Все</li>
              <li className="pizzaType">Мясные</li>
              <li className="pizzaType">Вегетарианская</li>
              <li className="pizzaType">Гриль</li>
              <li className="pizzaType">Острые</li>
              <li className="pizzaType">Закрытые</li>
            </ul>
            <div className="sort">
              <img src="/images/triangle.svg" alt="стрелочка" />
              <ul className="sortList">
                <p>Сортировка по:</p>
                <li className="sortListUnit">популярности</li>
              </ul>
            </div>
          </div>
          <h1 className="mainTitle">Все пиццы</h1>
          <div className="main">
            <div className="cards">
              <Card name={'Чизбургер-пицца'} imageUrl={'./images/pizza.png'} />
              <Card name={'Сырная'} imageUrl={'./images/cheese.png'} />
              <Card
                name={'Креветки по-азиатски'}
                imageUrl={'./images/krevedko.png'}
              />
              <Card
                name={'Сырный цыпленок'}
                imageUrl={'./images/cheesyChicken.png'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
