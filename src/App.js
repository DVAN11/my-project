import { Routes, Route } from 'react-router-dom';
import Header from './Component/Global/Header/Header';
import Footer from './Component/Global/Footer/Footer';
import Home from './Component/Page/Home/Home';
import Menu from './Component/Page/Menu/Menu';
import Booking from './Component/Page/BookingService/Booking';
import Cart from './Component/Page/CartProduct/Cart';
import About from './Component/Page/About/About';
import BookingForm from './Component/Global/BookingForm/BookingForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Booking />}/>
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:slug" element={<Menu />}/>
        <Route path="/menu/:slug" element={<Menu />}/>
        <Route path="/about" element={<About />}/>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
      <BookingForm />
      <Footer />
    </>
  );
}

export default App;
