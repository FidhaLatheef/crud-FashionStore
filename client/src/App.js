import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Products from './Pages/products';
import Add from './Pages/add';
import UserLogin from './Pages/userLogin';
import UserList from './Pages/userList';
import UserEdit from './Pages/userEdit';
import ProductAdd from './Pages/productAdd';
import ProductList from './Pages/productList';
import ProductEdit from './Pages/productEdit'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="add" element={<Add />} />
            <Route path="userLogin" element={<UserLogin />} />
            <Route path="userList" element={<UserList />} />
            <Route path="userEdit/:id" element={<UserEdit />} />
            <Route path='productAdd' element={<ProductAdd/>}/>
            <Route path='productList' element={<ProductList/>}/>
            <Route path='productEdit/:id'element={<ProductEdit/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
