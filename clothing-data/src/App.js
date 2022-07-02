
import { Routes, Route } from 'react-router-dom';
import Home from "./components/routescomponents/homeroute/home.component";
import Nav from './components/routescomponents/NavRoute/nav';
import Sign from './components/routescomponents/NavRoute/signin/signin';

//observer pattern


function Shop(){
  return (
    <h1>
    THis is Shop pAGE
    </h1>
  )
}


function App() {
  return (
    <Routes>
    <Route path='/' element={<Nav/>}>
      <Route index element={<Home/>} />
      <Route path='shop' element={<Shop />}/>
      <Route path='sign-in' element={<Sign/>}/>
    </Route>
    </Routes>
  )
}

export default App;
