import './App.css';
import Home from "./pages/Home/Home";
import {BrowserRouter, Route, Routes,} from 'react-router-dom';
import List from "./pages/List/List";
import Login from "./pages/Login/Login";
import New from "./pages/New/New";
import Single from "./pages/Single/Single";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/'>
                        {/* Main Page Route */}
                        <Route index element={<Home/>}/>
                        <Route path="login" element={<Login/>}/>
                        {/* User Page Route */}
                        <Route path="user">
                            <Route index element={<List/>}/>
                            <Route path=":userId" element={<Single/>}/>
                            <Route path="new" element={<New/>}/>
                        </Route>
                        {/* Product Page Route */}
                        <Route path="product">
                            <Route index element={<List/>}/>
                            <Route path=":productId" element={<Single/>}/>
                            <Route path="new" element={<New/>}/>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;