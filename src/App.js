import { createContext, useReducer } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';
import { cartInitState, cartReducer } from './reducers/cartReducer';

export const CartContext = createContext()

function App() {
  const [cartState, cartDispatch] = useReducer(cartReducer, cartInitState)
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      <BrowserRouter>
        <Header />
        <Routes>

          <Route exact path='/' element={<Home />}> </Route>
          <Route path='/food/:foodId/index/:indexId' element={<ProductDetails />} ></Route>
          <Route path='*' element={<NotFound />} ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContext.Provider>

  );
}

export default App;
