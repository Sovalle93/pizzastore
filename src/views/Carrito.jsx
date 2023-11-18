import React, { useContext } from 'react'
import { PizzaCalc } from '../context/my_context'
import Button from 'react-bootstrap/Button'

const Carrito = () => {
  const { detailsCart, increase, decrease, total } = useContext(PizzaCalc);

  return (
    <div className="cart">
      <h2>Carrito</h2>
      {detailsCart.length === 0 ? (
        <p>Tu carro esta vacío!</p>
      ) : (
        <>
          {detailsCart.map((item, index) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-info">
                <p>{item.name}</p>
                <p>Precio: ${item.price}</p>
              </div>
              <div className="cart-item-actions">
                <Button className={`customButton3`} onClick={() => decrease(index)}>
                  -
                </Button>
                <span>{item.count}</span>
                <Button className={`customButton4`} onClick={() => increase(index)}>
                  +
                </Button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <p>Precio Total: ${total}</p>
          </div>
          <Button className={`customButton4`}>
            Pagar
          </Button>
        </>
      )}
    </div>
  );
};

export default Carrito;