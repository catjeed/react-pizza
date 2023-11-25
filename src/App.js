import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <div className="page">
        <div className="content">
          <Header />
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
          <div className="main">
            <h1 className="mainTitle">Все пиццы</h1>
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
