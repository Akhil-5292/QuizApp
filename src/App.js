import Home from './Components/Home/Home';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Topic1 from './Components/Topic1/Topic1';
import Topic2 from './Components/Topic2/Topic2';
import Topic3 from './Components/Topic3/Topic3';
import Topic4 from './Components/Topic4/Topic4';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/Topic1' element={ <Topic1/>}/>
        <Route path='/Topic2' element={ <Topic2/>}/>
        <Route path='/Topic3' element={ <Topic3/>}/>
        <Route path='/Topic4' element={ <Topic4/>}/>
      </Routes>     
     
    </div>
  );
}

export default App;
