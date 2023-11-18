import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { PizzaCalc } from '../context/my_context'

const Home = () => {
  const { info, navigate, addPizza } = useContext(PizzaCalc);

  const iraPizza = (pizzaId) => {
    navigate(`/pizza/${pizzaId}`);
  };

  const sumaHome = (pizza) => {
    addPizza({
      id: pizza.id,
      price: pizza.cost,
      name: pizza.title,
      img: pizza.keyImage,
    });
  };

  return (
    <div className="pizzagallery">
      {info.map((pizza) => (
        <Card key={pizza.id} className="pizzacard">
          <Card.Img variant="top" src={pizza.keyImage} alt={pizza.title} />
          <Card.Body>
            <Card.Title style={{ fontWeight: 'bold' }}>{pizza.title}</Card.Title>
            <hr />
            {pizza.ingredients && (
              <div>
                <h4>Ingredients:</h4>
                <ul>
                  {pizza.ingredients.map((ingredient) => (
                    <li key={ingredient}>🍕{ingredient}</li>
                  ))}
                </ul>
              </div>
            )}
            <hr />
            <Card.Text style={{ fontWeight: 'bold' }}>
              Precio: ${pizza.cost}
            </Card.Text>
            <div className='actions'>
              <Button className={`customButton1`} onClick={() => iraPizza(pizza.id)}>
                Ver Más
              </Button>
              <Button className={`customButton2`} onClick={() => sumaHome(pizza)}>
                Añadir
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Home;











