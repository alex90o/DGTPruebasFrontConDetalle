import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { NavBar } from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { CartProvider } from './context/CartContext';
import { CartScreen } from './components/CartScreen/CartScreen';
import { UIProvider } from './context/UIContext';
import { UserAuthContext } from './context/UserAuthContext';
import { useContext } from 'react';
import { UserAuthenticate } from './components/UserAuthenticate/UserAuthenticate';
import { Clock } from './ejemplos/Clock/Clock';
import Historial from './components/Historial/Historial';
import Detalle from './components/Detalle/Detalle';
import ProductosAPI from './components/ProductosAPI';
import UsarAPI from './components/UsarAPI/UsarAPI';




function App() {  

  const {isAuthenticated} = useContext(UserAuthContext);

  return (
    <>
    {/*
    <div>
    
                  <ProductosAPI/>
      
    </div>
    */}
      <UIProvider>
        <CartProvider>

          <BrowserRouter>
            <NavBar logo= "Proyecto Final"/>

            <Clock/>

            <Switch>
            { isAuthenticated 
              ?
              <>
              <Route exact path="/">
                  <ItemListContainer />
              </Route>

              <Route exact path="/productos/:categoryId">
                  <ItemListContainer />
              </Route>

              <Route exact path="/detail/:itemId">
                  <ItemDetailContainer />
              </Route>

              <Route exact path="/historial">
                  <Historial />
              </Route>
              <Route exact path="/detalle">
                  <Detalle />
              </Route>

              <Route exact path="/cart">
                <CartScreen/>
              </Route>

              <Route path="*">
                  <Redirect to="/"/>
              </Route>

              <Route exact path="/usarapi">
                  <UsarAPI/>
              </Route>
              <Route exact path="/pructoapi">
                  <ProductosAPI/>
              </Route>
              {/* <Route path="*">
                  <h2>404... no encontrado</h2>
              </Route> */}
              </>
              :
                <UserAuthenticate/>
              }
            </Switch>
          </BrowserRouter>

        </CartProvider>
      </UIProvider>
    </>
  );
}

export default App;
