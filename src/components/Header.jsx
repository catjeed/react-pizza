import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="headerTitle">
          <img src="/images/logo.svg" alt="лого" className="logo" />
          <div>
            <h1 className="title">React Pizza</h1>
            <p className="subtitle">самая вкусная пицца во вселенной</p>
          </div>
        </div>
      </Link>
      <Link to="/cart">
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
      </Link>
    </div>
  );
}

export default Header;
