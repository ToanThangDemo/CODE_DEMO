import { AppProvider } from "./AppContext";
import Header from "./compenentes/header/Header";
import Home from "./compenentes/home/Home";
import { Route, Routes } from "react-router-dom"
import Product from "./compenentes/product/Product";
import Footer from "./compenentes/footer/Footer";
import Cart from "./compenentes/cart/Cart";
import Blog from "./compenentes/blog/Blog";
import SignIn from "./compenentes/Login/signin/SignIn";
import SignUp from "./compenentes/Login/signup/SignUp";
import Order from "./compenentes/order/Order";
import Scrolltop from "./compenentes/boostrap/scrolltotop/Scrolltotop";
import Contact from "./compenentes/contact/Contact";
import Protected from "./Protected";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Header />
        <Routes>
        <Route path="" element={<Home />}></Route>
          <Route path="/home" element={<Protected Cmp={Home}/>}></Route>
          <Route path="/shop" element={<Protected Cmp={Product} />}></Route>
          <Route path="/blog" element={<Protected Cmp={Blog}/>}></Route>
          <Route path="/cart" element={<Protected Cmp={Cart} />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/tracuu" element={< Protected Cmp={Order}/>}></Route>
          <Route path="/contact" element={< Protected Cmp={Contact}/>}></Route>
        </Routes>
        <Scrolltop/>
        <Footer />
      </AppProvider>

    </div>
  );
}
export default App;
