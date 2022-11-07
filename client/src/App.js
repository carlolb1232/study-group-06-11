import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import { Routes, Route } from 'react-router-dom';
import UpdateAutor from './views/UpdateAutor';



function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/autor/:id" element={<UpdateAutor/>}/>
      </Routes>
    </div>
  );
}

export default App;
