import React from 'react';
import Home from './Components/Home';
import Details from './Components/Details';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Create from './Components/Create';
import Edit from './Components/Edit';

function App(){
  // const [products, setProducts] = useContext(ProductContext);
  // localStorage.setItem("products", JSON.stringify(products));
  // console.log(products);
  const {search, pathname} = useLocation()
  return (
  <div className="h-screen w-full flex bg-zinc-50">
    
{ 
// (pathname != "/" || search.length > 0) &&  <Link to={"/"} className="px-3 ml-72 mt-5 text-xl text-zinc-100 absolute bg-blue-300 shadow-lg shadow-cyan-500/20 rounded-sm">Home</Link>
  (pathname != "/" || search.length > 0) &&  <Link to={"/"} className="px-3 ml-72 mt-5 text-xl text-zinc-100 absolute bg-blue-300 shadow-lg shadow-cyan-500/20 rounded-sm">Home</Link>

}    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/details/:id' element={<Details />}></Route>
      <Route path='/create' element = {<Create />}></Route>
      <Route path='/edit/:id' element = {<Edit />}></Route>
      <Route path='/edit/:id' element = {<Edit />}></Route>
    </Routes>
    
    
  </div>
)
}

export default App;