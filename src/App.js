// App.js or Routes.js
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Address from './Pages/Address';
import Product from './Pages/Product';
import Payment from './Pages/Payment';
import Category from './Pages/Category';
import Bikes from './Pages/Bikes';
import Cars from './Pages/Cars';
import Login from './Pages/Login';
import RegisterPage from './Pages/Register';
import BikeBrand from './Pages/BikeBrand';
import CarBrand from './Pages/CarBrand';
import BikeYear from './Pages/BikeYears';
import Parts from './Pages/Parts';
import OTPVerificationPage from './Pages/OTPVerification';
import PaySuccess from './Pages/PaySuccess';
import Accessories from './Pages/Accessories';
import Profile from './Pages/Profile';
import BikeAccessories from './Pages/BikeAccessories';
import CarAccessories from './Pages/CarAccessories';
import OrderConfirmation from './Pages/OrderConf';
import TrackingOrder from './Pages/TrackOrder';
import VehicleInfo from './Pages/VehicleInfo';
import MyVehicle from './Pages/MyVehicle';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import HelpForm from './Pages/HelpForm';
import MyOrders from './Pages/MyOrders';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/address' element={<Address />} />
        <Route path='/product' element={<Product />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/category' element={<Category />} />
        <Route path='/bikes' element={<Bikes />} />
        <Route path='/cars' element={<Cars />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path="/bikebrand/:brandId" element={<BikeBrand />} />
        <Route path="/carbrand/:brandId" element={<CarBrand />} />
        <Route path="/bikeyear" element={<BikeYear />} />
        <Route path="/parts" element={<Parts />} />
        <Route path="/otp-verification" element={<OTPVerificationPage />} />
        <Route path="/paysuccess" element={<PaySuccess />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bikeaccess" element={<BikeAccessories />} />
        <Route path="/caraccess" element={<CarAccessories />} />
        <Route path="/orderconfirm" element={<OrderConfirmation />} />
        <Route path="/trackorder" element={<TrackingOrder />} />
        <Route path="/myvehicle" element={<VehicleInfo />} />
        <Route path="/addvehicle" element={<MyVehicle />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/help" element={<HelpForm />} />
        <Route path="/myorders" element={<MyOrders />} />






      </Routes>
    </div>
  );
}

export default App;
