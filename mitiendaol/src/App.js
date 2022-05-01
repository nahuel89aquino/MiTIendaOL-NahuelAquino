import './App.css';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

const text = 'Bienvenido!'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer>
        <ItemCount stock={10} initial={1}/>
      </ItemListContainer>
    </div>
  );
}

export default App;
