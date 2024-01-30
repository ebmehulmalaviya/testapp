
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Userlisting from './Component/Userlisting';
import Adduser from './Component/Adduser';
import Updateuser from './Component/Updateuser';
import Product from './Component/Product';
import UpdateProduct from './Component/Updateproduct';
import Addproduct from './Component/Addproduct';
import Login from './Component/login';
import LoginProtected from './Component/LoginProtected';
import AddChallan from './Page/AddChallan';
import Challan from './Page/Challan';
import Errror from './Page/Error404'
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import Store from './Redux/Store';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <BrowserRouter>
          <div className='header bg-dark'>
            <Link to={'/home'}>HOME</Link>
            <Link className='px-4' to={'/addchallan'}>ADD</Link>
          </div>
          <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/home' element={<LoginProtected Component={Home} />}></Route>
            <Route path='/addchallan' element={<LoginProtected Component={AddChallan} />}></Route>
            <Route path='/challan/:id' element={<LoginProtected Component={Challan} />}></Route>


            <Route path='/user' element={<LoginProtected Component={Userlisting} />}></Route>
            <Route path='/user/add' element={<LoginProtected Component={Adduser} />}></Route>
            <Route path='/user/edit/:code' element={<LoginProtected Component={Updateuser} />}></Route>
            <Route path='/product' element={<LoginProtected Component={Product} />}></Route>
            <Route path='/updateProduct/:id' element={<LoginProtected Component={UpdateProduct} />}></Route>
            <Route path='/addproduct' element={<LoginProtected Component={Addproduct} />}></Route>
            <Route path='/*' element={<Errror />}></Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer className="toast-position"
          position="bottom-right"></ToastContainer>
      </div>
    </Provider>
  );
}

export default App;
