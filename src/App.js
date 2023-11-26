import React from 'react';
import Main from './components/Main';
import Header from './components/Header';
import Cart from './components/pages/Cart/Cart.jsx';
import { Routes, Route } from 'react-router-dom';
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
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>

        </div>
      </div>
    </div>
  );
}

export default App;
