import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Home from './pages/Home/Home';
import MyList from './pages/MyList/MyList';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="mylist" element={<MyList />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

//TMDB key
//08624f500d47fa7986ef1398eea7d76f
