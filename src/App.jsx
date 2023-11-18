import { Route, Routes } from 'react-router-dom'
import { PizzaProvider } from './context/my_context'
import Home from './views/Home'
import Pizza from './views/Pizza'
import Carrito from './views/Carrito'
import NotFound from './views/NotFound'
import Navbar from './components/Navbar'
import './App.css'

const App = () => {
  return (
    <PizzaProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza/:pizzaid" element={<Pizza />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PizzaProvider>
  );
};

export default App;







