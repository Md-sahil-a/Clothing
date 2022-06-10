
import { Routes, Route } from 'react-router-dom';
import Home from "./components/routescomponents/homeroute/home.component";

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
    <Route path="/home" element={<Home />} >
      <Route path='shop' element={<Shop />}/>
    </Route>
    </Routes>
  )
}

export default App;
