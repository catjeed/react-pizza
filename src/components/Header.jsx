import React from 'react';

function Header() {
  return (
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
  );
}

export default Header;
