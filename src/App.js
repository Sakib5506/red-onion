import { createContext, useReducer, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Review from './components/Review/Review';
import { cartInitState, cartReducer } from './reducers/cartReducer';

export const CartContext = createContext();
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  const [cartState, cartDispatch] = useReducer(cartReducer, cartInitState)
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <CartContext.Provider value={{ cartState, cartDispatch, }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />}> </Route>
            <Route path='/food/:foodId/index/:indexId' element={<ProductDetails />} ></Route>

            <Route element={<PrivateRoute />} >
              <Route path='/review' element={<Review />}> </Route>
            </Route>

            <Route element={<PrivateRoute />} >
              <Route path='/placeorder' element={<PlaceOrder />}></Route>
            </Route>

            <Route path='/login' element={<Login />} ></Route>
            <Route path='*' element={<NotFound />} ></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContext.Provider>
    </UserContext.Provider>

  );
}

export default App;
