import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './pages/ComponentContainer/ItemListContainer/ItemListContainer';
import Landing from './pages/ComponentContainer/Landing/Landing';

function App() {
  return (
    <div className="App">
      <Landing>
        <NavBar/>
        <ItemListContainer greeting="saludo"/>
      </Landing> 
    </div>
  );
}

export default App;
