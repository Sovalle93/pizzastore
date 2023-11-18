import { createContext, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const PizzaCalc = createContext();

const PizzaShop = ({ children }) => {
  const [shoppingCart, setshoppingCart] = useState([]);
  const [info, setInfo] = useState([]);
  const navigate = useNavigate();

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


  const addPizza = ({ id, price, name, img }) => {
    const food = { id, price, name, img, count: 1 };
    const mapFood = shoppingCart.findIndex((p) => p.id === id);

    if (mapFood >= 0) {
      shoppingCart[mapFood].count++;
      setshoppingCart([...shoppingCart]);
    } else {
      setshoppingCart([...shoppingCart, food]);
    }
  };

  const increase = (i) => {
    shoppingCart[i].count++;
    setshoppingCart([...shoppingCart]);
  };

  const decrease = (i) => {
    if (shoppingCart[i].count === 1) {
      shoppingCart.splice(i, 1);
    } else {
      shoppingCart[i].count--;
    }
    setshoppingCart([...shoppingCart]);
  };

const total = shoppingCart.reduce((a, { count, price }) => a + price * count, 0);

  return (
    <PizzaCalc.Provider
      value={{
        shoppingCart,
        setshoppingCart,
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

export { PizzaShop, PizzaCalc };

