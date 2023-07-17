import logo from './logo.svg';
import './App.css';
import NavBar from './Components/navigation/navigation-bar';
import {Routes, Route} from 'react-router-dom';
import CategoryGrid from './Components/category-grid/category-grid';
import Hats from './Components/Hats';
import Women from './Components/Women';
import Men from './Components/Men';
import Jackets from './Components/Jackets';
import SignIn from './Components/SignIn';

function App() {
  return (
    <div className="App">
      
      <Routes>
      <Route path='/' element={<NavBar/>}>
        <Route index element={<CategoryGrid/>} />
        <Route path='/hat' element={<Hats/>} />
        <Route path='/women' element={<Women/>} />
        <Route path='/men' element={<Men/>} />
        <Route path='/jacket' element={<Jackets/>} />
        <Route path='/sign' element={<SignIn/>} />
      </Route>
    </Routes>
    
    </div>
    
  );
}

export default App;
