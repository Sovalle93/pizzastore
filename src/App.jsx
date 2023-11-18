import { Route, Routes } from 'react-router-dom'
import { PizzaShop} from './context/my_context'
import Home from './views/Home'
import Pizza from './views/Pizza'
import Carrito from './views/Carrito'
import NotFound from './views/NotFound'
import Navbar from './components/Navbar'
import './App.css'

const App = () => {
  return (
    <PizzaShop>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza/:pizzaid" element={<Pizza />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PizzaShop>
  );
};

export default App;







