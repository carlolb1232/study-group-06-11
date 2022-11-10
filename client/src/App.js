import './App.css';
import Main from './views/Main';
import { Routes, Route } from 'react-router-dom';
import UpdateAutor from './views/UpdateAutor';
import AutorDetail from './views/AutorDetail';
import CreateQuote from './views/CreateQuote';



function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/autor/:id" element={<UpdateAutor/>}/>
        <Route path="/autor/detail/:id" element={<AutorDetail />}/>
        <Route path="/quote/create/:idAutor" element={<CreateQuote />}/>
      </Routes>
    </div>
  );
}

export default App;
