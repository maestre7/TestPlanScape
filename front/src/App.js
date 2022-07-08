
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                {/* <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/post" element={<Post />} /> */}
            </Routes>
        </div>
    );
}

export default App;
