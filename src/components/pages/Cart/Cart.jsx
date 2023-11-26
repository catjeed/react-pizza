import React from 'react';
import { Link } from 'react-router-dom';
function Cart(params) {
  return (
    <div className="emptyCart">
      <h2 className="cartTitle">
        Корзина пустая{' '}
        <img className="cartTitleImage" src="/images/sadSmile.png" alt="грустный смайл" />{' '}
      </h2>
      <p className="cartDescription">
        Вероятней всего, вы не заказывали ещё пиццу. <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img
        width={300}
        height={255}
        src="./images/shopping-cart-colour 1.png"
        alt="человек с пустой корзиной"
        className="emptyCartImage"
      />
      <Link to="/">
        <button className="emptyCartButton">Вернуться назад</button>
      </Link>
    </div>
  );
}

export default Cart;
