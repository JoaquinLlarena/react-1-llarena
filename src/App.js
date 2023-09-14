

import './App.css';
import Cards from './components/cards/Cards';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ListaCards from './components/Listacards/ListaCards';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div className="App">


  
      
      <Navbar/> 
      <ListaCards />
      <Cards/>
      <ItemListContainer greeting='bienvenido a TacticalShop'/>
      




    </div>
  );
}

export default App;
