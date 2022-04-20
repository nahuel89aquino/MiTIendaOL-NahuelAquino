import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

const text = 'Bienvenido!'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={text}/>
    </div>
  );
}

export default App;
