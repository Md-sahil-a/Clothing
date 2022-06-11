
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from "./components/routescomponents/homeroute/home.component";
import Nav from './components/routescomponents/NavRoute/nav';




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
    </Route>
    </Routes>
  )
}

export default App;
