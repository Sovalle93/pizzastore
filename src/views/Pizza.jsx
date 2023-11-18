import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PizzaCalc } from '../context/my_context'
import Button from 'react-bootstrap/Button'

const Pizza = () => {
  const { info, addPizza } = useContext(PizzaCalc); 
  const { pizzaid } = useParams();
  const [selectedPizza, setSelectedPizza] = useState(null);

  useEffect(() => {
    const pizza = info.find((pizza) => pizza.id === pizzaid);
    setSelectedPizza(pizza);
  }, [pizzaid, info]);

  const sumaPizza = () => {
    if (selectedPizza) {
      addPizza({
        id: selectedPizza.id,
        price: selectedPizza.cost,
        name: selectedPizza.title,
        img: selectedPizza.keyImage,
      });
    }
  };

  return (
    <div className='pizzadesc'>
      {selectedPizza && (
        <>
          <div>
            <img src={selectedPizza.keyImage} alt={selectedPizza.title} />
          </div>
          <div>
            <h2>{selectedPizza.title}</h2>
            <hr />
            <p>{selectedPizza.description}</p>
            <h4>Ingredients:</h4>
            <ul>
              {selectedPizza.ingredients.map((ingredient) => (
                <li key={ingredient}>🍕{ingredient}</li>
              ))}
            </ul>
            <h4>Precio: ${selectedPizza.cost}</h4>
            <hr />
            <Button className={`customButton2`} onClick={sumaPizza}>
              Añadir
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Pizza;


