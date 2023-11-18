import { createContext, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const PizzaCalc = createContext();

const PizzaProvider = ({ children }) => {
  const [detailsCart, setDetailsCart] = useState([]);
  const [info, setInfo] = useState([]);
  const navigate = useNavigate();

  const addPizza = ({ id, price, name, img }) => {
    const food = { id, price, name, img, count: 1 };
    const mapFood = detailsCart.findIndex((p) => p.id === id);

    if (mapFood >= 0) {
      detailsCart[mapFood].count++;
      setDetailsCart([...detailsCart]);
    } else {
      setDetailsCart([...detailsCart, food]);
    }
  };

  const increase = (i) => {
    detailsCart[i].count++;
    setDetailsCart([...detailsCart]);
  };

  const decrease = (i) => {
    if (detailsCart[i].count === 1) {
      detailsCart.splice(i, 1);
    } else {
      detailsCart[i].count--;
    }
    setDetailsCart([...detailsCart]);
  };

  const saveInfo = (pizzas) => {
    setInfo(pizzas);
  };

  const consultarJSON = async () => {
    try {
      const response = await fetch('/pizzas.json');
      const data = await response.json();
      if (Array.isArray(data)) {
        const pizzas = data.map((item) => ({
          id: item.id,
          keyImage: item.img,
          title: item.name,
          description: item.desc,
          ingredients: item.ingredients,
          cost: item.price,
        }));
        saveInfo(pizzas);
      }
    } catch (error) {
      console.error('Hubo un error en el procedimiento:', error);
    }
  };

  useEffect(() => {
    consultarJSON();
  }, []);

  const total = detailsCart.reduce((a, { count, price }) => a + price * count, 0);

  return (
    <PizzaCalc.Provider
      value={{
        detailsCart,
        setDetailsCart,
        addPizza,
        increase,
        decrease,
        total,
        info,
        saveInfo,
        navigate,
      }}
    >
      {children}
    </PizzaCalc.Provider>
  );
};

export { PizzaProvider, PizzaCalc };

