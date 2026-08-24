import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import WishList from "./pages/WishList";

function App(){

  return(

    <div>

      <Routes >

      <Route path = "/" element = {<Home />}   />
      
      <Route path = "/wishlist"  element = {<WishList />} />

      </Routes>

    </div>

  )

}

export default App;